import { FAQAccordion, IconCardGrid, JoinForm, PageHero, Reveal, SectionHeading, Timeline } from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";
import { joinBenefits, joinFaqs, membershipSteps, testimonials } from "@/lib/site-data";

export const metadata = {
  title: "Join Us",
  description: "Membership benefits, application process, testimonials, FAQs, and join form.",
};

export default function JoinPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-32">
      <PageHero
        kicker="Join Us"
        title="A membership path that is clear, welcoming, and easy to act on."
        description="If you want service, leadership practice, and a club that values follow-through, the join process should make that obvious from the start."
        primaryAction={{ label: "Apply now", href: "#join-form" }}
        secondaryAction={{ label: "Learn more", href: "/about" }}
      />

      <section className="mt-14">
        <SectionHeading
          eyebrow="Membership benefits"
          title="What a new member gets beyond a badge and a welcome post."
          description="The benefits are practical: skill-building, network access, and a group that expects you to contribute rather than simply observe."
        />
        <div className="mt-8">
          <IconCardGrid items={joinBenefits.map((item) => ({ ...item, icon: "sparkles" }))} />
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Application process"
              title="Short, human, and easy to explain to a prospective member."
              description="The club can adjust the steps, but the flow should always stay simple and transparent."
            />
            <div className="mt-8">
              <Timeline
                items={membershipSteps.map((step, index) => ({
                  ...step,
                  year: `Step ${index + 1}`,
                }))}
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Testimonials"
              title="Why people stay in Rotaract once they join."
              description="Short quotes help the page feel grounded in the experience of real membership."
            />
            <div className="mt-8 space-y-4">
              {testimonials.map((item) => (
                <div key={item.author} className="rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 p-4">
                  <p className="text-sm leading-7">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">{item.author}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="join-form" className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="FAQs"
              title="A few common questions before applying."
              description="These answers help the join flow feel structured and low-friction."
            />
            <div className="mt-8">
              <FAQAccordion items={joinFaqs} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <JoinForm />
        </Reveal>
      </section>

      <section className="mt-16">
        <Footer />
      </section>
    </div>
  );
}