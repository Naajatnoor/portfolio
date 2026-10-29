"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X ,Sparkle, Sparkles} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
   { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-[#0B0D12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}

        <div className="text-center">
       <div>
         <Link
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          N A J A T<span className="text-blue-500"> <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-700" /></span>N O O R
            </Link>
       </div>
           <div className="hero-enter inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-zinc-300" />
            <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-zinc-300 sm:text-xs">
              Frontend Developer
            </span>
            <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-700" />
          </div>
      
</div>

        {/* Desktop Navigation */}
       <div className="hidden items-center gap-2 md:flex">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
    >
      <span className="relative z-10">{link.name}</span>

      {/* Animated underline */}
      <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-5" />

      {/* Subtle hover glow */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-blue-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  ))}
</div>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 md:inline-block"
        >
          Let&apos;s Talk ↗
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-zinc-800 bg-[#0B0D12] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-300 transition hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

            

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-500"
            >
              Let&apos;s Talk ↗
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
