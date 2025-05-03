// src/hooks/usePipeline.ts (updated)
'use client';

import { useState, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { 
  getPipelineStages, 
  updateDealStage, 
  Deal, 
  Stage 
} from '@/services/pipelineService';
import { useToast } from '@/hooks/use-toast';

export function usePipeline() {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [draggingDeal, setDraggingDeal] = useState<Deal | null>(null);

  const { data: stages = [], isLoading } = useQuery({
    queryKey: ['pipeline-stages', currentUser?.uid],
    queryFn: () => currentUser ? getPipelineStages(currentUser.uid) : [],
    enabled: !!currentUser,
  });

  const updateStageMutation = useMutation({
    mutationFn: (variables: { dealId: string; newStageId: string }) => {
      if (!currentUser) throw new Error('User not authenticated');
      return updateDealStage(
        currentUser.uid, 
        variables.dealId, 
        variables.newStageId
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pipeline-stages'] });
      toast({
        title: 'Deal updated',
        description: 'The deal has been moved to a new stage.',
      });
    },
    onError: (error) => {
      console.error('Error updating deal stage:', error);
      toast({
        title: 'Error',
        description: 'There was an error updating the deal. Please try again.',
        variant: 'destructive',
      });
    }
  });

  const handleDragStart = useCallback((deal: Deal) => {
    setDraggingDeal(deal);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingDeal(null);
  }, []);

  const handleDrop = useCallback((targetStageId: string) => {
    if (!draggingDeal || draggingDeal.stage === targetStageId) {
      setDraggingDeal(null);
      return;
    }

    updateStageMutation.mutate({
      dealId: draggingDeal.id,
      newStageId: targetStageId
    });

    setDraggingDeal(null);
  }, [draggingDeal, updateStageMutation]);

  const getStageValue = useCallback((stageId: string): number => {
    const stage = stages.find((s: Stage) => s.id === stageId);
    return stage 
      ? stage.deals.reduce((sum: number, deal: Deal) => sum + deal.value, 0) 
      : 0;
  }, [stages]);

  return {
    stages,
    isLoading,
    draggingDeal,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    getStageValue,
  };
}