'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
// import { useAuth } from "@/context/AuthContext"; // Placeholder
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const { login } = useAuth(); // Placeholder
  const router = useRouter();

   const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        // Placeholder Login Logic
        console.log("Attempting login with:", email, password);
        // Replace with actual Firebase auth call:
        // try {
        //   await login(email, password);
        //   router.push('/dashboard'); // Redirect after successful login
        // } catch (err: any) {
        //   setError(err.message || 'Failed to log in. Please check your credentials.');
        // } finally {
        //   setLoading(false);
        // }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (email === "admin@example.com" && password === "password") {
             router.push('/dashboard');
        } else {
            setError("Invalid email or password.");
            setLoading(false);
        }

    };


  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm border shadow-lg"> {/* Added border and shadow */}
        <CardHeader className="space-y-1 text-center">
           <Link href="/" className="inline-block mb-2"> {/* Make logo link to home */}
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 mx-auto text-primary"
               >
                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
               </svg>
            </Link>
          <CardTitle className="text-2xl font-bold">Login to Zenith CRM</CardTitle>
          <CardDescription>Enter your email and password to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
               <div className="flex items-center justify-between">
                 <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" // Add forgot password page later
                       className="text-sm font-medium text-primary hover:underline">
                       Forgot password?
                   </Link>
               </div>
              <Input
                id="password"
                type="password"
                required
                 value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
             {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
         <CardFooter className="flex flex-col items-center text-sm">
              <p className="text-muted-foreground">
                 Don't have an account?{" "}
                 <Link href="/register" className="font-medium text-primary hover:underline">
                   Register
                 </Link>
              </p>
          </CardFooter>
      </Card>
    </div>
  );
}
