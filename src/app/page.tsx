
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart, Users, Briefcase, CheckSquare, DollarSign, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CopyrightYear } from "@/components/landing/copyright-year"; // Import the new component

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-lg font-bold">Zenith CRM Lite</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
               <Image
                 src="https://picsum.photos/1200/800"
                 alt="Hero CRM Dashboard"
                 width={1200}
                 height={800}
                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg border"
                 data-ai-hint="dashboard interface screenshot"
               />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Sales with Zenith CRM Lite
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Focus on building relationships, not managing spreadsheets. Zenith CRM Lite provides the essential tools to manage contacts, track deals, and grow your business effortlessly.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register">Get Started Today</Link>
                  </Button>
                   <Button size="lg" variant="outline" asChild>
                     <Link href="#features">Learn More</Link>
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need, Nothing You Don't</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Zenith CRM Lite is packed with features designed for small teams and startups focused on growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <Users className="h-6 w-6 text-primary" />
                 </div>
                <h3 className="text-lg font-bold">Contact Management</h3>
                <p className="text-sm text-muted-foreground">Keep track of all your customers, leads, and prospects in one organized place.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <Briefcase className="h-6 w-6 text-primary" />
                 </div>
                <h3 className="text-lg font-bold">Sales Pipeline</h3>
                <p className="text-sm text-muted-foreground">Visualize your sales process and manage deals from lead to close with a drag-and-drop interface.</p>
              </div>
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <CheckSquare className="h-6 w-6 text-primary" />
                 </div>
                <h3 className="text-lg font-bold">Task Management</h3>
                <p className="text-sm text-muted-foreground">Stay on top of your follow-ups and activities with integrated task tracking.</p>
              </div>
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <BarChart className="h-6 w-6 text-primary" />
                 </div>
                <h3 className="text-lg font-bold">Simple Dashboard</h3>
                <p className="text-sm text-muted-foreground">Get a quick overview of your key metrics, recent activities, and pending tasks.</p>
              </div>
               <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <Zap className="h-6 w-6 text-primary" />
                 </div>
                 <h3 className="text-lg font-bold">Easy Setup</h3>
                 <p className="text-sm text-muted-foreground">Get up and running in minutes. No complex configurations required.</p>
               </div>
               <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <DollarSign className="h-6 w-6 text-primary" />
                 </div>
                 <h3 className="text-lg font-bold">Affordable Pricing</h3>
                 <p className="text-sm text-muted-foreground">Simple, transparent pricing designed for small teams and budgets.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
               <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                One plan fits all. Get access to all features with straightforward per-user pricing.
              </p>
            </div>
            <div className="flex justify-center">
                <Card className="w-full max-w-sm shadow-lg">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-2xl">Team Plan</CardTitle>
                        <p className="text-muted-foreground">Ideal for small teams and startups.</p>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold">€6.99</span>
                        <span className="text-sm font-normal text-muted-foreground">/ user / month</span>
                        </div>
                        <ul className="grid gap-2 text-sm text-muted-foreground text-left">
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Contact Management
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Sales Pipeline
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Task Management
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Dashboard Overview
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                             Basic Reporting
                        </li>
                         <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                             Team Collaboration
                        </li>
                        </ul>
                        <Button className="w-full" asChild>
                           <Link href="/register">Sign Up Now</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
            <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Simplify Your Sales?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                   Sign up today and start managing your customer relationships more effectively.
                </p>
                <Button size="lg" asChild>
                    <Link href="/register">Start Your Free Trial (Implied)</Link>
                </Button>
                 <p className="text-xs text-muted-foreground mt-2">Registration leads to immediate subscription (€6.99/user/month).</p>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
           {/* Use the CopyrightYear component */}
           <p className="text-sm text-muted-foreground">&copy; <CopyrightYear /> Zenith CRM. All rights reserved.</p>
           <nav className="flex gap-4 sm:gap-6">
            {/* Add links to Terms, Privacy later */}
            <Link href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
