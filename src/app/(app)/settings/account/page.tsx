import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings - Zenith CRM Lite",
  description: "Manage your account details.",
};

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Manage your organization details and account preferences.
        </p>
      </div>
      <Separator />
      {/* TODO: Implement Account Settings Form */}
      <div className="p-6 border rounded-lg bg-card text-card-foreground">
        Account settings form placeholder (Organization Name, etc.).
      </div>
    </div>
  )
}
