"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site-data";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("racktmh-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/60 text-[color:var(--foreground)] transition duration-300 hover:bg-white/85"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
    </button>
  );
}

function DockNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeHref = pathname;

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-[color:var(--border)] bg-white/65 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeHref === link.href
                    ? "bg-[color:var(--primary)] text-white"
                    : "text-[color:var(--foreground)] hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/join"
              className="hidden rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 md:inline-flex"
            >
              Join Now
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/60 text-[color:var(--foreground)] md:hidden"
              aria-label="Open navigation menu"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[color:var(--border)] bg-white/90 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto grid w-full max-w-7xl gap-2 px-4 py-3 sm:px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      activeHref === link.href
                        ? "bg-[color:var(--primary)] text-white"
                        : "bg-black/5 text-[color:var(--foreground)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <DockNav />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative"
      >
        {children}
      </motion.main>
    </div>
  );
}