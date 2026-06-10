"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { loadStripe } from "@stripe/stripe-js";

export default function CartPage() {
  const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore(
    (state) => state.removeItem
  );
  
const increaseQuantity = useCartStore(
  (state) => state.increaseQuantity
);

const decreaseQuantity = useCartStore(
  (state) => state.decreaseQuantity
);
  const subtotal = useCartStore(
  (state) => state.getSubtotal()
);
async function handleCheckout() {
  const stripe = await stripePromise;

  const response = await fetch(
    "/api/checkout",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        items,
      }),
    }
  );

  const data = await response.json();

  if (data.url) {
    window.location.href = data.url;
  }
}

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl mb-12">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-neutral-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">

            <div className="space-y-6">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex
                    gap-6
                    border-b
                    pb-6
                  "
                >
                  <div className="relative w-32 h-40">

                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="flex-1">

                    <h2 className="text-xl">
                      {item.name}
                    </h2>

                    <div className="flex items-center gap-3 mt-3">

  <button
    onClick={() =>
      decreaseQuantity(item.id)
    }
    className="
      border
      w-8
      h-8
      flex
      items-center
      justify-center
    "
  >
    -
  </button>

  <span>
    {item.quantity}
  </span>

  <button
    onClick={() =>
      increaseQuantity(item.id)
    }
    className="
      border
      w-8
      h-8
      flex
      items-center
      justify-center
    "
  >
    +
  </button>

</div>

                    <p className="mt-2">
                      ${item.price}
                    </p>

                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="
                        mt-4
                        text-sm
                        uppercase
                        tracking-widest
                      "
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>

            <div
              className="
                border
                p-8
                h-fit
                sticky
                top-32
              "
            >
              <h2 className="text-2xl mb-8">
                Summary
              </h2>

              <div className="flex justify-between mb-6">

                <span>Subtotal</span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>

              </div>

              <button
                onClick={handleCheckout}
                className="
                  w-full
                  bg-black
                  text-white
                  py-4
                  uppercase
                  tracking-widest
                "
              >
                Checkout 
              </button>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}