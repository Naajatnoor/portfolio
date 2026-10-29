"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "Better Auth",
  "Git",
  "GitHub",
];

const projects = [
  {
    number: "01",
    title: "Workout Log",
    description:
      "A workout tracking application with a clean interface, reusable React components, and responsive layouts.",
       image: "/projects/workout-log.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://workout-log-liard.vercel.app/",
    github: "https://github.com/Naajatnoor/workout-log",
  },
  {
    number: "02",
    title: "DevStack Builder",
    description:
      "An interactive technology stack builder for browsing technologies and creating a personalized collection of development tools.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://devstack-sooty-gamma.vercel.app/",
    github: "https://github.com/Naajatnoor/A05-DevStack",
  },
  {
    number: "03",
    title: "DevConf 2026",
    description:
      "A conference landing page focused on structured content, visual hierarchy, and frontend fundamentals.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://naajatnoor.github.io/A01-DevConf2026/",
    github: "https://github.com/Naajatnoor/A01-DevConf2026",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    description: "Learning server-side development and data management.",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Tools & Authentication",
    description: "Development workflow and authentication fundamentals.",
    skills: ["Git", "GitHub", "VS Code", "Better Auth"],
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[140px]" />
        <div className="absolute right-0 top-[45%] h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-10">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-blue-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative mt-9 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d10] to-[#09090b] p-6 shadow-2xl shadow-black/20 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-blue-400/[0.10]" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-blue-400/[0.10]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
                <Sparkles size={14} />
                Professional Resume
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Najat Noor<span className="text-blue-500">.</span>
              </h1>

              <p className="mt-4 text-lg font-medium text-zinc-300 sm:text-xl">
                Frontend Developer
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
                Computer Science student passionate about frontend
                development, modern web technologies, and creating clean,
                responsive, and user-friendly digital experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-blue-400" />
                  Amberkhana, Sylhet, Bangladesh
                </span>

                <a
                  href="mailto:naajatnoor@gmail.com"
                  className="inline-flex items-center gap-2 transition hover:text-blue-400"
                >
                  <Mail size={15} className="text-blue-400" />
                  naajatnoor@gmail.com
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://github.com/Naajatnoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/naajatnoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Resume actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[190px] lg:flex-col">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                View Resume
                <ExternalLink size={16} />
              </a>

              <a
                href="/resume.pdf"
                download="Najat-Noor-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-zinc-200 transition hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.08]"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>

          <div className="relative mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                Focus
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-200">
                Frontend Development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                Approach
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-200">
                Learn & Build
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                Portfolio
              </p>
              <Link
                href="/"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                Explore my work
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Main resume layout */}
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left column */}
          <div className="space-y-8">
            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
            >
              <SectionHeading
                icon={<BriefcaseBusiness size={18} />}
                eyebrow="Introduction"
                title="Profile"
              />

              <p className="mt-5 text-sm leading-8 text-zinc-400">
              I enjoy turning ideas into clean, responsive web interfaces using
              React, Next.js, TypeScript, and Tailwind CSS. Through hands-on
              projects, I continue to improve my skills while exploring backend
              technologies like Node.js, Express.js, and MongoDB.
              </p>
            </motion.section>

            {/* Education */}
          
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.5, delay: 0.05 }}
  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
>
  <SectionHeading
    icon={<GraduationCap size={19} />}
    eyebrow="Academic Background"
    title="Education"
  />

  <div className="mt-6 border-l border-blue-500/40 pl-5">
    <div className="relative">
      <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-400 ring-4 ring-blue-500/10" />

      <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
        2024 – 2028 (Expected)
      </p>

      <h3 className="mt-3 text-lg font-semibold text-white">
        Bachelor&apos;s Degree in Computer Science and Engineering
      </h3>

      <p className="mt-2 text-sm font-medium text-zinc-300">
        Leading University
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
          2nd Year · 5th Semester
        </span>
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
          CGPA: 3.89 / 4.00
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        Currently pursuing my undergraduate degree in Computer Science and
        Engineering, building a strong foundation in programming, Data
        Structures, Algorithms, and Object Oriented Programming(Java).
      </p>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-zinc-200">
          Relevant Coursework
        </h4>

        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Data Structures",
            "Algorithms",
           
          ].map((course) => (
            <span
              key={course}
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-300"
            >
              {course}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs leading-6 text-zinc-500">
          Currently studying Object-Oriented Programming (Java).
        </p>
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
        <MapPin size={14} />
        Sylhet, Bangladesh
      </p>
    </div>
  </div>
</motion.section>


            {/* Soft skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
            >
              <SectionHeading
                icon={<Sparkles size={18} />}
                eyebrow="How I Work"
                title="Strengths"
              />

              <div className="mt-5 grid grid-cols-1 gap-2 ">
                {[
                  "Problem Solving",
                  "Continuous Learning",
                  "Adaptability",
                  "Attention to Detail",
                  "Time Management",
                  "Creative Thinking",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-300 hover:text-blue-400"
                  >
                    {item} 
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <SectionHeading
                icon={<Code2 size={19} />}
                eyebrow="Technical Toolkit"
                title="Skills & Technologies"
              />

              <div className="mt-7 space-y-6">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="border-b border-white/[0.07] pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-sm font-semibold text-zinc-200">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-zinc-500">
                      {group.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-blue-400/15 bg-blue-500/[0.06] px-3 py-2 text-xs text-zinc-300 transition hover:border-blue-400/40 hover:text-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <SectionHeading
                icon={<Terminal size={19} />}
                eyebrow="Selected Work"
                title="Projects"
              />

              <div className="mt-7 space-y-4">
                {projects.map((project) => (
                  <article
                    key={project.number}
                    className="group rounded-xl border border-white/[0.08] bg-black/20 p-5 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.025] sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="pt-1 text-xs font-medium text-blue-400">
                        {project.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-white transition group-hover:text-blue-300 sm:text-lg">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-zinc-400">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-zinc-400"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-4 border-t border-white/[0.07] pt-4">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 transition hover:text-blue-300"
                          >
                            Live Demo
                            <ArrowUpRight size={14} />
                          </a>

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition hover:text-white"
                          >
                            Source Code
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <Link
                href="/#projects"
                className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-blue-400"
              >
                Explore all projects
                <ArrowUpRight size={16} />
              </Link>
            </motion.section>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.09] via-white/[0.025] to-transparent p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s Connect
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Have an opportunity in mind?
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              I&apos;d love to connect, learn, and explore meaningful
              opportunities.
            </p>
          </div>

          <a
  href="https://www.linkedin.com/in/naajatnoor/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
>
  Get in Touch
  <FaLinkedin size={16} />
</a>
        </motion.section>

        {/* Footer note */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-600">
            Najat Noor · Frontend Developer
          </p>

          <a
            href="/resume.pdf"
            download="Najat-Noor-Resume.pdf"
            className="inline-flex items-center gap-2 text-xs text-zinc-300 transition hover:text-blue-400"
          >
            <ArrowDownToLine size={14} />
            Download PDF Resume
          </a>
          
        </div>
        <div className="text-right ">
           <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[12px] text-zinc-500 transition hover:text-blue-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Portfolio
          </Link>
        </motion.div>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({
  icon,
  eyebrow,
  title,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-blue-400">
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}
