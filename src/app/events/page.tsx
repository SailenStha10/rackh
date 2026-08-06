import Image from "next/image";

const events = [
  {
    title: "Weekly Club Meeting",
    date: "Every Saturday, 4:00 PM",
    location: "Kathmandu Height Community Hall",
    description: "Join our weekly gathering for updates, planning, and fellowship.",
    image: "https://images.unsplash.com/photo-1540575467060-d95ea4c3a635?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Leadership Workshop 2026",
    date: "August 15, 2026",
    location: "Hotel Yak & Yeti, Kathmandu",
    description: "A full-day workshop on adaptive leadership and community engagement.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blood Donation Camp",
    date: "September 02, 2026",
    location: "Tribhuvan University Teaching Hospital",
    description: "Partnering with local hospitals to organize a blood donation drive.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-white">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-rotaract-gold/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-rotaract-dark">Events & <span className="text-rotaract-pink">Activities</span></h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 leading-relaxed">
            From weekly meetings to large-scale events, there is always something happening at Rotaract Club of Kathmandu Height.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {events.map((event) => (
            <div key={event.title} className="flex flex-col md:flex-row overflow-hidden rounded-2xl bg-rotaract-light shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative h-64 md:h-auto md:w-1/3">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-rotaract-dark">{event.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="font-medium text-rotaract-pink">{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
