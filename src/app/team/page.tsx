import { PageHero, ProfileGrid, Reveal, SectionHeading } from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";
import { teamBlocks } from "@/lib/site-data";

export const metadata = {
  title: "Our Team",
  description: "Executive board, board members, committee leads, and past presidents.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-32">
      <PageHero
        kicker="Our Team"
        title="A small leadership structure designed to move projects cleanly."
        description="The team is organized around clear roles, reliable handoffs, and enough continuity to make each service cycle stronger than the last."
        primaryAction={{ label: "Join Us", href: "/join" }}
        secondaryAction={{ label: "See impact", href: "/impact" }}
      />

      <section className="mt-14">
        <SectionHeading
          eyebrow="Executive and committee structure"
          title="Roles are visible, responsibilities are clear, and the club stays collaborative."
          description="The profiles below are role-based on purpose. The design should stay adaptable as the club updates leadership each year."
        />
        <div className="mt-8">
          <ProfileGrid items={teamBlocks} />
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Executive board"
              title="The people closest to the club rhythm."
              description="The executive board keeps the calendar, communications, and service priorities aligned."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["President", "Direction, representation, and overall club cadence."],
                ["Secretary", "Records, reminders, and internal coordination."],
                ["Treasurer", "Budget clarity and responsible allocation."],
                ["Vice President", "Support, continuity, and project oversight."],
              ].map(([role, description]) => (
                <div key={role as string} className="rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 p-4">
                  <h3 className="font-display text-lg font-semibold">{role as string}</h3>
                  <p className="muted-copy mt-2 text-sm leading-7">{description as string}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Member directory"
              title="Optional space for a fuller public roster."
              description="If the club wants to publish individual names later, this section can expand into a directory without changing the layout."
            />
            <div className="mt-8 space-y-4">
              {[
                "Committee leads can be listed here.",
                "Past presidents can be grouped into a transition archive.",
                "Social links can be added to each profile card.",
              ].map((item) => (
                <div key={item} className="rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 p-4 text-sm leading-7">
                  {item}
                </div>
              ))}
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