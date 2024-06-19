import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error("Webhook signature verification failed:", error.message);
    return new NextResponse("Webhook error: Invalid signature", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(session);
        break;

      case "invoice.payment_succeeded":
        await handleInvoicePaymentSucceeded(session);
        break;

      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }
  } catch (error: any) {
    console.error("Error handling event:", error.message);
    return new NextResponse("Webhook error", { status: 500 });
  }

  return new NextResponse(null, { status: 200 });
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const subscription = await stripe.subscriptions.retrieve(
    session.subscription as string
  );

  if (!session.metadata?.orgId) {
    throw new Error("Org ID is required");
  }

  await db.orgSubscription.create({
    data: {
      orgId: session.metadata.orgId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: subscription.items.data[0].price.id,
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
  });
}

async function handleInvoicePaymentSucceeded(session: Stripe.Checkout.Session) {
  const subscription = await stripe.subscriptions.retrieve(
    session.subscription as string
  );

  await db.orgSubscription.update({
    where: {
      stripeCustomerId: subscription.customer as string,
    },
    data: {
      stripePriceId: subscription.items.data[0].price.id,
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
  });
}
