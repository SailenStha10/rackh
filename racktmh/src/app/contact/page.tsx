import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm, FAQAccordion, PageHero, Reveal, SectionHeading } from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";
import { contactDetails, contactFaqs, officeHours } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Contact form, map placeholder, FAQs, office hours, and social links.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-32">
      <PageHero
        kicker="Contact"
        title="A contact page that feels like a real organization, not a generic form block."
        description="Use this page for enquiries about partnerships, meetings, volunteer support, or general club information."
        primaryAction={{ label: "Join Us", href: "/join" }}
        secondaryAction={{ label: "View impact", href: "/impact" }}
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Contact details"
              title="A few direct ways to reach the club."
              description="The values below should be replaced with the club's final public contact information when ready."
            />
            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => {
                const icon = item.label === "Address" ? MapPin : item.label === "Email" ? Mail : Phone;
                const Icon = icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 px-4 py-3">
                    <Icon className="size-4 text-[color:var(--primary)]" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">{item.label}</div>
                      <div className="mt-1 text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(217,31,99,0.1),rgba(240,196,70,0.18))] p-4 text-sm leading-7">
              Social links can be wired to the club&apos;s Instagram, Facebook, and LinkedIn once those public profiles are confirmed.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Map placeholder"
              title="A clean space for embedded map content."
              description="This panel can host a Google Maps embed or a location card without changing the rest of the layout."
            />
            <div className="mt-8 flex min-h-72 items-center justify-center rounded-[1.6rem] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(217,31,99,0.1),rgba(240,196,70,0.16))] p-6 text-center">
              <div>
                <div className="font-display text-2xl font-semibold">Map embed placeholder</div>
                <p className="muted-copy mt-3 max-w-md text-sm leading-7">
                  Drop in a map iframe here once the club&apos;s public address is finalized.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {officeHours.map((item) => (
                <div key={item.day} className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/70 p-4 text-sm">
                  <div className="font-semibold">{item.day}</div>
                  <div className="muted-copy mt-1">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="FAQs"
              title="Small answers that reduce friction before someone reaches out."
              description="The accordions are useful for membership questions, meeting visits, and partnership enquiries."
            />
            <div className="mt-8">
              <FAQAccordion items={contactFaqs} />
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