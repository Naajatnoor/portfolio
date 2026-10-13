"use client";

import Link from "next/link";


import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import CodeShowCase from "./CodeShowCase";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Animated background glow */}
      <div className="hero-glow pointer-events-none absolute -right-40 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-zinc-400/[0.12] blur-[130px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Left content */}
        <div>
          {/* Main typography */}
          <h1 className="hero-enter hero-delay-1 mt-9 text-[clamp(3.5rem,8.5vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
          
          <div className="flex items-center gap-2 ">

             <span className="block">Crafting</span>

            <span className=" block bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 bg-clip-text py-5 text-transparent">
              Digital
            </span>
          </div>
          
           

            <span className=" flex flex-wrap items-baseline gap-x-4">
              <span>Experiences</span>
              <span className="font-serif text-[0.75em] font-normal italic tracking-[-0.07em] text-zinc-500">
                that matter.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-enter hero-delay-2 mt-8 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Hey, I&apos;m{" "}
            <span className="font-medium text-white">Najat Noor</span> — a
            frontend developer passionate about creating beautiful,
            responsive, and meaningful digital experiences.
          </p>

          {/* CTA */}
          <div className="hero-enter hero-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-[0_8px_35px_rgba(255,255,255,0.12)]"
            >
              Explore Projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-zinc-300 transition duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
            >
              Let&apos;s Talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          {/* Social links */}
          <div className="hero-enter hero-delay-4 mt-12 flex items-center gap-5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Follow along
            </span>

            <span className="h-px w-8 bg-zinc-700" />

           <Link
  href="https://github.com/Naajatnoor"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="text-zinc-500 transition hover:-translate-y-1 hover:text-white"
>
  Github
</Link>

<Link
  href="https://www.linkedin.com/in/naajatnoor/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="text-zinc-500 transition hover:-translate-y-1 hover:text-white"
>
LinkedIn</Link>
          </div>
        </div>

        {/* Right decorative typography panel */}
        <CodeShowCase/>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-zinc-600 transition hover:text-white sm:bottom-8"
      >
        Scroll to discover
        <ArrowDown size={12} className="animate-bounce" />
      </Link>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}