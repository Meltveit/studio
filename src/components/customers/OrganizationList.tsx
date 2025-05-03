// src/components/customers/OrganizationList.tsx (updated)
'use client';

import { useQuery } from '@tanstack/react-query';
import { 
  getOrganizations, 
  Organization 
} from '@/services/organizationService';
import { useAuth } from '@/context/AuthContext';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

export function OrganizationList() {
  const { currentUser } = useAuth();
  
  const { data: organizations = [], isLoading } = useQuery({
    queryKey: ['organizations', currentUser?.uid],
    queryFn: () => currentUser ? getOrganizations(currentUser.uid) : [],
    enabled: !!currentUser,
  });

  // Loading skeleton UI
  if (isLoading) {
    // ...loading skeleton code remains the same
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Organizations</CardTitle>
          <CardDescription>View and manage company profiles.</CardDescription>
        </div>
        <Button size="sm" asChild>
          <Link href="/customers/organizations/new">
            <PlusCircle className="h-3.5 w-3.5 mr-1" />
            Add Organization
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Organization Name</TableHead>
              <TableHead className="hidden sm:table-cell">Contacts</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((org: Organization) => (
              <TableRow key={org.id}>
                <TableCell>
                  <div className="font-medium">{org.name}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{org.contacts}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant={org.status === 'Active' ? 'secondary' : 'outline'}>
                    {org.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/customers/organizations/${org.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/customers/organizations/${org.id}/edit`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/customers/organizations/${org.id}/add-contact`}>Add Contact</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {organizations.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No organizations found. Add your first organization to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}