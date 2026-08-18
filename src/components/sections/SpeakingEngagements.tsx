// components/sections/SpeakingEngagements.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ENGAGEMENTS } from "@/data/speaking";

export function SpeakingEngagements() {
  return (
    <section className="bg-[#1a1113] py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="mb-12">
          <Eyebrow>Past Engagements</Eyebrow>
          <h2 className="font-serif text-3xl text-[#FAF8F5] mt-2">
            Venues &amp; organisations
          </h2>
          <p className="font-sans text-[#FAF8F5]/50 text-sm mt-2">
            Kayeon has spoken at a diverse range of events and institutions
            across the globe.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ENGAGEMENTS.map((e, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="bg-[#0D0608] border border-white/10 p-5 hover:border-[#C5A882]/30 transition-colors duration-300">
                <p className="font-sans text-sm font-medium text-[#FAF8F5]">
                  {e.n}
                </p>
                <p className="font-sans text-xs text-[#FAF8F5]/50 mt-1">{e.y}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}