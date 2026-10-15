"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,

  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { SiGithub, } from "react-icons/si";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:naajatnoor@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Hi Najat,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-zinc-900 sm:px-8 lg:py-32"
    >
      {/* Background decoration */}
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
      
<span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
  <MessageCircle size={16} />
  <h1 className="text-[17px]">Let's Talk</h1>


  <span className="flex items-center gap-1">
    {[0, 1, 2].map((dot) => (
      <span
        key={dot}
        className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600"
        style={{ animationDelay: `${dot * 0.2}s` }}
      />
    ))}
  </span>
</span>

          <h2 className="mt-6 text-4xl text-white font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Have a project in{" "}
            <span className="text-blue-600">mind?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            I'm always excited to connect with new people, explore creative
            ideas, and build something meaningful together.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl text-white font-semibold sm:text-3xl ">
              Let's create something
              <span className="text-blue-600"> amazing.</span>
            </h3>

            <p className="mt-4 leading-7 text-zinc-500">
              Whether you have a project idea, a collaboration opportunity,
              or just want to say hello, my inbox is always open.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={
                      item.href.startsWith("https") ? "_blank" : undefined
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
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-blue-50/80 p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-1 truncate text-sm text-zinc-500">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-zinc-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-50/80 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <MapPin size={19} />
              </div>
              <div>
                <p className="font-medium">Based in Bangladesh</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Sylhet, Bangladesh · Open to remote opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-zinc-200 bg-blue-50/80 p-6 shadow-xl shadow-zinc-200/40 sm:p-8 lg:p-9"
          >
            <div className="mb-7">
              <h3 className="text-2xl font-semibold">Send me a message</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Fill out the form below and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-700"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Project collaboration"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={19} />
                    Opening your email app...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={17} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs leading-5 text-zinc-400">
                Your message will be prepared in your default email application.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
