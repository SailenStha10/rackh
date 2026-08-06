"use client";

import { useState } from "react";

export default function JoinPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Welcome to the family! We will contact you with the next steps.");
    setForm({ name: "", email: "", phone: "", reason: "" });
  };

  return (
    <div className="bg-white">
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">Join <span className="text-rotaract-gold">Rotaract</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 text-shadow">
            Take the first step toward leadership, service, and lifelong friendships.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="glass-dark rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-2">Membership Inquiry</h2>
            <p className="text-center text-white/70 mb-8">Fill out the form and we will guide you through the process.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/90">Full Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-rotaract-gold focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-white/90">Email Address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-rotaract-gold focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90">Phone Number</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-rotaract-gold focus:outline-none"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90">Why do you want to join?</label>
                <textarea
                  required
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-rotaract-gold focus:outline-none"
                  placeholder="Tell us about yourself and your motivation..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-rotaract-gold px-8 py-3 font-bold text-rotaract-dark transition-transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
