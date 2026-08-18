"use client";

import { motion } from "motion/react";

export function HomeStats() {
  return (
    <section className="relative bg-[#0D0608] text-[#FAF8F5] overflow-hidden">
      {/* =====================================================
          MOBILE: Stacked flow layout (below lg)
      ===================================================== */}
      <div className="lg:hidden px-6 py-24 md:py-32">
        {/* 8 YEARS OF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-[180px] h-[220px] md:w-[240px] md:h-[290px] overflow-hidden mb-6 md:mb-8">
            <img
              src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=85"
              alt="Creative storytelling"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
            className="text-[48px] sm:text-[64px] md:text-[80px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
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
          className="mt-12 md:mt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
            <div className="relative w-[200px] h-[170px] md:w-[280px] md:h-[230px] overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85"
                alt="Creative campaign production"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
            <h2
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
                textShadow: "0 2px 12px rgba(0,0,0,0.4)",
              }}
              className="text-right sm:text-left text-[52px] sm:text-[64px] md:text-[80px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
            >
              SHAPING
              <br />
              STORIES
            </h2>
          </div>
        </motion.div>

        {/* CRAFTING CAMPAIGNS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="mt-12 md:mt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
            <div className="relative w-[180px] h-[220px] md:w-[260px] md:h-[310px] overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85"
                alt="Film and creative production"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
            <h2
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
                textShadow: "0 2px 12px rgba(0,0,0,0.4)",
              }}
              className="text-[52px] sm:text-[64px] md:text-[80px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
            >
              CRAFTING
              <br />
              CAMPAIGNS,
            </h2>
          </div>
        </motion.div>

        {/* AND BUILDING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="mt-12 md:mt-16"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
            className="text-[52px] sm:text-[64px] md:text-[80px] leading-[0.78] tracking-[-0.055em] text-[#FAF8F5]/35"
          >
            AND BUILDING
          </h2>
        </motion.div>
      </div>

      {/* =====================================================
          DESKTOP: Absolute editorial layout (lg and above)
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
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=85"
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
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85"
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
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85"
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
