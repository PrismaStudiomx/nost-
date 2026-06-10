"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
export default function FeaturedCollection() {
  const addItem = useCartStore(
  (state) => state.addItem
);
  return (
    <section className="py-24 md:py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="uppercase tracking-[0.4em] text-xs text-neutral-500">
            New Season
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl">
            Latest Drop
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {products.map((product) => (
            <Link
  href={`/product/${product.slug}`}
  key={product.id}
  className="group block"
> 
              <div className="relative overflow-hidden">

                <div className="relative h-96 md:h-112.5">

                 <Image
  src={product.image}
  alt={product.name}
  fill
 sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition duration-700 group-hover:scale-105"
/>

                </div>

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    flex
                    items-end
                    p-8
                  "
                >
                  <div className="text-white">

  <h3 className="text-2xl">
    {product.name}
  </h3>

  <button
   onClick={(e) => {
  e.preventDefault();

  addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  });
}}
    className="
      mt-4
      border
      border-white
      px-5
      py-2
      text-sm
      uppercase
      tracking-widest
      hover:bg-white
      hover:text-black
      transition
    "
  >
    Add To Cart
  </button>

</div>
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}