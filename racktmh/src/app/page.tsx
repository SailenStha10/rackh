import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <section className="section-shell snap-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(16, 10, 24, 0.62), rgba(217, 31, 99, 0.22)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,196,70,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_24%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-[2rem] bg-black/20 p-6 text-white backdrop-blur-md sm:p-8 lg:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/75">
              <Sparkles className="size-3.5" /> Rotaract Club of Kathmandu Height
            </p>
            <h1 className="font-display mt-6 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              Creating lasting change through service, leadership, and fellowship.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/82 md:text-lg">
              A concise community-first club for young leaders in Kathmandu who want meaningful service and real collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-white/90">
                Join Us <ArrowRight className="size-4" />
              </Link>
              <Link href="/impact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Explore Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about-preview" className="section-shell snap-screen">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="About Us"
                title="Service, leadership, and fellowship in one small club."
                description="We keep the club practical: plan the work, serve with partners, and leave room for real fellowship."
              />
              <div className="mt-8 space-y-4 text-sm leading-7 text-[color:var(--foreground)]">
                <p>Mission: support communities with steady, visible service.</p>
                <p>Vision: build young leaders who know how to follow through.</p>
                <p>Values: service, integrity, accountability, and fellowship.</p>
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)]">
                View More <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full items-end justify-end bg-[linear-gradient(135deg,rgba(217,31,99,0.08),rgba(240,196,70,0.12))] p-6 text-right text-sm leading-7 text-[color:var(--foreground)] sm:p-8">
              <p className="max-w-sm">
                Built for a lighter, clearer experience with fewer visual layers and more room for content.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="team-preview" className="section-shell snap-screen">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Team"
                title="A clear leadership rhythm with real accountability."
                description="Executive board, committee leads, and past presidents work as a small continuity system."
              />
              <div className="mt-8 grid gap-3 text-sm leading-7">
                <p>President, Secretary, Treasurer, and Vice President.</p>
                <p>Board members managing service, PR, membership, and design.</p>
                <p>Committee leads focused on program execution.</p>
              </div>
              <Link href="/team" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)]">
                View More <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(217,31,99,0.07),rgba(240,196,70,0.1))] p-8 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Team structure</p>
                <p className="font-display mt-3 text-3xl font-semibold">Simple roles. Clear follow-through.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="impact-preview" className="section-shell snap-screen">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Impact"
                title="Projects shown in a quiet, direct way."
                description="Clean-up days, educational support, local partnerships, and youth development activities."
              />
              <div className="mt-8 space-y-4 text-sm leading-7">
                <p>Community service</p>
                <p>Professional development</p>
                <p>International service</p>
                <p>Environmental activities</p>
              </div>
              <Link href="/impact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)]">
                View More <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div
              className="flex h-full min-h-[60svh] items-end justify-end bg-cover bg-center p-6 text-white sm:p-8"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(10, 8, 15, 0.12), rgba(10, 8, 15, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
              }}
            >
              <p className="max-w-xs text-right text-sm leading-7">Project gallery placeholder with a clean image-first presentation.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact-preview" className="section-shell snap-screen">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Direct contact without clutter."
                description="A simple path for guests, partners, and prospective members."
              />
              <div className="mt-8 space-y-4 text-sm leading-7">
                <p>Kathmandu Height, Nepal</p>
                <p>hello@racktmh.org</p>
                <p>+977 98XXXXXXXX</p>
              </div>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)]">
                View More <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(217,31,99,0.08),rgba(240,196,70,0.1))] p-8 text-center">
              <div className="max-w-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Office notes</p>
                <p className="font-display mt-3 text-3xl font-semibold">Open, simple, and easy to reach.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="join-preview" className="section-shell snap-screen">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Join Us"
                title="A simple membership path with real purpose."
                description="If you want to contribute, learn, and build fellowship, the next step should be easy to understand."
              />
              <div className="mt-8 space-y-4 text-sm leading-7">
                <p>Inquiry, conversation, orientation, membership.</p>
                <p>Leadership practice and service opportunities.</p>
                <p>Clear expectations and support from the club.</p>
              </div>
              <Link href="/join" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)]">
                View More <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(217,31,99,0.07),rgba(240,196,70,0.1))] p-8 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Join the club</p>
                <p className="font-display mt-3 text-3xl font-semibold">Fellowship first, service always.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
