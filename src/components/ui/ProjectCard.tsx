// components/ui/ProjectCard.tsx

"use client";

import { Project } from "@/types";
import { FadeIn } from "./FadeIn";
import { Eyebrow } from "./Eyebrow";
import { ArrowRight } from "lucide-react";

export function ProjectCard({
  p,
  flip,
  i,
}: {
  p: Project;
  flip: boolean;
  i: number;
}) {
  return (
    <FadeIn delay={i * 0.1}>
      <div
        className={`group grid lg:grid-cols-2 overflow-hidden border border-white/10 bg-[#1a1113] hover:border-[#C5A882]/30 transition-colors duration-400`}
      >
        <div
          className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#0D0608] min-h-[220px] ${
            flip ? "lg:order-2" : ""
          }`}
        >
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
        </div>
        <div
          className={`p-9 lg:p-12 flex flex-col justify-center ${
            flip ? "lg:order-1" : ""
          }`}
        >
          <Eyebrow>{p.year}</Eyebrow>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#FAF8F5] mt-3 mb-3 leading-[1.15]">
            {p.title}
          </h3>
          <p className="font-sans text-[#FAF8F5]/70 text-sm leading-relaxed mb-1.5">
            {p.hook}
          </p>
          <p className="font-sans text-xs text-[#FAF8F5]/40 italic mb-8">
            {p.role}
          </p>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C5A882] flex items-center gap-2 group-hover:gap-3.5 transition-all duration-250">
            View Project <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </FadeIn>
  );
}