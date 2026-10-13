"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  ShieldCheck,
  Brain,
  Sparkles,
  ArrowUpRight,
  Wrench,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
    number: "01",
  },
  {
    title: "Database & Data",
    description: "Working with data storage and database fundamentals.",
    icon: Database,
    skills: ["MongoDB"],
    number: "02",
  },
  {
    title: "Authentication",
    description: "Exploring authentication and user session management.",
    icon: ShieldCheck,
    skills: ["Better Auth", "Sign In / Sign Up", "Session Management"],
    number: "03",
  },
];

const tools = ["Git", "GitHub", "VS Code"];

const softSkills = [
  "Problem Solving",
  "Continuous Learning",
  "Adaptability",
  "Attention to Detail",
  "Time Management",
  "Creative Thinking",
  "Self-Motivation",
  "Self-Management",
  "Team Colaboration"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#09090b] px-6 py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-white/[0.025] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-500" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
              My Expertise
            </p>
          </div>

          <h2 className=" text-blue-600 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Skills &{" "}
            <span className="text-blue-200  opacity-15">Technologies.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Technologies I&apos;m learning and using to build modern web
            applications, along with the tools and personal skills that
            support my growth as a developer.
          </p>
        </motion.div>

        {/* Technical skills */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <Code2 size={20} className="text-zinc-400" />
            <h3 className="text-xl font-semibold sm:text-2xl">
              Technical Skills
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045] sm:p-7 text-blue-500"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-colors group-hover:bg-white/10">
                      <Icon size={22} className="text-zinc-200" />
                    </div>

                    <span className="text-sm font-medium text-zinc-600">
                      {group.number}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold leading-snug">
                    {group.title}
                  </h4>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-2 text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white   "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-white/[0.025] blur-2xl transition-colors group-hover:bg-white/[0.06]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Development tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-20 rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-9"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
              <Wrench size={21} className="text-zinc-200" />
            </div>

            <div>
              <h3 className="text-xl font-semibold ">Tools I Use</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Tools for coding and version control.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-transparent p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12"
        >
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
              <Brain size={23} className="text-zinc-200" />
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Beyond Code
            </p>

            <h3 className="text-3xl font-bold leading-tight sm:text-4xl text-blue-600">
              Soft Skills
              <span className="block text-zinc-600">& Mindset.</span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              Growing as a developer means more than writing code. It also
              means solving problems, managing time, staying adaptable, and
              learning from every challenge.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <Sparkles size={14} className="text-zinc-500" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-zinc-500">
            Continuously improving through hands-on projects, practice, and
            curiosity.
          </p>

          <a
            href="#projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            See what I&apos;m building
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}