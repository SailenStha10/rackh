import Link from "next/link";
import { ArrowRight, ChevronUp, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--foreground)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.7fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
            Rotaract Club of Kathmandu Height brings service, fellowship, and leadership into a simple community rhythm.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Service Above Self
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/55">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-sm text-white/82 transition hover:text-white">
                <ArrowRight className="size-3.5 text-[color:var(--accent)]" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/55">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-white/82">
            <p className="flex items-center gap-2"><MapPin className="size-4 text-[color:var(--accent)]" /> Kathmandu Height, Nepal</p>
            <p className="flex items-center gap-2"><Mail className="size-4 text-[color:var(--accent)]" /> hello@racktmh.org</p>
            <p className="flex items-center gap-2"><Phone className="size-4 text-[color:var(--accent)]" /> +977 98XXXXXXXX</p>
          </div>
          <a href="#top" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Back to top <ChevronUp className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs uppercase tracking-[0.28em] text-white/45 sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} Rotaract Club of Kathmandu Height
      </div>
    </footer>
  );
}