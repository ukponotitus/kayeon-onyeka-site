"use client";

import { motion } from "motion/react";

const awards = [
  { name: "CLIO", count: "7" },
  { name: "AWARDS", count: "ON" },
  { name: "SPOTLIGHT", count: "" },
];

const clients = [
  "FREENOW",
  "SHARENOW",
  "ERGO",
  "DURACELL",
  "SHARENOW",
];

export function HomeAwardsClients() {
  return (
    <section className="bg-[#0D0608] py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C5A882] mb-6">
            AWARDS
          </p>
          <div className="flex flex-wrap items-end gap-6 md:gap-10">
            {awards.map((item, index) => (
              <div key={index} className="flex items-end gap-2">
                <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FAF8F5] leading-[1] tracking-[-0.02em]">
                  {item.count}
                </span>
                <span className="font-serif text-xl md:text-2xl text-[#C5A882] leading-[1.2]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C5A882] mb-6">
            CLIENTS
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {clients.map((client, index) => (
              <span
                key={index}
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#FAF8F5]/80 tracking-wide"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}