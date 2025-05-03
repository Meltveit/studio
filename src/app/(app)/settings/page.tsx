import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/settings/sidebar-nav"; // Create this component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings - Zenith CRM Lite",
  description: "Manage your account and application settings.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings", // Base settings page is profile
  },
  {
    title: "Account",
    href: "/settings/account",
  },
  {
    title: "Team",
    href: "/settings/team",
  },
  {
    title: "Billing",
    href: "/settings/billing",
  },
   {
    title: "Integrations",
    href: "/settings/integrations",
  },
   {
    title: "Security",
    href: "/settings/security",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsPage({ children }: SettingsLayoutProps) {
  return (
     // We don't need a separate layout file for settings if it's nested under (app)
     // The AppLayout already wraps this.
     // We just need the structure within the settings page itself.
     <div className="space-y-6 p-4 pb-16 md:p-10 md:block">
       <div className="space-y-0.5">
         <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
         <p className="text-muted-foreground">
           Manage your account settings, team members, billing, and integrations.
         </p>
       </div>
       <Separator className="my-6" />
       <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
         <aside className="-mx-4 lg:w-1/5">
           <SidebarNav items={sidebarNavItems} />
         </aside>
         <div className="flex-1 lg:max-w-2xl">
           {/* Render the default Profile settings content here */}
           {/* For other sections, Next.js routing will handle children */}
            {/* TODO: Implement Profile Settings Form */}
             <div className="space-y-4">
                <h3 className="text-lg font-medium">Profile</h3>
                 <p className="text-sm text-muted-foreground">
                   This is how others will see you on the site.
                 </p>
                 <Separator />
                  {/* Placeholder for Profile Form */}
                  <div className="p-6 border rounded-lg bg-card text-card-foreground">
                    Profile settings form will go here. (Name, Email, Avatar etc.)
                  </div>
             </div>

         </div>
       </div>
     </div>
  );
}
