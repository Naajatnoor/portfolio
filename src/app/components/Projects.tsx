// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   ExternalLink,
//   FolderCode,
//   Layers3,
//   X,
//   Code2,
//   Eye,
//   Sparkles,
// } from "lucide-react";
// import { SiGithub } from "react-icons/si";

// type Project = {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   liveUrl: string;
//   githubUrl: string;
// };

// const projects: Project[] = [
//   {
//     title: "Workout Log",
//     category: "Web Application",
//     description:
//       "A workout logging application designed to help users record and manage their workout activities through a dedicated web interface.",
//     image: "/projects/workout.png",
//     technologies: ["React", "TypeScript", "Tailwind CSS"],
//     liveUrl: "https://workout-log-liard.vercel.app/",
//     githubUrl: "https://github.com/Naajatnoor/workout-log",
//   },
//   {
//     title: "DevStack Builder",
//     category: "Frontend Development",
//     description:
//       "An interactive technology stack builder where users can explore different development technologies and create their own stack.",
//     image: "/projects/devconf.png",
//     technologies: ["React", "TypeScript", "Tailwind CSS"],
//     liveUrl: "https://devstack-sooty-gamma.vercel.app/",
//     githubUrl: "https://github.com/Naajatnoor/A05-DevStack",
//   },
//   {
//     title: "DevConf 2026",
//     category: "Conference Website",
//     description:
//       "A conference landing page built to present event information through a structured layout and an engaging web experience.",
//     image: "/projects/Screenshot_1.png",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     liveUrl: "https://naajatnoor.github.io/A01-DevConf2026/",
//     githubUrl: "https://github.com/Naajatnoor/A01-DevConf2026",
//   },
//   {
//     title: "FIFA WORLD CUP",
//     category: "Frontend Practice",
//     description:
//       "A football-themed frontend project focused on page layouts, styling, and creating an engaging user interface.",
//     image: "/projects/fifaworld.png",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     liveUrl: "https://naajatnoor.github.io/Practice-2/",
//     githubUrl: "",
//   },
//   {
//     title: "Brew Coffee",
//     category: "Frontend Practice",
//     description:
//       "A coffee-themed website created to practice frontend fundamentals, visual styling, and clean web layouts.",
//     image: "/projects/breqcorner.png",
//     technologies: ["HTML", "CSS"],
//     liveUrl: "https://naajatnoor.github.io/Practice-1/",
//     githubUrl: "",
//   },
// ];

// const allTechnologies = [
//   ...new Set(projects.flatMap((project) => project.technologies)),
// ];

// export default function Projects() {
//   const [selectedProject, setSelectedProject] =
//     useState<Project | null>(null);

//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-[#09090b] px-5 py-24 text-white sm:px-6 sm:py-28 lg:py-32"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-white/[0.035] blur-[120px]" />

//       <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[130px]" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
//         >
//           <div>
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-10 bg-zinc-500" />
//               <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
//                 My Portfolio
//               </p>
//             </div>

//             <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
//               Things I&apos;ve{" "}
//               <span className="text-zinc-600">Built.</span>
//             </h2>

//             <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
//               A collection of projects that reflect my learning journey,
//               creativity, and passion for building modern web experiences.
//               Every project helps me grow as a developer.
//             </p>
//           </div>

//           {/* Dynamic statistics */}
//           <div className="grid w-full max-w-sm grid-cols-2 gap-3 lg:w-auto lg:shrink-0">
//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20">
//               <FolderCode
//                 size={21}
//                 className="mb-4 text-zinc-400"
//               />
//               <p className="text-3xl font-semibold tracking-tight">
//                 {String(projects.length).padStart(2, "0")}
//               </p>
//               <p className="mt-1 text-xs text-zinc-500">
//                 Total Projects
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20">
//               <Code2 size={21} className="mb-4 text-zinc-400" />
//               <p className="text-3xl font-semibold tracking-tight">
//                 {String(allTechnologies.length).padStart(2, "0")}
//               </p>
//               <p className="mt-1 text-xs text-zinc-500">
//                 Technologies Used
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Small section label */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-7 flex items-center justify-between border-b border-white/10 pb-4"
//         >
//           <p className="text-sm text-zinc-400">
//             Selected Works
//           </p>

//           <p className="text-xs tracking-widest text-zinc-600">
//             01 — {String(projects.length).padStart(2, "0")}
//           </p>
//         </motion.div>

//         {/* Project cards */}
//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.article
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.12 }}
//               transition={{
//                 duration: 0.5,
//                 delay: (index % 3) * 0.1,
//               }}
//               className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e10] transition-colors duration-300 hover:border-white/25"
//             >
//               {/* Image preview */}
//               <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#141416]">
//                 <img
//                   src={project.image}
//                   alt={`${project.title} website screenshot`}
//                   loading="lazy"
//                   onError={(event) => {
//                     event.currentTarget.style.display = "none";
//                   }}
//                   className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70" />

//                 <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-medium tracking-wide text-zinc-200 backdrop-blur-md sm:text-xs">
//                   {project.category}
//                 </span>

//                 <span className="absolute bottom-4 right-4 text-4xl font-bold text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 {/* Image hover action */}
//                 <button
//                   type="button"
//                   onClick={() => setSelectedProject(project)}
//                   className="absolute bottom-4 left-4 inline-flex translate-y-2 items-center gap-2 rounded-lg border border-white/20 bg-black/70 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
//                 >
//                   <Eye size={14} />
//                   Quick View
//                 </button>
//               </div>

//               {/* Card content */}
//               <div className="flex flex-1 flex-col p-5 sm:p-6">
//                 <div className="mb-3 flex items-start justify-between gap-3">
//                   <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-zinc-300 sm:text-xl">
//                     {project.title}
//                   </h3>

//                   <span className="text-xs tabular-nums text-zinc-600">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <p className="mb-5 flex-1 text-sm leading-7 text-zinc-400">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mb-6">
//                   <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
//                     Built with
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-zinc-200 sm:text-sm"
//                   >
//                     Live Demo
//                     <ExternalLink size={14} />
//                   </a>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedProject(project)}
//                     className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2.5 text-xs text-zinc-300 transition-all hover:border-white/25 hover:bg-white/[0.05] hover:text-white sm:text-sm"
//                   >
//                     <Eye size={15} />
//                     View Details
//                   </button>

//                   {project.githubUrl && (
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`View ${project.title} source code on GitHub`}
//                       className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
//                     >
//                       <SiGithub size={17} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* All technologies */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.5 }}
//           className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <Sparkles size={18} className="text-zinc-400" />
//             <h3 className="text-base font-medium text-zinc-200">
//               Technologies Across My Projects
//             </h3>
//           </div>

//           <div className="flex flex-wrap gap-2.5">
//             {allTechnologies.map((tech, index) => (
//               <motion.span
//                 key={tech}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.04, duration: 0.25 }}
//                 className="rounded-lg border border-white/10 px-3.5 py-2 text-sm text-zinc-400 transition-all hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         {/* GitHub footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.5 }}
//           className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.015] px-6 py-8 text-center sm:flex-row sm:text-left"
//         >
//           <div>
//             <p className="text-lg font-medium text-zinc-200">
//               More projects are on the way.
//             </p>

//             <p className="mt-2 text-sm leading-6 text-zinc-500">
//               Learning, experimenting, and building something better every day.
//             </p>
//           </div>

//           <a
//             href="https://github.com/Naajatnoor"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
//           >
//             <SiGithub size={17} />
//             More on GitHub
//             <ArrowUpRight
//               size={16}
//               className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>
//         </motion.div>
//       </div>

//       {/* Project details modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             key="project-modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setSelectedProject(null)}
//             className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 25, scale: 0.97 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 15, scale: 0.98 }}
//               transition={{ duration: 0.25 }}
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby="project-modal-title"
//               onClick={(event) => event.stopPropagation()}
//               className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#0d0d0f] shadow-2xl shadow-black/50"
//             >
//               {/* Modal header */}
//               <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
//                 <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
//                   <FolderCode size={15} />
//                   Project Details
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setSelectedProject(null)}
//                   aria-label="Close project details"
//                   className="rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Modal image */}
//               <div className="relative aspect-[16/9] overflow-hidden bg-[#151517]">
//                 <img
//                   src={selectedProject.image}
//                   alt={`${selectedProject.title} website preview`}
//                   className="h-full w-full object-cover object-top"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent" />

//                 <span className="absolute bottom-4 left-5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs text-zinc-200 backdrop-blur-md sm:left-7">
//                   {selectedProject.category}
//                 </span>
//               </div>

//               {/* Modal content */}
//               <div className="px-5 pb-7 pt-2 sm:px-7 sm:pb-8">
//                 <h3
//                   id="project-modal-title"
//                   className="text-2xl font-bold tracking-tight sm:text-3xl"
//                 >
//                   {selectedProject.title}
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
//                   {selectedProject.description}
//                 </p>

//                 <div className="mt-7">
//                   <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
//                     Technologies Used
//                   </h4>

//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-zinc-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
//                   <a
//                     href={selectedProject.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
//                   >
//                     Visit Live Website
//                     <ExternalLink size={16} />
//                   </a>

//                   {selectedProject.githubUrl && (
//                     <a
//                       href={selectedProject.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm text-zinc-200 transition-colors hover:bg-white/[0.06]"
//                     >
//                       <SiGithub size={17} />
//                       Source Code
//                       <ArrowUpRight size={15} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  Code2,
  Eye,
  Sparkles,
  X,
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
};

const projects: Project[] = [
  {
    title: "Workout Log",
    category: "Web Application",
    description:
      "A workout logging application designed to help users record and manage their workout activities through a dedicated web interface.",
    image: "/projects/workout.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://workout-log-liard.vercel.app/",
    githubUrl: "https://github.com/Naajatnoor/workout-log",
  },
  {
    title: "DevStack Builder",
    category: "Frontend Development",
    description:
      "An interactive technology stack builder where users can explore different development technologies and create their own stack.",
    image: "/projects/devconf.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://devstack-sooty-gamma.vercel.app/",
    githubUrl: "https://github.com/Naajatnoor/A05-DevStack",
  },
  {
    title: "DevConf 2026",
    category: "Conference Website",
    description:
      "A conference landing page presenting event information through a structured layout and engaging web experience.",
    image: "/projects/Screenshot_1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://naajatnoor.github.io/A01-DevConf2026/",
    githubUrl: "https://github.com/Naajatnoor/A01-DevConf2026",
  },
  {
    title: "FIFA WORLD CUP",
    category: "Frontend Practice",
    description:
      "A football-themed frontend project focused on page layouts, styling, and creating an engaging user interface.",
    image: "/projects/fifaworld.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://naajatnoor.github.io/Practice-2/",
    githubUrl: "",
  },
  {
    title: "Brew Coffee",
    category: "Frontend Practice",
    description:
      "A coffee-themed website created to practice frontend fundamentals, visual styling, and clean web layouts.",
    image: "/projects/breqcorner.png",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://naajatnoor.github.io/Practice-1/",
    githubUrl: "",
  },
];

const allTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden  bg-[#09090b] px-5 py-24 text-white sm:px-6 sm:py-28 lg:py-30"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-32 -z-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

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
              <span className="h-px w-10 bg-zinc-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600 sm:text-sm">
                My Portfolio
              </p>
              {/* <Sparkles size={15} className="text-blue-400" /> */}
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              Things I&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Built.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
              A collection of projects that reflect my learning
              journey, creativity, and passion for building modern
              web experiences. Every project helps me grow as a
              developer.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid w-full max-w-sm grid-cols-2 gap-3 lg:w-auto lg:shrink-0">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-blue-500/20 bg-blue-950/30 p-5 transition-colors hover:border-blue-500/50"
            >
              <FolderCode
                size={22}
                className="mb-4 text-blue-400"
              />
              <p className="text-3xl font-bold tracking-tight">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Total Projects
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-blue-500/20 bg-blue-950/30 p-5 transition-colors hover:border-blue-500/50"
            >
              <Code2 size={22} className="mb-4 text-blue-400" />
              <p className="text-3xl font-bold tracking-tight">
                {String(allTechnologies.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Technologies
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-7 flex items-center justify-between border-b border-blue-500/20 pb-4"
        >
          <p className="flex items-center gap-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            Selected Works
          </p>

          <p className="text-xs tracking-widest text-blue-400/70">
            01 — {String(projects.length).padStart(2, "0")}
          </p>
        </motion.div>

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
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-500/15 bg-gradient-to-b from-[#101a2d] to-[#0b0d15] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/40"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-blue-500/15 bg-[#0c1220]">
                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b14]/90 via-transparent to-blue-950/10" />

                <span className="absolute left-4 top-4 rounded-full border border-blue-400/30 bg-blue-950/80 px-3 py-1.5 text-[10px] font-medium tracking-wide text-blue-100 backdrop-blur-md sm:text-xs">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 text-4xl font-bold text-blue-300/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 left-4 inline-flex translate-y-2 items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-600/90 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-blue-500 focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Eye size={14} />
                  Quick View
                </button>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-blue-400 sm:text-xl">
                    {project.title}
                  </h3>

                  <span className="text-xs tabular-nums text-blue-400/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-5 flex-1 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400/70">
                    Built With
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-blue-500/20 bg-blue-500/[0.07] px-2.5 py-1.5 text-xs text-blue-200/90 transition-colors hover:border-blue-400/50 hover:bg-blue-500/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-blue-500/15 pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-950/40 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-900/50 sm:text-sm"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-3.5 py-2.5 text-xs text-blue-100 transition-all hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white sm:text-sm"
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
                      className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/25 text-blue-300 transition-all hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
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
          className="mt-12 rounded-2xl bg-[#09090b] border border-blue-500/20 bg-gradient-to-bp-6 sm:p-8 "
        >
          <div className="mb-5 flex items-center gap-3 ">
            <Sparkles size={19} className="text-blue-400" />
            <h3 className="text-base font-semibold text-zinc-100">
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
                transition={{
                  delay: index * 0.04,
                  duration: 0.25,
                }}
                className="rounded-lg border border-blue-500/20 bg-blue-500/[0.05] px-3.5 py-2 text-sm text-blue-200/80 transition-all hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-200"
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
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-blue-500/30 bg-[#09090b] px-6 py-8 text-center sm:flex-row sm:text-left"
        >
          <div className=" ">
            <p className="text-lg font-semibold text-zinc-100">
              More projects are on the way.
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Learning, experimenting, and building something
              better every day.
            </p>
          </div>

          <a
            href="https://github.com/Naajatnoor"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-blue-500/30 px-5 py-3 text-sm font-medium text-blue-100 transition-all hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
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

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-blue-500/30 bg-[#0b1020] shadow-2xl shadow-blue-950/50"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-blue-500/20 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-300/70">
                  <FolderCode size={15} />
                  Project Details
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="rounded-lg border border-blue-500/20 p-2 text-blue-300 transition-colors hover:bg-blue-500/15 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0c1220]">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} website preview`}
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent" />

                <span className="absolute bottom-4 left-5 rounded-full border border-blue-400/30 bg-blue-950/80 px-3 py-1.5 text-xs text-blue-100 backdrop-blur-md sm:left-7">
                  {selectedProject.category}
                </span>
              </div>

              {/* Modal content */}
              <div className="px-5 pb-7 pt-2 sm:px-7 sm:pb-8">
                <h3
                  id="project-modal-title"
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                  {selectedProject.description}
                </p>

                <div className="mt-7">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400/80">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-blue-500/25 bg-blue-500/[0.08] px-3 py-2 text-sm text-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-blue-500/20 pt-6">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Visit Live Website
                    <ExternalLink size={16} />
                  </a>

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-4 py-3 text-sm text-blue-100 transition-colors hover:bg-blue-500/10"
                    >
                      <SiGithub size={17} />
                      Source Code
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
