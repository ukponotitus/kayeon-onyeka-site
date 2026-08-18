// app/social-impact/page.tsx

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SocialImpactCase } from "@/components/sections/SocialImpactCase";
import { CASES } from "@/data/social-impact";

export default function SocialImpactPage() {
  return (
    <div className="bg-[#0D0608] min-h-screen pt-16 text-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Community &amp; Systems Work</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-[#FAF8F5] mt-4 leading-[0.96]">
            Social <em className="text-[#C5A882]">Impact</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-2xl">
          <p className="font-sans text-[#FAF8F5]/70 text-base leading-relaxed">
            Kayeon applies storytelling as a technology for community development,
            advocacy, and systemic change — in schools, policy rooms, and public
            squares. Here are some of the initiatives and projects that have shaped
            her journey.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-[1px] bg-white/10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-7">
        {CASES.map((c, i) => (
          <SocialImpactCase key={i} c={c} i={i} />
        ))}
      </div>
    </div>
  );
}