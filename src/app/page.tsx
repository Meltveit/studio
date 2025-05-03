'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton'; // Or a custom loading component

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard page after component mounts on the client
    // Replace with actual auth check and conditional redirect later
    router.replace('/dashboard');
  }, [router]);

  // Show a loading state while redirecting
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-4 text-center">
         <Skeleton className="h-12 w-12 rounded-full mx-auto" />
         <Skeleton className="h-4 w-[250px] mx-auto" />
         <Skeleton className="h-4 w-[200px] mx-auto" />
        <p className="text-muted-foreground">Loading Zenith CRM Lite...</p>
      </div>
    </div>
  );
}
