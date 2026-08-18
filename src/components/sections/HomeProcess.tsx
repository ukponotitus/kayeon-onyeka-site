"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "THE SPARK",
    description:
      "Every project starts with an insight — a moment of 'this could be something big.' It's about understanding culture, behavior, and what makes people stop and feel.",
  },
  {
    number: "02",
    title: "CONCEPT DEVELOPMENT",
    description:
      "Ideas need structure. I refine the narrative, build tension, and shape concepts that demand attention.",
  },
  {
    number: "03",
    title: "ART DIRECTION & VISUAL STRATEGY",
    description:
      "I craft the world around the idea — mood boards, 360° campaigns, AI-generated frames, film, and print. AI accelerates creativity, pushing boundaries in execution.",
  },
  {
    number: "04",
    title: "EXECUTION",
    description:
      "From script to production, precision is key. The last 10% makes all the difference — refining until it's unforgettable.",
  },
];

export function HomeProcess() {
  return (
    <section className="relative bg-[#0D0608] text-[#FAF8F5] overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 py-28 md:py-36 lg:py-40">

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mx-auto max-w-4xl text-center mb-24 md:mb-32"
        >
          <p
            className="
              font-sans
              text-[10px]
              md:text-[11px]
              tracking-[0.25em]
              uppercase
              text-[#FAF8F5]
              font-medium
              mb-5
            "
          >
            HOW I BRING IDEAS TO LIFE
          </p>

          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="
              text-[#FAF8F5]
              text-[32px]
              sm:text-[38px]
              md:text-[48px]
              lg:text-[56px]
              leading-[1.05]
              tracking-[-0.035em]
            "
          >
            A QUICK LOOK INTO MY CREATIVE PROCESS —
            <br className="hidden md:block" />
            BECAUSE A GREAT IDEA IS JUST THE BEGINNING
          </h2>
        </motion.div>

        {/* ========================================
            PROCESS
        ======================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Empty editorial space on the left */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Steps on the right */}
          <div className="lg:col-span-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="
                  border-t
                  border-white/25
                  py-8
                  md:py-10
                "
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8">

                  {/* Step number */}
                  <div className="col-span-3 md:col-span-3">
                    <span
                      className="
                        font-sans
                        text-[11px]
                        md:text-xs
                        font-semibold
                        tracking-wide
                        text-[#FAF8F5]
                        uppercase
                      "
                    >
                      STEP {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="col-span-9 md:col-span-9">

                    <h3
                      className="
                        font-sans
                        text-[13px]
                        md:text-sm
                        font-semibold
                        uppercase
                        text-[#FAF8F5]
                        tracking-[-0.01em]
                        mb-5
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        max-w-xl
                        font-sans
                        text-sm
                        md:text-[15px]
                        leading-[1.35]
                        text-[#FAF8F5]/80
                      "
                    >
                      {step.description}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom border */}
            <div className="border-t border-white/25" />
          </div>
        </div>
      </div>
    </section>
  );
}