// app/storytelling/page.tsx

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StorytellingSection } from "@/components/sections/StorytellingSection";
import { SPOKEN, WRITING, FILM } from "@/data/storytelling";

const SECTIONS: { label: string; title: string; data: typeof SPOKEN }[] = [
  { label: "Spoken Word", title: "Performances", data: SPOKEN },
  { label: "Written Work", title: "Writing", data: WRITING },
  { label: "Film & Visual", title: "Film Projects", data: FILM },
];

export default function StorytellingPage() {
  return (
    <div className="bg-[#0D0608] min-h-screen pt-16 text-[#FAF8F5]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Creative Practice</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-[#FAF8F5] mt-4 leading-[0.96]">
            Story<em className="text-[#C5A882]">telling</em>
          </h1>
          <p className="font-sans text-[#FAF8F5]/60 text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
            Words have the power to move hearts and change minds. Here is a
            collection of my spoken word pieces, written works, and visual
            storytelling projects.
          </p>
        </FadeIn>
      </section>

      {/* Sections */}
      {SECTIONS.map((s, si) => (
        <StorytellingSection key={si} label={s.label} title={s.title} projects={s.data} />
      ))}
    </div>
  );
}