// app/media/page.tsx

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaAwards } from "@/components/sections/MediaAwards";
import { MediaPress } from "@/components/sections/MediaPress";
import { MediaGallery } from "@/components/sections/MediaGallery";

export default function MediaPage() {
  return (
    <div className="bg-[#0D0608] min-h-screen pt-16 text-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Recognition &amp; Press</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-[#FAF8F5] mt-4 leading-[0.96]">
            Media &amp;<br /><em className="text-[#C5A882]">Recognition</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-2xl">
          <p className="font-sans text-[#FAF8F5]/70 text-base leading-relaxed">
            Kayeon's work has been recognised by prestigious institutions and
            featured in leading media outlets around the world. Here is a selection
            of awards, press mentions, and archival photography.
          </p>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-white/10" />
      <MediaAwards />
      <MediaPress />
      <MediaGallery />
    </div>
  );
}