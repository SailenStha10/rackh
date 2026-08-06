import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-rotaract-pink/5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-rotaract-dark">About <span className="text-rotaract-pink">Us</span></h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 leading-relaxed">
            Rotaract Club of Kathmandu Height is a youth-led, action-oriented organization affiliated with Rotary International.
            We bring together young professionals and students to exchange ideas, develop leadership skills, and serve society.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-rotaract-dark">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To provide young adults with an opportunity to enhance their knowledge and skills to become leaders in their communities and workplaces, and to serve the greater good.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-rotaract-dark">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A globally connected network of young people who are committed to creating positive, sustainable change in their communities and around the world.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f052?auto=format&fit=crop&w=800&q=80"
              alt="Rotaract members collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-rotaract-light">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-rotaract-dark">Our Core Values</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {["Service Above Self", "Fellowship", "Integrity", "Diversity", "Leadership", "Innovation"].map((value) => (
              <div key={value} className="glass rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-rotaract-dark">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
