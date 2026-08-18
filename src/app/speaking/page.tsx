// app/speaking/page.tsx

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpeakingTopics } from "@/components/sections/SpeakingTopics";
import { SpeakingEngagements } from "@/components/sections/SpeakingEngagements";
import { SpeakingBooking } from "@/components/sections/SpeakingBooking";

export default function SpeakingPage() {
  return (
    <div className="bg-[#0D0608] min-h-screen pt-16 text-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Public Speaking</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-[#FAF8F5] mt-4 leading-[0.96]">
            <em className="text-[#C5A882]">Speaking</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-2xl">
          <p className="font-sans text-[#FAF8F5]/70 text-base leading-relaxed">
            Kayeon speaks at conferences, festivals, universities, and cultural
            institutions on storytelling, identity, youth development, and creative
            practice as social change. Her talks inspire audiences to find their
            voice and use it for impact.
          </p>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-white/10" />

<div className="  ">
     <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className=""
      >
        <source src="/img/kayeon1.mp4" type="video/mp4" />
      </video>
  </div>

      <div className="w-full h-[1px] bg-white/10" />
      <SpeakingTopics />
      <SpeakingEngagements />
      <SpeakingBooking />
    </div>
  );
}