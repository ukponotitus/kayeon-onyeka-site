"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown, ArrowRight, Play, Volume2 } from "lucide-react";

type Moment = {
  type: "image" | "video";
  src: string;
  label: string;
  poster?: string;
  fit?: "cover" | "contain";
};

const moments: Moment[] = [
  { type: "image", src: "/img/kayeon-4.jpg", label: "Shared practice · Lagos" },
  { type: "video", src: "/img/kayeon1.mp4", label: "Moving image · Your film" },
  { type: "image", src: "/img/kayeon-5.jpg", label: "Voice in the room" },
  { type: "video", src: "/img/keyoan2.mp4", label: "Film note · Replace me" },
  { type: "image", src: "/img/kayeon-2.jpg", label: "A room in London", fit: "contain" },
  { type: "video", src: "/img/keyeon3.mp4", label: "Field note · Replace me" },
  { type: "image", src: "/img/keyoan4.jpeg", label: "A room in London", fit: "contain" },
];

const milestones = [
  { year: "2016", event: "First spoken word performance at Lagos International Poetry Festival" },
  { year: "2018", event: "Youth advocacy fellowship with the British Council" },
  { year: "2020", event: "Published debut poetry collection ‘Echoes of a New Dawn’" },
  { year: "2022", event: "Spoke at the UN General Assembly on youth and climate action" },
  { year: "2024", event: "Launched the Storytelling for Change Initiative" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const momentLayout = [
  "md:col-span-3 md:col-start-2",
  "md:col-span-4 md:mt-12",
  "md:col-span-3 md:mt-24",
  "md:col-span-4 md:col-start-3 md:mt-4",
  "md:col-span-3 md:col-start-8 md:mt-10",
  "md:col-span-4 md:mt-20",
  "md:col-span-4 md:col-start-6 md:mt-6",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0D0608] text-[#FAF8F5]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden px-6 pb-12 pt-28 md:min-h-[720px] md:px-12 md:pb-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/kayeon-1.jpg"
            alt="Kayeon Onyeka"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#0D0608]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0608] via-[#0D0608]/55 to-[#0D0608]/5" />
        </div>

        <div className="mx-auto w-full max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-5 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.28em] text-[#C5A882]"
          >
            <span className="h-px w-9 bg-[#C5A882]" />
            The work behind the words
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl font-serif text-6xl leading-[0.94] tracking-[-0.04em] text-[#FAF8F5] md:text-8xl lg:text-[7.5rem]"
          >
            About <em className="font-normal text-[#C5A882]">Kayeon</em>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#FAF8F5]/80 md:text-lg">
              Storyteller <span className="mx-2 text-[#6B1E2E]">·</span> Creative Practitioner <span className="mx-2 text-[#6B1E2E]">·</span> Social Impact Leader
            </p>
            <a
              href="#biography"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#C5A882]/45 pb-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#C5A882] transition-colors hover:border-[#C5A882] hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A882]"
            >
              Explore the story
              <ArrowDown size={13} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section id="biography" className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.75 }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#C5A882]">Biography</span>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] text-[#FAF8F5] md:text-6xl">
              Art as advocacy.
              <br />
              <em className="font-normal text-[#C5A882]">Story as strategy.</em>
            </h2>
            <div className="mt-8 h-px w-20 bg-[#6B1E2E]" />
            <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-[#FAF8F5]/55 md:text-base">
              A practice shaped by performance, community, and the belief that a well-told story can move people from attention to action.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end"
          >
            <div className="space-y-6">
              <p className="font-sans text-base leading-relaxed text-[#FAF8F5]/85 md:text-lg">
                Kayeon Onyeka is a storyteller, spoken word artist, and social impact leader whose work has taken her from stages in Lagos to fellowship programs in London, from grassroots youth projects to international policy forums.
              </p>
              <p className="font-sans text-sm leading-relaxed text-[#FAF8F5]/60 md:text-base">
                She believes the stories we choose to tell — and the ones we dare to withhold — are among the most powerful political acts available to us. Her practice lives at the intersection of art, community, and systemic change.
              </p>
              <a
                href="#journey"
                className="group inline-flex items-center gap-2 border-b border-[#C5A882]/35 pb-1 font-sans text-[10px] uppercase tracking-[0.22em] text-[#C5A882] transition-colors hover:border-[#C5A882] hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A882]"
              >
                Follow the journey
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#160A0D]">
              <Image
                src="/img/kayeon-3.jpg"
                alt="Kayeon Onyeka performing on stage in Lagos"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0608]/70 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-[#FAF8F5]/30 bg-[#0D0608]/15 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#FAF8F5]/90 backdrop-blur-sm">
                On stage · Lagos
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Moments: image-led moving contact sheet */}
      <section id="moments" className="mx-auto max-w-[1320px] px-6 pb-24 md:px-12 md:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.75 }}
          className="mb-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#C5A882]">In the field</span>
            <h2 className="mt-3 font-serif text-4xl leading-none text-[#FAF8F5] md:text-5xl">Moments from the journey</h2>
          </div>
          <p className="max-w-xs font-sans text-sm leading-relaxed text-[#FAF8F5]/50 md:text-right">
            Stills and moving images from the rooms where performance, learning, and collective action meet.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-12">
          {moments.map((moment, index) => (
            <motion.div
              key={`${moment.type}-${moment.src}-${index}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#160A0D] ${momentLayout[index]}`}
            >
              {moment.type === "video" ? (
                <>
                  <video
                    src={moment.src}
                    poster={moment.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                    // controls
                    preload="metadata"
                    aria-label={moment.label}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#FAF8F5]/25 bg-[#0D0608]/30 px-3 py-2 font-sans text-[9px] uppercase tracking-[0.2em] text-[#FAF8F5]/85 backdrop-blur-md">
                    <Play size={10} fill="currentColor" /> Film
                  </span>
                </>
              ) : (
                <>
    {moment.fit === "contain" && (
      <Image
        src={moment.src}
        alt=""
        fill
        aria-hidden
        className="scale-110 object-cover object-center opacity-40 blur-2xl"
      />
    )}
    <Image
      src={moment.src}
      alt={moment.label}
      fill
      className={`transition-transform duration-700 group-hover:scale-105 ${
        moment.fit === "contain"
          ? "object-contain"
          : "object-cover object-top"
      }`}
    />
  </>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0608]/80 via-transparent to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#FAF8F5]/90">{moment.label}</span>
                {moment.type === "video" && <Volume2 size={14} className="text-[#C5A882]" />}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="journey" className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            transition={{ duration: 0.75 }}
            className="mb-14 max-w-2xl"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#C5A882]">Journey</span>
            <h2 className="mt-3 font-serif text-4xl leading-none text-[#FAF8F5] md:text-5xl">Key milestones</h2>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#FAF8F5]/55 md:text-base">
              A few markers in an ongoing practice of using story to make room for possibility.
            </p>
          </motion.div>

          <div className="relative ml-2 border-l border-[#6B1E2E] md:ml-4">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative grid gap-2 pb-10 pl-8 last:pb-0 md:grid-cols-[130px_1fr] md:gap-10 md:pl-10"
              >
                <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-[#C5A882] ring-4 ring-[#0D0608]" />
                <span className="font-serif text-3xl leading-none text-[#C5A882]">{item.year}</span>
                <p className="max-w-2xl font-sans text-sm leading-relaxed text-[#FAF8F5]/70 md:text-base">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
