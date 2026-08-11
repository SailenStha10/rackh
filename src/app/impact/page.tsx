import { GalleryGrid, IconCardGrid, PageHero, Reveal, SectionHeading, StatStrip } from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";
import { galleryHighlights, impactPrograms, impactStats, impactStories } from "@/lib/site-data";

export const metadata = {
  title: "Our Impact",
  description: "Projects, gallery, events, awards, community work, and impact statistics.",
};

export default function ImpactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-32">
      <PageHero
        kicker="Our Impact"
        title="Service areas that are easy to understand and genuinely useful to the community."
        description="The club's public impact is stronger when it can show projects, partners, and follow-through in a way that feels honest and current."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "Join us", href: "/join" }}
      />

      <section className="mt-14">
        <SectionHeading
          eyebrow="Impact statistics"
          title="Numbers that support the story without overpowering it."
          description="These can be replaced with the club's actual annual figures when the final content is ready."
        />
        <div className="mt-8">
          <StatStrip stats={impactStats} />
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Program areas"
          title="The club's service model lives in a few focused lanes."
          description="That makes it easier to keep the work visible, repeatable, and useful for the people contributing their time."
        />
        <div className="mt-8">
          <IconCardGrid items={impactPrograms} />
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Success stories"
              title="A few examples of how the work can be told clearly."
              description="Short narratives make the page feel like a live organization instead of a content dump."
            />
            <div className="mt-8 space-y-4">
              {impactStories.map((item) => (
                <div key={item.title} className="rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 p-4">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="muted-copy mt-2 text-sm leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Gallery"
              title="An image-led space for project photos and event recaps."
              description="The cards can be replaced with real photography later, but the layout already behaves like a premium gallery."
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