
"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ChartTooltipContent } from "../ui/chart" // Assuming ChartTooltipContent exists

// Initial empty data or server-side rendered placeholder structure
const initialData = [
  { name: "Jan", total: 0 },
  { name: "Feb", total: 0 },
  { name: "Mar", total: 0 },
  { name: "Apr", total: 0 },
  { name: "May", total: 0 },
  { name: "Jun", total: 0 },
  { name: "Jul", total: 0 },
  { name: "Aug", total: 0 },
  { name: "Sep", total: 0 },
  { name: "Oct", total: 0 },
  { name: "Nov", total: 0 },
  { name: "Dec", total: 0 },
];

export function OverviewChart() {
  const [chartData, setChartData] = React.useState(initialData);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Generate random data only on the client side after hydration
    const generateRandomData = () => {
       return initialData.map(item => ({
         ...item,
         total: Math.floor(Math.random() * 5000) + 1000
       }));
    }
    setChartData(generateRandomData());
    setIsClient(true); // Mark that we are now on the client
  }, []); // Empty dependency array ensures this runs once on mount

  // Render null or a skeleton/placeholder until client-side data is ready
  if (!isClient) {
     // You could return a Skeleton placeholder here for better UX
    return (
       <ResponsiveContainer width="100%" height={350}>
            {/* Optional: Render a loading state or skeleton */}
            <div className="flex items-center justify-center h-full text-muted-foreground">
                Loading chart...
            </div>
       </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))" // Use CSS variable
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))" // Use CSS variable
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value / 1000}k`}
        />
         <Tooltip
           cursor={{ fill: 'hsl(var(--accent) / 0.3)' }} // Use accent color with opacity
           content={<ChartTooltipContent />} // Use Shadcn tooltip content
         />
        <Bar
          dataKey="total"
          fill="hsl(var(--primary))" // Use primary color
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

