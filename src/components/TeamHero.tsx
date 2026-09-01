"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { User, Award, Calendar, MapPin, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "@/lib/team-data";

interface TeamHeroProps {
  totalMembers: number;
  departments: string[];
}

export function TeamHero({ totalMembers, departments }: TeamHeroProps) {
  const stats = useMemo(() => [
    { value: totalMembers, label: "Active Members" },
    { value: departments.length, label: "Leadership Departments" },
    { value: 5, label: "Years Average Experience" },
    { value: 18, label: "Years of Service" },
  ], [totalMembers, departments]);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-40">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-gradient-to-r from-[color:var(--primary)]/5 to-[color:var(--rotaract-gold)]/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--primary)] shadow-[0_4px_20px_rgba(233,30,99,0.08)]">
          <User className="size-4" />
          THE PEOPLE BEHIND THE IMPACT
        </p>

        <h1 className="font-display mt-10 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Our Team
        </h1>

        <p className="font-display mt-8 text-xl leading-9 text-muted-foreground sm:text-2xl lg:max-w-3xl lg:mx-auto">
          Powered by passionate young leaders working together to create meaningful community impact. Through collaboration, service, and shared vision, we're building a stronger, more connected Kathmandu.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="surface rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-[color:var(--primary)] sm:text-5xl">
                {stat.value}+
              </div>
              <div className="font-display-3 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(233,30,99,0.12),transparent_70%)]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(249,168,37,0.12),transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="h-80 w-80 rounded-full bg-gradient-to-br from-[rgba(233,30,99,0.05)] to-[rgba(249,168,37,0.05)]" />
        </div>
      </div>
    </section>
  );
}