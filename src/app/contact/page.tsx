"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-rotaract-dark/5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-rotaract-dark">Contact <span className="text-rotaract-pink">Us</span></h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 leading-relaxed">
            Have a question, partnership proposal, or just want to say hello? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rotaract-pink focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rotaract-pink focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rotaract-pink focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rotaract-pink focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-rotaract-pink px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div className="rounded-2xl bg-rotaract-light p-6">
              <h3 className="text-lg font-semibold text-rotaract-dark">Visit Us</h3>
              <p className="mt-2 text-gray-600">Kathmandu, Bagmati Province, Nepal</p>
            </div>
            <div className="rounded-2xl bg-rotaract-light p-6">
              <h3 className="text-lg font-semibold text-rotaract-dark">Email</h3>
              <a href="mailto:rotaract.kathmanduheight@example.com" className="mt-2 block text-rotaract-pink hover:underline">
                rotaract.kathmanduheight@example.com
              </a>
            </div>
            <div className="rounded-2xl bg-rotaract-light p-6">
              <h3 className="text-lg font-semibold text-rotaract-dark">Follow Us</h3>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-rotaract-dark hover:text-rotaract-pink transition-colors">Facebook</a>
                <a href="#" className="text-rotaract-dark hover:text-rotaract-pink transition-colors">Instagram</a>
                <a href="#" className="text-rotaract-dark hover:text-rotaract-pink transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
