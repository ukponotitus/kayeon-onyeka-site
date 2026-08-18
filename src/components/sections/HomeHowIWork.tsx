"use client";

import { motion } from "motion/react";

export function HomeHowIWork() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0D0608]
        text-[#FAF8F5]
        border-t
        border-white/5
      "
    >
      {/* =====================================================
          MOBILE: Stacked flow layout (below lg)
      ===================================================== */}
      <div className="lg:hidden">
        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full h-[60vh] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
            alt="Creative portrait"
            className="w-full h-full object-cover object-center grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Text overlay area */}
        <div className="relative px-6 py-12 md:py-16">
          {/* HOW I WORK label + statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-sans text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#FAF8F5] mb-5">
              HOW I WORK
            </p>

            <h2
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
              }}
              className="text-[24px] md:text-[31px] leading-[1.05] tracking-[-0.025em] text-[#FAF8F5]/90"
            >
              Every project I take on is a chance to push a boundary, find a new
              angle, and create something that refuses to be ignored.
            </h2>

            <p className="mt-7 font-sans text-[13px] md:text-[14px] leading-[1.45] text-[#FAF8F5]/45">
              Now, I blend creativity with AI-driven art direction, helping
              brands and entrepreneurs achieve high-quality, striking visuals
              that stand out in a crowded world.
            </p>
          </motion.div>

          {/* Secondary image — overlapping the main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative -mt-24 ml-auto w-[55%] h-[220px] md:h-[280px] z-10 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
              alt="Creative collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12"
          >
            <p
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
              }}
              className="text-[28px] md:text-[36px] leading-[0.95] tracking-[-0.03em] text-[#FAF8F5]/20"
            >
              Creative thinking.
              <br />
              Strong stories.
              <br />
              Meaningful work.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP: Absolute editorial layout (lg and above)
      ===================================================== */}
      <div className="hidden lg:block relative min-h-[115vh] xl:min-h-[120vh]">

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-0 left-0 w-[62%] xl:w-[61%] h-[78vh] xl:h-[80vh] z-10 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
            alt="Creative portrait"
            className="w-full h-full object-cover object-center grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Secondary image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-[42%] left-[50%] w-[30%] xl:w-[29%] h-[390px] xl:h-[430px] z-20 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
            alt="Creative collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Content container */}
        <div className="relative z-30 mx-auto w-full max-w-[1600px] min-h-[115vh] xl:min-h-[120vh] px-10 xl:px-16">
          {/* HOW I WORK text block */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-[7%] right-[8%] xl:right-[10%] w-[350px] xl:w-[390px]"
          >
            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#FAF8F5] mb-5">
              HOW I WORK
            </p>

            <h2
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
              }}
              className="text-[31px] xl:text-[34px] leading-[1.05] tracking-[-0.025em] text-[#FAF8F5]/90"
            >
              Every project I take on is a chance to push a boundary, find a new
              angle, and create something that refuses to be ignored.
            </h2>

            <p className="mt-7 font-sans text-[14px] leading-[1.45] text-[#FAF8F5]/45">
              Now, I blend creativity with AI-driven art direction, helping
              brands and entrepreneurs achieve high-quality, striking visuals
              that stand out in a crowded world.
            </p>
          </motion.div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-[7%] left-10 xl:left-16 max-w-[400px]"
          >
            <p
              style={{
                fontFamily: "var(--bodoni-font)",
                fontWeight: 400,
              }}
              className="text-[36px] xl:text-[42px] leading-[0.95] tracking-[-0.03em] text-[#FAF8F5]/20"
            >
              Creative thinking.
              <br />
              Strong stories.
              <br />
              Meaningful work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
