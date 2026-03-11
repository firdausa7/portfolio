"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiOpenai,
  SiGooglegemini,
  SiLangchain,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiMeta,
  SiCoursera,
  SiInstagram,
} from "react-icons/si";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Linkedin,
  Code2,
  Users,
  CheckCircle2,
} from "lucide-react";

import Typewriter from "@/components/Typewriter";
import ProfilePhoto from "@/components/ProfilePhoto";

// ─── Types ────────────────────────────────────────────────────────────────────

type TechItem = { name: string; icon: React.ElementType; color: string };

// ─── Data ────────────────────────────────────────────────────────────────────

const certifications = [
  {
    id: 1,
    title: "Meta Frontend Developer",
    issuer: "Meta · Coursera",
    detail: "Professional Certificate",
    icon: SiMeta,
    iconColor: "#0082FB",
    badgeColor: "rgba(0,130,251,0.08)",
    borderColor: "rgba(0,130,251,0.2)",
    href: "#",
  },
  {
    id: 2,
    title: "Internship Completion",
    issuer: "Codveda Technologies",
    detail: "ISO 9001:2015 Certified · ID: CV/A1/46719",
    icon: CheckCircle2,
    iconColor: "#00e5ff",
    badgeColor: "rgba(0,229,255,0.06)",
    borderColor: "rgba(0,229,255,0.2)",
    href: "#",
  },
  {
    id: 3,
    title: "Women Techsters Fellowship",
    issuer: "Tech4Dev",
    detail: "Africa-wide Software Engineering Program",
    icon: Users,
    iconColor: "#a78bfa",
    badgeColor: "rgba(167,139,250,0.06)",
    borderColor: "rgba(167,139,250,0.2)",
    href: "#",
  },
];

const techStack: Record<string, TechItem[]> = {
  Frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss, color: "#1572B6" },
  ],
  "AI / APIs": [
    { name: "OpenAI API", icon: SiOpenai, color: "#00e5ff" },
    { name: "Gemini API", icon: SiGooglegemini, color: "#4285F4" },
    { name: "LangChain", icon: SiLangchain, color: "#00e5ff" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "VS Code", icon: Code2, color: "#007ACC" },
  ],
};

const experience = [
  {
    role: "Frontend Development Intern",
    company: "Codveda Technologies",
    companyNote: "ISO 9001:2015 Certified",
    companyLink: null,
    duration: "October 2025 – November 2025",
    location: "Remote, India",
    certId: "Certificate ID: CV/A1/46719",
    bullets: [
      "Engineered responsive, accessible UI components with zero revision cycles from senior engineers by applying Tailwind CSS best practices and systematic cross-browser testing.",
      "Accelerated feature delivery by 30% faster than sprint targets by implementing reusable React component architecture.",
      "Elevated code maintainability across 3 frontend modules by enforcing consistent design patterns and clean code principles.",
      "Demonstrated exceptional attention to detail and communication recognized in official completion certificate by proactively seeking feedback and iterating rapidly.",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML5", "Git"],
  },
  {
    role: "Founder & Marketing Strategist",
    company: "Guardian Hub",
    companyNote: "Child Safety Startup",
    companyLink: "https://www.instagram.com/guardianhubke",
    duration: "2024 – Present",
    location: "Nairobi & Mombasa, Kenya",
    certId: null,
    bullets: [
      "Built brand awareness from zero reaching hundreds of Nairobi and Mombasa parents by executing targeted Instagram and WhatsApp community campaigns.",
      "Established Guardian Hub as a trusted child safety brand generating consistent inbound interest by creating educational content around child safety and discreet smart tracking.",
      "Drove early customer acquisition across 2 major Kenyan cities by coordinating school outreach and direct parent engagement.",
    ],
    tags: ["Instagram", "WhatsApp", "Facebook", "Community Outreach"],
  },
];

const projects = [
  {
    id: "01",
    name: "Wabber Flow",
    description: "Water network management dashboard for monitoring zones, meters, and customers.",
    image: "/wabberflow.jpg",
    live: "https://github.com/firdausa7/wabberflow",
    github: "https://github.com/firdausa7/wabberflow",
    tech: ["React", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    id: "02",
    name: "MediAlert",
    description: "Intelligent medication reminder with advanced scheduling, dosage tracking, and health monitoring.",
    image: "/medialert-new.png",
    live: "https://medialert.vercel.app/",
    github: null,
    tech: ["React", "Supabase", "Tailwind", "Notifications API"],
  },
  {
    id: "03",
    name: "Leap Innovations",
    description: "Logistics & fleet management platform with real-time tracking and intelligent routing.",
    image: "/qleap-drivers.png",
    live: "https://qleap.co.ke",
    github: null,
    tech: ["Next.js", "Tailwind", "Google Maps API", "Node.js"],
  },
  {
    id: "04",
    name: "PitchSync",
    description: "Influencer marketing platform connecting creators with brands to drive real results.",
    image: "/pitchsync-new.png",
    live: "https://pitchsync.vercel.app",
    github: null,
    tech: ["React", "Tailwind", "REST API", "Vercel"],
  },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/firdausasalat-1714ba385", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/firdausa7", icon: SiGithub, label: "GitHub" },
  { href: "https://www.instagram.com/firdausahh?utm_source=qr", icon: SiInstagram, label: "Instagram" },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ─── Reusable section label ───────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[#00e5ff] text-[11px] tracking-[0.35em] uppercase font-semibold mb-4 flex items-center gap-3">
      <span className="w-8 h-px bg-[#00e5ff]" />
      {text}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f0f0f0] font-sans">

      {/* ══════════════════════════════════════════════════════ HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12 lg:px-24 pt-16"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid lines — cyan at 8% */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
          {/* Top glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,255,0.07),transparent)]" />
          {/* Vignette — edges fade to dark */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_80%_at_50%_50%,transparent_40%,rgba(10,10,10,0.75)_100%)]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div className="pt-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#00e5ff] text-[13px] tracking-[0.45em] uppercase font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[#00e5ff]" />
              <CheckCircle2 size={14} className="shrink-0" />
              Meta Certified · Nairobi, Kenya · Available for Opportunities
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.2rem,9vw,8rem)] text-white mb-6"
              style={{ letterSpacing: "-0.02em", lineHeight: 0.93 }}
            >
              FIRDAUSA
              <br />
              <span className="text-[#00e5ff]">DAHIR</span>
              <br />
              SALAT
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-2xl font-display text-zinc-300 mb-6 h-9 flex items-center"
            >
              I'm a&nbsp;
              <Typewriter />
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-l-[3px] border-[#00e5ff] pl-5 italic mb-14 max-w-md"
              style={{ opacity: 0.9 }}
            >
              <span className="text-[#00e5ff] not-italic font-bold text-xl leading-none mr-0.5">&ldquo;</span>
              <span className="text-zinc-200 text-[15px] md:text-[18px] font-[500] leading-relaxed">
                I want to make things and make a{" "}
                <span className="text-white font-semibold not-italic">Difference</span>
              </span>
              <span className="text-[#00e5ff] not-italic font-bold text-xl leading-none ml-0.5">&rdquo;</span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              {/* Download Resume — cyan fill + shimmer */}
              <a
                href="/resume.pdf"
                download="Firdausa_Salat_Resume.pdf"
                className="glow-cyan relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 bg-[#00e5ff] text-[#0a0a0a] text-sm font-bold rounded-md active:scale-[0.97] transition-transform duration-100 group"
              >
                {/* Shimmer sweep on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <Download size={15} />
                Download Resume
              </a>
              {/* View Projects — outlined, fills on hover */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#00e5ff]/60 text-[#00e5ff] text-sm font-semibold rounded-md hover:bg-[#00e5ff] hover:text-[#0a0a0a] hover:border-[#00e5ff] active:scale-[0.97] transition-all duration-200 group"
              >
                View Projects
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <ProfilePhoto src="/myhero.jpeg" alt="Firdausa Dahir Salat" size={360} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-700 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════ CERTIFICATIONS */}
      <section
        id="certifications"
        className="py-16 px-6 md:px-12 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: cert.badgeColor,
                    borderColor: cert.borderColor,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${cert.iconColor}18` }}
                    >
                      <Icon size={20} style={{ color: cert.iconColor }} />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight mb-1">
                      {cert.title}
                    </p>
                    <p className="text-zinc-400 text-xs mb-1">{cert.issuer}</p>
                    <p className="text-zinc-600 text-[11px]">{cert.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ ABOUT */}
      <section
        id="about"
        className="py-28 md:py-36 px-6 md:px-12 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <SectionLabel text="About" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            {/* Brand statement */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] text-white mb-8">
                Building fast, beautiful,{" "}
                <span className="text-[#00e5ff]">and intelligent</span>{" "}
                web experiences.
              </h2>
              <div className="w-12 h-px bg-[#00e5ff]/40 mb-8" />
              <div className="space-y-5 text-zinc-400 text-[15px] leading-[1.9]">
                <p>
                  As a <span className="text-zinc-200 font-medium">Meta Certified Frontend Engineer</span>,
                  I specialize in React, Next.js, and Tailwind CSS — and I layer in Generative AI
                  to make products smarter.
                </p>
                <p>
                  Based in Nairobi, I'm on a mission to build technology that creates real impact
                  across <span className="text-zinc-200 font-medium">Africa and beyond</span>.
                  I've worked on everything from water management dashboards to AI-powered logistics platforms.
                </p>
                <p>
                  Currently a Fellow at{" "}
                  <span className="text-zinc-200 font-medium">Tech4Dev's Women Techsters Fellowship</span>,
                  collaborating with engineers across the continent to build the next generation of
                  African tech.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 lg:pt-2"
            >
              {[
                { label: "Certification", value: "Meta Frontend Developer Certificate" },
                { label: "Current Focus", value: "Generative AI & Frontend Engineering" },
                { label: "Location", value: "Nairobi, Kenya 🇰🇪" },
                { label: "Fellowship", value: "Tech4Dev Women Techsters" },
                { label: "Status", value: "Available for new opportunities" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className="border border-white/[0.06] rounded-xl p-5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#00e5ff]/15 transition-all duration-200"
                >
                  <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase mb-1.5 font-medium">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ TECH STACK */}
      <section
        id="stack"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <SectionLabel text="Stack" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-white">
              What I Work With
            </h2>
          </motion.div>

          <div className="space-y-6">
            {Object.entries(techStack).map(([category, items], catIdx) => {
              const scrollLeft = catIdx % 2 === 0;
              // Duplicate items for seamless loop
              const doubled = [...items, ...items];
              return (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.55, delay: catIdx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <p className="text-zinc-600 text-[10px] tracking-[0.25em] uppercase font-medium mb-3 px-1">
                    {category}
                  </p>
                  {/* Marquee track — overflow hidden + edge fade */}
                  <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div
                      className={`flex gap-3 w-max ${
                        scrollLeft ? "animate-marquee-left" : "animate-marquee-right"
                      }`}
                    >
                      {doubled.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={`${item.name}-${i}`}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00e5ff]/25 hover:bg-[#00e5ff]/[0.05] transition-all duration-200 group cursor-default shrink-0"
                          >
                            <Icon
                              size={15}
                              style={{ color: item.color }}
                              className="group-hover:scale-110 transition-transform duration-200"
                            />
                            <span className="text-zinc-400 text-[13px] font-medium group-hover:text-zinc-200 transition-colors duration-200 whitespace-nowrap">
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ EXPERIENCE */}
      <section
        id="experience"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <SectionLabel text="Experience" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-white">
              Where I've Been
            </h2>
          </motion.div>

          <div className="space-y-5 max-w-3xl">
            {experience.map((entry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] hover:border-[#00e5ff]/10 transition-all duration-200"
              >
                {/* Header */}
                <div className="p-8 border-b border-white/[0.05]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <p className="text-[#00e5ff] text-[10px] tracking-[0.25em] uppercase font-bold mb-2">
                        {entry.role}
                      </p>
                      {entry.companyLink ? (
                        <a
                          href={entry.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-xl text-white hover:text-[#00e5ff] transition-colors duration-200 inline-flex items-center gap-1.5 group/link mb-1"
                        >
                          {entry.company}
                          <ArrowUpRight size={15} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <h3 className="font-display text-xl text-white mb-1">
                          {entry.company}
                        </h3>
                      )}
                      <p className="text-zinc-600 text-xs">{entry.companyNote}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-zinc-400 text-xs mb-1">{entry.duration}</p>
                      <p className="text-zinc-600 text-[11px]">{entry.location}</p>
                      {entry.certId && (
                        <p className="text-zinc-700 text-[10px] mt-1 font-mono">{entry.certId}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {entry.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-zinc-400 text-[13px] md:text-sm leading-relaxed">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#00e5ff] flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] text-zinc-500 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ PROJECTS */}
      <section
        id="projects"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <SectionLabel text="Work" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-white">
              Selected Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] hover:border-[#00e5ff]/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
                  <span className="absolute top-4 left-5 font-display text-5xl font-bold text-white/[0.05] select-none leading-none">
                    {project.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-lg text-white mb-2 group-hover:text-[#00e5ff] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] text-zinc-500 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-[12px] font-semibold hover:bg-[#00e5ff]/20 transition-all duration-200"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.08] text-zinc-400 text-[12px] font-medium hover:border-white/20 hover:text-white transition-all duration-200"
                      >
                        <SiGithub size={12} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ CONTACT */}
      <section
        id="contact"
        className="py-32 md:py-44 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00e5ff] text-[11px] tracking-[0.35em] uppercase font-semibold mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[#00e5ff]" />
              Contact
              <span className="w-8 h-px bg-[#00e5ff]" />
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-tight mb-8">
              Let's Build
              <br />
              <span className="text-[#00e5ff]">Something</span> Great
            </h2>
            <p className="text-zinc-500 text-[15px] max-w-xl mx-auto mb-14 leading-relaxed">
              Open to full-time roles, freelance projects, or just a great conversation about
              building with AI. My inbox is always open.
            </p>
            <a
              href="mailto:info@firdausa.dev"
              className="glow-cyan inline-flex items-center gap-3 font-display text-xl md:text-2xl text-[#0a0a0a] bg-[#00e5ff] px-8 py-4 rounded-full font-bold hover:bg-[#00e5ff]/90 transition-all duration-200 group"
            >
              info@firdausa.dev
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ FOOTER */}
      <footer className="border-t border-white/5 px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-zinc-700 text-xs tracking-wide">
              © {new Date().getFullYear()} Firdausa Dahir Salat
            </p>
            <p className="text-zinc-800 text-[11px] mt-0.5">
              Meta Certified Frontend Engineer · Nairobi, Kenya
            </p>
          </div>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-zinc-700 hover:text-[#00e5ff] transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
