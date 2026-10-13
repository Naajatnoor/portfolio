"use client";

import { Sparkles, Code2 } from "lucide-react";

export default function CodeShowCase() {
  return (
    <div className="hero-enter hero-delay-2 relative hidden min-h-[430px] items-center justify-center lg:flex">
      {/* Animated orbit rings */}
      <div className="hero-orbit absolute h-[340px] w-[340px] rounded-full border border-white/[0.08]" />

      <div className="absolute h-[265px] w-[265px] animate-[spin_24s_linear_infinite] rounded-full border border-white/[0.10]" />

      <div className="absolute h-[190px] w-[190px] rounded-full border border-blue-400/20 shadow-[0_0_70px_rgba(59,130,246,0.08)]" />

      {/* Center monogram */}
      <div className="hero-float relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-blue-400/15 via-white/[0.04] to-blue-900/10 shadow-2xl shadow-black backdrop-blur-xl transition duration-500 hover:scale-110 hover:border-blue-400/40">
        <span className="bg-gradient-to-br from-white via-blue-200 to-blue-600 bg-clip-text font-serif text-7xl font-medium italic tracking-[-0.12em] text-transparent">
          N<span className="text-blue-500">.</span>
        </span>

        <span className="absolute -right-3 -top-3 flex h-9 w-9 animate-pulse items-center justify-center rounded-full border border-white/15 bg-[#151515]">
          <Sparkles size={15} className="text-blue-300" />
        </span>
      </div>

      {/* Floating label: currently building */}
      <div className="hero-float absolute left-0 top-16 rounded-2xl border border-white/10 bg-[#111111]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
        <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          Currently building
        </p>
        <p className="mt-1 text-xs font-medium text-zinc-200">
          Digital experiences <span className="text-blue-400">↗</span>
        </p>
      </div>

      {/* Floating label: code */}
      <div className="hero-float absolute bottom-16 right-0 rounded-2xl border border-white/10 bg-[#111111]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl [animation-delay:1s] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
        <div className="flex items-center gap-2">
          <Code2 size={15} className="text-blue-400" />
          <p className="font-mono text-sm text-zinc-300">
            {"<code />"}
          </p>
        </div>
        <p className="mt-1 text-[10px] text-zinc-500">
          Design. Develop. Refine.
        </p>
      </div>

      {/* Decorative glowing dots */}
      <span className="absolute right-14 top-10 h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

      <span className="absolute bottom-12 left-16 h-1.5 w-1.5 rounded-full bg-zinc-500" />

      <span className="absolute left-1/2 top-8 h-1 w-1 rounded-full bg-blue-300/70" />
    </div>
  );
}