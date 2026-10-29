"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    value: "naajatnoor@gmail.com",
    href: "mailto:naajatnoor@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Let's connect professionally",
    href: "https://www.linkedin.com/in/naajatnoor/",
  },
  {
    icon: SiGithub,
    title: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/Naajatnoor",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <MessageCircle size={16} />

            <span className="text-[15px]">Let's Talk</span>

            <span className="flex items-center gap-1">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                  style={{
                    animationDelay: `${dot * 0.2}s`,
                  }}
                />
              ))}
            </span>
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's{" "}
            <span className="text-blue-500">Connect.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm always excited to connect with new people, explore
            creative ideas, and build something meaningful together.
          </p>
        </motion.div>

        {/* Main content: top aligned */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <MessageCircle size={27} />
            </span>

            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let's create something
              <span className="text-blue-500"> amazing.</span>
            </h3>

            <p className="mt-5 max-w-lg leading-8 text-zinc-400">
              Whether you're interested in collaborating on a project,
              discussing development, or simply saying hello, I'd love
              to hear from you. Let's turn great ideas into reality.
            </p>

            {/* Availability */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
              </span>

              <span className="text-sm text-zinc-300">
                Open to opportunities and collaboration
              </span>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-blue-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="font-medium text-white">
                  Based in Bangladesh
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Sylhet, Bangladesh · Open to remote opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side: Contact links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-950/30 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
          >
            <div className="mb-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Get in touch
              </p>

              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Find me online
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Choose your preferred platform to connect with me.
              </p>
            </div>

            {/* Email, LinkedIn and GitHub */}
            <div className="w-full space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={
                      item.href.startsWith("https")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-black/20 p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.06] sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 truncate text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-7 w-full border-t border-zinc-800 pt-6">
              <p className="text-center text-sm leading-6 text-zinc-500">
                Great things start with a simple connection.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-zinc-800" />

          <span className="text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Let's build something meaningful
          </span>

          <span className="h-px w-12 bg-zinc-800" />
        </motion.div>
      </div>
    </section>
  );
}