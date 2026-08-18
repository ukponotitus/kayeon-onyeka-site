// app/contact/page.tsx

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-[#0D0608] min-h-screen pt-16 text-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Connect</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-[#FAF8F5] mt-4 leading-[0.96]">
            <em className="text-[#C5A882]">Contact</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-2xl">
          <p className="font-sans text-[#FAF8F5]/70 text-base leading-relaxed">
            Have a project, collaboration idea, or speaking enquiry? Kayeon would
            love to hear from you. Fill in the form below or reach out directly.
          </p>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-white/10" />
      <ContactForm />
    </div>
  );
}