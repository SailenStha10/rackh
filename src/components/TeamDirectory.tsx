"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Instagram, Facebook, Users, ChevronRight, ArrowRight, Search, X, Grid, List } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TeamMember } from "@/lib/team-data";

interface TeamMemberCardProps {
  member: TeamMember;
  viewMode?: "grid" | "list";
}

export function TeamMemberCard({ member, viewMode = "grid" }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Link className="w-4 h-4" />;
    }
  };

  const socialLinks = Object.entries(member.social).filter(([_, value]) => value);

  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ x: 8, scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative surface rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <div className="flex gap-6">
          <div className="relative">
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {member.featured && (
              <div className="absolute -top-2 -right-2">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-rotaract-pink transition-colors">
                  {member.name}
                </h3>
                <p className="text-rotaract-pink font-medium text-sm mb-2">
                  {member.role}
                </p>
              </div>
              <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                {member.department}
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
              {member.shortBio}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Joined {member.joinedYear}</span>
                <span>•</span>
                <span>{member.experience} experience</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Kathmandu
                </span>
              </div>
              
              <motion.a
                href={`mailto:${member.social.email}`}
                whileHover={{ x: 5 }}
                className="text-rotaract-pink font-medium text-sm flex items-center gap-1"
              >
                Connect <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative surface rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rotaract-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="relative mb-6">
          <Image
            src={member.image}
            alt={member.name}
            width={120}
            height={120}
            className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {member.featured && (
            <div className="absolute -top-2 -right-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">★</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-rotaract-pink transition-colors mb-1">
            {member.name}
          </h3>
          <p className="text-rotaract-pink font-medium text-sm mb-2">
            {member.role}
          </p>
          <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
            {member.department}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {member.shortBio}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Joined {member.joinedYear} • {member.experience}</span>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {member.interests.slice(0, 3).map((interest, index) => (
              <span key={index} className="text-xs bg-secondary/30 text-foreground px-2 py-1 rounded-full">
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {socialLinks.map(([platform, link]) => (
              <motion.a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-rotaract-pink hover:bg-rotaract-pink/10 transition-colors"
              >
                {getSocialIcon(platform)}
              </motion.a>
            ))}
          </div>
        )}
        
        <motion.div
          initial={false}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <Link
            href={`/team/${member.id}`}
            className="w-full py-3 bg-gradient-to-r from-rotaract-pink to-rotaract-dark text-white font-medium rounded-full hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
          >
            View Profile <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface TeamSearchAndFilterProps {
  departments: string[];
  onDepartmentChange: (dept: string | null) => void;
  onSearch: (query: string) => void;
  activeDepartment: string | null;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
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

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  return (
    <div className="surface rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, position, or interest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-full bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rotaract-pink/30 focus:border-rotaract-pink/50 transition-all"
          />
        </div>
        
        <div className="flex gap-3 items-center">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-3 rounded-full transition-colors ${viewMode === "grid" ? "bg-rotaract-pink/10 text-rotaract-pink" : "bg-secondary/50 hover:bg-secondary/70 text-muted-foreground"}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-3 rounded-full transition-colors ${viewMode === "list" ? "bg-rotaract-pink/10 text-rotaract-pink" : "bg-secondary/50 hover:bg-secondary/70 text-muted-foreground"}`}
          >
            <List className="w-5 h-5" />
          </button>
          
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-full transition-colors"
            >
              <Users className="w-5 h-5" />
              Department Filter
              {activeDepartment && (
                <span className="bg-rotaract-pink text-white text-xs px-2 py-1 rounded-full ml-2">
                  {activeDepartment}
                </span>
              )}
            </button>
            
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-64 surface rounded-2xl p-4 shadow-xl z-50 border border-border"
              >
                <button
                  onClick={() => onDepartmentChange(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors mb-2 ${!activeDepartment ? "bg-rotaract-pink/10 text-rotaract-pink" : "hover:bg-secondary/50"}`}
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
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeDepartment === dept ? "bg-rotaract-pink/10 text-rotaract-pink" : "hover:bg-secondary/50"}`}
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

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  viewMode?: "grid" | "list";
}

export function TeamMemberModal({ member, isOpen, onClose, viewMode = "grid" }: TeamMemberModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!member) return null;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "facebook":
        return <Facebook className="w-5 h-5" />;
      case "email":
        return <Mail className="w-5 h-5" />;
      default:
        return <Link className="w-5 h-5" />;
    }
  };

  const socialLinks = Object.entries(member.social).filter(([_, value]) => value);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="surface rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-secondary/70 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="md:col-span-2 p-8 md:p-10">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-foreground">
                        {member.name}
                      </h2>
                      {member.featured && (
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">★</span>
                        </div>
                      )}
                    </div>
                    <p className="text-rotaract-pink font-semibold text-lg mb-2">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>📅 Joined {member.joinedYear}</span>
                      <span>•</span>
                      <span>💼 {member.experience} experience</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Kathmandu
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-3">About</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.biography}
                      </p>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Rotaract Journey</h3>
                      <div className="bg-secondary/30 rounded-xl p-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Current Role:</span>
                            <p className="font-medium text-foreground">{member.currentRole}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Years Involved:</span>
                            <p className="font-medium text-foreground">{member.experience}</p>
                          </div>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Areas of Interest</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="bg-secondary/50 text-foreground px-3 py-2 rounded-full text-sm font-medium"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Responsibilities</h3>
                      <ul className="space-y-2">
                        {member.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-rotaract-pink rounded-full mt-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    
                    {socialLinks.length > 0 && (
                      <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Connect</h3>
                        <div className="flex gap-3">
                          {socialLinks.map(([platform, link]) => (
                            <motion.a
                              key={platform}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-rotaract-pink hover:bg-rotaract-pink/10 transition-all"
                            >
                              {getSocialIcon(platform)}
                            </motion.a>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
