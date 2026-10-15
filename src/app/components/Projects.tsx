"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  Code2,
  Eye,
  Sparkles,
  X,
  Target,
  GraduationCap,
  Lightbulb,
  CalendarDays,
  Layers3,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  challenges?: string;
  futureImprovements?: string;
  features: string[];
  learning: string;
  year?: string;
  developer?: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "Workout Log",
    category: "Web Application",
    description:
      "A workout tracking application designed to help users record, organize, and manage their fitness activities through a clean and intuitive interface. Built with React and TypeScript, this project focuses on reusable components, structured data handling, and responsive layouts.",
    image: "/projects/workout.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://workout-log-liard.vercel.app/",
    githubUrl: "https://github.com/Naajatnoor/workout-log",
    challenges:
      "Creating a clear interface for organizing workout information while maintaining reusable components and predictable application state.",
    futureImprovements:
      "Workout history, progress visualization, and additional tools for tracking fitness goals.",
    features: [
      "Clean and intuitive user interface",
      "Reusable React components",
      "Responsive layouts",
      "Structured workout information",
    ],
    learning:
      "Improved my understanding of React component architecture, TypeScript, responsive UI development, and organizing application data.",
    year: "2026",
    developer: "Solo",
    status: "Frontend",
  },
  {
    title: "DevStack Builder",
    category: "Frontend Development",
    description:
      "An interactive technology stack builder that allows users to explore development technologies and create their own collection of tools. Users can browse technology cards and add or remove technologies from their selected stack.",
    image: "/projects/devconf.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://devstack-sooty-gamma.vercel.app/",
    githubUrl: "https://github.com/Naajatnoor/A05-DevStack",
    challenges:
      "Managing selected technologies across components, keeping the stack synchronized with user interactions, and presenting dynamic data in a responsive layout.",
    futureImprovements:
      "Saving custom stacks, filtering technologies by category, and sharing preferred technology combinations.",
    features: [
      "Browse technology cards",
      "Add technologies to a personal stack",
      "Remove selected technologies",
      "Dynamic UI updates with React state",
      "Responsive technology grid",
    ],
    learning:
      "Practiced React state management, TypeScript interfaces, reusable components, dynamic rendering, and passing props between components.",
    year: "2026",
    developer: "Solo",
    status: "Frontend",
  },
  {
    title: "DevConf 2026",
    category: "Conference Website",
    description:
      "A conference landing page designed to present event information through a structured and engaging interface. The project emphasizes semantic HTML, organized content sections, consistent typography, and visual hierarchy.",
    image: "/projects/Screenshot_1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://naajatnoor.github.io/A01-DevConf2026/",
    githubUrl: "https://github.com/Naajatnoor/A01-DevConf2026",
    challenges:
      "Organizing event information into clear sections and maintaining consistent spacing, typography, and responsive behavior.",
    futureImprovements:
      "Event registration, speaker profiles, session schedules, and interactive event information.",
    features: [
      "Structured conference landing page",
      "Organized content sections",
      "Consistent typography and spacing",
      "Frontend layout and styling",
    ],
    learning:
      "Strengthened my knowledge of semantic HTML, CSS layouts, JavaScript fundamentals, and creating structured web pages.",
    year: "2026",
    developer: "Solo",
    status: "Frontend",
  },
  {
    title: "FIFA WORLD CUP",
    category: "Frontend Practice",
    description:
      "A football-themed website inspired by the excitement of the FIFA World Cup. This project explores sports-oriented visual design, structured page layouts, content organization, and styling techniques.",
    image: "/projects/fifaworld.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://naajatnoor.github.io/Practice-2/",
    githubUrl: "",
    challenges:
      "Creating a visually engaging sports-themed layout while organizing content and maintaining a consistent design.",
    futureImprovements:
      "Team profiles, match schedules, tournament standings, and interactive football-related content.",
    features: [
      "Football-themed visual design",
      "Organized page sections",
      "Custom CSS styling",
      "JavaScript practice",
    ],
    learning:
      "Practiced page structure, CSS styling, visual hierarchy, and building themed interfaces using frontend fundamentals.",
    year: "2026",
    developer: "Solo",
    status: "Frontend",
  },
  {
    title: "Brew Coffee",
    category: "Frontend Practice",
    description:
      "A coffee-themed website created to explore visual storytelling and develop a welcoming online experience around a coffee brand concept. The design focuses on clean layouts, readable typography, balanced spacing, and visual consistency.",
    image: "/projects/breqcorner.png",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://naajatnoor.github.io/Practice-1/",
    githubUrl: "",
    challenges:
      "Building a cohesive visual identity through typography, spacing, colors, and a consistent page layout using core CSS techniques.",
    futureImprovements:
      "A responsive menu, product cards, online ordering UI, and a contact or reservation section.",
    features: [
      "Coffee-themed website design",
      "Clean page layouts",
      "Typography and spacing",
      "CSS-based visual styling",
    ],
    learning:
      "Improved my understanding of HTML structure, CSS styling, visual consistency, and translating a simple concept into a web interface.",
    year: "2026",
    developer: "Solo",
    status: "Frontend",
  },
];

const allTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090b] px-5 py-24 text-white sm:px-6 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400 sm:text-sm">
                My Portfolio
              </p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              Things I&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Built.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
              A collection of projects that reflect my learning journey,
              creativity, and passion for building modern web experiences.
              Every project helps me grow as a developer.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid w-full max-w-sm grid-cols-2 gap-3 lg:w-auto lg:shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-blue-400/30">
              <FolderCode size={21} className="mb-4 text-blue-400" />
              <p className="text-3xl font-semibold tracking-tight">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Total Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-blue-400/30">
              <Code2 size={21} className="mb-4 text-blue-400" />
              <p className="text-3xl font-semibold tracking-tight">
                {String(allTechnologies.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Technologies Used
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section label */}
        <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-sm text-zinc-400">Selected Works</p>
          <p className="text-xs tracking-widest text-zinc-600">
            01 — {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e10] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#141416]">
                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                <span className="absolute left-4 top-4 rounded-full border border-blue-400/20 bg-black/60 px-3 py-1.5 text-[10px] font-medium text-blue-200 backdrop-blur-md sm:text-xs">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 text-4xl font-bold text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 left-4 inline-flex translate-y-2 items-center gap-2 rounded-lg border border-blue-400/30 bg-black/70 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-md transition-all hover:bg-blue-600 focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Eye size={14} />
                  Quick View
                </button>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-blue-300 sm:text-xl">
                    {project.title}
                  </h3>

                  <span className="text-xs tabular-nums text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-5 flex-1 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Built with
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-blue-400/10 bg-blue-500/[0.06] px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-blue-400/30 hover:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-500 sm:text-sm"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2.5 text-xs text-zinc-300 transition-all hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200 sm:text-sm"
                  >
                    <Eye size={15} />
                    View Details
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      <SiGithub size={17} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* All technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <Sparkles size={18} className="text-blue-400" />
            <h3 className="text-base font-medium text-zinc-200">
              Technologies Across My Projects
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {allTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.25 }}
                className="rounded-lg border border-white/10 px-3.5 py-2 text-sm text-zinc-400 transition-all hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* GitHub footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.015] px-6 py-8 text-center sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-lg font-medium text-zinc-200">
              More projects are on the way.
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Learning, experimenting, and building something better every day.
            </p>
          </div>

          <a
            href="https://github.com/Naajatnoor"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
          >
            <SiGithub size={17} />
            More on GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-2xl border border-blue-400/20 bg-[#090e1b] shadow-2xl shadow-blue-950/40 sm:rounded-3xl"
            >
              {/* Modal header */}
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.08] bg-[#090e1b]/95 px-5 py-4 backdrop-blur-xl sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <FolderCode size={18} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Project Showcase
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Project details &amp; development journey
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Two-column modal layout */}
              <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                {/* Left column: image and technical details */}
                <div className="border-b border-white/[0.08] p-4 sm:p-6 md:border-b-0 md:border-r md:p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Project Preview
                    </p>

                    <span className="flex items-center gap-2 text-[11px] text-zinc-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      Preview
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-blue-400/15 bg-[#0d1425]">
                    <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />

                      <span className="ml-3 truncate text-[10px] text-zinc-500">
                        {selectedProject.title}
                      </span>
                    </div>

                  <div className="group relative aspect-[4/3] overflow-hidden bg-[#0e1422]">
  <img
    src={selectedProject.image}
    alt={`${selectedProject.title} project preview`}
    className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d18]/40 to-transparent" />
</div>
                  </div>

                  {/* Project metadata */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                      <div className="mb-2 flex items-center gap-2 text-zinc-500">
                        <CalendarDays size={14} />
                        <span className="text-[10px] uppercase tracking-wider">
                          Year
                        </span>
                      </div>
                      <p className="text-sm font-medium text-zinc-200">
                        {selectedProject.year ?? "N/A"}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                      <div className="mb-2 flex items-center gap-2 text-zinc-500">
                        <Layers3 size={14} />
                        <span className="text-[10px] uppercase tracking-wider">
                          Type
                        </span>
                      </div>
                      <p className="text-sm font-medium text-zinc-200">
                        {selectedProject.status ?? "Project"}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-7">
                    <div className="mb-4 flex items-center gap-2">
                      <Code2 size={16} className="text-blue-400" />
                      <h4 className="text-sm font-semibold text-zinc-200">
                        Tech Stack
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-blue-400/15 bg-blue-500/[0.07] px-3 py-2 text-xs font-medium text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-7">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles size={16} className="text-blue-400" />
                      <h4 className="text-sm font-semibold text-zinc-200">
                        Key Features
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {selectedProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column: description and learning */}
                <div className="flex flex-col p-5 sm:p-7 md:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[11px] font-medium text-blue-300">
                      {selectedProject.category}
                    </span>

                    <span className="text-xs text-zinc-600">
                      {selectedProject.developer ?? "Solo"} Project
                    </span>
                  </div>

                  <h3
                    id="project-modal-title"
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                    {selectedProject.title}
                  </h3>

                  <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

                  {/* Overview */}
                  <div className="mt-7">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Overview
                    </p>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-[15px]">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div className="mt-7 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Target size={16} className="text-blue-400" />
                        <h4 className="text-sm font-semibold text-zinc-200">
                          Challenges
                        </h4>
                      </div>

                      <p className="text-sm leading-7 text-zinc-400">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  )}

                  {/* Learning */}
                  <div className="mt-4 rounded-xl border border-blue-400/10 bg-blue-500/[0.04] p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <GraduationCap
                        size={17}
                        className="text-blue-400"
                      />
                      <h4 className="text-sm font-semibold text-zinc-200">
                        What I Learned
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400">
                      {selectedProject.learning}
                    </p>
                  </div>

                  {/* Future improvements */}
                  {selectedProject.futureImprovements && (
                    <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Lightbulb size={16} className="text-blue-400" />
                        <h4 className="text-sm font-semibold text-zinc-200">
                          Future Improvements
                        </h4>
                      </div>

                      <p className="text-sm leading-7 text-zinc-400">
                        {selectedProject.futureImprovements}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="mt-auto pt-8">
                    <div className="mb-4 border-t border-white/[0.08]" />

                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Explore this project
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        Visit Live Website
                        <ExternalLink
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>

                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <SiGithub size={17} />
                          Source Code
                          <ArrowUpRight
                            size={15}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      )}
                    </div>

                    <p className="mt-4 text-center text-[11px] text-zinc-600">
                      Thanks for checking out my work.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
