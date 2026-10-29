"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Leading University",
    location: "Sylhet, Bangladesh",
    duration: "2024 – 2028 (Expected)",
    status: "Currently Studying",
    semester: "2nd Year · 5th Semester",
    cgpa: "CGPA: 3.89 / 4.00",
    description:
      "Currently pursuing my undergraduate degree in Computer Science and Engineering, building a strong foundation in programming, Data Structures, Algorithms, and Object-Oriented Programming (Java).",
    courses: ["Structured Programming", "C++","Data Structures", "Algorithms"],
    currentStudy: "Currently studying Object-Oriented Programming (Java).",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <GraduationCap size={16} />
            My Academic Journey
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Education<span className="text-blue-500">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            My academic journey is helping me develop the knowledge and skills
            to build meaningful digital experiences.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="relative">
          {/* Timeline */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent sm:left-[27px]" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={item.institution}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-[#0d1729] text-blue-400 shadow-lg shadow-blue-500/10 sm:h-14 sm:w-14">
                  <GraduationCap size={24} />
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.04] sm:p-8">
                  {/* Top row */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                        {item.status}
                      </span>

                      <h3 className="text-lg font-semibold leading-7 text-white transition-colors group-hover:text-blue-400 sm:text-xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-base font-medium text-zinc-300">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 self-start rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-400">
                      <CalendarDays size={16} className="text-blue-400" />
                      {item.duration}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin size={15} className="text-blue-400" />
                    {item.location}
                  </div>

                  {/* Academic information */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300 sm:text-sm">
                      {item.semester}
                    </span>

                    <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300 sm:text-sm">
                      {item.cgpa}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.description}
                  </p>

                  {/* Relevant coursework */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-200">
                      <BookOpen size={17} className="text-blue-400" />
                      Relevant Coursework
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-400 transition-colors hover:border-blue-500/30 hover:text-blue-300 sm:text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-xs leading-6 text-zinc-500">
                      {item.currentStudy}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
