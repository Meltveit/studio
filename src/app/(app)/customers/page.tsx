import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, ListFilter, File, MoreHorizontal } from "lucide-react";
import Image from 'next/image'; // For placeholder images

// Placeholder data - replace with actual data fetching
const customers = [
  { id: '1', name: 'Liam Johnson', email: 'liam@example.com', type: 'Lead', status: 'Active', dateAdded: '2023-10-26', avatar: '/placeholder-user.jpg', company: 'Innovate Inc.' },
  { id: '2', name: 'Olivia Smith', email: 'olivia@example.com', type: 'Customer', status: 'Active', dateAdded: '2023-07-15', avatar: '/placeholder-user.jpg', company: 'Solutions Co.' },
  { id: '3', name: 'Noah Williams', email: 'noah@example.com', type: 'Prospect', status: 'Inactive', dateAdded: '2023-08-03', avatar: '/placeholder-user.jpg', company: 'Tech Gadgets' },
  { id: '4', name: 'Emma Brown', email: 'emma@example.com', type: 'Lead', status: 'Active', dateAdded: '2023-09-10', avatar: '/placeholder-user.jpg', company: 'Marketing Pros' },
  { id: '5', name: 'Ava Jones', email: 'ava@example.com', type: 'Customer', status: 'Active', dateAdded: '2023-05-19', avatar: '/placeholder-user.jpg', company: 'Web Services' },
];

const organizations = [
  { id: 'org1', name: 'Innovate Inc.', contacts: 1, status: 'Active' },
  { id: 'org2', name: 'Solutions Co.', contacts: 3, status: 'Active' },
  { id: 'org3', name: 'Tech Gadgets', contacts: 2, status: 'Inactive' },
  { id: 'org4', name: 'Marketing Pros', contacts: 5, status: 'Active' },
]

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Type</DropdownMenuItem>
              <DropdownMenuItem>Date Added</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="h-7 gap-1 text-sm">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Add Customer</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Contacts</TabsTrigger>
          <TabsTrigger value="organizations">Organizations</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="prospects">Prospects</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
           <CustomerTable data={customers} title="All Contacts" description="Manage all your contacts in one place." />
        </TabsContent>
         <TabsContent value="organizations">
           <OrganizationTable data={organizations} title="Organizations" description="View and manage company profiles." />
        </TabsContent>
        <TabsContent value="leads">
           <CustomerTable data={customers.filter(c => c.type === 'Lead')} title="Leads" description="Manage potential new customers." />
        </TabsContent>
         <TabsContent value="prospects">
           <CustomerTable data={customers.filter(c => c.type === 'Prospect')} title="Prospects" description="Manage qualified leads." />
        </TabsContent>
         <TabsContent value="customers">
           <CustomerTable data={customers.filter(c => c.type === 'Customer')} title="Customers" description="Manage existing customers." />
        </TabsContent>
      </Tabs>
    </div>
  );
}


interface CustomerTableProps {
  data: typeof customers;
  title: string;
  description: string;
}

function CustomerTable({ data, title, description }: CustomerTableProps) {
 return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date added</TableHead>
              <TableHead className="text-right">Company</TableHead>
               <TableHead>
                 <span className="sr-only">Actions</span>
               </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                       src={customer.avatar}
                       alt={`${customer.name} avatar`}
                       width={28}
                       height={28}
                       className="rounded-full"
                       data-ai-hint="person face"
                     />
                     <div className="font-medium">{customer.name}</div>
                   </div>
                  <div className="text-sm text-muted-foreground md:hidden">{customer.email}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{customer.type}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant={customer.status === 'Active' ? 'secondary' : 'outline'}>
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{customer.dateAdded}</TableCell>
                <TableCell className="text-right">{customer.company}</TableCell>
                 <TableCell className="text-right">
                   <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Add Note</DropdownMenuItem>
                         <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                   </DropdownMenu>
                 </TableCell>
              </TableRow>
            ))}
             {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No {title.toLowerCase()} found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
       {/* Optional Footer for Pagination */}
       {/* <CardFooter>
         <div className="text-xs text-muted-foreground">
           Showing <strong>1-10</strong> of <strong>{data.length}</strong> customers
         </div>
       </CardFooter> */}
    </Card>
 );
}

interface OrganizationTableProps {
  data: typeof organizations;
  title: string;
  description: string;
}

function OrganizationTable({ data, title, description }: OrganizationTableProps) {
 return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
            {data.map((org) => (
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Add Contact</DropdownMenuItem>
                         <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                   </DropdownMenu>
                 </TableCell>
              </TableRow>
            ))}
             {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No organizations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
       {/* Optional Footer */}
       {/* <CardFooter>
         <div className="text-xs text-muted-foreground">
           Showing <strong>1-10</strong> of <strong>{data.length}</strong> organizations
         </div>
       </CardFooter> */}
    </Card>
 );
}
