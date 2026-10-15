
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   CheckCircle2,
//   Code2,
//   ExternalLink,
//   Lightbulb,
//   Target,
// } from "lucide-react";
// import { SiGithub } from "react-icons/si";
// import { projects } from "@/data/projects";

// type PageProps = {
//   params: Promise<{ slug: string }>;
// };

// export function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export default async function ProjectDetailsPage({
//   params,
// }: PageProps) {
//   const { slug } = await params;

//   const project = projects.find(
//     (item) => item.slug === slug
//   );

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#080b14] text-white">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />
//       <div className="pointer-events-none absolute -right-40 top-[500px] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

//       <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
//         {/* Back navigation */}
//         <Link
//           href="/#projects"
//           className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-blue-400"
//         >
//           <ArrowLeft
//             size={17}
//             className="transition-transform group-hover:-translate-x-1"
//           />
//           Back to Projects
//         </Link>

//         {/* Project heading */}
//         <div className="mb-10 max-w-4xl">
//           <div className="mb-5 flex flex-wrap items-center gap-3">
//             <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
//               {project.category}
//             </span>

//             <span className="flex items-center gap-2 text-xs text-zinc-500">
//               <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
//               Project Details
//             </span>
//           </div>

//           <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
//             {project.title}
//             <span className="text-blue-500">.</span>
//           </h1>

//           <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
//             {project.description}
//           </p>

//           {/* Action buttons */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
//             >
//               Live Demo
//               <ExternalLink size={16} />
//             </a>

//             {project.githubUrl && (
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 text-sm font-medium text-blue-100 transition-all hover:border-blue-400/60 hover:bg-blue-500/10"
//               >
//                 <SiGithub size={17} />
//                 Source Code
//                 <ArrowUpRight size={16} />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Project screenshot */}
//         <section className="overflow-hidden rounded-2xl border border-blue-500/25 bg-[#0d1423] shadow-2xl shadow-blue-950/20">
//           <div className="flex items-center gap-2 border-b border-blue-500/20 px-5 py-4">
//             <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
//             <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
//             <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
//             <span className="ml-3 text-xs text-zinc-500">
//               Project Preview
//             </span>
//           </div>

//           <div className="relative overflow-hidden bg-[#0b1020]">
//             <img
//               src={project.image}
//               alt={`${project.title} project screenshot`}
//               className="max-h-[650px] min-h-52 w-full object-cover object-top"
//             />
//           </div>
//         </section>

//         {/* Details grid */}
//         <div className="mt-10 grid gap-6 lg:grid-cols-3">
//           {/* About */}
//           <section className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/35 to-[#0b0d15] p-6 lg:col-span-2 sm:p-8">
//             <div className="mb-5 flex items-center gap-3">
//               <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
//                 <Target size={21} />
//               </span>
//               <h2 className="text-xl font-semibold">
//                 Project Overview
//               </h2>
//             </div>

//             <p className="text-sm leading-8 text-zinc-400 sm:text-base">
//               {project.description}
//             </p>

//             <div className="mt-8 border-t border-blue-500/15 pt-6">
//               <h3 className="mb-4 text-sm font-semibold text-zinc-200">
//                 Key Features
//               </h3>

//               <ul className="space-y-3">
//                 {project.features.map((feature) => (
//                   <li
//                     key={feature}
//                     className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
//                   >
//                     <CheckCircle2
//                       size={17}
//                       className="mt-0.5 shrink-0 text-blue-400"
//                     />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           {/* Tech stack */}
//           <section className="rounded-2xl border border-blue-500/20 bg-[#0c1120] p-6 sm:p-8">
//             <div className="mb-6 flex items-center gap-3">
//               <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
//                 <Code2 size={21} />
//               </span>
//               <h2 className="text-xl font-semibold">
//                 Tech Stack
//               </h2>
//             </div>

//             <div className="flex flex-wrap gap-2.5">
//               {project.technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-lg border border-blue-500/25 bg-blue-500/[0.07] px-3 py-2 text-sm text-blue-200 transition-colors hover:border-blue-400/60 hover:bg-blue-500/15"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-8 border-t border-blue-500/15 pt-6">
//               <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
//                 Project Category
//               </p>
//               <p className="mt-3 text-sm font-medium text-blue-300">
//                 {project.category}
//               </p>
//             </div>
//           </section>

//           {/* Challenges */}
//           <section className="rounded-2xl border border-blue-500/20 bg-[#0c1120] p-6 sm:p-8 lg:col-span-3">
//             <div className="mb-5 flex items-center gap-3">
//               <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
//                 <Lightbulb size={21} />
//               </span>
//               <h2 className="text-xl font-semibold">
//                 Challenges & Learning
//               </h2>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2">
//               <div className="rounded-xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
//                 <h3 className="mb-3 text-sm font-semibold text-blue-300">
//                   Challenges
//                 </h3>
//                 <p className="text-sm leading-7 text-zinc-400">
//                   {project.challenges}
//                 </p>
//               </div>

//               <div className="rounded-xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
//                 <h3 className="mb-3 text-sm font-semibold text-blue-300">
//                   What I Learned
//                 </h3>
//                 <p className="text-sm leading-7 text-zinc-400">
//                   {project.learning}
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Bottom navigation */}
//         <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-blue-500/20 pt-8 sm:flex-row sm:items-center">
//           <div>
//             <p className="text-lg font-semibold">
//               Interested in this project?
//             </p>
//             <p className="mt-2 text-sm text-zinc-500">
//               Explore the live version or review the source code.
//             </p>
//           </div>

//           <Link
//             href="/#projects"
//             className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 px-5 py-3 text-sm text-blue-200 transition-colors hover:bg-blue-500/10"
//           >
//             <ArrowLeft size={16} />
//             All Projects
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }
