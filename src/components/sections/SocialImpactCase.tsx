// components/sections/SocialImpactCase.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

type CaseData = {
  label: string;
  title: string;
  stat: string;
  statLabel: string;
  img: string;
  challenge: string;
  approach: string;
  impact: string;
};

export function SocialImpactCase({ c, i }: { c: CaseData; i: number }) {
  return (
    <FadeIn delay={i * 0.1}>
      <div className="border border-white/10 overflow-hidden bg-[#1a1113] hover:border-[#C5A882]/30 transition-colors duration-400">
        <div className="grid lg:grid-cols-[2fr,3fr]">
          <div className="relative min-h-[240px]">
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(13,6,8,0.85) 0%, transparent 55%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="font-serif text-[44px] text-[#FAF8F5] leading-none">
                {c.stat}
              </p>
              <p className="font-sans text-xs text-[#C5A882] mt-1 tracking-wide">
                {c.statLabel}
              </p>
            </div>
          </div>
          <div className="p-8 lg:p-12">
            <Eyebrow>{c.label}</Eyebrow>
            <h2 className="font-serif text-[28px] text-[#FAF8F5] mt-2 mb-8 leading-[1.15]">
              {c.title}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { k: "Challenge", v: c.challenge },
                { k: "Approach", v: c.approach },
                { k: "Impact", v: c.impact },
              ].map((b, j) => (
                <div key={j}>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C5A882] mb-2">
                    {b.k}
                  </p>
                  <p className="font-sans text-sm text-[#FAF8F5]/65 leading-relaxed">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}