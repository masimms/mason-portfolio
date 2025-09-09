import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Linkedin, Mail, Check } from "lucide-react";

// --- Theme tokens ---
const theme = {
  navy: "#1E2A44",
  charcoal: "#2B2B2B",
  light: "#F5F5F5",
  white: "#FFFFFF",
  oxblood: "#800020",
  gold: "#C8A951",
  silver: "#C0C0C0",
};

const Section = ({ id, className = "", style = {}, children }) => (
  <section id={id} style={style} className={`w-full py-16 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start({ opacity: 1, y: 0 }); }, [inView, controls]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={controls} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

// Experience data
const EXPERIENCES = [
  {
    title: "Lockheed Martin – Program Support Intern (RMS Undersea Systems)",
    date: "Summer 2024",
    bullets: [
      "Led optimization of metrics visualization tools, cutting two hours of manual work weekly.",
      "Coordinated government program review, performed worksite cost-estimate analyses, and created subcontract clarification plan.",
      "Presented complex concepts in stakeholder-ready formats, strengthening executive engagement.",
    ],
    tags: ["Defense", "Program Support", "Analytics"],
  },
  {
    title: "Boeing-Sponsored Technology Commercialization Fellowship – Project Lead",
    date: "2024–2025",
    bullets: [
      "Led cross-disciplinary team to pitch an AI-powered Program Management Assistant, improving project tracking.",
      "Evaluated commercialization strategies and go-to-market paths for emerging technologies.",
    ],
    tags: ["Commercialization", "Leadership", "Innovation"],
  },
  {
    title: "Management Consulting & Process Improvement Capstones",
    date: "2025",
    bullets: [
      "Built a five-year financial forecast and strategy for a mission-driven career consulting startup.",
      "Led process improvement for VT Premium Seating; created standard work process to streamline services and operations.",
    ],
    tags: ["Consulting", "Financial Model", "Six Sigma"],
  },
  {
    title: "Startup & Entrepreneurial Ventures – Founder & Strategy Lead",
    date: "2024–2025",
    bullets: [
      "Crown Tech: Built a go-to-market strategy to connect minority students with haircare service providers.",
      "AlzStageWise: Developed dual-track platform offering support to Alzheimer’s patients and caregivers.",
    ],
    tags: ["Entrepreneurship", "Strategy", "Startups"],
  },
  {
    title: "One World 501(c)(3) Non-Profit – Co-Founder & Program Lead",
    date: "2023–Present",
    bullets: [
      "Coordinated outreach and career-readiness events; recruited and led volunteer teams.",
      "Built partnerships with local organizations to expand access and program impact.",
    ],
    tags: ["Nonprofit", "Leadership", "Community"],
  },
  {
    title: "University of Virginia – Project Management Certificate (In Progress)",
    date: "2025",
    bullets: [
      "Coursework in project planning, stakeholder communication, risk management, and AI-driven PM.",
    ],
    tags: ["PM", "Risk", "Stakeholders"],
  },
];


// Skills
const SKILLS = [
  "Strategic Planning",
  "Stakeholder Communication",
  "Business Analytics (Excel, Power BI)",
  "Data Visualization (Tableau, SAS JMP)",
  "Process Improvement (Six Sigma Green Belt)",
  "Project Management & Coordination",
  "Agile & Scrum (JIRA)",
  "AI in Business and Strategy",
  "Data-Driven Decision Making",
  "Public Speaking",
];

const ExpCard = ({ exp, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={idx * 0.08}>
      <div
        role="button"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
        tabIndex={0}
        className="group rounded-2xl shadow-lg border transition-all duration-300 bg-white/90 backdrop-blur-sm"
        style={{ borderColor: theme.silver }}
      >
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold" style={{ color: theme.navy }}>{exp.title}</h3>
              <p className="text-sm mt-1" style={{ color: theme.charcoal }}>{exp.date}</p>
            </div>
            <motion.span initial={{ rotate: 0 }} animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.25 }}
              className="shrink-0 rounded-full border p-2" style={{ borderColor: theme.silver }}>
              <ArrowRight size={18} />
            </motion.span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {exp.tags.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full border"
                style={{ borderColor: theme.silver, color: theme.navy, background: theme.light }}>{t}</span>
            ))}
          </div>
          <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <ul className="mt-4 space-y-2 list-disc pl-5 text-sm" style={{ color: theme.charcoal }}>
              {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
};

export default function App() {
  // Smooth scroll (accounts for sticky header)
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 72;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: theme.white, color: theme.charcoal }}>
      <style>{'html { scroll-behavior: smooth; }'}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b" style={{ borderColor: theme.silver }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base md:text-lg font-black tracking-tight" style={{ color: theme.navy, letterSpacing: '-0.02em' }}>MS</span>
            <div className="leading-tight">
              <div className="text-[11px] md:text-xs opacity-80" style={{ color: theme.charcoal }}>
                Consulting & Strategy | Tech-Savvy Problem Solver | Virginia Tech Graduate
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: theme.navy }}>
            <a href="#about" onClick={scrollToId('about')} className="hover:opacity-80">About</a>
            <a href="#experience" onClick={scrollToId('experience')} className="hover:opacity-80">Experience</a>
            <a href="#skills" onClick={scrollToId('skills')} className="hover:opacity-80">Skills</a>
            <a href="#resume" onClick={scrollToId('resume')} className="hover:opacity-80">Resume</a>
            <a href="#more" onClick={scrollToId('more')} className="hover:opacity-80">More</a>
          </nav>
        </div>
      </header>

{/* Hero */}
<Section id="hero" className="bg-white">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <Reveal>
      <div>
        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          style={{ color: theme.navy }}
        >
          Mason Simms
        </h1>

        {/* Tagline */}
        <h2
          className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight"
          style={{ color: theme.navy }}
        >
          <span>Strategy-driven. Tech-curious.</span><br />
          <span>People-first.</span>
        </h2>

        {/* Single-line credentials */}
        <div
          className="mt-4 text-base md:text-lg font-semibold"
          style={{ color: theme.navy }}
        >
          Business &amp; Tech Strategy <span className="mx-2">|</span>
          Virginia Tech Graduate <span className="mx-2">|</span>
          Six Sigma Certified
        </div>

        {/* Refined summary */}
        <p
          className="mt-4 text-base md:text-lg leading-relaxed max-w-xl"
          style={{ color: theme.charcoal }}
        >
          I work at the intersection of consulting, technology strategy, and
          process improvement. I help teams bridge the gap between data, insights,
          and execution to deliver measurable results.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#resume"
            onClick={scrollToId('resume')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium shadow"
            style={{ background: theme.oxblood, color: theme.white }}
          >
            <Download size={18} /> View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/masonsimms"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border"
            style={{ borderColor: theme.silver, color: theme.navy }}
          >
            <Linkedin size={18} /> Connect
          </a>
          <a
            href="mailto:masonsimms03@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border"
            style={{ borderColor: theme.silver, color: theme.navy }}
            aria-label="Email Mason Simms"
          >
            <Mail size={18} /> masonsimms03@gmail.com
          </a>
        </div>
      </div>
    </Reveal>

    {/* Hero image with original motif size */}
    <Reveal delay={0.1}>
      <div className="relative isolate">
        <div className="aspect-[4/5] w-full rounded-3xl shadow-lg overflow-hidden relative">
          <img
            src="/headshot.jpg"
            alt="Mason Simms headshot"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="absolute z-0 -right-6 -bottom-6 w-40 h-40 rounded-3xl"
          style={{ background: theme.gold, opacity: 0.25 }}
        />
        <div
          className="absolute z-0 -left-6 -top-6 w-32 h-32 rounded-3xl"
          style={{ background: theme.oxblood, opacity: 0.2 }}
        />
      </div>
    </Reveal>
  </div>
</Section>



      {/* About */}
      <Section id="about" style={{ background: theme.light }}>
        <Reveal>
          <div className="rounded-3xl p-8 md:p-10 border shadow-sm bg-white/90" style={{ borderColor: theme.silver }}>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: theme.navy }}>About</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Dynamic and motivated young professional with dual majors in Management Consulting & Analytics and Entrepreneurship, Innovation & Technology from Virginia Tech, plus a minor in PPE. Skilled in analytical problem solving, stakeholder engagement, and leadership. Outside of work, I enjoy golf, music, and cooking. These interests continue to teach me patience, curiosity, and creative problem-solving. I bring those same values to every professional environment I join.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Experience */}
      <Section id="experience" className="bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: theme.navy }}>Experience</h2>
          <span className="text-sm" style={{ color: theme.charcoal }}>Click a card to expand</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCES.map((e, i) => (<ExpCard key={e.title} exp={e} idx={i} />))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" style={{ background: theme.light }}>
        <Reveal>
          <div className="rounded-3xl p-8 md:p-10 border shadow-sm bg-white/90" style={{ borderColor: theme.silver }}>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: theme.navy }}>Skills</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base" style={{ color: theme.charcoal }}>
              {SKILLS.map((s) => (
                <li
                  key={s}
                  className="group flex items-start gap-3 p-3 rounded-xl border bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
                  style={{ borderColor: theme.silver, background: 'linear-gradient(135deg, rgba(200,169,81,0.08) 0%, rgba(128,0,32,0.05) 100%)' }}
                >
                  <Check size={16} className="mt-0.5 shrink-0" style={{ color: theme.navy }} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Resume */}
      <Section id="resume" style={{ background: theme.light }}>
        <Reveal>
          <div className="rounded-3xl p-8 md:p-10 border shadow-sm bg-white/90" style={{ borderColor: theme.silver }}>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: theme.navy }}>Resume</h2>
            <p className="mt-3">Preview below. A downloadable PDF is also available.</p>
            <div className="mt-5 rounded-2xl overflow-hidden border bg-white" style={{ borderColor: theme.silver }}>
              <object
                data="/Website-Resume.pdf#view=FitH"
                type="application/pdf"
                className="w-full"
                style={{ height: '70vh' }}
              >
                <div className="p-6 text-sm" style={{ color: theme.charcoal }}>
                  PDF preview not supported here.{" "}
                  <a href="/Website-Resume.pdf" className="underline" download="Website-Resume.pdf">
                    Download the resume
                  </a>.
                </div>
              </object>
            </div>
            <div className="mt-5">
              <a
                href="/Website-Resume.pdf"
                download="Website-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium shadow"
                style={{ background: theme.oxblood, color: theme.white }}
              >
                <Download size={18} /> Download PDF
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* More */}
      <Section id="more" className="bg-white">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: theme.navy }}>More</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl border bg-white p-6 shadow-sm overflow-hidden" style={{ borderColor: theme.silver }}>
              {/* smaller motifs */}
              <div className="absolute pointer-events-none -left-3 -top-3 w-14 h-14 rounded-2xl" style={{ background: theme.oxblood, opacity: 0.05 }} />
              <div className="absolute pointer-events-none -right-3 -bottom-3 w-16 h-16 rounded-2xl" style={{ background: theme.gold, opacity: 0.06 }} />
              <h3 className="font-semibold" style={{ color: theme.navy }}>Pamplin Spotlight</h3>
              <p className="text-sm mt-2">Virginia Tech Management Department feature on Mason Simms’ journey and goals.</p>
              <a href="https://management.pamplin.vt.edu/spotlight/simms.html" className="inline-flex items-center gap-2 text-sm mt-4 font-medium" style={{ color: theme.oxblood }}>
                Read article <ExternalLink size={16} />
              </a>
            </div>
            <div className="relative rounded-2xl border bg-white p-6 shadow-sm overflow-hidden" style={{ borderColor: theme.silver }}>
              {/* smaller motifs */}
              <div className="absolute pointer-events-none -left-3 -top-3 w-14 h-14 rounded-2xl" style={{ background: theme.oxblood, opacity: 0.05 }} />
              <div className="absolute pointer-events-none -right-3 -bottom-3 w-16 h-16 rounded-2xl" style={{ background: theme.gold, opacity: 0.06 }} />
              <h3 className="font-semibold" style={{ color: theme.navy }}>Barron’s Article</h3>
              <p className="text-sm mt-2">Quoted in Barron’s on market downturns and stock-buying opportunities.</p>
              <a href="https://www.barrons.com/articles/market-downturns-stocks-buying-opportunity-c50b26cf?st=1kKRP2&reflink=desktopwebshare_permalink" className="inline-flex items-center gap-2 text-sm mt-4 font-medium" style={{ color: theme.oxblood }}>
                Read article <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Footer */}
      <footer className="py-12 mt-8" style={{ background: theme.navy, color: theme.white }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mason Simms</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/masonsimms" target="_blank" rel="noreferrer" className="hover:opacity-80"><Linkedin /></a>
            <a href="mailto:masonsimms03@gmail.com" className="hover:opacity-80"><Mail /></a>
          </div>
          <div className="mt-4 md:mt-0 text-center text-sm">I developed this website collaboratively with the assistance of artificial intelligence!</div>
        </div>
      </footer>
    </div>
  );
}
