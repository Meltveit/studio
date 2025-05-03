import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"; // For toggling integrations
import { Calendar, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations - Zenith CRM Lite",
  description: "Connect Zenith CRM Lite with other applications.",
};

export default function SettingsIntegrationsPage() {
  // Placeholder state for integrations - replace with actual state management
  const isCalendarConnected = true;
  const isEmailConnected = false;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Integrations</h3>
        <p className="text-sm text-muted-foreground">
          Connect your favorite tools to streamline your workflow.
        </p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Available Integrations</CardTitle>
           <CardDescription>Enable or disable connections to other services.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Google Calendar / Outlook Integration */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
               <Calendar className="h-6 w-6 text-primary" />
               <div>
                  <p className="font-medium">Calendar Sync</p>
                  <p className="text-xs text-muted-foreground">Sync tasks and events with Google Calendar or Outlook.</p>
               </div>
            </div>
             {/* TODO: Add connection logic */}
             <Switch checked={isCalendarConnected} onCheckedChange={() => { /* Handle connection/disconnection */ }} />
             {/* <Button variant="outline" size="sm">Connect</Button> */}
          </div>

           {/* Basic API Placeholder */}
           <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
               </svg>
               <div>
                  <p className="font-medium">Basic API Access</p>
                  <p className="text-xs text-muted-foreground">Generate API keys for custom integrations (Admin only).</p>
               </div>
            </div>
             {/* TODO: Add API Key generation logic */}
             <Button variant="outline" size="sm">Manage API Keys</Button>
          </div>

            {/* Email Integration Placeholder (Future) */}
            {/* <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
              <div className="flex items-center gap-3">
                 <Mail className="h-6 w-6 text-muted-foreground" />
                 <div>
                    <p className="font-medium">Email Integration</p>
                    <p className="text-xs text-muted-foreground">Connect your inbox (Coming Soon).</p>
                 </div>
              </div>
               <Button variant="outline" size="sm" disabled>Connect</Button>
            </div> */}

        </CardContent>
      </Card>
    </div>
  )
}
