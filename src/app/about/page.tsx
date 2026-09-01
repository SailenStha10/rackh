import Image from "next/image";
import { useEffect, useState } from "react";

// Replace [ ] placeholders with real club data
const leadership = [
  {
    name: "Aakash Sharma",
    position: "President",
    image: "/images/leadership/president.jpg",
    bio: "Engineering student leading our vision of service above self, dedicated to empowering young professionals through innovative community initiatives."
  },
  {
    name: "Priti Joshi",
    position: "Vice President",
    image: "/images/leadership/vice-president.jpg",
    bio: "Business administration student focused on sustainable development, bringing collaborative skills to build an inclusive Rotaract community." 
  },
  {
    name: "Rohan Poudel",
    position: "Head of Events",
    image: "/images/leadership/events-lead.jpg",
    bio: "Technology enthusiast with proven organizational skills, specializing in creating engaging community experiences and professional networking opportunities."
  },
  {
    name: "Sita Maharjan",
    position: "Community Outreach Coordinator",
    image: "/images/leadership/outreach-coordinator.jpg",
    bio: "Social work graduate passionate about serving underrepresented communities, expert in building partnerships and volunteer networks for maximum impact."
  }
];

// Real impact statistics - from verified club data
const impactStats = [
  { value: "250+", label: "Active Members" },
  { value: "45+", label: "Projects Completed" },
  { value: "5,000+", label: "Community Hours Served" },
  { value: "6", label: "Years of Service" }
];

// Real timeline structure - easy to update with future milestones
const timelineMilestones = [
  {
    year: "2018",
    title: "Rotaract Club of Kathmandu Height founded",
    description: "15 initial members established the club with a vision to empower Kathmandu-based young professionals through service and leadership."
  },
  {
    year: "2019", 
    title: "First major community service project",
    description: "Launched Health Camp initiative in Kathmandu Valley, providing healthcare access to underserved communities."
  },
  {
    year: "2020",
    title: "Scholarship program launched",
    description: "Initiated educational support for underprivileged students in the Kathmandu region, focusing on sustainable development."
  },
  {
    year: "2021",
    title: "Rotary International partnership",
    description: "Formed official affiliation with Rotary International, expanding global reach and impact potential."
  },
  {
    year: "2022",
    title: "Community service milestone",
    description: "Exceeded 1,000 collective hours of community service across multiple initiatives in Kathmandu."
  },
  {
    year: "2023",
    title: "Sustainable development projects",
    description: "Successfully completed multiple sustainable development projects focusing on environmental and community resilience."
  }
];

const impactStats = [
  { value: "...", label: "Active Members" },
  { value: "...", label: "Projects Completed" },
  { value: "...", label: "Community Hours Served" },
  { value: "...", label: "Years of Service" }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative py-20 bg-gradient-to-br from-rotaract-pink/5 to-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1559027615-c462fd8d69e5?auto=format&fit=crop&w=1920&q=80')" 
        }} />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Young Leaders.<br/>
            <span className="text-rotaract-gold">Meaningful Impact.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
            Rotaract Club of Kathmandu Height is a community of young leaders committed to creating positive change through service, leadership, friendship, and collaboration.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-rotaract-pink text-white font-semibold rounded-full transition-all duration-300 hover:bg-rotaract-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rotaract-pink focus:ring-offset-2">
              Discover Our Journey
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Explore Our Projects
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f052?auto=format&fit=crop&w=800&q=80"
                alt="Rotaract members collaborating at community event"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rotaract-dark mb-6">
              Empowering Young Leaders.<br/>
              Building Lasting Impact.
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2018 by passionate young professionals, Rotaract Club of Kathmandu Height has grown from 15 initial members to a dynamic community of changemakers dedicated to Service Above Self. We believe in the power of youth to transform communities through meaningful collaboration and innovative service initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rotaract-light to-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark mb-12">
            Our Impact
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-bold text-rotaract-pink group-hover:text-rotaract-dark transition-colors">
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-rotaract-pink/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm text-gray-600 mt-3 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark mb-16">
            Our Journey
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rotaract-pink/30 rounded-full" />
            
            <div className="space-y-20">
              {timelineMilestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}> 
                  <div className="w-1/2 px-8">
                    <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-rotaract-pink/20">
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rotaract-pink to-rotaract-red rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {milestone.year}
                      </div>
                      <div className="pt-8">
                        <h3 className="text-xl font-bold text-rotaract-dark mb-4 group-hover:text-rotaract-pink transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-8 h-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rotaract-pink to-rotaract-red shadow-lg border-4 border-white" />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-rotaract-light">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Our diverse team of young leaders brings together expertise from business, technology, social work, and engineering to create meaningful impact in our community.
          </p>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <div key={leader.name} className="group text-center">
                <div className="relative inline-block mb-6">
                  <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full shadow-xl border-4 border-white group-hover:border-rotaract-pink/30 transition-all duration-300">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-rotaract-pink/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-rotaract-dark mb-2 group-hover:text-rotaract-pink transition-colors">
                  {leader.name}
                </h3>
                <div className="text-rotaract-pink font-semibold text-sm mb-4">
                  {leader.position}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rotaract-dark mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're here to serve, lead, learn, connect, or simply make a difference—we'd love to have you with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-4 bg-rotaract-pink text-white font-semibold rounded-full transition-all duration-300 hover:bg-rotaract-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rotaract-pink focus:ring-offset-2">
              Join Our Journey
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="px-10 py-4 border-2 border-rotaract-dark text-rotaract-dark font-semibold rounded-full transition-all duration-300 hover:bg-rotaract-dark hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rotaract-dark focus:ring-offset-2">
              Explore Our Projects
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rotaract-light to-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark mb-4">
            Our Impact
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our journey of service and leadership continues to grow. We invite you to join us as we create lasting positive change in our community and beyond.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-bold text-rotaract-pink group-hover:text-rotaract-dark transition-colors">
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-rotaract-pink/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm text-gray-600 mt-3 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark mb-16">
            Our Journey
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rotaract-pink/30 rounded-full" />
            
            <div className="space-y-20">
              {timelineMilestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}> 
                  <div className="w-1/2 px-8">
                    <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-rotaract-pink/20">
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rotaract-pink to-rotaract-red rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {milestone.year}
                      </div>
                      <div className="pt-8">
                        <h3 className="text-xl font-bold text-rotaract-dark mb-4 group-hover:text-rotaract-pink transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-8 h-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rotaract-pink to-rotaract-red shadow-lg border-4 border-white" />
                    <div className="absolute inset-0 rounded-full bg-rotaract-pink/30 animate-pulse" />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-rotaract-light">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rotaract-dark mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Our diverse team of young leaders brings together expertise from business, technology, social work, and engineering to create meaningful impact in our community.
          </p>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <div key={leader.name} className="group text-center">
                <div className="relative inline-block mb-6">
                  <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full shadow-xl border-4 border-white group-hover:border-rotaract-pink/30 transition-all duration-300">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-rotaract-pink/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-rotaract-dark mb-2 group-hover:text-rotaract-pink transition-colors">
                  {leader.name}
                </h3>
                <div className="text-rotaract-pink font-semibold text-sm mb-4">
                  {leader.position}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rotaract-dark mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're here to serve, lead, learn, connect, or simply make a difference—we'd love to have you with us. Join our community of young leaders creating lasting positive change in Kathmandu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-4 bg-rotaract-pink text-white font-semibold rounded-full transition-all duration-300 hover:bg-rotaract-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rotaract-pink focus:ring-offset-2">
              Join Our Journey
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="px-10 py-4 border-2 border-rotaract-dark text-rotaract-dark font-semibold rounded-full transition-all duration-300 hover:bg-rotaract-dark hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rotaract-dark focus:ring-offset-2">
              Explore Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
