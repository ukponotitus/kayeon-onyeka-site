"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "THE KETTLEBELL - DOMORRIS",
    description:
      "Not just a holiday ad, an emotional moment shared across the world. +247M views, +250K media interactions, 80% organic impressions.",
    tags: ["IDEA", "SCRIPT", "ART DIRECTION"],
    featured: "11X AWARDS",
    slug: "domorris",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: 2,
    title: "NOAH-DEUTSCHEBAHN",
    tagline: "If Noah built an ark today, it wouldn't be made of wood.",
    tags: ["CONCEPT", "SCRIPT", "ART DIRECTION"],
    featured: "4X AWARDS",
    slug: "noah-deutschebahn",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
  },
];

export function HomeSelectedWorks() {
  return (
    <section
      id="selected-works"
      className="relative bg-[#0D0608] text-[#FAF8F5] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16">
        {/* ========================================
            HEADER
        ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="pt-28 md:pt-36 lg:pt-40 pb-24 md:pb-32 text-center"
        >
          <h3
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="
            mx-auto
            max-w-[1100px]
                          text-[#FAF8F5]
                            text-[36px]
sm:text-[42px]
              md:text-[48px]
              lg:text-[60px]

            "
          >
            SELECTED WORKS — ADVERTISING
            <br />
            &amp; CONCEPTUAL WORK
          </h3>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-14
              max-w-[420px]
              font-sans
              text-sm
              md:text-base
              leading-[1.45]
              text-[#FAF8F5]/90
            "
          >
            A collection of award-winning campaigns,
            <br />
            scripts, and creative projects.
          </p>
        </motion.div>

        {/* ========================================
            CATEGORY TABS
        ======================================== */}
        <div className="border-b border-white/10">
          <div className="flex gap-8 md:gap-12 overflow-x-auto">
            <button
              className="
                relative
                pb-5
                font-sans
                text-[9px]
                md:text-[10px]
                tracking-[0.22em]
                uppercase
                text-[#C5A882]
                whitespace-nowrap
              "
            >
              Award-Winning Ad Campaigns
              <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#C5A882]" />
            </button>

            <button
              className="
                pb-5
                font-sans
                text-[9px]
                md:text-[10px]
                tracking-[0.22em]
                uppercase
                text-[#FAF8F5]/35
                hover:text-[#FAF8F5]
                transition-colors
                whitespace-nowrap
              "
            >
              Conceptual Work
            </button>
          </div>
        </div>

        {/* ========================================
            PROJECTS
        ======================================== */}
        <div className="mt-12 md:mt-16">
          {projects.map((project, index) => (
          <motion.article
  key={project.id}
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: index * 0.1,
    ease: [0.25, 0.1, 0.25, 1],
  }}
  className="border-t border-white/10 py-12 md:py-16 lg:py-20"
>
  {/* Project Image */}
  <div className="relative w-full aspect-[3/2] md:aspect-[16/8] overflow-hidden mb-10 md:mb-14">
    <img
      src={project.image}
      alt={project.title}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        ease-out
        hover:scale-[1.03]
      "
    />

    {/* Image overlay */}
    <div className="absolute inset-0 bg-black/10" />

    {/* Project number / category */}
    <div className="absolute top-5 left-5 md:top-8 md:left-8">
      <p className="font-sans text-xs md:text-sm font-semibold tracking-wide uppercase text-white">
        ({index + 1}) Award-Winning
        <br />
        Ad Campaigns
      </p>
    </div>
  </div>

  {/* Project Information */}
  <div className="grid md:grid-cols-5 gap-8 md:gap-12">
    
    {/* Left side */}
    <div className="md:col-span-3">
      <h3
        style={{
          fontFamily: "var(--bodoni-font)",
          fontWeight: 400,
        }}
        className="
          text-[#FAF8F5]
          text-[28px]
          sm:text-[34px]
          md:text-[48px]
          lg:text-[56px]
          leading-[0.95]
          tracking-[-0.025em]
        "
      >
        {project.title}
      </h3>

      {project.tagline && (
        <p
          style={{
            fontFamily: "var(--bodoni-font)",
            fontWeight: 400,
          }}
          className="
            mt-5
            text-lg
            md:text-xl
            text-[#C5A882]
            leading-[1.2]
            italic
          "
        >
          {project.tagline}
        </p>
      )}

      {project.description && (
        <p
          className="
            mt-5
            max-w-xl
            font-sans
            text-sm
            md:text-base
            leading-[1.6]
            text-[#FAF8F5]/55
          "
        >
          {project.description}
        </p>
      )}
    </div>

    {/* Right side */}
    <div
      className="
        md:col-span-2
        flex
        flex-col
        items-start
        md:items-end
        text-left
        md:text-right
      "
    >
      {/* Tags */}
      <div className="flex flex-wrap justify-start md:justify-end gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-[#C5A882]/25
              px-3
              py-1.5
              font-sans
              text-[8px]
              md:text-[9px]
              tracking-[0.15em]
              uppercase
              text-[#C5A882]
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Awards */}
      <div className="mt-8">
        <span
          className="
            block
            font-sans
            text-[9px]
            tracking-[0.18em]
            uppercase
            text-[#FAF8F5]/35
          "
        >
          Featured On
        </span>

        <span
          style={{
            fontFamily: "var(--bodoni-font)",
            fontWeight: 400,
          }}
          className="
            block
            mt-1
            text-xl
            md:text-2xl
            text-[#FAF8F5]
          "
        >
          ({project.featured})
        </span>
      </div>

      {/* View Project */}
      <Link
        href={`/work/${project.slug}`}
        className="
          group
          mt-8
          flex
          items-center
          gap-2
          font-sans
          text-[9px]
          tracking-[0.22em]
          uppercase
          text-[#C5A882]
        "
      >
        <span>View Project</span>

        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  </div>
</motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
