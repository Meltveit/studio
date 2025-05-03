import React from 'react';
import { AppLayout } from '@/components/layout/app-layout';
// import { AuthGuard } from '@/components/auth/auth-guard'; // Placeholder

export default function AuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AuthGuard> Placeholder for protecting routes
      <AppLayout>{children}</AppLayout>
    // </AuthGuard>
  );
}
