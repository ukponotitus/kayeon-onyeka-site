// components/sections/StorytellingSection.tsx

"use client";

import { Project } from "@/types";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Rule } from "@/components/ui/Rule";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function StorytellingSection({
  label,
  title,
  projects,
}: {
  label: string;
  title: string;
  projects: Project[];
}) {
  return (
    <div>
      <div className="w-full h-[1px] bg-white/10" />
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <FadeIn className="mb-12">
          <Eyebrow>{label}</Eyebrow>
          <h2 className="font-serif text-4xl text-[#FAF8F5] mt-2">{title}</h2>
          <Rule />
        </FadeIn>
        <div className="flex flex-col gap-4">
          {projects.map((p, pi) => (
            <ProjectCard key={pi} p={p} flip={pi % 2 !== 0} i={pi} />
          ))}
        </div>
      </section>
    </div>
  );
}