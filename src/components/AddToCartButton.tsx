"use client";

import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  image,
}: Props) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  return (
    <button
      onClick={() => {
        addItem({
          id,
          name,
          price,
          image,
        });

        toast.success("Added to cart");
      }}
      className="
        mt-10
        bg-black
        text-white
        px-8
        py-4
        uppercase
        tracking-widest
      "
    >
      Add To Cart
    </button>
  );
}