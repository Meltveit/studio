// src/services/organizationService.ts
import { db } from '@/lib/firebase';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where 
} from 'firebase/firestore';

export interface Organization {
  id: string;
  name: string;
  contacts: number;
  status: 'Active' | 'Inactive';
  industry?: string;
  website?: string;
  address?: string;
  notes?: string;
}

// Get all organizations
export async function getOrganizations(adminId: string): Promise<Organization[]> {
  try {
    const orgsRef = collection(db, `admins/${adminId}/companies`);
    const snapshot = await getDocs(orgsRef);
    
    return snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() } as Organization;
    });
  } catch (error) {
    console.error('Error fetching organizations:', error);
    throw error;
  }
}

// Get a single organization
export async function getOrganization(
  adminId: string, 
  organizationId: string
): Promise<Organization | null> {
  try {
    const orgRef = doc(db, `admins/${adminId}/companies`, organizationId);
    const docSnap = await getDoc(orgRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Organization;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching organization:', error);
    throw error;
  }
}

// Add a new organization
export async function addOrganization(
  adminId: string, 
  organizationData: Omit<Organization, 'id'>
): Promise<string> {
  try {
    const orgsRef = collection(db, `admins/${adminId}/companies`);
    const docRef = await addDoc(orgsRef, organizationData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding organization:', error);
    throw error;
  }
}

// Update an organization
export async function updateOrganization(
  adminId: string, 
  organizationId: string, 
  organizationData: Partial<Omit<Organization, 'id'>>
): Promise<void> {
  try {
    const orgRef = doc(db, `admins/${adminId}/companies`, organizationId);
    await updateDoc(orgRef, organizationData);
  } catch (error) {
    console.error('Error updating organization:', error);
    throw error;
  }
}

// Delete an organization
export async function deleteOrganization(
  adminId: string, 
  organizationId: string
): Promise<void> {
  try {
    const orgRef = doc(db, `admins/${adminId}/companies`, organizationId);
    await deleteDoc(orgRef);
  } catch (error) {
    console.error('Error deleting organization:', error);
    throw error;
  }
}