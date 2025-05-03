// src/services/pipelineService.ts

import { db } from '@/lib/firebase';
import { 
    collection, 
    doc, 
    getDocs, 
    getDoc,  // Added missing import
    addDoc,   // Added missing import
    updateDoc, 
    query, 
    where 
  } from 'firebase/firestore';

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: string;
  closeDate: string;
  contactName: string;
  contactAvatar: string;
  probability?: number;
}

export interface Stage {
  id: string;
  title: string;
  deals: Deal[];
}

// Get all pipeline stages with their deals
export async function getPipelineStages(adminId: string): Promise<Stage[]> {
  // Define our stage structure
  const stages: Stage[] = [
    { id: 'lead', title: 'Lead In', deals: [] },
    { id: 'contacted', title: 'Contact Made', deals: [] },
    { id: 'proposal', title: 'Proposal Made', deals: [] },
    { id: 'negotiation', title: 'Negotiation', deals: [] },
    { id: 'won', title: 'Won', deals: [] },
    { id: 'lost', title: 'Lost', deals: [] },
  ];
  
  try {
    // Get all deals
    const dealsRef = collection(db, `admins/${adminId}/deals`);
    const snapshot = await getDocs(dealsRef);
    
    // Assign deals to their respective stages
    snapshot.forEach(doc => {
      const deal = { id: doc.id, ...doc.data() } as Deal;
      const stageIndex = stages.findIndex(s => s.id === deal.stage);
      
      if (stageIndex !== -1) {
        stages[stageIndex].deals.push(deal);
      }
    });
    
    return stages;
  } catch (error) {
    console.error('Error fetching pipeline stages:', error);
    throw error;
  }
}

// Update a deal's stage
export async function updateDealStage(
  adminId: string, 
  dealId: string, 
  newStageId: string
): Promise<void> {
  try {
    const dealRef = doc(db, `admins/${adminId}/deals`, dealId);
    await updateDoc(dealRef, { stage: newStageId });
  } catch (error) {
    console.error('Error updating deal stage:', error);
    throw error;
  }
}

// Add a new deal
export async function addDeal(
  adminId: string, 
  dealData: Omit<Deal, 'id'>
): Promise<string> {
  try {
    const dealsRef = collection(db, `admins/${adminId}/deals`);
    const docRef = await addDoc(dealsRef, dealData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding deal:', error);
    throw error;
  }
}

// Get a single deal
export async function getDeal(
  adminId: string, 
  dealId: string
): Promise<Deal | null> {
  try {
    const dealRef = doc(db, `admins/${adminId}/deals`, dealId);
    const docSnap = await getDoc(dealRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Deal;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching deal:', error);
    throw error;
  }
}
