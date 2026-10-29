"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

 const phrases = [
  "I'm a Developer",
  "I learn React",
  "I learn Next.js",
  "I learn JavaScript",
  "I learn TypeScript",
  "I learn BetterAuth",
  "I build web apps",
  "I'm exploring Backend",
];

export default function Hero() {


const [activePhrase, setActivePhrase] = useState(0);
const [displayedText, setDisplayedText] = useState("");

useEffect(() => {
  const currentPhrase = phrases[activePhrase];
  let index = 0;



  const typingInterval = setInterval(() => {
    index++;

    setDisplayedText(currentPhrase.slice(0, index));

    if (index >= currentPhrase.length) {
      clearInterval(typingInterval);

      setTimeout(() => {
        setActivePhrase((prev) => (prev + 1) % phrases.length);
      }, 1800);
    }
  }, 180);

  return () => clearInterval(typingInterval);
}, [activePhrase]);
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Blue background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.10] blur-[140px]" />

      <div className="mx-auto w-full max-w-5xl mt-8 text-center">
        {/* Intro label */}
        <div className="hero-appear inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 sm:text-xs">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main heading */}
    
<div className="relative isolate mt-10 inline-block">
 {/* Tiny, widely spaced glowing dots */}
{/* Sparse glowing dots across the banner */}
<span className="absolute left-[8%] top-[18%] -z-10 h-[3px] w-[3px] rounded-full bg-blue-400 animate-glow-dot [animation-delay:0s]" />

<span className="absolute left-[29%] top-[8%] -z-10 h-[2px] w-[2px] rounded-full bg-blue-300 animate-glow-dot [animation-delay:0.8s]" />

<span className="absolute left-[76%] top-[12%] -z-10 h-[3px] w-[3px] rounded-full bg-blue-400 animate-glow-dot [animation-delay:1.6s]" />

<span className="absolute right-[10%] top-[28%] -z-10 h-[2px] w-[2px] rounded-full bg-sky-300 animate-glow-dot [animation-delay:2.4s]" />

<span className="absolute left-[3%] top-[52%] -z-10 h-[3px] w-[3px] rounded-full bg-sky-400 animate-glow-dot [animation-delay:3.2s]" />

<span className="absolute right-[5%] top-[61%] -z-10 h-[3px] w-[3px] rounded-full bg-blue-400 animate-glow-dot [animation-delay:4s]" />

<span className="absolute left-[14%] top-[82%] -z-10 h-[2px] w-[2px] rounded-full bg-blue-300 animate-glow-dot [animation-delay:4.8s]" />

<span className="absolute left-[44%] top-[94%] -z-10 h-[3px] w-[3px] rounded-full bg-sky-400 animate-glow-dot [animation-delay:5.6s]" />

<span className="absolute right-[16%] top-[88%] -z-10 h-[2px] w-[2px] rounded-full bg-blue-300 animate-glow-dot [animation-delay:6.4s]" />

<span className="absolute left-[0%] top-[20%] -z-2 h-[2px] w-[3px] rounded-full bg-blue-400 animate-glow-dot [animation-delay:7.2s]" />

<span className="absolute left-[92%] top-[8%] -z-10 h-[3px] w-[3px] rounded-full bg-blue-400 animate-glow-dot [animation-delay:8s]" />

  <h1 className="hero-appear text-[clamp(3.5rem,10vw,7.8rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
   
    <span className="bg-gradient-to-r from-[#DBEAFE] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
     Noor E Najat Prapti{" "}     
    </span>
    
    <span className="text-[#60A5FA] text-[15px]">.</span>
  </h1>


        {/* Rotating text */}
     
<div className="mt-8 flex min-h-10 items-center justify-center gap-2 sm:mt-10">
  <span className="text-sm text-zinc-400 sm:text-lg">
    {activePhrase === 0 ? "Hello, " : "Currently: "}
  </span>

<span className="font-mono text-sm font-semibold tracking-wide text-blue-300 sm:text-lg">
  {displayedText}
  <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-blue-400 sm:h-5" />
</span>
</div>


        {/* Description */}
        <p className="hero-appear mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Hi, I&apos;m{" "}
          <span className="font-medium text-white">Najat Noor</span>, a
          frontend developer passionate about building responsive,
          user-friendly and meaningful digital experiences.
        </p>

        {/* Skills */}
        <div className="hero-appear mt-7 flex flex-wrap justify-center gap-2">
          {["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition duration-300 hover:border-blue-400/50 hover:text-blue-300"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="hero-appear mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
          >
            Explore Projects
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
          <Link
            href="/resume"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
          >
            Resume
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* <Link
            href="/resume"
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            Resume
            <ArrowUpRight size={16} />
          </Link> */}
        </div>

        {/* Social links */}
        <div className="hero-appear mt-10 flex items-center justify-center gap-6">
          <Link
            href="https://github.com/Naajatnoor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition hover:-translate-y-1 hover:text-white"
          >
            <FaGithub size={20} />
          </Link>

          <span className="h-5 w-px bg-zinc-800" />

          <Link
            href="https://www.linkedin.com/in/naajatnoor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition hover:-translate-y-1 hover:text-blue-400"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600 transition hover:text-white"
      >
        Scroll to discover
        <ArrowDown size={13} className="animate-bounce" />
      </Link>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
    </section>
  );
}
