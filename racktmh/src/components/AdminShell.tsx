"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Menu,
  X,
  ChevronRight,
  Settings,
  Eye,
  LogOut,
} from "lucide-react";
import { useState } from "react";

interface AdminShellProps {
  children: React.ReactNode;
}

export function AdminShell({ children }: AdminShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const adminLinks = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Pages", href: "/admin/pages", icon: FileText },
    { label: "Navigation", href: "/admin/navigation", icon: Menu },
    { label: "Components", href: "/admin/components", icon: ChevronRight },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-border transform transition-transform duration-300 ease-in-out z-40 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-border">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-rotaract-pink">Rotaract</span> Admin
            </h1>
            <p className="text-xs text-gray-400 mt-1">Club Management Dashboard</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-2">
            {adminLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    active
                      ? "bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
              <Eye className="w-4 h-4 text-gray-400" />
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                View Site
              </a>
            </div>
            <button className="w-full flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="border-b border-border bg-surface sticky top-0 z-30">
          <div className="flex items-center justify-between p-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex-1 text-center lg:text-left lg:ml-0 ml-4">
              <h2 className="text-xl font-bold text-foreground">Admin Panel</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rotaract-pink to-rotaract-pink/70 flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
                <span className="text-sm text-muted-foreground">Admin User</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
