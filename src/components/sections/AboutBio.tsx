/* About page hero + biography section. */

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CREDS = [
  { k: "Fellowship", v: "Mandela Washington Fellow" },
  { k: "Recognition", v: "Commonwealth Youth Award" },
  { k: "Education", v: "LSE & University of Exeter" },
  { k: "Reach", v: "2,400+ Young People" },
];

const BIO_PARAGRAPHS = [
  "Kayeon Onyeka is a storyteller, spoken word artist, and social impact leader with over a decade of work spanning performance, youth development, research, and advocacy. Her practice is rooted in the conviction that storytelling is not a soft skill — it is a political act, a healing tool, and a blueprint for collective change.",
  "A British-Nigerian creative, Kayeon has performed at the Royal Festival Hall, Barbican Centre, and TEDx stages across Lagos, Accra, and London. Her work has been featured in The Guardian, BBC Africa, and Vogue Africa. She is a Mandela Washington Fellow, a British Council Cultural Connector, and a recipient of the Commonwealth Youth Award.",
  "As founder of The Narrators Programme, Kayeon has designed and delivered storytelling curricula to over 2,400 young people across Nigeria and the United Kingdom, working with schools, grassroots organisations, and government partners to make narrative literacy a cornerstone of civic education.",
  "She holds a BA in English Literature from the University of Exeter and an MSc in Social Policy from the London School of Economics. She is currently completing a creative nonfiction manuscript exploring the diasporic imagination and the politics of belonging.",
];

export function AboutBio() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
      <div className="grid lg:grid-cols-[1fr,1.65fr] gap-16 items-start">
        <FadeIn className="lg:sticky lg:top-24">
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&auto=format"
              alt="Kayeon Onyeka" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
        <div>
          <FadeIn>
            <Eyebrow>Professional Biography</Eyebrow>
            <h2 className="font-serif text-[38px] text-foreground mt-3 mb-8 leading-[1.1]">
              A decade at the intersection<br />of <em>art and change.</em>
            </h2>
          </FadeIn>
          {BIO_PARAGRAPHS.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <p className="font-sans text-foreground/70 text-base leading-relaxed mb-5">{p}</p>
            </FadeIn>
          ))}
          <FadeIn delay={0.5}>
            <div className="border-t border-border mt-6 pt-8 grid grid-cols-2 gap-y-6 gap-x-8">
              {CREDS.map(c => (
                <div key={c.k}>
                  <Eyebrow>{c.k}</Eyebrow>
                  <p className="font-sans text-sm text-foreground mt-1.5">{c.v}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
