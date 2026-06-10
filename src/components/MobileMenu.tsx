"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-sm uppercase tracking-widest"
      >
        Menu
      </button>

      {open && (
        <div
  className="
    fixed
    top-0
    left-0
    w-screen
    h-screen
    overflow-y-auto
    z-[99999]
    bg-white
  "
  style={{
    width: "100vw",
    height: "100vh",
  }}
>
          <div className="flex h-full flex-col">

            <div className="flex items-center justify-between px-6 py-5 border-b w-full">

              <div className="tracking-[0.4em]">
                NOST
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ×
              </button>

            </div>

            <div
              className="
                flex-1
                flex
                flex-col
                items-center
                justify-center
                gap-8
              "
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-4xl uppercase tracking-[0.2em]"
              >
                Home
              </Link>

              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="text-4xl uppercase tracking-[0.2em]"
              >
                Shop
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-4xl uppercase tracking-[0.2em]"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-4xl uppercase tracking-[0.2em]"
              >
                Contact
              </Link>

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="text-4xl uppercase tracking-[0.2em]"
              >
                Cart
              </Link>
            </div>

            <div className="pb-8 text-center text-sm text-neutral-500">
              Designer streetwear crafted for creators.
            </div>

          </div>
        </div>
      )}
    </>
  );
}