import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Billing Settings - Zenith CRM Lite",
  description: "Manage your subscription and payment details.",
};

// Placeholder Data
const currentPlan = "Team Plan";
const userCount = 3; // Example user count
const pricePerUser = 6.99;
const nextBillingDate = "August 15, 2024";
const subscriptionStatus = "Active"; // Could be 'Active', 'Canceled', 'Past Due' etc.

export default function SettingsBillingPage() {
  const totalCost = (userCount * pricePerUser).toFixed(2);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription plan and view payment history.
        </p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
           <CardDescription>You are currently subscribed to the {currentPlan}.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="flex justify-between items-center">
             <span className="text-muted-foreground">Plan</span>
             <span>{currentPlan}</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-muted-foreground">Users</span>
              <span>{userCount} users x €{pricePerUser.toFixed(2)}/user/month</span>
           </div>
           <Separator/>
           <div className="flex justify-between items-center font-semibold">
             <span>Total Monthly Cost</span>
             <span>€{totalCost}</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-muted-foreground">Status</span>
             <Badge variant={subscriptionStatus === 'Active' ? 'default' : 'destructive'}>{subscriptionStatus}</Badge>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-muted-foreground">Next Billing Date</span>
             <span>{nextBillingDate}</span>
           </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
           {/* Button to manage subscription via Stripe Customer Portal */}
           {/* TODO: Implement Stripe Customer Portal integration */}
           <Button asChild>
             <Link href="/api/stripe/create-portal-session" target="_blank">Manage Subscription</Link>
           </Button>
           <p className="text-xs text-muted-foreground ml-auto">Payments securely processed by Stripe.</p>
        </CardFooter>
      </Card>

       <Card>
         <CardHeader>
           <CardTitle>Payment History</CardTitle>
           <CardDescription>Your recent invoices.</CardDescription>
         </CardHeader>
         <CardContent>
           {/* TODO: Fetch and display payment history from Stripe */}
           <p className="text-sm text-muted-foreground">No payment history available yet.</p>
           {/* Example Row Structure */}
           {/* <div className="flex justify-between items-center border-b pb-2 mb-2">
             <div>
               <p className="font-medium">Invoice #INV12345</p>
               <p className="text-xs text-muted-foreground">July 15, 2024</p>
             </div>
             <div className="text-right">
               <p>€{totalCost}</p>
               <Badge variant="secondary">Paid</Badge>
             </div>
             <Button variant="outline" size="sm">Download</Button>
           </div> */}
         </CardContent>
       </Card>

    </div>
  )
}
