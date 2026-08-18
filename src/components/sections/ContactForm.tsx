// components/sections/ContactForm.tsx

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
        {/* Form */}
        <FadeIn className="lg:col-span-3">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="font-serif text-3xl text-[#FAF8F5] mt-2 mb-8">
            Send a message
          </h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#1a1113] border border-white/10 px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none focus:border-[#C5A882] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1a1113] border border-white/10 px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none focus:border-[#C5A882] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50 block mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-[#1a1113] border border-white/10 px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none focus:border-[#C5A882] transition-colors"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50 block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-[#1a1113] border border-white/10 px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none focus:border-[#C5A882] transition-colors resize-none"
                placeholder="Tell me about your project, event, or idea..."
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-3 px-8 py-3.5 bg-[#6B1E2E] text-[#FAF8F5] font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#8B2638] transition-colors duration-300"
            >
              Send Message
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </FadeIn>

        {/* Sidebar – contact info */}
        <FadeIn delay={0.2} className="lg:col-span-2">
          <div className="bg-[#1a1113] border border-white/10 p-8 lg:p-10 h-full">
            <Eyebrow>Contact Details</Eyebrow>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-[#C5A882] shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50">Email</p>
                  <a href="mailto:hello@kayeononyeka.com" className="font-sans text-sm text-[#FAF8F5] hover:text-[#C5A882] transition-colors">
                    hello@kayeononyeka.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#C5A882] shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50">Location</p>
                  <p className="font-sans text-sm text-[#FAF8F5]/80">London · Lagos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={16} className="text-[#C5A882] shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FAF8F5]/50">Availability</p>
                  <p className="font-sans text-sm text-[#FAF8F5]/80">Responses within 48 hours</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#FAF8F5]/40">
                For urgent enquiries
              </p>
              <p className="font-sans text-sm text-[#FAF8F5]/60 mt-1">
                Please use the subject line "URGENT" and we'll prioritise your message.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}