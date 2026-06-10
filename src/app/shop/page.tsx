import FeaturedCollection from "@/components/FeaturedCollection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore the latest NOST designer streetwear collection.",
};

export default function ShopPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 pb-16">

  <p className="uppercase tracking-[0.4em] text-xs text-neutral-500">
    NOST Collection
  </p>

  <h1 className="mt-4 text-5xl md:text-7xl">
    Premium Designer Streetwear
  </h1>

  <p className="mt-6 max-w-2xl text-neutral-600">
    Crafted for creators. Designed to outlast trends.
  </p>

</div>

      <FeaturedCollection />
    </main>
  );
}