// components/sections/SpeakingTopics.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";
import { TOPICS } from "@/data/speaking";

export function SpeakingTopics() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <FadeIn className="mb-12">
        <Eyebrow>Topics</Eyebrow>
        <h2 className="font-serif text-3xl text-[#FAF8F5] mt-2">Speaking themes</h2>
        <p className="font-sans text-[#FAF8F5]/50 text-sm mt-2 max-w-md">
          A selection of key topics Kayeon explores in her speaking engagements.
        </p>
      </FadeIn>
      {TOPICS.map((t, i) => (
        <FadeIn key={i} delay={i * 0.06}>
          <div className="flex items-center gap-6 py-5 border-b border-white/10 group cursor-pointer hover:bg-[#1a1113]/50 -mx-2 px-2 transition-all duration-300">
            <span className="font-sans text-[10px] text-[#FAF8F5]/30 w-5 shrink-0 text-right tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-sans text-base text-[#FAF8F5]/75 group-hover:text-[#FAF8F5] transition-colors flex-1">
              {t}
            </p>
            <ArrowRight
              size={13}
              className="text-[#C5A882] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            />
          </div>
        </FadeIn>
      ))}
    </section>
  );
}