"use client";

import { motion } from "motion/react";

export function HomeQuote() {
  return (
    <section
  className="
    relative
    min-h-[60vh]
    md:min-h-screen
    flex
    items-center
    justify-center
    overflow-hidden
    bg-[#0D0608]
    px-6
    py-20
    md:px-12
    md:py-0
  "
>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full max-w-[1100px] text-center"
      >
        <h2
          style={{
            fontFamily: "var(--bodoni-font)",
            fontWeight: 400,
          }}
          className="
            text-[#FAF8F5]
            text-[38px]
            sm:text-[48px]
            md:text-[64px]
            lg:text-[76px]
            xl:text-[88px]
            leading-[0.95]
            tracking-[-0.045em]
          "
        >
          THE BEST IDEAS DON'T FOLLOW
          <br />
          <span className="text-[#C5A882]">
            A FORMULA, THEY BREAK ONE.
          </span>
        </h2>
      </motion.div>
    </section>
  );
}