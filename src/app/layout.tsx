import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
// import { AuthProvider } from '@/context/AuthContext'; // Placeholder for Auth

export const metadata: Metadata = {
  title: 'Zenith CRM Lite',
  description: 'Simplified CRM for modern teams.',
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
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        {/* <AuthProvider> Placeholder for Auth */}
          {children}
          <Toaster />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
