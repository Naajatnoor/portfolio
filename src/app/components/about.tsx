"use client";

import { ArrowUpRight, Code2, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090b] px-6 py-24 text-white sm:py-28 lg:py-27"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-white/[0.035] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-500" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
              Get to know me
            </p>
          </div>

          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl  text-blue-600">
            About{" "}
            <span className="text-blue-200  opacity-15">Me.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            A little introduction to who I am, what I do, and what inspires me
            to build for the web.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Sparkles size={20} className="text-blue-600" />
              </div>

              <span className="text-sm font-medium text-zinc-400">
                My Introduction
              </span>
            </div>

            <h3 className="max-w-2xl text-3xl font-semibold leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl">
              Building the web,
              <span className="mt-2 block text-zinc-500">
                one idea at a time.
              </span>
            </h3>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              <p>
                Hi, I&apos;m{" "}
                <span className="font-medium text-white">Najat Noor</span>,
                a Computer Science student with a growing passion for frontend
                development and modern web technologies.
              </p>

              <p>
                I enjoy transforming ideas into clean, responsive, and
                user-friendly interfaces. From exploring new technologies to
                solving coding challenges, I see every step as an opportunity
                to grow.
              </p>

              <p>
                I&apos;m continuously learning, building projects, and
                improving my skills with the goal of creating meaningful
                digital experiences that combine thoughtful design with
                practical functionality.
              </p>
            </div>

            <div className="mt-9">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
              >
                Explore My Projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right: Developer card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent p-7 sm:p-10 lg:p-11"
          >
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/[0.07]" />

            <div className="relative">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Code2 size={27} className="text-zinc-200" />
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-zinc-400">
                    Currently Learning
                  </span>
                </div>
              </div>

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                My Mindset
              </p>

              <h3 className="max-w-sm text-3xl font-semibold leading-snug sm:text-4xl">
                Always learning.
                <br />
                <span className="text-zinc-500">Always building.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                Every project is a chance to experiment, solve problems, and
                become a better developer. Progress over perfection, always.
              </p>
            </div>

            {/* Skills */}
            <div className="relative mt-12 border-t border-white/10 pt-8">
              <div className="mb-5 flex items-center gap-2">
                <Terminal size={17} className="text-zinc-400" />
                <h4 className="text-sm font-medium text-zinc-300">
                  Technologies I Work With
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="cursor-default rounded-lg border border-white/10 bg-black/20 px-3.5 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom separator */}
        <div className="mt-20 flex items-center gap-5 md:mt-24">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Keep Growing
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}