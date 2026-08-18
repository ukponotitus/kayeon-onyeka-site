// components/sections/MediaPress.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";
import { PRESS } from "@/data/media";

export function MediaPress() {
  return (
    <section className="bg-[#1a1113] py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="mb-12">
          <Eyebrow>In the Press</Eyebrow>
          <h2 className="font-serif text-3xl text-[#FAF8F5] mt-2">
            Media features
          </h2>
          <p className="font-sans text-[#FAF8F5]/50 text-sm mt-2">
            Selected press mentions and interviews from around the world.
          </p>
        </FadeIn>
        {PRESS.map((p, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-5 border-b border-white/10 group cursor-pointer -mx-3 px-3 hover:bg-[#0D0608]/50 transition-all duration-300">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C5A882] w-28 shrink-0">
                {p.outlet}
              </span>
              <p className="font-sans text-sm text-[#FAF8F5]/75 flex-1 italic">
                {p.title}
              </p>
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-sans text-xs text-[#FAF8F5]/40">{p.year}</span>
                <ArrowRight
                  size={12}
                  className="text-[#C5A882] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}