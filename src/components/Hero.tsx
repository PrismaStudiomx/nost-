"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

       <Image
  src="/hero.jpg"
  alt="NOST Designer Streetwear"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>

        <div className="absolute inset-0 bg-black/50" />

      </div>

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 uppercase tracking-[0.6em] text-xs md:text-sm"
        >
          Designer Streetwear
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            leading-none
            text-[5rem]
            md:text-[9rem]
            lg:text-[12rem]
          "
        >
          NOST
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-6
            max-w-xl
            text-white/80
            text-base
            md:text-lg
          "
        >
          Designed for those who do not follow trends.
          They create them.
        </motion.p>

        <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.98 }}
  className="mt-12"
>
  <Link
    href="/shop"
    className="
      inline-block
      border
      border-white
      px-10
      py-4
      uppercase
      tracking-widest
      text-sm
      transition
    "
  >
    Shop Collection →
  </Link>
</motion.div>

      </div>

      {/* Bottom Label */}

      <div className="absolute bottom-8 left-8 z-10 text-white/70 text-xs uppercase tracking-[0.4em]">
        NOST 2026
      </div>

    </section>
  );
}