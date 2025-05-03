import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LifeBuoy, Search, Send } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
         <LifeBuoy className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-semibold">Support Center</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Knowledge Base</CardTitle>
          <CardDescription>Find answers to common questions and learn how to use Zenith CRM Lite.</CardDescription>
           <div className="relative pt-2">
             <Search className="absolute left-2.5 top-4.5 h-4 w-4 text-muted-foreground" />
             <Input placeholder="Search help articles..." className="pl-8" />
           </div>
        </CardHeader>
        <CardContent>
           {/* TODO: Replace with actual fetched FAQs */}
           <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I add a new contact?</AccordionTrigger>
              <AccordionContent>
                Navigate to the 'Customers' section and click the 'Add Customer' button. Fill in the required details and save.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does the sales pipeline work?</AccordionTrigger>
              <AccordionContent>
                The pipeline visualizes your deals across different sales stages. You can drag and drop deals between stages as they progress. Each stage provides an overview of the deals within it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I manage team members?</AccordionTrigger>
              <AccordionContent>
                Go to Settings > Team. Admins can add new members, assign roles, and manage existing users. New members will receive instructions on setting their password.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>How is billing calculated?</AccordionTrigger>
              <AccordionContent>
                Billing is based on the number of active users (including the admin) in your organization at a flat rate of €6.99 per user per month. You can manage your subscription in Settings > Billing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Can't find an answer? Send us a message.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* TODO: Implement email sending functionality */}
          <div className="grid gap-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" placeholder="e.g., Issue with adding a deal" />
          </div>
           <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" placeholder="Describe your issue or question in detail..." rows={5} />
          </div>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </CardContent>
      </Card>

       {/* Optional: Tooltips & Guides Section Placeholder */}
       {/* <Card>
         <CardHeader>
           <CardTitle>Quick Guides & Tutorials</CardTitle>
           <CardDescription>Short videos and guides to get you started.</CardDescription>
         </CardHeader>
         <CardContent>
           <p className="text-muted-foreground">Links to guides or embedded videos will appear here.</p>
         </CardContent>
       </Card> */}

    </div>
  );
}
