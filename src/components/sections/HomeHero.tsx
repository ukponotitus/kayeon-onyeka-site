"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

export function HomeHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0D0608" }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/img/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
    background:
      "linear-gradient(180deg, rgba(13,6,8,0.85) 0%, rgba(13,6,8,0.25) 40%, rgba(13,6,8,0.85) 100%)", // Increased opacity at top/bottom
  }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start text-left px-6 md:px-12 md:mt-14 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-0"
        >
          <p className="font-sans text-[#FAF8F5]/80 text-xs sm:text-sm md:text-base tracking-[0.06em] leading-[1.8]">
            Storyteller
            <br />
            <span className="ml-4 sm:ml-6">Creative Practitioner</span>
            <br />
            <span className="ml-8 sm:ml-12">Social Impact Leader</span>
          </p>
        </motion.div>

        {/* "I TELL THE WHOLE STORY." — main headline */}
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.1,
    delay: 1.3,
    ease: [0.25, 0.1, 0.25, 1],
  }}
  style={{
    fontFamily: "var(--bodoni-font)",
    fontWeight: 400,
  }}
  className="text-[44px] sm:text-[64px] md:text-[80px] lg:text-[112px] text-[#FAF8F5] leading-[0.88] tracking-[-0.03em] mt-0"
>
          I TELL THE
          <br />
          <em className="text-[#FAF8F5] not-italic italic sm:pl-12 md:pl-80 text-[#FAF8F5]/95">
    WHOLE
  </em>
          <br />
            <span className="text-[#FAF8F5]/80 pl-4 sm:pl-16 md:pl-32">
    STORY.
  </span>
        </motion.h1>

        {/* <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 1.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onClick={() => setIsVideoOpen(true)}
          className="relative z-20 flex items-center gap-2 group cursor-pointer self-center -mt-3 md:-mt-6"
        >
<div className="relative w-40 h-24 md:w-[264px] md:h-[164px] overflow-hidden rounded-sm group-hover:border-[#FAF8F5]/30 transition-colors shadow-2xl">            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/img/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="flex mt-28 items-center gap-1 text-[#FAF8F5] text-md tracking-[0.15em] uppercase font-bold group-hover:text-[#FAF8F5] transition-colors">
            Watch Now
            <ArrowRight className="w-5 h-5" size={20} />
          </span>
        </motion.button> */}

        <motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.9,
    delay: 1.8,
    ease: [0.25, 0.1, 0.25, 1],
  }}
  onClick={() => setIsVideoOpen(true)}
  className="relative z-20 flex items-center gap-2 group cursor-pointer self-center -mt-3 md:-mt-6"
>
  <div className="relative w-40 h-24 md:w-[264px] md:h-[164px] overflow-hidden rounded-sm shadow-2xl">
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero-poster.jpg"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/img/hero-video.mp4" type="video/mp4" />
    </video>
  </div>

  <span className="flex items-center gap-1 text-[#FAF8F5] text-sm md:text-base tracking-[0.15em] uppercase font-bold whitespace-nowrap">
    Watch Now
    <ArrowRight className="w-5 h-5" />
  </span>
</motion.button>

        {/* Description text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 2.4 }}
          className="mt-10 md:mt-20 md:pt-10 w-[100%] max-w-[500px] m-auto flex flex-col items-center"
        >
          <p className="font-sans text-[#FAF8F5]/90 text-base md:text-lg leading-relaxed">
            <span className="text-[#C5A882] font-medium">
              An award-winning Creative &amp; Art Director, and Scriptwriter.
            </span>
          </p>
          <p className="font-sans text-[#C5A882]/70 text-sm md:text-base leading-relaxed mt-3">
            I shape ideas into stories that connect, blending concept and craft
            into work that lasts. I believe in great storytelling, strong
            visuals, and a damn good espresso.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10"
      >
        <div
          className="w-[1px] h-9 overflow-hidden"
          style={{ background: "rgba(250,248,245,0.15)" }}
        >
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.3,
            }}
            className="w-full h-full"
            style={{ background: "rgba(250,248,245,0.55)" }}
          />
        </div>
        <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#FAF8F5]/30">
          Scroll
        </p>
      </motion.div>

      {/* Video modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video"
            >
              <video
                src="/img/hero-video.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
