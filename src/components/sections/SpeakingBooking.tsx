// components/sections/SpeakingBooking.tsx

"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";

const ENQUIRY_ROWS: [string, string][] = [
  ["Speaking fee", "Available on request"],
  ["Availability", "Select dates, 2025–2026"],
  ["Format", "Keynote · Panel · Performance · Masterclass"],
  ["Travel", "International availability"],
];

export function SpeakingBooking() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <FadeIn>
          <Eyebrow>Booking</Eyebrow>
          <h2 className="font-serif text-[38px] text-[#FAF8F5] mt-3 mb-6 leading-[1.1]">
            Bring Kayeon to your<br /><em className="text-[#C5A882]">stage or platform.</em>
          </h2>
          <p className="font-sans text-[#FAF8F5]/65 text-base leading-relaxed mb-9">
            Kayeon is available for keynotes, panels, performances, masterclasses,
            and residencies. She works with academic institutions, cultural
            organisations, NGOs, corporate partners, and government bodies.
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-3 px-8 py-3.5 bg-[#6B1E2E] text-[#FAF8F5] font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#8B2638] transition-colors duration-300"
          >
            Send a Booking Enquiry <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-[#1a1113] border border-white/10 p-8">
            <Eyebrow>Enquiry information</Eyebrow>
            <div className="mt-6 space-y-0">
              {ENQUIRY_ROWS.map(([q, a], i) => (
                <div
                  key={i}
                  className="flex justify-between gap-6 py-4 border-b border-white/10 last:border-0"
                >
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#FAF8F5]/50">
                    {q}
                  </p>
                  <p className="font-sans text-sm text-[#FAF8F5] text-right">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}