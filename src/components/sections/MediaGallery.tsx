// components/sections/MediaGallery.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GALLERY } from "@/data/media";

export function MediaGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <FadeIn className="mb-12">
        <Eyebrow>Photography</Eyebrow>
        <h2 className="font-serif text-3xl text-[#FAF8F5] mt-2">Gallery</h2>
        <p className="font-sans text-[#FAF8F5]/50 text-sm mt-2">
          A selection of archival images from Kayeon's journey.
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {GALLERY.map((src, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="aspect-[4/3] overflow-hidden bg-[#1a1113] group cursor-pointer border border-white/5 hover:border-[#C5A882]/30 transition-colors duration-300">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}