"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Globe,
  HandHeart,
  Leaf,
  MoveDiagonal,
  Link2,
  Plus,
  Sparkles,
  Star,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Logo } from "@/components/Logo";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--primary)] shadow-[0_10px_20px_rgba(25,10,24,0.06)]">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-5xl">
        {title}
      </h2>
      <p className="muted-copy mt-4 text-base leading-8 md:text-lg">{description}</p>
    </div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = Date.now();
    const duration = 1200;

    const animate = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * easing));
      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
      {count}
      {suffix}
    </span>
  );
}

export function StatStrip({
  stats,
}: {
  stats: readonly { value: number; suffix?: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="surface-soft rounded-[1.4rem] p-5"
        >
          <div className="muted-copy text-sm font-medium uppercase tracking-[0.25em]">{stat.label}</div>
          <div className="mt-3 text-[color:var(--foreground)]">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  handshake: HandHeart,
  globe: Globe,
  shield: BadgeCheck,
  users: Users,
  leaf: Leaf,
  "heart-handshake": HandHeart,
  "briefcase-business": BriefcaseBusiness,
  "badge-check": BadgeCheck,
};

export function IconCardGrid({
  items,
  columns = "lg:grid-cols-3",
  compact = false,
}: {
  items: readonly {
    title: string;
    description: string;
    icon?: string;
    metric?: string;
    href?: string;
  }[];
  columns?: string;
  compact?: boolean;
}) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${columns}`}>
      {items.map((item, index) => {
        const Icon = item.icon ? iconMap[item.icon] ?? Sparkles : Sparkles;
        const card = (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            className="surface group rounded-[1.6rem] p-5 transition duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(217,31,99,0.14),rgba(240,196,70,0.2))] text-[color:var(--primary)] transition duration-300 group-hover:scale-105">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="muted-copy mt-2 text-sm leading-7">{item.description}</p>
                {item.metric ? (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
                    <Star className="size-3.5" />
                    {item.metric}
                  </div>
                ) : null}
              </div>
            </div>
            {compact ? null : item.href ? (
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] transition group-hover:translate-x-1">
                View More <ArrowRight className="size-4" />
              </div>
            ) : null}
          </motion.article>
        );

        return item.href ? (
          <Link href={item.href} key={item.title} className="block focus:outline-none">
            {card}
          </Link>
        ) : (
          card
        );
      })}
    </div>
  );
}

export function PreviewPanel({
  title,
  description,
  bullets,
  metric,
  href,
  align = "left",
}: {
  title: string;
  description: string;
  bullets: readonly string[];
  metric: string;
  href: string;
  align?: "left" | "right";
}) {
  return (
    <Reveal>
      <div className="surface rounded-[1.9rem] p-6 lg:p-8">
        <div className={`flex flex-wrap items-start gap-4 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)]">
              {metric}
            </div>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
            <p className="muted-copy mt-4 max-w-2xl text-base leading-8">{description}</p>
          </div>
          <div className="min-w-[240px] rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(217,31,99,0.08),rgba(240,196,70,0.1))] p-4">
            <div className="flex items-center gap-3">
              <Logo compact className="scale-90" />
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--foreground)]">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[color:var(--primary)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-3 text-sm font-semibold text-white transition hover:translate-x-0.5"
        >
          View More <ArrowRight className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}

export function Timeline({
  items,
}: {
  items: readonly { year: string; title: string; description: string }[];
}) {
  return (
    <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-2 before:w-px before:bg-[linear-gradient(180deg,rgba(217,31,99,0.2),rgba(240,196,70,0.45))] md:before:left-1/2 md:before:-translate-x-1/2">
      {items.map((item, index) => (
        <Reveal key={item.year} delay={index * 0.06}>
          <div className={`relative grid gap-4 md:grid-cols-2 ${index % 2 ? "md:text-right" : ""}`}>
            <div className={index % 2 ? "hidden md:block" : ""} />
            <div className={`flex ${index % 2 ? "md:justify-start" : "md:justify-end"}`}>
              <div className="surface max-w-xl rounded-[1.6rem] p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(217,31,99,0.12),rgba(240,196,70,0.15))] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)]">
                  {item.year}
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="muted-copy mt-3 text-sm leading-7">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-0 top-8 flex size-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)] text-[color:var(--primary)] shadow-[0_12px_30px_rgba(25,10,24,0.1)] md:left-1/2 md:-translate-x-1/2">
              <span className="size-3 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))]" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProfileGrid({
  items,
}: {
  items: readonly { title: string; description: string; roles: readonly string[] }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05}>
          <motion.article
            whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
            className="surface group relative overflow-hidden rounded-[1.7rem] p-5"
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(217,31,99,0.08),transparent_44%,rgba(240,196,70,0.14))] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(217,31,99,0.14),rgba(240,196,70,0.14))] text-[color:var(--primary)]">
                  <Users className="size-6" />
                </div>
                <div className="rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                  Team
                </div>
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="muted-copy mt-3 text-sm leading-7">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)]"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 text-[color:var(--muted)] opacity-0 transition duration-300 group-hover:opacity-100">
                <Share2 className="size-4" />
                <Link2 className="size-4" />
                <Users className="size-4" />
              </div>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  );
}

export function PartnerMarquee({ items }: { items: readonly string[] }) {
  return (
    <div className="surface overflow-hidden rounded-[1.75rem] py-5">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex w-max items-center gap-4 px-5"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
          >
            <Building2 className="size-4 text-[color:var(--primary)]" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function GalleryGrid({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  const [active, setActive] = useState<(typeof items)[number] | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <motion.button
              type="button"
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setActive(item)}
              className="group relative overflow-hidden rounded-[1.7rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(217,31,99,0.08),rgba(240,196,70,0.12))] p-5 text-left shadow-[0_20px_60px_rgba(25,10,24,0.08)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.78),transparent_35%),linear-gradient(160deg,rgba(217,31,99,0.08),transparent_45%,rgba(240,196,70,0.12))] opacity-60 transition duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-44 flex-col justify-between rounded-[1.35rem] border border-white/30 bg-[color:var(--panel-strong)] p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),#ef4f86)] text-white">
                    <MoveDiagonal className="size-4" />
                  </div>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                    Gallery
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="muted-copy mt-2 text-sm leading-6">{item.description}</p>
                </div>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              className="surface-strong w-full max-w-2xl rounded-[1.75rem] p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--primary)]">
                    Gallery Highlight
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold">{active.title}</h3>
                </div>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70"
                  onClick={() => setActive(null)}
                  aria-label="Close gallery preview"
                >
                  <Plus className="size-4 rotate-45" />
                </button>
              </div>
              <div className="mt-6 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(217,31,99,0.12),rgba(240,196,70,0.2))] p-10 text-center">
                <Logo compact />
                <p className="muted-copy mt-4 text-base leading-8">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function FAQAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <motion.div key={item.question} className="surface rounded-[1.4rem] p-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-display text-lg font-semibold">{item.question}</span>
              {open ? <ChevronUp className="size-4 shrink-0" /> : <ChevronDown className="size-4 shrink-0" />}
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="muted-copy mt-3 text-sm leading-7">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(10, "Please add a short message"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setSubmitted(true);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="surface rounded-[1.8rem] p-6 lg:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className="input-field" placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className="input-field" placeholder="you@example.com" />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Subject" error={errors.subject?.message}>
          <input {...register("subject")} className="input-field" placeholder="Partnership, visit, volunteering..." />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} rows={6} className="input-field min-h-36 resize-y" placeholder="Tell us a little about what you need." />
        </Field>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="size-4" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 text-sm text-[color:var(--foreground)]">
          Thank you. Your message has been prepared for the club team.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-[#e1566f]">{error}</span> : null}
    </label>
  );
}

const joinSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  motivation: z.string().min(12, "Please share a few lines about your interest"),
});

type JoinValues = z.infer<typeof joinSchema>;

export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JoinValues>({
    resolver: zodResolver(joinSchema),
  });

  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setSubmitted(true);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="surface rounded-[1.8rem] p-6 lg:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className="input-field" placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className="input-field" placeholder="you@example.com" />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Why do you want to join?" error={errors.motivation?.message}>
          <textarea {...register("motivation")} rows={7} className="input-field min-h-40 resize-y" placeholder="Share your background and what you want to contribute." />
        </Field>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Apply Now"} <ArrowRight className="size-4" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 text-sm text-[color:var(--foreground)]">
          Your membership enquiry is ready for the club team.
        </p>
      ) : null}
    </form>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  stats,
  primaryAction,
  secondaryAction,
  fullHeight = false,
}: {
  kicker: string;
  title: string;
  description: string;
  stats?: readonly { value: number; suffix?: string; label: string }[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  fullHeight?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${fullHeight ? "min-h-[100svh]" : ""}`}>
      <div className="absolute inset-0 hero-grid opacity-70" />
      <motion.div
        aria-hidden="true"
        className="hero-orb absolute left-[8%] top-[18%] size-40 rounded-full bg-[radial-gradient(circle,rgba(217,31,99,0.36),transparent_68%)]"
        animate={{ y: [0, -14, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-orb absolute right-[10%] top-[10%] size-56 rounded-full bg-[radial-gradient(circle,rgba(240,196,70,0.34),transparent_68%)]"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className={`surface relative overflow-hidden rounded-[2rem] ${fullHeight ? "min-h-[calc(100svh-2rem)]" : ""}`}>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.42))]" />
          <div className="relative grid gap-12 px-6 py-10 lg:grid-cols-[1.25fr_0.85fr] lg:px-10 lg:py-14">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--primary)]">
                <Sparkles className="size-3.5" />
                {kicker}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Logo />
              </div>
              <h1 className="font-display mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                {title}
              </h1>
              <p className="muted-copy mt-6 max-w-2xl text-lg leading-8">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryAction ? (
                  <Link
                    href={primaryAction.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    {primaryAction.label} <ArrowRight className="size-4" />
                  </Link>
                ) : null}
                {secondaryAction ? (
                  <Link
                    href={secondaryAction.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:-translate-y-0.5"
                  >
                    {secondaryAction.label}
                  </Link>
                ) : null}
              </div>
              {stats ? (
                <div className="mt-10">
                  <StatStrip stats={stats} />
                </div>
              ) : null}
            </div>
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative w-full max-w-md rounded-[2rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.5))] p-6 shadow-[0_30px_90px_rgba(25,10,24,0.12)] backdrop-blur-xl"
              >
                <div className="absolute right-5 top-5 inline-flex rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  Rotaract
                </div>
                <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-white/75 p-5">
                  <div className="flex items-center justify-between">
                    <Logo compact />
                    <div className="rounded-full bg-[linear-gradient(135deg,rgba(217,31,99,0.12),rgba(240,196,70,0.16))] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                      Club Pulse
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      ["Service", "Visible"],
                      ["Leadership", "Practical"],
                      ["Fellowship", "Warm"],
                      ["Partnership", "Active"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(217,31,99,0.08),rgba(240,196,70,0.08))] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">{label}</p>
                        <p className="font-display mt-2 text-lg font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[1.3rem] bg-[linear-gradient(135deg,rgba(217,31,99,0.14),rgba(240,196,70,0.2))] p-4">
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <CalendarDays className="size-4 text-[color:var(--primary)]" />
                      Next meeting and project planning update.
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                        Service
                      </span>
                      <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                        Fellowship
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                aria-hidden="true"
                className="absolute left-3 top-1/2 size-16 rounded-2xl bg-[linear-gradient(135deg,rgba(217,31,99,0.16),rgba(240,196,70,0.2))] shadow-[0_12px_30px_rgba(25,10,24,0.1)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute right-6 bottom-4 size-14 rounded-full bg-[linear-gradient(135deg,rgba(217,31,99,0.18),rgba(240,196,70,0.14))] shadow-[0_12px_30px_rgba(25,10,24,0.1)]"
                animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}