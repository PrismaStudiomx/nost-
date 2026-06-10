import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const items = body.items;

    const origin =
  req.headers.get("origin") ||
  "http://localhost:3000";

const session = await stripe.checkout.sessions.create({
  mode: "payment",

  line_items: items.map((item: any) => ({
    quantity: item.quantity,

    price_data: {
      currency: "usd",

      product_data: {
        name: item.name,
      },

      unit_amount: item.price * 100,
    },
  })),

  success_url: `${origin}/success`,

  cancel_url: `${origin}/cancel`,
});

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Checkout failed",
      },
      {
        status: 500,
      }
    );
  }
}