import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales() {
  // Placeholder data - replace with actual data fetching
  const activities = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", action: "Added Contact", time: "5m ago" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", action: "Closed Deal", value: "+€1,999.00" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", action: "Logged Call", time: "1h ago" },
    { name: "William Kim", email: "will@email.com", action: "Updated Deal Stage", value: "Prospecting" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", action: "Added Note", time: "3h ago" },
  ];

  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" data-ai-hint="person face"/>
            <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto font-medium text-sm">
            {activity.value || activity.time}
          </div>
        </div>
      ))}
       {/* Add a placeholder if no activities */}
      {activities.length === 0 && (
         <p className="text-sm text-muted-foreground text-center py-4">No recent activity.</p>
      )}
    </div>
  )
}
