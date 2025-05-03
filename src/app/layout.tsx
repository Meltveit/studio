import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// Removed GeistMono import as it's not used and caused build errors
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster'; // Ensure Toaster is imported if used globally

export const metadata: Metadata = {
  title: 'Zenith CRM Lite',
  description: 'A lightweight CRM application built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.variable // Apply Geist Sans font variable
        )}
      >
        {children}
        <Toaster /> {/* Render Toaster globally if needed */}
      </body>
    </html>
  );
}
