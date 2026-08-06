import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  GalleryGrid,
  IconCardGrid,
  PageHero,
  Reveal,
  SectionHeading,
  Timeline,
} from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";
import { aboutHighlights, achievements, clubTimeline, galleryHighlights } from "@/lib/site-data";

export const metadata = {
  title: "About Us",
  description: "History, mission, vision, values, timeline, achievements, and leadership philosophy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-32">
      <PageHero
        kicker="About Us"
        title="A club history that values continuity as much as momentum."
        description="Rotaract Club of Kathmandu Height has grown around service, thoughtful leadership, and a culture that keeps the work practical and human."
        primaryAction={{ label: "Join Us", href: "/join" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="mt-14">
        <SectionHeading
          eyebrow="Who we are"
          title="Mission, vision, and values that actually shape the page design and the club workflow."
          description="The club is built to make service repeatable: define the work, assign the work, and keep the experience welcoming for members and partners."
        />
        <div className="mt-8">
          <IconCardGrid items={aboutHighlights} columns="lg:grid-cols-4" />
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Leadership philosophy"
              title="Lead quietly, document clearly, and keep service visible."
              description="That approach helps the club stay dependable for members who want structure and for partners who need predictability."
            />
            <div className="mt-8 space-y-4">
              {[
                "Plan before you post.",
                "Serve with local partners, not around them.",
                "Leave every project easier for the next team.",
              ].map((item) => (
                <div key={item} className="rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 p-4 text-sm leading-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Club timeline"
              title="A short timeline that shows how the club matured."
              description="The story is not about scale alone. It is about consistency, member confidence, and increasingly clear execution."
            />
            <div className="mt-8">
              <Timeline items={clubTimeline} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Achievements"
              title="Proof of action, not just intention."
              description="Use this section to show what the club has managed to complete and what has been learned along the way."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {achievements.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[color:var(--border)] bg-white/70 p-5">
                  <div className="font-display text-3xl font-semibold text-[color:var(--primary)]">{item.stat}</div>
                  <h3 className="font-display mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="muted-copy mt-2 text-sm leading-7">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/impact" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-3 text-sm font-semibold text-white">
                Explore impact <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Gallery"
              title="A visual style that still feels useful in a nonprofit context."
              description="These panels work as modern placeholders for project photos, member gatherings, and formal club events."
            />
            <div className="mt-8">
              <GalleryGrid items={galleryHighlights} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <Footer />
      </section>
    </div>
  );
}