"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section
      className="
        relative
        min-h-[65vh]
        lg:min-h-[70vh]
        flex
        items-center
        overflow-hidden
        bg-[#0D0608]
        text-[#FAF8F5]
      "
    >
      {/* ========================================
          BACKGROUND WORD
      ======================================== */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          select-none
          overflow-hidden
        "
      >
        <span
          style={{
            fontFamily: "var(--bodoni-font)",
            fontWeight: 400,
          }}
          className="
            whitespace-nowrap
            text-[180px]
            sm:text-[240px]
            md:text-[320px]
            lg:text-[400px]
            leading-none
            tracking-[-0.06em]
            text-[#FAF8F5]/[0.025]
          "
        >
          Story
        </span>
      </div>

      {/* ========================================
          CONTENT
      ======================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1220px]
          mx-auto
          px-6
          md:px-10
          lg:px-16
          py-24
          lg:py-32
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-12
            lg:gap-16
          "
        >
          {/* ========================================
              TEXT
          ======================================== */}

          <FadeIn>
            <div className="max-w-[720px]">
              <Eyebrow light>Ready to collaborate?</Eyebrow>

              <h2
                style={{
                  fontFamily: "var(--bodoni-font)",
                  fontWeight: 400,
                }}
                className="
                  mt-5
                  text-[#FAF8F5]
                  text-[40px]
                  sm:text-[48px]
                  md:text-[56px]
                  lg:text-[58px]
                  xl:text-[62px]
                  leading-[0.98]
                  tracking-[-0.035em]
                "
              >
                Bring Kayeon to your
                <br />
                <em>next event or initiative.</em>
              </h2>
            </div>
          </FadeIn>

          {/* ========================================
              BUTTONS
          ======================================== */}

          <FadeIn
            delay={0.2}
            className="
              shrink-0
              flex
              flex-col
              sm:flex-row
              lg:flex-col
              xl:flex-row
              gap-4
            "
          >
            <Link
              href="/speaking"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                min-w-[195px]
                px-7
                py-3.5
                bg-[#6B1E2E]
                text-[#FAF8F5]
                font-sans
                text-[10px]
                tracking-[0.2em]
                uppercase
                transition-all
                duration-300
                hover:bg-[#8B2638]
              "
            >
              Book a Speaker

              <ArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/contact"
              className="
                flex
                items-center
                justify-center
                min-w-[155px]
                px-7
                py-3.5
                border
                border-[#FAF8F5]/25
                text-[#FAF8F5]/70
                font-sans
                text-[10px]
                tracking-[0.2em]
                uppercase
                transition-all
                duration-300
                hover:border-[#FAF8F5]/60
                hover:text-[#FAF8F5]
              "
            >
              Get In Touch
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}