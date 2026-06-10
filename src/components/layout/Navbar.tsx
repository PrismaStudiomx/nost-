"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";
import MobileMenu from "@/components/MobileMenu";

export default function Navbar() {
  const totalItems = useCartStore(
    (state) => state.getTotalItems()
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          <div className="text-xl font-medium tracking-[0.45em]">
            NOST
          </div>
          <MobileMenu />

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a
  href="/cart"
  className="
hidden
md:block
text-sm
uppercase
tracking-wider
"
>
            Cart ({mounted ? totalItems : 0})
          </a>

        </div>
      </div>
    </header>
  );
}