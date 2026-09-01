"use client";

import { motion } from "framer-motion";
import { Search, X, Grid, List, Users, ChevronRight, MapPin, Calendar, Award, Star, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TeamMember } from "@/lib/team-data";

interface TeamMemberCardProps {
  member: TeamMember;
  viewMode?: "grid" | "list";
}

interface TeamSearchAndFilterProps {
  departments: string[];
  onDepartmentChange: (department: string | null) => void;
  onSearch: (query: string) => void;
  activeDepartment: string | null;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function TeamMemberCard({ member, viewMode = "grid" }: TeamMemberCardProps) {
  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ x: 12, scale: 1.02 }}
        className="group relative surface rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <div className="flex gap-8">
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-[color:var(--primary)]/10 to-[color:var(--rotaract-gold)]/10">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {member.featured && (
              <div className="absolute -top-3 -right-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-[color:var(--primary)] transition-colors">
                  {member.name}
                </h3>
                <p className="text-rotaract-pink font-semibold text-base mb-2">
                  {member.role}
                </p>
              </div>
              <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                {member.department}
              </span>
            </div>
            
            <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-2">
              {member.shortBio}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Joined {member.joinedYear}
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" /> {member.experience}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Kathmandu
                </span>
              </div>
              
              <motion.a
                href={`mailto:${member.social.email}`}
                whileHover={{ x: 8, scale: 1.05 }}
                className="text-rotaract-pink font-semibold text-base flex items-center gap-2 hover:bg-rotaract-pink/10 px-4 py-2 rounded-full transition-all"
              >
                Connect <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative surface rounded-[2rem] p-6 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-[color:var(--primary)]/10 to-[color:var(--rotaract-gold)]/10">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {member.featured && (
            <div className="absolute -top-2 -right-2">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-[color:var(--primary)] transition-colors">
            {member.name}
          </h3>
          <p className="text-rotaract-pink font-semibold text-sm">
            {member.role}
          </p>
          <p className="text-xs text-muted-foreground">
            {member.department}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {member.shortBio}
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {member.joinedYear}
          </span>
          <span className="flex items-center gap-1">
            <Award className="w-3 h-3" /> {member.experience}
          </span>
        </div>
        
        {member.social.email && (
          <motion.a
            href={`mailto:${member.social.email}`}
            whileHover={{ scale: 1.05 }}
            className="mt-4 text-rotaract-pink font-semibold text-sm flex items-center gap-1 hover:bg-rotaract-pink/10 px-3 py-1 rounded-full transition-all"
          >
            Connect <ChevronRight className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export function TeamSearchAndFilter({
  departments,
  onDepartmentChange,
  onSearch,
  activeDepartment,
  viewMode,
  onViewModeChange,
}: TeamSearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  return (
    <div className="surface rounded-[2rem] p-8 mb-12">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative w-full lg:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-[color:var(--primary)] transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search by name, position, or interest..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearching(true);
            }}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
            className="w-full pl-12 pr-12 py-4 border border-border rounded-full bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-3 focus:ring-[color:var(--primary)]/20 focus:border-[color:var(--primary)]/50 transition-all shadow-sm hover:shadow-md"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                onSearch("");
              }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {isSearching && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <div className="w-4 h-4 border-2 border-[color:var(--primary)] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="flex gap-3">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-4 rounded-full transition-all ${viewMode === "grid" ? "bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--rotaract-dark)] text-white shadow-lg" : "bg-secondary/50 hover:bg-secondary/70 text-muted-foreground hover:text-foreground hover:shadow-md"}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-4 rounded-full transition-all ${viewMode === "list" ? "bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--rotaract-dark)] text-white shadow-lg" : "bg-secondary/50 hover:bg-secondary/70 text-muted-foreground hover:text-foreground hover:shadow-md"}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-3 px-8 py-4 bg-secondary/50 hover:bg-secondary/70 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Department Filter</span>
              {activeDepartment && (
                <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--rotaract-dark)] text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {activeDepartment}
                </span>
              )}
              <ChevronRight className={`w-4 h-4 transition-transform ${isFilterOpen ? "rotate-90" : ""}`} />
            </button>
            
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-4 w-72 surface rounded-[1.5rem] p-6 shadow-xl z-50 border border-border"
              >
                <button
                  onClick={() => {
                    onDepartmentChange(null);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 rounded-xl transition-all mb-3 ${!activeDepartment ? "bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--rotaract-gold)]/10 text-[color:var(--primary)] font-semibold" : "hover:bg-secondary/50"}`}
                >
                  All Departments
                </button>
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      onDepartmentChange(dept);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 rounded-xl transition-all ${activeDepartment === dept ? "bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--rotaract-gold)]/10 text-[color:var(--primary)] font-semibold" : "hover:bg-secondary/50"}`}
                  >
                    {dept}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}