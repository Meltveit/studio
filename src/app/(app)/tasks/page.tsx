import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, ListFilter, Calendar, User, MoreHorizontal } from "lucide-react";
import { format } from 'date-fns'; // For date formatting

// Placeholder Task Data - replace with actual data fetching
const tasks = [
  { id: 'task1', title: 'Follow up with Innovate Inc.', status: 'Pending', dueDate: '2024-07-30', priority: 'High', assignedTo: 'Liam Johnson', relatedTo: 'Innovate Inc. (Deal)' },
  { id: 'task2', title: 'Prepare proposal for Solutions Co.', status: 'In Progress', dueDate: '2024-08-05', priority: 'High', assignedTo: 'Admin User', relatedTo: 'Solutions Co. (Deal)' },
  { id: 'task3', title: 'Schedule demo for Tech Gadgets', status: 'Pending', dueDate: '2024-08-01', priority: 'Medium', assignedTo: 'Olivia Smith', relatedTo: 'Noah Williams (Contact)' },
  { id: 'task4', title: 'Send onboarding materials to Web Services', status: 'Completed', dueDate: '2024-07-25', priority: 'Low', assignedTo: 'Admin User', relatedTo: 'Web Services (Org)' },
  { id: 'task5', title: 'Call Marketing Pros lead', status: 'Pending', dueDate: '2024-07-29', priority: 'Medium', assignedTo: 'Liam Johnson', relatedTo: 'Emma Brown (Contact)' },
];

type TaskStatus = 'Pending' | 'In Progress' | 'Completed';
type TaskPriority = 'Low' | 'Medium' | 'High';

const getPriorityBadgeVariant = (priority: TaskPriority): "default" | "secondary" | "destructive" | "outline" | null | undefined => {
  switch (priority) {
    case 'High': return 'destructive';
    case 'Medium': return 'secondary'; // Consider a yellow/orange variant if theme supports
    case 'Low': return 'outline';
    default: return 'outline';
  }
};

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <div className="flex items-center gap-2">
           {/* Calendar Integration Button Placeholder */}
           <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
            <Calendar className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Sync Calendar</span>
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
              <DropdownMenuItem>Priority</DropdownMenuItem>
              <DropdownMenuItem>Due Date</DropdownMenuItem>
              <DropdownMenuItem>Assigned To</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="h-7 gap-1 text-sm">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Add Task</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
          <CardDescription>Manage your assigned tasks and activities.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                 <TableHead className="w-[40px]"><span className="sr-only">Status</span></TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">Priority</TableHead>
                <TableHead className="hidden md:table-cell">Due Date</TableHead>
                <TableHead className="hidden lg:table-cell">Assigned To</TableHead>
                 <TableHead className="hidden lg:table-cell">Related To</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className={task.status === 'Completed' ? 'text-muted-foreground' : ''}>
                  <TableCell>
                     <Checkbox
                        aria-label={`Mark task ${task.id} as complete`}
                        checked={task.status === 'Completed'}
                        // Add onCheckedChange handler
                      />
                   </TableCell>
                  <TableCell className="font-medium">
                    {task.title}
                     <div className="text-xs text-muted-foreground lg:hidden pt-1">
                       Due: {format(new Date(task.dueDate), 'PP')} | Priority: {task.priority}
                     </div>
                     <div className="text-xs text-muted-foreground lg:hidden pt-1">
                      Assignee: {task.assignedTo}
                     </div>
                     <div className="text-xs text-muted-foreground lg:hidden pt-1">
                      Related: {task.relatedTo}
                     </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{task.status}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                     <Badge variant={getPriorityBadgeVariant(task.priority as TaskPriority)}>{task.priority}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                     {format(new Date(task.dueDate), 'PP')} {/* Format date */}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">{task.assignedTo}</TableCell>
                   <TableCell className="hidden lg:table-cell">{task.relatedTo}</TableCell>
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
                         {task.status !== 'Completed' && <DropdownMenuItem>Mark as Complete</DropdownMenuItem>}
                         {task.status === 'Completed' && <DropdownMenuItem>Mark as Pending</DropdownMenuItem>}
                         <DropdownMenuSeparator />
                        <DropdownMenuItem>Assign To...</DropdownMenuItem>
                        <DropdownMenuItem>Set Due Date</DropdownMenuItem>
                        <DropdownMenuItem>Set Priority</DropdownMenuItem>
                         <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {tasks.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center text-muted-foreground">
                    No tasks found. Create one to get started!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        {/* Optional Footer for Pagination or Summary */}
        {/* <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{tasks.length}</strong> of <strong>{tasks.length}</strong> tasks
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
}
