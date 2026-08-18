// components/sections/MediaAwards.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AWARDS } from "@/data/media";

export function MediaAwards() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <FadeIn className="mb-12">
        <Eyebrow>Accolades</Eyebrow>
        <h2 className="font-serif text-3xl text-[#FAF8F5] mt-2">
          Awards &amp; fellowships
        </h2>
        <p className="font-sans text-[#FAF8F5]/50 text-sm mt-2">
          A collection of honours that reflect the reach and impact of Kayeon's work.
        </p>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AWARDS.map((a, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-[#1a1113] border border-white/10 p-7 h-full hover:border-[#C5A882]/30 transition-colors duration-300">
              <div className="flex items-start justify-between gap-3 mb-5">
                <Eyebrow>{a.cat}</Eyebrow>
                <span className="font-sans text-xs text-[#FAF8F5]/50 shrink-0">
                  {a.year}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#FAF8F5] mb-1.5">
                {a.title}
              </h3>
              <p className="font-sans text-sm text-[#FAF8F5]/60">{a.org}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}