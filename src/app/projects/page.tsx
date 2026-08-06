import Image from "next/image";

const projects = [
  {
    title: "Community Health Camp",
    description: "Free health check-ups and awareness sessions for underprivileged communities in Kathmandu.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
  },
  {
    title: "Education for All",
    description: "Providing stationery, scholarships, and mentorship to students in rural areas.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing",
  },
  {
    title: "Green Kathmandu",
    description: "Tree plantation drives and environmental cleanup campaigns across the city.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing",
  },
  {
    title: "Youth Leadership Summit",
    description: "Annual gathering of young leaders to share ideas and build networks for social impact.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-rotaract-red/5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-rotaract-dark">Our <span className="text-rotaract-pink">Projects</span></h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 leading-relaxed">
            We believe in action. Explore the initiatives we have led and continue to champion across Kathmandu and beyond.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-2xl bg-rotaract-light shadow-sm transition-shadow hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 rounded-full bg-rotaract-gold px-3 py-1 text-xs font-bold uppercase text-rotaract-dark">
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-rotaract-dark">{project.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
