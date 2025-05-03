'use client'; // Needed for drag-and-drop state/interaction

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal, DollarSign, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Define types for better structure
interface Deal {
  id: string;
  title: string;
  value: number;
  stage: string; // Matches column id
  closeDate: string;
  contactName: string;
  contactAvatar: string;
  probability?: number;
}

interface Stage {
  id: string;
  title: string;
  deals: Deal[];
}

// Placeholder data - replace with actual data fetching
const initialStages: Stage[] = [
  { id: 'lead', title: 'Lead In', deals: [
    { id: 'deal1', title: 'Website Redesign', value: 5000, stage: 'lead', closeDate: '2024-08-15', contactName: 'Alice Green', contactAvatar: '/placeholder-user.jpg' },
  ]},
  { id: 'contacted', title: 'Contact Made', deals: [
    { id: 'deal2', title: 'Marketing Campaign', value: 12000, stage: 'contacted', closeDate: '2024-09-01', contactName: 'Bob White', contactAvatar: '/placeholder-user.jpg' },
  ]},
  { id: 'proposal', title: 'Proposal Made', deals: [
    { id: 'deal3', title: 'Software Dev', value: 25000, stage: 'proposal', closeDate: '2024-08-20', contactName: 'Charlie Black', contactAvatar: '/placeholder-user.jpg', probability: 75 },
  ]},
  { id: 'negotiation', title: 'Negotiation', deals: [
     { id: 'deal4', title: 'Consulting Services', value: 8000, stage: 'negotiation', closeDate: '2024-07-30', contactName: 'Diana Prince', contactAvatar: '/placeholder-user.jpg', probability: 90 },
  ]},
  { id: 'won', title: 'Won', deals: []},
  { id: 'lost', title: 'Lost', deals: []},
];

export default function PipelinePage() {
  const [stages, setStages] = useState<Stage[]>(initialStages);
  const [draggingDeal, setDraggingDeal] = useState<Deal | null>(null);

  // --- Drag and Drop Handlers ---
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, deal: Deal) => {
    setDraggingDeal(deal);
    e.dataTransfer.effectAllowed = 'move';
    // Optional: Add drag image or style
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow dropping
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetStageId: string) => {
    e.preventDefault();
    if (!draggingDeal || draggingDeal.stage === targetStageId) {
      setDraggingDeal(null);
      return;
    }

    setStages(prevStages => {
      const newStages = prevStages.map(stage => ({
        ...stage,
        deals: stage.deals.filter(deal => deal.id !== draggingDeal.id) // Remove from old stage
      }));

      const targetStageIndex = newStages.findIndex(stage => stage.id === targetStageId);
      if (targetStageIndex !== -1) {
        newStages[targetStageIndex].deals.push({ ...draggingDeal, stage: targetStageId }); // Add to new stage
      }
      // TODO: Here you would also trigger an API call to update the deal's stage in the backend
      console.log(`Moved deal ${draggingDeal.id} to stage ${targetStageId}`);
      return newStages;
    });

    setDraggingDeal(null);
  };

  const handleDragEnd = () => {
    setDraggingDeal(null); // Clean up if drag cancelled
  };

  const getStageValue = (stageId: string): number => {
     const stage = stages.find(s => s.id === stageId);
     return stage ? stage.deals.reduce((sum, deal) => sum + deal.value, 0) : 0;
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Sales Pipeline</h1>
        <Button size="sm" className="h-7 gap-1 text-sm">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Add Deal</span>
        </Button>
      </div>

      {/* Pipeline View - Use overflow-x-auto for horizontal scrolling on smaller screens */}
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="flex flex-col w-72 bg-muted/50 rounded-lg flex-shrink-0 h-full"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.id)}
            >
              {/* Stage Header */}
              <div className="p-3 border-b border-border sticky top-0 bg-muted/50 rounded-t-lg z-10">
                 <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-sm">{stage.title}</h3>
                     <span className="text-xs text-muted-foreground">({stage.deals.length} deals)</span>
                 </div>
                 <p className="text-xs font-medium text-muted-foreground">
                   €{getStageValue(stage.id).toLocaleString()}
                 </p>
              </div>

              {/* Deals Container - make this scrollable independently if needed */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                {stage.deals.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">No deals in this stage.</p>
                ) : (
                  stage.deals.map((deal) => (
                    <Card
                      key={deal.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, deal)}
                      onDragEnd={handleDragEnd}
                      className={`cursor-move bg-card hover:shadow-md transition-shadow ${draggingDeal?.id === deal.id ? 'opacity-50 ring-2 ring-primary' : ''}`}
                    >
                      <CardHeader className="p-3 pb-1">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-sm font-medium">{deal.title}</CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1 -mr-1">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Deal</DropdownMenuItem>
                              <DropdownMenuItem>Log Activity</DropdownMenuItem>
                              <DropdownMenuItem>Move to...</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Delete Deal</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                         <CardDescription className="text-xs flex items-center gap-1 text-muted-foreground pt-1">
                            <DollarSign className="h-3 w-3" /> €{deal.value.toLocaleString()} {deal.probability && <Badge variant="outline" className="ml-auto text-xs">{deal.probability}%</Badge>}
                         </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 pt-1">

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                           <div className="flex items-center gap-1.5">
                              <Avatar className="h-5 w-5">
                                <AvatarImage src={deal.contactAvatar} alt={deal.contactName} data-ai-hint="person face" />
                                <AvatarFallback>{deal.contactName?.charAt(0) ?? '?'}</AvatarFallback>
                              </Avatar>
                             <span>{deal.contactName}</span>
                           </div>
                            <div className="flex items-center gap-1">
                               <Calendar className="h-3 w-3"/>
                               <span>{deal.closeDate}</span>
                            </div>
                         </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
               {/* Optional: Add Button at the bottom of each stage */}
               {/* <div className="p-2 border-t mt-auto sticky bottom-0 bg-muted/50 rounded-b-lg">
                 <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                   <PlusCircle className="h-3.5 w-3.5 mr-1.5" /> Add Deal
                 </Button>
               </div> */}
            </div>
          ))}
        </div>
      </div>
        {/* Placeholder for Win/Loss Analysis */}
        {/* <Card>
            <CardHeader>
                <CardTitle>Win/Loss Analysis</CardTitle>
                <CardDescription>Basic reporting on conversion rates will be shown here.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Analysis chart or stats...</p>
            </CardContent>
        </Card> */}
    </div>
  );
}
