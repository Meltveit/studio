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

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [organizationName, setOrganizationName] = useState(''); // Added organization name
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const { signup } = useAuth(); // Placeholder
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
    }
     if (!organizationName.trim()) {
        setError("Organization name is required.");
        return;
    }

    setLoading(true);

    // Placeholder Registration Logic
    console.log("Attempting registration:", email, organizationName);
    // Replace with actual Firebase auth call & Firestore write:
    // try {
    //   const userCredential = await signup(email, password);
    //   const user = userCredential.user;
    //   // Create organization collection and admin doc in Firestore
    //   // await setupOrganization(user.uid, user.email, organizationName);
    //   // Setup Stripe subscription
    //   // await setupSubscription(user.uid, user.email);
    //   router.push('/dashboard'); // Redirect after successful registration
    // } catch (err: any) {
    //   setError(err.message || 'Failed to register. Please try again.');
    // } finally {
    //   setLoading(false);
    // }

     // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`Registered ${email} for organization ${organizationName}`);
    // Simulate success and redirect (remove this in real implementation)
    router.push('/dashboard');
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
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
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Enter your details to create your Zenith CRM organization</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="organizationName">Organization Name</Label>
                <Input
                    id="organizationName"
                    type="text"
                    placeholder="Your Company Inc."
                    required
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    disabled={loading}
                />
             </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@yourcompany.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                 value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>
             {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating Account...' : 'Register & Create Organization'}
            </Button>
             <p className="text-xs text-muted-foreground text-center pt-2">
               By registering, you agree to our Terms of Service and Privacy Policy.
               A subscription of €6.99/user/month will start after registration.
             </p>
          </form>
        </CardContent>
         <CardFooter className="flex flex-col items-center text-sm">
              <p className="text-muted-foreground">
                 Already have an account?{" "}
                 <Link href="/login" className="font-medium text-primary hover:underline">
                   Login
                 </Link>
              </p>
          </CardFooter>
      </Card>
    </div>
  );
}
