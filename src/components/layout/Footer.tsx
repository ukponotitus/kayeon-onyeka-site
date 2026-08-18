"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0608] text-[#FAF8F5]">
      {/* =====================================================
          MOBILE: Stacked flow layout (below md)
      ===================================================== */}
      <div className="md:hidden px-6 pt-20 pb-6 flex flex-col min-h-[700px]">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-30 text-center"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="text-[#FAF8F5] text-[48px] sm:text-[60px] leading-[0.82] tracking-[-0.055em]"
          >
            LET&apos;S CREATE
            <br />
            PROJECTS THAT
            <br />
            STAND OUT.
          </h2>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-20 mx-auto mt-10 w-[180px] h-[230px] sm:w-[200px] sm:h-[260px] overflow-hidden"
        >
          <img
            src="/img/kayeon-4.jpg"
            alt="Kayeon Onyeka"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Contact intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-30 mx-auto mt-10 max-w-[340px] text-center"
        >
          <p className="font-sans text-base leading-[1.25] text-[#FAF8F5]">
            Reach out for collaborations, commissions,
            <br />
            or just to connect.
          </p>
        </motion.div>

        {/* Email + Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30 mt-8 text-center"
        >
          <a
            href="mailto:hello@kayeononyeka.com"
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="block text-[22px] sm:text-[26px] leading-none tracking-[-0.035em] text-[#FAF8F5] hover:text-[#C5A882] transition-colors break-all"
          >
            HELLO@KAYEONONYEKA.COM
          </a>

          <a
            href="tel:+2340000000000"
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="mt-4 block text-[20px] sm:text-[24px] leading-none tracking-[-0.025em] text-[#FAF8F5]/90 hover:text-[#C5A882] transition-colors"
          >
            +234 000 000 0000
          </a>
        </motion.div>

        {/* Spacer to push bottom content down */}
        <div className="flex-1" />

        {/* Social links */}
        <div className="relative z-30 flex items-center justify-between mt-12">
          <Link href="#" className="font-sans text-[10px] font-semibold tracking-[0.04em] uppercase text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
            Instagram
          </Link>
          <Link href="#" className="font-sans text-[10px] font-semibold tracking-[0.04em] uppercase text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="font-sans text-[10px] font-semibold tracking-[0.04em] uppercase text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
            YouTube
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="relative z-30 border-t border-white/25 pt-4 mt-4">
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[9px] font-semibold uppercase text-[#FAF8F5]/45">
              © 2026 KAYEON ONYEKA — ALL RIGHTS RESERVED
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="font-sans text-[9px] font-semibold uppercase text-[#FAF8F5]/45 hover:text-[#FAF8F5] transition-colors">
                PRIVACY POLICY
              </Link>
              <p className="font-sans text-[9px] font-semibold uppercase text-[#FAF8F5]/45">
                WEBSITE DESIGN
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP: Original editorial layout (md and above)
      ===================================================== */}
      <div className="hidden md:block relative min-h-[1000px] px-10 lg:px-12 pt-28">

        {/* LARGE EDITORIAL HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-30 mx-auto max-w-[2250px] text-center"
        >
          <h2
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="
              text-[#FAF8F5]
              text-[110px]
              lg:text-[135px]
              xl:text-[155px]
              leading-[0.78]
              tracking-[-0.055em]
            "
          >
            LET&apos;S CREATE
            <br />
            <span className="lg:pl-[33rem]">PROJECTS THAT</span>
            <br />
            STAND OUT.
          </h2>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            absolute
            z-20
            top-[280px]
            left-[17%]
            w-[290px]
            h-[370px]
            lg:left-[17%]
            overflow-hidden
          "
        >
          <img
            src="/img/kayeon-4.jpg"
            alt="Kayeon Onyeka"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* CONTACT INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-30 mx-auto mt-20 max-w-[420px] text-center"
        >
          <p className="font-sans text-lg leading-[1.25] text-[#FAF8F5]">
            Reach out for collaborations, commissions,
            <br />
            or just to connect.
          </p>
        </motion.div>

        {/* EMAIL + PHONE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30 mt-16 text-center"
        >
          <a
            href="mailto:hello@kayeononyeka.com"
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="
              block
              text-[46px]
              lg:text-[52px]
              leading-none
              tracking-[-0.035em]
              text-[#FAF8F5]
              hover:text-[#C5A882]
              transition-colors
            "
          >
            HELLO@KAYEONONYEKA.COM
          </a>

          <a
            href="tel:+2340000000000"
            style={{
              fontFamily: "var(--bodoni-font)",
              fontWeight: 400,
            }}
            className="
              mt-5
              block
              text-[40px]
              lg:text-[46px]
              leading-none
              tracking-[-0.025em]
              text-[#FAF8F5]/90
              hover:text-[#C5A882]
              transition-colors
            "
          >
            +234 000 000 0000
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <div
          className="
            absolute
            bottom-[150px]
            left-10
            right-10
            lg:left-12
            lg:right-12
            z-30
            flex
            items-center
            justify-between
          "
        >
          <Link href="#" className="font-sans text-[11px] font-semibold tracking-[0.04em] uppercase text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
            Instagram
          </Link>
          <Link href="#" className="font-sans text-[11px] font-semibold tracking-[0.04em] uppercase text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="font-sans text-[11px] font-semibold tracking-[0.04em] uppercase text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
            YouTube
          </Link>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            absolute
            bottom-6
            left-10
            right-10
            lg:left-12
            lg:right-12
            border-t
            border-white/25
            pt-4
          "
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="font-sans text-[10px] font-semibold uppercase text-[#FAF8F5]/45">
              © 2026 KAYEON ONYEKA — ALL RIGHTS RESERVED
            </p>
            <Link href="#" className="font-sans text-[10px] font-semibold uppercase text-[#FAF8F5]/45 hover:text-[#FAF8F5] transition-colors">
              PRIVACY POLICY
            </Link>
            <p className="font-sans text-[10px] font-semibold uppercase text-[#FAF8F5]/45">
              WEBSITE DESIGN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
