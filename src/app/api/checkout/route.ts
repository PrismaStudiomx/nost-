import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const items = body.items;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: items.map((item: any) => ({
        quantity: item.quantity,

        price_data: {
          currency: "usd",

          product_data: {
            name: item.name,
            images: [],
          },

          unit_amount: item.price * 100,
        },
      })),
success_url:
  "http://localhost:3000/success",

cancel_url:
  "http://localhost:3000/cancel",
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