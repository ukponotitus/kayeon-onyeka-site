import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatePresence } from "motion/react";
import {
  Menu, X, ArrowRight, Mail,
  Instagram, Twitter, Linkedin, Youtube,
} from "lucide-react";

type PageId =
  | "home" | "about" | "storytelling" | "social-impact"
  | "speaking" | "media" | "resources" | "contact";

const NAV_ITEMS: { label: string; page: PageId }[] = [
  { label: "About", page: "about" },
  { label: "Storytelling", page: "storytelling" },
  { label: "Social Impact", page: "social-impact" },
  { label: "Speaking", page: "speaking" },
  { label: "Media", page: "media" },
  { label: "Resources", page: "resources" },
  { label: "Contact", page: "contact" },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function FadeIn({
  children, delay = 0, className = "", y = 24,
}: {
  children: React.ReactNode; delay?: number; className?: string; y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-sans text-[10px] tracking-[0.25em] uppercase ${light ? "text-[#C5A882]" : "text-accent"}`}>
      {children}
    </p>
  );
}

function Rule({ light = false }: { light?: boolean }) {
  return <div className={`w-10 h-[1px] ${light ? "bg-[#6B1E2E]" : "bg-accent"} mt-5`} />;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav({ current, go }: { current: PageId; go: (p: PageId) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onHome = current === "home";
  const bg = scrolled || !onHome
    ? "bg-background/95 backdrop-blur border-b border-border"
    : "bg-transparent border-b border-transparent";
  const fg = scrolled || !onHome ? "text-foreground" : "text-[#FAF8F5]";

  const handle = (p: PageId) => { go(p); setOpen(false); };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <button onClick={() => handle("home")}
          className={`font-serif text-lg tracking-wide ${fg} hover:text-accent transition-colors duration-300`}>
          Kayeon Onyeka
        </button>
        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map(n => (
            <button key={n.page} onClick={() => handle(n.page)}
              className={`font-sans text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                current === n.page ? "text-accent" : `${fg} hover:text-accent`
              }`}>
              {n.label}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className={`lg:hidden ${fg}`} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-7 flex flex-col gap-5">
              {NAV_ITEMS.map(n => (
                <button key={n.page} onClick={() => handle(n.page)}
                  className={`text-left font-sans text-[10px] tracking-[0.22em] uppercase ${
                    current === n.page ? "text-accent" : "text-foreground hover:text-accent"
                  } transition-colors`}>
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Home: Signature Hero ──────────────────────────────────────────────────────

const FRAGMENTS = [
  { t: "in the margin", sz: "text-[110px]", top: "6%",  left: "-4%",  op: 0.04, rot: "-2deg" },
  { t: "between",       sz: "text-[75px]",  top: "17%", right: "3%",  op: 0.05, rot: "1.5deg" },
  { t: "silence",       sz: "text-[190px]", top: "34%", left: "18%",  op: 0.028,rot: "0deg" },
  { t: "and everything",sz: "text-[85px]",  top: "54%", left: "-3%",  op: 0.04, rot: "-1deg" },
  { t: "unsaid",        sz: "text-[155px]", top: "64%", right: "-1%", op: 0.035,rot: "2deg" },
  { t: "I build from",  sz: "text-[65px]",  bottom:"16%",left: "14%", op: 0.045,rot: "0deg" },
  { t: "borrowed light",sz: "text-[105px]", bottom:"4%", right: "8%", op: 0.03, rot: "-1.5deg" },
] as const;

function HomeHero({ go }: { go: (p: PageId) => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0D0608" }}>

      {/* Floating spoken-word fragments — the stage backdrop */}
      {FRAGMENTS.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: f.op }}
          transition={{ duration: 2.2, delay: 0.2 + i * 0.14, ease: "easeOut" }}
          className={`absolute font-serif ${f.sz} text-[#FAF8F5] pointer-events-none select-none whitespace-nowrap leading-none`}
          style={{
            top: (f as any).top, left: (f as any).left,
            right: (f as any).right, bottom: (f as any).bottom,
            transform: `rotate(${f.rot})`,
          }}
        >
          {f.t}
        </motion.div>
      ))}

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(13,6,8,0.55) 100%)" }} />

      {/* Fore­ground content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.7 }}>
          <Eyebrow light>Storyteller · Creative Practitioner · Social Impact Leader</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-[68px] md:text-[96px] lg:text-[118px] text-[#FAF8F5] leading-[0.93] tracking-[-0.02em] mt-5"
        >
          Kayeon<br />
          <em>Onyeka</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 2.65, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-[2px] mt-8 mb-7"
          style={{ background: "#6B1E2E", transformOrigin: "center" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 2.85 }}
          className="font-sans text-[#C5A882] text-base md:text-lg max-w-md leading-relaxed"
        >
          Turning story into movement,<br className="hidden sm:block" /> and movement into change.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button
            onClick={() => go("storytelling")}
            className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-[#FAF8F5] text-[#0D0608] font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#6B1E2E] hover:text-[#FAF8F5] transition-all duration-300"
          >
            Explore My Work
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => go("speaking")}
            className="px-8 py-3.5 border border-[#FAF8F5]/35 text-[#FAF8F5]/80 font-sans text-[10px] tracking-[0.2em] uppercase hover:border-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-all duration-300"
          >
            Book a Speaker
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.8 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <div className="w-[1px] h-9 overflow-hidden" style={{ background: "rgba(250,248,245,0.15)" }}>
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
            className="w-full h-full"
            style={{ background: "rgba(250,248,245,0.55)" }}
          />
        </div>
        <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#FAF8F5]/30">Scroll</p>
      </motion.div>
    </section>
  );
}

// ─── Home: Below the fold ──────────────────────────────────────────────────────

const HOME_FEATURED = [
  {
    label: "Spoken Word",
    title: "Fragments of Fire",
    desc: "A critically acclaimed spoken word performance touring venues across the UK and West Africa — exploring identity, inheritance, and the stories we carry in our bodies.",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=640&h=420&fit=crop&auto=format",
    page: "storytelling" as PageId,
  },
  {
    label: "Social Impact",
    title: "The Narrators Programme",
    desc: "A youth storytelling initiative reaching 2,400+ young people across Nigeria and the UK, using narrative as a tool for healing, leadership, and civic identity.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=420&fit=crop&auto=format",
    page: "social-impact" as PageId,
  },
  {
    label: "Recognition",
    title: "Commonwealth Youth Award",
    desc: "Named a Commonwealth Youth Award finalist for outstanding contribution to youth development through creative and community-based programming.",
    img: "https://images.unsplash.com/photo-1567427018140-fcf5065aad2?w=640&h=420&fit=crop&auto=format",
    page: "media" as PageId,
  },
  {
    label: "Speaking",
    title: "TEDx Lagos: The Politics of Story",
    desc: "A widely shared talk exploring how narrative shapes civic identity — and why the stories we tell are acts of power.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=640&h=420&fit=crop&auto=format",
    page: "speaking" as PageId,
  },
];

function HomePage({ go }: { go: (p: PageId) => void }) {
  return (
    <div className="bg-background">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <FadeIn>
            <Eyebrow>About</Eyebrow>
            <h2 className="font-serif text-5xl lg:text-[58px] text-foreground mt-4 leading-[1.08]">
              Art as advocacy.<br /><em>Story as strategy.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:pt-14">
            <p className="font-sans text-foreground/75 text-base lg:text-lg leading-relaxed mb-5">
              Kayeon Onyeka is a storyteller, spoken word artist, and social impact leader whose work has taken her from stages in Lagos to fellowship programs in London, from grassroots youth projects to international policy forums.
            </p>
            <p className="font-sans text-foreground/55 text-sm leading-relaxed mb-9">
              She believes the stories we choose to tell — and the ones we dare to withhold — are among the most powerful political acts available to us. Her practice lives at the intersection of art, community, and systemic change.
            </p>
            <button onClick={() => go("about")}
              className="group flex items-center gap-2.5 font-sans text-[10px] tracking-[0.22em] uppercase text-accent hover:gap-4 transition-all duration-300">
              Read Her Story <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-14">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mt-3 leading-[1.08]">Featured highlights</h2>
            <Rule />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {HOME_FEATURED.map((item, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <button onClick={() => go(item.page)}
                  className="group w-full text-left bg-card border border-transparent hover:border-border/60 overflow-hidden hover:-translate-y-0.5 transition-all duration-500">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={item.img} alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  </div>
                  <div className="p-7 lg:p-8">
                    <Eyebrow>{item.label}</Eyebrow>
                    <h3 className="font-serif text-2xl text-foreground mt-2 mb-3 leading-[1.2]">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent flex items-center gap-2 group-hover:gap-3.5 transition-all duration-250">
                      View <ArrowRight size={11} />
                    </span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 lg:py-36" style={{ background: "#0D0608" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.025]">
          <span className="font-serif text-[280px] text-[#FAF8F5] leading-none whitespace-nowrap">Story</span>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <FadeIn>
            <Eyebrow light>Ready to collaborate?</Eyebrow>
            <h2 className="font-serif text-4xl lg:text-[52px] text-[#FAF8F5] mt-4 leading-[1.08]">
              Bring Kayeon to your<br /><em>next event or initiative.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button onClick={() => go("speaking")}
              className="group flex items-center gap-3 px-8 py-3.5 bg-[#6B1E2E] text-[#FAF8F5] font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#8B2638] transition-colors duration-300">
              Book a Speaker <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => go("contact")}
              className="px-8 py-3.5 border border-[#FAF8F5]/25 text-[#FAF8F5]/65 font-sans text-[10px] tracking-[0.2em] uppercase hover:border-[#FAF8F5]/55 hover:text-[#FAF8F5] transition-all duration-300">
              Get In Touch
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────

function AboutPage() {
  const creds = [
    { k: "Fellowship", v: "Mandela Washington Fellow" },
    { k: "Recognition", v: "Commonwealth Youth Award" },
    { k: "Education", v: "LSE & University of Exeter" },
    { k: "Reach", v: "2,400+ Young People" },
  ];
  return (
    <div className="bg-background pt-16">
      {/* Opening typographic moment */}
      <section className="relative overflow-hidden py-36 lg:py-44" style={{ background: "#0D0608" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn><Eyebrow light>Her Story</Eyebrow></FadeIn>
          <FadeIn delay={0.18}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] text-[#FAF8F5] mt-6 leading-[1.04] max-w-4xl">
              Born between<br />
              <em>worlds</em> — Lagos<br />
              and London,<br />
              poetry and policy.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="w-14 h-[2px] mt-10" style={{ background: "#6B1E2E" }} />
          </FadeIn>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
        <div className="grid lg:grid-cols-[1fr,1.65fr] gap-16 items-start">
          <FadeIn className="lg:sticky lg:top-24">
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&auto=format"
                alt="Kayeon Onyeka" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <Eyebrow>Professional Biography</Eyebrow>
              <h2 className="font-serif text-[38px] text-foreground mt-3 mb-8 leading-[1.1]">
                A decade at the intersection<br />of <em>art and change.</em>
              </h2>
            </FadeIn>
            {[
              "Kayeon Onyeka is a storyteller, spoken word artist, and social impact leader with over a decade of work spanning performance, youth development, research, and advocacy. Her practice is rooted in the conviction that storytelling is not a soft skill — it is a political act, a healing tool, and a blueprint for collective change.",
              "A British-Nigerian creative, Kayeon has performed at the Royal Festival Hall, Barbican Centre, and TEDx stages across Lagos, Accra, and London. Her work has been featured in The Guardian, BBC Africa, and Vogue Africa. She is a Mandela Washington Fellow, a British Council Cultural Connector, and a recipient of the Commonwealth Youth Award.",
              "As founder of The Narrators Programme, Kayeon has designed and delivered storytelling curricula to over 2,400 young people across Nigeria and the United Kingdom, working with schools, grassroots organisations, and government partners to make narrative literacy a cornerstone of civic education.",
              "She holds a BA in English Literature from the University of Exeter and an MSc in Social Policy from the London School of Economics. She is currently completing a creative nonfiction manuscript exploring the diasporic imagination and the politics of belonging.",
            ].map((p, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <p className="font-sans text-foreground/70 text-base leading-relaxed mb-5">{p}</p>
              </FadeIn>
            ))}
            <FadeIn delay={0.5}>
              <div className="border-t border-border mt-6 pt-8 grid grid-cols-2 gap-y-6 gap-x-8">
                {creds.map(c => (
                  <div key={c.k}>
                    <Eyebrow>{c.k}</Eyebrow>
                    <p className="font-sans text-sm text-foreground mt-1.5">{c.v}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          {[
            {
              label: "Mission",
              heading: "To make storytelling a civic infrastructure.",
              body: "Kayeon's mission is to demonstrate — through performance, curriculum, research, and advocacy — that narrative capacity is foundational to democratic participation. She works to ensure young people from under-represented communities have access to the tools, spaces, and platforms to tell their own stories.",
            },
            {
              label: "Vision",
              heading: "A world where every story gets to land.",
              body: "She envisions a world where the stories of marginalised communities are not just told — but heard, taken seriously, and acted upon. A world where creative practice is understood as serious intellectual and political work, and where the spoken word is as valued in policy rooms as it is on stages.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.18}>
              <Eyebrow>{item.label}</Eyebrow>
              <h2 className="font-serif text-3xl text-foreground mt-3 mb-5 leading-[1.2]">
                <em>{item.heading}</em>
              </h2>
              <p className="font-sans text-foreground/65 text-base leading-relaxed">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── Storytelling ──────────────────────────────────────────────────────────────

type Project = { title: string; hook: string; role: string; year: string; img: string };

const SPOKEN: Project[] = [
  {
    title: "Fragments of Fire",
    hook: "A reckoning with inheritance, memory, and the weight of what was left behind.",
    role: "Writer & Performer", year: "2023",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=720&h=480&fit=crop&auto=format",
  },
  {
    title: "The Body Carries What the Mouth Won't Say",
    hook: "An intimate solo performance exploring Black womanhood, silence, and self-determination.",
    role: "Writer & Performer", year: "2022",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=720&h=480&fit=crop&auto=format",
  },
];
const WRITING: Project[] = [
  {
    title: "On the Archaeology of Names",
    hook: "A personal essay exploring naming, ancestry, and the politics of identity.",
    role: "Author", year: "2023",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=720&h=480&fit=crop&auto=format",
  },
  {
    title: "Letter to My City",
    hook: "An open letter to Lagos, published in Catapult Magazine.",
    role: "Author", year: "2022",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=720&h=480&fit=crop&auto=format",
  },
];
const FILM: Project[] = [
  {
    title: "Still Water",
    hook: "A short documentary about three women, three cities, and one inheritance of silence.",
    role: "Director & Writer", year: "2023",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=720&h=480&fit=crop&auto=format",
  },
  {
    title: "Home Currency",
    hook: "An experimental short film blending spoken word and archive footage.",
    role: "Writer & Creative Director", year: "2021",
    img: "https://images.unsplash.com/photo-1536240478537-0f1c434e3b75?w=720&h=480&fit=crop&auto=format",
  },
];

function ProjectCard({ p, flip, i }: { p: Project; flip: boolean; i: number }) {
  return (
    <FadeIn delay={i * 0.1}>
      <div className={`group grid lg:grid-cols-2 overflow-hidden border border-border cursor-pointer hover:border-border/80 transition-colors duration-400`}>
        <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-muted min-h-[220px] ${flip ? "lg:order-2" : ""}`}>
          <img src={p.img} alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
        </div>
        <div className={`p-9 lg:p-12 flex flex-col justify-center bg-card ${flip ? "lg:order-1" : ""}`}>
          <Eyebrow>{p.year}</Eyebrow>
          <h3 className="font-serif text-2xl lg:text-3xl text-foreground mt-3 mb-3 leading-[1.15]">{p.title}</h3>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-1.5">{p.hook}</p>
          <p className="font-sans text-xs text-muted-foreground/55 italic mb-8">{p.role}</p>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent flex items-center gap-2 group-hover:gap-3.5 transition-all duration-250">
            View Project <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

function StorytellingPage() {
  const sections: { label: string; title: string; projects: Project[] }[] = [
    { label: "Spoken Word", title: "Performances", projects: SPOKEN },
    { label: "Written Work", title: "Writing", projects: WRITING },
    { label: "Film & Visual", title: "Film Projects", projects: FILM },
  ];
  return (
    <div className="bg-background pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Creative Practice</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-foreground mt-4 leading-[0.96]">
            Story<em>telling</em>
          </h1>
        </FadeIn>
      </section>
      {sections.map((s, si) => (
        <div key={si}>
          <div className="w-full h-[1px] bg-border" />
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <FadeIn className="mb-12">
              <Eyebrow>{s.label}</Eyebrow>
              <h2 className="font-serif text-4xl text-foreground mt-2">{s.title}</h2>
              <Rule />
            </FadeIn>
            <div className="flex flex-col gap-4">
              {s.projects.map((p, pi) => (
                <ProjectCard key={pi} p={p} flip={pi % 2 !== 0} i={pi} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

// ─── Social Impact ─────────────────────────────────────────────────────────────

const CASES = [
  {
    label: "Youth Development",
    title: "The Narrators Programme",
    stat: "2,400+", statLabel: "Young people reached",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=720&h=500&fit=crop&auto=format",
    challenge: "Many young people from under-resourced communities lack access to narrative literacy tools that could help them articulate their experiences, develop civic identity, and advocate for themselves.",
    approach: "A school-based and community-embedded storytelling curriculum delivered across Lagos, Abuja, and London — combining spoken word workshops, facilitated reflection, and public performance showcases.",
    impact: "2,400+ young people reached across three countries. 89% of participants report increased confidence in self-expression. Programme now adopted by the Lagos State Ministry of Education.",
  },
  {
    label: "Advocacy",
    title: "The Story Counts Campaign",
    stat: "200+", statLabel: "Personal testimonies collected",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=720&h=500&fit=crop&auto=format",
    challenge: "Policy decisions affecting diaspora youth are too often made without meaningful consultation — because narrative evidence is systematically undervalued compared to quantitative data.",
    approach: "A public advocacy campaign combining story collection, digital storytelling, and policy submissions — making the qualitative case for diaspora youth inclusion in UK social policy.",
    impact: "Featured in three parliamentary submissions. Supported the passage of a Youth Civic Inclusion Bill amendment. Over 200 personal testimonies collected and published.",
  },
  {
    label: "Research & Community",
    title: "Diasporic Futures Research Project",
    stat: "1,800+", statLabel: "Exhibition visitors (first month)",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=720&h=500&fit=crop&auto=format",
    challenge: "Academic research on diaspora communities often reproduces extractive methodologies — taking stories without giving agency, publishing findings that communities never read.",
    approach: "A participatory action research project using community-embedded storytelling as both methodology and output — co-producing a report, a podcast series, and a community exhibition.",
    impact: "Published in collaboration with LSE. Presented at three international research conferences. Community exhibition visited by 1,800 people in its first month.",
  },
];

function SocialImpactPage() {
  return (
    <div className="bg-background pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Community & Systems Work</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-foreground mt-4 leading-[0.96]">
            Social <em>Impact</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-lg">
          <p className="font-sans text-foreground/65 text-base leading-relaxed">
            Kayeon applies storytelling as a technology for community development, advocacy, and systemic change — in schools, policy rooms, and public squares.
          </p>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-border" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-7">
        {CASES.map((c, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="border border-border overflow-hidden">
              <div className="grid lg:grid-cols-[2fr,3fr]">
                <div className="relative min-h-[240px]">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,6,8,0.85) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="font-serif text-[44px] text-[#FAF8F5] leading-none">{c.stat}</p>
                    <p className="font-sans text-xs text-[#C5A882] mt-1 tracking-wide">{c.statLabel}</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12 bg-card">
                  <Eyebrow>{c.label}</Eyebrow>
                  <h2 className="font-serif text-[28px] text-foreground mt-2 mb-8 leading-[1.15]">{c.title}</h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { k: "Challenge", v: c.challenge },
                      { k: "Approach", v: c.approach },
                      { k: "Impact", v: c.impact },
                    ].map((b, j) => (
                      <div key={j}>
                        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mb-2">{b.k}</p>
                        <p className="font-sans text-sm text-foreground/65 leading-relaxed">{b.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ─── Speaking ──────────────────────────────────────────────────────────────────

const TOPICS = [
  "The Politics of Story: Why Narrative is a Civic Tool",
  "Diasporic Identity and the Stories We Carry",
  "Storytelling as Leadership: Building Culture from the Inside Out",
  "Youth Voice and Civic Participation",
  "Creative Practice as Social Innovation",
  "The Ethics of Representation in Creative Work",
  "Feminist Storytelling and the Decolonial Imagination",
];

const ENGAGEMENTS = [
  { n: "TEDx Lagos", y: "2023" }, { n: "British Council", y: "2023" },
  { n: "Commonwealth Secretariat", y: "2022" }, { n: "Barbican Centre", y: "2022" },
  { n: "Royal Festival Hall", y: "2022" }, { n: "University of Lagos", y: "2022" },
  { n: "LSE Festival", y: "2021" }, { n: "Africa Utopia", y: "2021" },
  { n: "Afrobeats to the World Forum", y: "2021" }, { n: "Chatham House", y: "2020" },
  { n: "Global Goals Forum", y: "2020" }, { n: "Oxford Union", y: "2019" },
];

function SpeakingPage({ go }: { go: (p: PageId) => void }) {
  return (
    <div className="bg-background pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Public Speaking</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-foreground mt-4 leading-[0.96]">
            <em>Speaking</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-lg">
          <p className="font-sans text-foreground/65 text-base leading-relaxed">
            Kayeon speaks at conferences, festivals, universities, and cultural institutions on storytelling, identity, youth development, and creative practice as social change.
          </p>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-border" />

      {/* Topics */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <FadeIn className="mb-12">
          <Eyebrow>Topics</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground mt-2">Speaking themes</h2>
        </FadeIn>
        {TOPICS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="flex items-center gap-6 py-5 border-b border-border group cursor-pointer hover:bg-secondary/70 -mx-2 px-2 transition-all duration-300">
              <span className="font-sans text-[10px] text-muted-foreground/40 w-5 shrink-0 text-right tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-base text-foreground/75 group-hover:text-foreground transition-colors flex-1">{t}</p>
              <ArrowRight size={13} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Engagements */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <Eyebrow>Past Engagements</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground mt-2">Venues & organisations</h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ENGAGEMENTS.map((e, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-card border border-border p-5">
                  <p className="font-sans text-sm font-medium text-foreground">{e.n}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-1">{e.y}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <FadeIn>
            <Eyebrow>Booking</Eyebrow>
            <h2 className="font-serif text-[38px] text-foreground mt-3 mb-6 leading-[1.1]">
              Bring Kayeon to your<br /><em>stage or platform.</em>
            </h2>
            <p className="font-sans text-foreground/65 text-base leading-relaxed mb-9">
              Kayeon is available for keynotes, panels, performances, masterclasses, and residencies. She works with academic institutions, cultural organisations, NGOs, corporate partners, and government bodies.
            </p>
            <button onClick={() => go("contact")}
              className="group flex items-center gap-3 px-8 py-3.5 bg-accent text-accent-foreground font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#8B2638] transition-colors duration-300">
              Send a Booking Enquiry <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-secondary border border-border p-8">
              <Eyebrow>Enquiry information</Eyebrow>
              <div className="mt-6 space-y-0">
                {[
                  ["Speaking fee", "Available on request"],
                  ["Availability", "Select dates, 2025–2026"],
                  ["Format", "Keynote · Panel · Performance · Masterclass"],
                  ["Travel", "International availability"],
                ].map(([q, a], i) => (
                  <div key={i} className="flex justify-between gap-6 py-4 border-b border-border last:border-0">
                    <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{q}</p>
                    <p className="font-sans text-sm text-foreground text-right">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ─── Media & Recognition ───────────────────────────────────────────────────────

const AWARDS = [
  { title: "Commonwealth Youth Award", org: "Commonwealth Secretariat", year: "2022", cat: "Finalist" },
  { title: "Poet of the Year", org: "Roundhouse Poetry Slam", year: "2021", cat: "Winner" },
  { title: "Arts & Social Change Award", org: "Clore Duffield Foundation", year: "2021", cat: "Recipient" },
  { title: "Young Cultural Leader", org: "British Council", year: "2020", cat: "Named" },
  { title: "Mandela Washington Fellowship", org: "US State Department", year: "2019", cat: "Fellow" },
  { title: "One to Watch", org: "Afro-Literary Arts Festival", year: "2019", cat: "Named" },
];

const PRESS = [
  { outlet: "The Guardian", title: "\"A storyteller reshaping what civic art can be\"", year: "2023" },
  { outlet: "BBC Africa", title: "\"The spoken word artist bringing West African stories to global stages\"", year: "2023" },
  { outlet: "Vogue Africa", title: "\"30 under 30: Creative Leaders Changing the Continent\"", year: "2022" },
  { outlet: "gal-dem", title: "\"Kayeon Onyeka on why the personal is always political\"", year: "2022" },
  { outlet: "The Stage", title: "\"Review: Fragments of Fire is essential theatre\"", year: "2022" },
  { outlet: "Okay Africa", title: "\"The diaspora storytellers you need to know\"", year: "2021" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=540&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=540&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=540&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=540&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=540&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1567427018140-fcf5065aad2?w=540&h=400&fit=crop&auto=format",
];

function MediaPage() {
  return (
    <div className="bg-background pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Recognition & Press</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-foreground mt-4 leading-[0.96]">
            Media &<br /><em>Recognition</em>
          </h1>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-border" />

      {/* Awards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <FadeIn className="mb-12">
          <Eyebrow>Accolades</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground mt-2">Awards & fellowships</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AWARDS.map((a, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="bg-card border border-border p-7 h-full">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <Eyebrow>{a.cat}</Eyebrow>
                  <span className="font-sans text-xs text-muted-foreground shrink-0">{a.year}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-1.5">{a.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{a.org}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <Eyebrow>In the Press</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground mt-2">Media features</h2>
          </FadeIn>
          {PRESS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-5 border-b border-border group cursor-pointer -mx-3 px-3 hover:bg-card transition-all duration-300">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent w-28 shrink-0">{p.outlet}</span>
                <p className="font-sans text-sm text-foreground/75 flex-1 italic">{p.title}</p>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-sans text-xs text-muted-foreground">{p.year}</span>
                  <ArrowRight size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <FadeIn className="mb-12">
          <Eyebrow>Photography</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground mt-2">Gallery</h2>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {GALLERY.map((src, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="aspect-[4/3] overflow-hidden bg-muted group cursor-pointer">
                <img src={src} alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── Resources ─────────────────────────────────────────────────────────────────

const ARTICLES = [
  {
    title: "Why Spoken Word Belongs in Schools",
    excerpt: "In a time when young people are increasingly disengaged from civic life, spoken word poetry offers something traditional curricula cannot: a way to make the personal political.",
    date: "November 2023", cat: "Education",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=380&fit=crop&auto=format",
  },
  {
    title: "On Being a Diaspora Storyteller in the Age of Algorithm",
    excerpt: "The digital platforms we use to tell our stories were not built with us in mind. A reflection on creative sovereignty and the politics of platform dependency.",
    date: "September 2023", cat: "Creative Practice",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=380&fit=crop&auto=format",
  },
  {
    title: "The Problem with 'Authentic' Stories",
    excerpt: "When we demand that marginalised creators produce 'authentic' narratives, we are setting a trap. A reflection on representation, expectation, and artistic freedom.",
    date: "July 2023", cat: "Essay",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=380&fit=crop&auto=format",
  },
  {
    title: "What I Learned From 2,400 Young Storytellers",
    excerpt: "After three years running The Narrators Programme, certain patterns keep appearing. This is what young people taught me about the stories they most need to tell.",
    date: "April 2023", cat: "Field Notes",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=380&fit=crop&auto=format",
  },
  {
    title: "A Glossary for the Diaspora Creative",
    excerpt: "Belonging. Authenticity. Roots. Hybridity. The words we use to talk about diaspora identity are often doing more harm than good. A critical re-examination.",
    date: "January 2023", cat: "Essay",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=380&fit=crop&auto=format",
  },
  {
    title: "Speaking to Power: Notes from a Year of Advocacy",
    excerpt: "What happens when you bring storytelling into policy spaces? A candid account of what works, what doesn't, and what the system rarely wants to hear.",
    date: "November 2022", cat: "Social Impact",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=380&fit=crop&auto=format",
  },
];

function ResourcesPage() {
  return (
    <div className="bg-background pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Writing & Thought</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-foreground mt-4 leading-[0.96]">
            <em>Resources</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-7 max-w-lg">
          <p className="font-sans text-foreground/65 text-base leading-relaxed">
            Essays, reflections, field notes, and criticism from Kayeon's work at the intersection of storytelling, culture, and social change.
          </p>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-border" />
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {ARTICLES.map((a, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <article className="group cursor-pointer flex flex-col h-full">
                <div className="aspect-[5/3] overflow-hidden bg-muted mb-5">
                  <img src={a.img} alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Eyebrow>{a.cat}</Eyebrow>
                  <span className="font-sans text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 leading-[1.2] group-hover:text-accent transition-colors duration-200 flex-1">
                  {a.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent flex items-center gap-2 group-hover:gap-3.5 transition-all duration-250">
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "General Enquiry", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-background pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <FadeIn>
          <Eyebrow>Connect</Eyebrow>
          <h1 className="font-serif text-[64px] lg:text-[90px] text-foreground mt-4 leading-[0.96]">
            <em>Contact</em>
          </h1>
        </FadeIn>
      </section>
      <div className="w-full h-[1px] bg-border" />
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-16">
          <FadeIn className="space-y-10">
            {[
              { label: "General", email: "hello@kayeononyeka.com" },
              { label: "Speaking Enquiries", email: "speaking@kayeononyeka.com" },
            ].map(e => (
              <div key={e.label}>
                <Eyebrow>{e.label}</Eyebrow>
                <a href={`mailto:${e.email}`}
                  className="font-sans text-base text-foreground hover:text-accent transition-colors mt-2 block">{e.email}</a>
              </div>
            ))}
            <div>
              <Eyebrow>Location</Eyebrow>
              <p className="font-sans text-base text-foreground/65 mt-2">London, UK & Lagos, Nigeria</p>
            </div>
            <div>
              <Eyebrow>Social</Eyebrow>
              <div className="flex gap-5 mt-3">
                {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <button key={i} className="text-foreground/45 hover:text-accent transition-colors" aria-label="Social link">
                    <Icon size={17} />
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {sent ? (
              <div className="bg-card border border-border p-14 text-center">
                <p className="font-serif text-3xl text-foreground mb-3">Thank you.</p>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  Your message has been sent. Kayeon or her team will be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "Your Name", type: "text", key: "name", ph: "Full name" },
                    { label: "Email Address", type: "email", key: "email", ph: "your@email.com" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{f.label}</label>
                      <input type={f.type} required placeholder={f.ph}
                        value={(form as any)[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Enquiry Type</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors">
                    {["General Enquiry", "Speaking Booking", "Collaboration", "Press & Media", "Other"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
                  <textarea required rows={6} placeholder="Tell Kayeon about your enquiry…"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-muted-foreground/50" />
                </div>
                <button type="submit"
                  className="group flex items-center gap-3 px-8 py-3.5 bg-foreground text-background font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                  Send Message <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer({ go }: { go: (p: PageId) => void }) {
  return (
    <footer style={{ background: "#0D0608" }} className="text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[2fr,1fr,1fr,1fr] gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-2">Kayeon Onyeka</h3>
            <p className="font-sans text-[10px] tracking-[0.18em] text-[#C5A882] mb-6">
              Storyteller · Creative Practitioner · Social Impact Leader
            </p>
            <p className="font-sans text-sm text-[#FAF8F5]/45 leading-relaxed max-w-xs">
              London & Lagos. Available globally for speaking engagements, performances, and collaborations.
            </p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-[#C5A882] mb-5">Work</p>
            <nav className="space-y-3">
              {(["storytelling", "social-impact", "speaking", "media"] as PageId[]).map(p => (
                <button key={p} onClick={() => go(p)}
                  className="block font-sans text-sm text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors capitalize">
                  {p.replace("-", " ")}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-[#C5A882] mb-5">Info</p>
            <nav className="space-y-3">
              {(["about", "resources", "contact"] as PageId[]).map(p => (
                <button key={p} onClick={() => go(p)}
                  className="block font-sans text-sm text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors capitalize">
                  {p}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-[#C5A882] mb-5">Connect</p>
            <a href="mailto:hello@kayeononyeka.com"
              className="flex items-center gap-2 font-sans text-sm text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors mb-4">
              <Mail size={13} /> hello@kayeononyeka.com
            </a>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <button key={i} className="text-[#FAF8F5]/35 hover:text-[#FAF8F5] transition-colors" aria-label="Social">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(250,248,245,0.08)" }}>
          <p className="font-sans text-xs text-[#FAF8F5]/25">© 2024 Kayeon Onyeka. All rights reserved.</p>
          <div className="w-12 h-[1px]" style={{ background: "#6B1E2E" }} />
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<PageId>("home");

  const go = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  const Page = () => {
    switch (page) {
      case "home":          return <><HomeHero go={go} /><HomePage go={go} /></>;
      case "about":         return <AboutPage />;
      case "storytelling":  return <StorytellingPage />;
      case "social-impact": return <SocialImpactPage />;
      case "speaking":      return <SpeakingPage go={go} />;
      case "media":         return <MediaPage />;
      case "resources":     return <ResourcesPage />;
      case "contact":       return <ContactPage />;
    }
  };

  return (
    <div className="bg-background min-h-screen font-sans">
      <Nav current={page} go={go} />
      <AnimatePresence mode="wait">
        <motion.div key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Page />
          <Footer go={go} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
