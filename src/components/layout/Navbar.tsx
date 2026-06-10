"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";
import MobileMenu from "@/components/MobileMenu";
import Image from "next/image";
import Link from "next/link";

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

          <Link
  href="/"
  className="flex items-center"
>
  <Image
    src="/logo.png"
    alt="NOST"
    width={36}
    height={36}
    priority
    className="transition-opacity hover:opacity-70"
  />
</Link>
          <a
  href="/cart"
  className="
    md:hidden
    text-base
    uppercase
    tracking-widest
  "
>
  Bag  • {mounted ? totalItems : 0}
</a>

          <MobileMenu />

          <nav className="hidden md:flex gap-10 text-base uppercase tracking-wider">
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a
  href="/cart"
  className="
hidden
md:block
text-base
uppercase
tracking-wider
"
>
            Bag  • {mounted ? totalItems : 0}
          </a>

        </div>
      </div>
    </header>
  );
}