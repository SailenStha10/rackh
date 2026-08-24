import { PageHero, Reveal, SectionHeading } from "@/components/ContentBlocks";
import { Footer } from "@/components/Footer";
import { TeamDirectory } from "@/components/TeamDirectory";
import { teamMembers } from "@/lib/team-data";
import { useState } from "react";

export const metadata = {
  title: "Our Team",
  description: "Executive board, committee leads, and active members working with clear ownership and shared momentum.",
};

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const departments = Array.from(
    new Set(teamMembers.map((member) => member.department))
  );

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      searchQuery === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.shortBio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      activeDepartment === null || member.department === activeDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-32">
      <PageHero
        kicker="Our Team"
        title="Leadership that moves projects cleanly."
        description="Executive board, committee leads, and active members working across programs with clear ownership and shared momentum. The team structure is designed for reliable handoffs and continuity."
        primaryAction={{ label: "Join Us", href: "/join" }}
        secondaryAction={{ label: "See impact", href: "/impact" }}
      />

      <section className="mt-16">
        <SectionHeading
          eyebrow="Executive and committee structure"
          title="Roles are visible, responsibilities are clear, and the club stays collaborative."
          description="The profiles below are role-based on purpose. The design should stay adaptable as the club updates leadership each year."
        />
        <div className="mt-8">
          <TeamDirectory
            members={teamMembers}
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            departments={departments}
            onDepartmentChange={setActiveDepartment}
            activeDepartment={activeDepartment}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <SectionHeading
              eyebrow="Executive board"
              title="The people closest to the club rhythm."
              description="The executive board keeps the calendar, communications, and service priorities aligned."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers
                .filter((member) => member.featured && member.order <= 4)
                .map((member) => (
                  <div
                    key={member.id}
                    className="text-center rounded-[1.35rem] border border-[color:var(--border)] bg-white/70 p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-display text-sm font-semibold">{member.name}</h3>
                    <p className="text-rotaract-pink text-xs font-medium mt-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.department}</p>
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