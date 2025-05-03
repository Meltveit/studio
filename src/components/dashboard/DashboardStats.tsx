// src/components/dashboard/DashboardStats.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getStats } from "@/services/dashboardService";
import { useAuth } from "@/context/AuthContext";
import { Activity, Users, DollarSign, CheckSquare } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardStats() {
  const { currentUser } = useAuth();
  
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats', currentUser?.uid],
    queryFn: () => currentUser ? getStats(currentUser.uid) : null,
    enabled: !!currentUser,
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4).fill(0).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-24" />
              </CardTitle>
              <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[60px] mb-1" />
              <Skeleton className="h-4 w-[120px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">€{stats?.revenue.toFixed(2) || '0.00'}</div>
          <p className="text-xs text-muted-foreground">
            {stats?.revenueChange > 0 ? '+' : ''}{stats?.revenueChange}% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{stats?.customers || 0}</div>
          <p className="text-xs text-muted-foreground">
            {stats?.customersChange > 0 ? '+' : ''}{stats?.customersChange}% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Open Deals</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats?.openDeals || 0}</div>
          <p className="text-xs text-muted-foreground">
            €{stats?.pipelineValue.toFixed(0) || '0'} Pipeline Value
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
          <CheckSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats?.pendingTasks || 0}</div>
          <p className="text-xs text-muted-foreground">
            {stats?.overdueTasks || 0} Overdue
          </p>
        </CardContent>
      </Card>
    </div>
  );
}