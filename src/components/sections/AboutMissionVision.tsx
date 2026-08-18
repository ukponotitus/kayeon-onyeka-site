/* About page mission & vision two-column block. */

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ITEMS = [
  {
    label: "Mission",
    heading: "To make storytelling a civic infrastructure.",
    body: "Kayeon's mission is to demonstrate — through performance, curriculum, research, and advocacy — that narrative capacity is foundational to democratic participation. She works to ensure young people from under-represented communities have access to the tools, spaces, and platforms to tell their own stories.",
  },
  {
    label: "Vision",
    heading: "A world where every story gets to land.",
    body: "She envisions a world where the stories of marginalised communities are not just told — but heard, taken seriously, and acted upon. A world where creative practice is understood as serious intellectual and political work, and where the spoken word is as valued in policy rooms as it is on stages.",
  },
];

export function AboutMissionVision() {
  return (
    <section className="bg-secondary py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
        {ITEMS.map((item, i) => (
          <FadeIn key={i} delay={i * 0.18}>
            <Eyebrow>{item.label}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground mt-3 mb-5 leading-[1.2]">
              <em>{item.heading}</em>
            </h2>
            <p className="font-sans text-foreground/65 text-base leading-relaxed">{item.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
