"use client";

import { motion } from "motion/react";

export function HomeStats() {
  return (
    <section className="relative bg-[#0D0608] text-[#FAF8F5] overflow-hidden">
      {/* =====================================================
          MOBILE: Full-screen "Hero Slices" layout (below lg)
      ===================================================== */}
      <div className="lg:hidden flex flex-col">
        
        {/* Slice 1: 8 YEARS OF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[85vh] w-full overflow-hidden"
        >
          <img
            src="/img/keyoen5.jpeg"
            alt="Creative storytelling"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70 grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0608]/90 via-[#0D0608]/20 to-transparent" />
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            }}
            className="absolute bottom-8 right-6 sm:bottom-12 sm:right-10 text-[48px] sm:text-[72px] md:text-[100px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/85 text-right"
          >
            8 YEARS OF
          </h2>
        </motion.div>

        {/* Slice 2: SHAPING STORIES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[85vh] w-full overflow-hidden"
        >
          <img
            src="/img/kayeon-2.jpg"
            alt="Creative campaign production"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0608]/80 via-[#0D0608]/20 to-transparent" />
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            }}
            className="absolute top-8 left-6 sm:top-12 sm:left-10 text-[48px] sm:text-[72px] md:text-[100px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/85 text-left"
          >
            SHAPING
            <br />
            STORIES
          </h2>
        </motion.div>

        {/* Slice 3: CRAFTING CAMPAIGNS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[85vh] w-full overflow-hidden"
        >
          <img
            src="/img/keyoen5.jpeg"
            alt="Film and creative production"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0608]/90 via-[#0D0608]/20 to-transparent" />
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            }}
            className="absolute bottom-8 right-6 sm:bottom-12 sm:right-10 text-[48px] sm:text-[72px] md:text-[100px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/85 text-right"
          >
            CRAFTING
            <br />
            CAMPAIGNS,
          </h2>
        </motion.div>

        {/* Slice 4: AND BUILDING - Just pure typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[50vh] w-full flex items-center justify-center py-16"
        >
          <div className="bg-[#0D0608] w-full h-full flex items-center justify-center">
            <h2
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
                textShadow: "0 4px 20px rgba(0,0,0,0.6)",
              }}
              className="text-center text-[48px] sm:text-[72px] md:text-[100px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
            >
              AND BUILDING
            </h2>
          </div>
        </motion.div>

      </div>

      {/* =====================================================
          DESKTOP: Absolute editorial layout (lg and above)
          (This remains completely unchanged - keep your existing desktop layout below!)
      ===================================================== */}
      <div className="hidden lg:block relative min-h-[150vh] xl:min-h-[160vh]">
        {/* IMAGE 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-[46%] w-[280px] h-[340px] xl:w-[320px] xl:h-[390px] z-10 overflow-hidden"
        >
          <img
            src="/img/kayeon-3.jpg"
            alt="Creative storytelling"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* IMAGE 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[43%] left-0 w-[380px] h-[290px] xl:w-[430px] xl:h-[330px] z-10 overflow-hidden"
        >
          <img
            src="/img/kayeon-2.jpg"
            alt="Creative campaign production"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        {/* IMAGE 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[72%] right-[8%] w-[300px] h-[360px] xl:w-[350px] xl:h-[420px] z-10 overflow-hidden"
        >
          <img
            src="/img/kayeon-1.jpg"
            alt="Film and creative production"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        {/* 8 YEARS OF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-[8%] right-[3%] xl:right-[4%] z-30 pointer-events-none"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
            className="whitespace-nowrap text-[140px] xl:text-[180px] 2xl:text-[210px] leading-[0.75] tracking-[-0.055em] text-[#FAF8F5]/35"
          >
            8 YEARS OF
          </h2>
        </motion.div>

        {/* SHAPING STORIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="absolute top-[22%] right-[2%] xl:right-[4%] z-30 pointer-events-none"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
            className="text-right text-[145px] xl:text-[185px] 2xl:text-[220px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
          >
            SHAPING
            <br />
            STORIES
          </h2>
        </motion.div>

        {/* CRAFTING CAMPAIGNS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="absolute top-[38%] left-[2%] z-30 pointer-events-none"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
            className="text-[145px] xl:text-[185px] 2xl:text-[220px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
          >
            CRAFTING
            <br />
            CAMPAIGNS,
          </h2>
        </motion.div>

        {/* AND BUILDING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="absolute top-[58%] left-[31%] xl:left-[32%] z-30 pointer-events-none"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
            className="text-[145px] xl:text-[185px] 2xl:text-[220px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
          >
            AND BUILDING
          </h2>
        </motion.div>
      </div>
    </section>
  );
}