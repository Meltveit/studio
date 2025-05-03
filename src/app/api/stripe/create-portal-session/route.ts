// src/app/api/stripe/create-portal-session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
// import { auth } from '@clerk/nextjs/server'; // Or your auth provider
// import { getUserStripeCustomerId } from '@/lib/user-data'; // Your function to get customer ID

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function GET(req: NextRequest) {
  // --- TODO: Replace with actual Authentication and Customer ID retrieval ---
   // const { userId } = auth();
   // if (!userId) {
   //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
   // }
   // const customerId = await getUserStripeCustomerId(userId);
   const customerId = 'cus_placeholder_12345'; // Hardcoded Placeholder!
   // --- End of Placeholder Section ---

  if (!customerId) {
    return NextResponse.json({ error: 'Stripe customer ID not found.' }, { status: 400 });
  }

  const returnUrl = new URL('/settings/billing', req.url).toString(); // Redirect back to billing page

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    // Important: Use NextResponse.redirect for external URLs
    return NextResponse.redirect(portalSession.url, 303);

  } catch (error) {
    console.error('Error creating Stripe portal session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: `Failed to create Stripe portal session: ${errorMessage}` }, { status: 500 });
  }
}
