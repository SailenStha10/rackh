import Link from "next/link";

const highlights = [
  {
    title: "About Us",
    description:
      "Learn about our mission, history, and the amazing team behind Rotaract Club of Kathmandu Height.",
    href: "/about",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f052?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Projects",
    description:
      "Discover our community service initiatives, from education drives to environmental sustainability.",
    href: "/projects",
    image: "https://images.unsplash.com/photo-1593113598332-cd59a14228d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Events",
    description:
      "Stay updated with our upcoming meetings, workshops, and social gatherings.",
    href: "/events",
    image: "https://images.unsplash.com/photo-1540575467060-d95ea4c3a635?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Join Us",
    description:
      "Become part of a dynamic network of young leaders dedicated to Service Above Self.",
    href: "/join",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559027615-c462fd8d69e5?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="glass rounded-3xl p-8 md:p-14 text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-shadow">
              Rotaract Club of <span className="text-rotaract-gold">Kathmandu Height</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 text-shadow">
              We are a vibrant community of young leaders committed to Service Above Self.
              Join us in creating lasting impact through fellowship, leadership, and community service.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="rounded-full bg-rotaract-pink px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
              >
                Become a Member
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/40 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark">
            What We <span className="text-rotaract-pink">Stand For</span>
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600">
            Through meaningful projects and initiatives, we strive to make a difference in our community and beyond.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-2xl bg-rotaract-light shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rotaract-dark group-hover:text-rotaract-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-rotaract-pink">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
