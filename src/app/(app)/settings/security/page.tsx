import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Settings - Zenith CRM Lite",
  description: "Manage your account security settings.",
};

export default function SettingsSecurityPage() {
    // Placeholder state - replace with actual state
    const isTwoFactorEnabled = false;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your password, two-factor authentication, and view access logs.
        </p>
      </div>
      <Separator />

       <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
           <CardDescription>Change your account password.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           {/* TODO: Implement Password Change Form */}
           <div className="space-y-2">
             <Label htmlFor="current-password">Current Password</Label>
             <Input id="current-password" type="password" />
           </div>
           <div className="space-y-2">
             <Label htmlFor="new-password">New Password</Label>
             <Input id="new-password" type="password" />
           </div>
           <div className="space-y-2">
             <Label htmlFor="confirm-password">Confirm New Password</Label>
             <Input id="confirm-password" type="password" />
           </div>
            <Button>Change Password</Button>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication (2FA)</CardTitle>
          <CardDescription>Add an extra layer of security to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Enable 2FA</p>
              <p className="text-xs text-muted-foreground">Requires an authenticator app (e.g., Google Authenticator).</p>
            </div>
            {/* TODO: Add 2FA setup logic */}
            <Switch checked={isTwoFactorEnabled} onCheckedChange={() => { /* Handle 2FA toggle */ }} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Access Logs</CardTitle>
          <CardDescription>Review recent login activity for your account.</CardDescription>
        </CardHeader>
        <CardContent>
           {/* TODO: Fetch and display access logs */}
          <p className="text-sm text-muted-foreground">No recent access logs found.</p>
          {/* Example log entry:
           <div className="text-sm flex justify-between border-b py-2">
              <span>Login from Chrome on macOS</span>
              <span>July 28, 2024, 10:15 AM (IP: 192.168.1.100)</span>
           </div>
          */}
        </CardContent>
      </Card>


    </div>
  )
}
