"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowUp,
  Heart,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Naajatnoor",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naajatnoor/",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: "mailto:naajatnoor@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Footer className="relative overflow-hidden border-t border-zinc-200 bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-zinc-200 py-16 sm:py-20"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <Sparkles size={15} />
                Have an idea?
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Let's build something
                <span className="block text-blue-600">
                  meaningful together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-500">
                Have a project, an opportunity, or just want to connect?
                My inbox is always open.
              </p>
            </div>

            <motion.a
              href="mailto:naajatnoor@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-medium text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              Let's talk
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                N.
              </span>

              <span className="text-xl font-bold tracking-tight text-zinc-900">
                Najat Noor
                <span className="text-blue-600">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Computer Science student and aspiring frontend developer,
              passionate about turning ideas into clean, meaningful digital
              experiences.
            </p>

            {/* Availability */}
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>

              <span className="text-xs font-medium text-zinc-600">
                Open to opportunities
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={16} className="text-blue-600" />
              Sylhet, Bangladesh
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
              Explore
            </h3>

            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-blue-600"
                  >
                    <span className="h-1 w-1 rounded-full bg-zinc-300 transition-all group-hover:w-3 group-hover:bg-blue-600" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
              Let's connect
            </h3>

            <p className="mt-6 text-sm leading-7 text-zinc-500">
              Follow my journey, explore my work, or reach out for a
              collaboration.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("https");

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal ? "noopener noreferrer" : undefined
                    }
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{ y: -5, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <Icon size={19} />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="mailto:naajatnoor@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              naajatnoor@gmail.com
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-zinc-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-6 text-zinc-500 sm:text-left sm:text-sm">
            © {currentYear}{" "}
            <span className="font-medium text-zinc-800">
              Najat Noor
            </span>
            . All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1.5 text-xs text-zinc-500 sm:text-sm">
            Crafted with
            <Heart
              size={14}
              className="fill-blue-600 text-blue-600"
            />
            and a little creativity.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="group mx-auto flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:border-blue-200 hover:text-blue-600 sm:mx-0"
          >
            Back to top
            <ArrowUp
              size={16}
              className="transition-transform group-hover:-translate-y-1"
            />
          </motion.button>
        </div>
      </div>
    </Footer>
  );
}
