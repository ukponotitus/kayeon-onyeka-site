// app/resources/page.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <div className="bg-[#0D0608] min-h-screen pt-16 text-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Writing &amp; Thought</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-[#FAF8F5] mt-4 leading-[0.96]">
            <em className="text-[#C5A882]">Resources</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-2xl">
          <p className="font-sans text-[#FAF8F5]/70 text-base leading-relaxed">
            Essays, reflections, field notes, and criticism from Kayeon's work at
            the intersection of storytelling, culture, and social change. Here
            you'll find articles, interviews, and thought pieces that explore the
            power of narrative in shaping our world.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-[1px] bg-white/10" />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {ARTICLES.map((a, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <article className="group cursor-pointer flex flex-col h-full">
                <div className="aspect-[5/3] overflow-hidden bg-[#1a1113] mb-5 border border-white/5 group-hover:border-[#C5A882]/30 transition-colors duration-300">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Eyebrow>{a.cat}</Eyebrow>
                  <span className="font-sans text-xs text-[#FAF8F5]/40">{a.date}</span>
                </div>
                <h3 className="font-serif text-xl text-[#FAF8F5] mb-3 leading-[1.2] group-hover:text-[#C5A882] transition-colors duration-200 flex-1">
                  {a.title}
                </h3>
                <p className="font-sans text-sm text-[#FAF8F5]/60 leading-relaxed">
                  {a.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C5A882] flex items-center gap-2 group-hover:gap-3.5 transition-all duration-250">
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}