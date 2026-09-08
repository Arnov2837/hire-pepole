import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { price_id, stripe } from "../../../lib/stripe";

export async function POST(request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin"); 
    const formdata = await request.formData();
    const planId = formdata.get('plane_id');
    const price = price_id[planId];

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],

      mode: "subscription",

      success_url: `${origin}/plane/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/plane`,
    });

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Stripe Checkout Error:", err);

    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 400,
      }
    );
  }
}