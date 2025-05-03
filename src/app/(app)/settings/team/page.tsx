import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Settings - Zenith CRM Lite",
  description: "Manage your team members and their permissions.",
};

// Placeholder data
const teamMembers = [
  { id: 'user1', name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active', avatar: '/placeholder-user.jpg' },
  { id: 'user2', name: 'Liam Johnson', email: 'liam@example.com', role: 'Member', status: 'Active', avatar: '/placeholder-user.jpg' },
  { id: 'user3', name: 'Olivia Smith', email: 'olivia@example.com', role: 'Member', status: 'Invited', avatar: '/placeholder-user.jpg' },
];

export default function SettingsTeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h3 className="text-lg font-medium">Team Members</h3>
            <p className="text-sm text-muted-foreground">
            Invite and manage your team members.
            </p>
        </div>
         <Button size="sm" className="h-7 gap-1 text-sm">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Add Member</span>
          </Button>
      </div>
      <Separator />

       <Card>
        <CardHeader>
          <CardTitle>Current Members</CardTitle>
           <CardDescription>Users in your organization.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Role</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                 <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                         <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person face"/>
                         <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                       </Avatar>
                       <div>
                         <div className="font-medium">{member.name}</div>
                         <div className="text-sm text-muted-foreground">{member.email}</div>
                       </div>
                     </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{member.role}</TableCell>
                   <TableCell className="hidden md:table-cell">
                     <Badge variant={member.status === 'Active' ? 'secondary' : 'outline'}>{member.status}</Badge>
                   </TableCell>
                  <TableCell className="text-right">
                     <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                         <Button size="icon" variant="ghost" className="h-8 w-8">
                           <MoreHorizontal className="h-4 w-4" />
                         </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Role</DropdownMenuItem>
                          {member.status === 'Invited' && <DropdownMenuItem>Resend Invite</DropdownMenuItem> }
                          <DropdownMenuItem>Reset Password</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                       </DropdownMenuContent>
                     </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
       </Card>


    </div>
  )
}
