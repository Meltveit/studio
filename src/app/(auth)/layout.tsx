import React from 'react';

// This layout applies to pages within the (auth) group, like login and register.
// It ensures they don't inherit the main AppLayout (with sidebar etc.)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Simple layout, perhaps just centering the content or applying a specific background
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      {children}
    </div>
  );
}
