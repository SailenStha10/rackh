"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Settings,
  Eye,
  Edit2,
  BarChart3,
  Clock,
  CheckCircle,
} from "lucide-react";
import { mockPages, mockSiteConfig } from "@/lib/admin-data";

export default function AdminDashboard() {
  const publishedPages = mockPages.filter((p) => p.published).length;
  const draftPages = mockPages.filter((p) => !p.published).length;
  const totalSections = mockPages.reduce((acc, p) => acc + p.sections.length, 0);

  const stats = [
    {
      label: "Total Pages",
      value: mockPages.length,
      icon: FileText,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Published",
      value: publishedPages,
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Drafts",
      value: draftPages,
      icon: Edit2,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      label: "Total Sections",
      value: totalSections,
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const recentPages = mockPages.slice(0, 3);

  const quickActions = [
    {
      title: "Manage Pages",
      description: "Create, edit, and delete pages",
      href: "/admin/pages",
      icon: FileText,
    },
    {
      title: "Navigation",
      description: "Configure site navigation links",
      href: "/admin/navigation",
      icon: Settings,
    },
    {
      title: "Components",
      description: "View component library",
      href: "/admin/components",
      icon: Edit2,
    },
    {
      title: "Settings",
      description: "Site configuration and SEO",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Rotaract Club Admin Panel. Manage your site content and structure here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="surface rounded-[1.5rem] p-6 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="surface rounded-[1.5rem] p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={index}
                    href={action.href}
                    className="group p-6 rounded-[1.5rem] border border-border hover:border-rotaract-pink/50 hover:shadow-lg transition-all bg-background/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-rotaract-pink/10 to-rotaract-pink/5 group-hover:from-rotaract-pink/20 group-hover:to-rotaract-pink/10 transition-all">
                        <Icon className="w-6 h-6 text-rotaract-pink" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-rotaract-pink transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Site Info */}
        <div className="surface rounded-[1.5rem] p-8 border border-border">
          <h2 className="text-xl font-bold text-foreground mb-6">Site Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase">
                Site Name
              </p>
              <p className="text-foreground font-medium mt-1">
                {mockSiteConfig.siteName}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase">
                Navigation Items
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">
                {mockSiteConfig.navigation.length}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase">
                Last Updated
              </p>
              <p className="text-foreground text-sm mt-1">
                {new Date().toLocaleDateString()}
              </p>
            </div>
            <Link
              href="/admin/settings"
              className="w-full mt-6 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all text-center"
            >
              Edit Site Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Pages */}
      <div className="surface rounded-[1.5rem] p-8 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Recent Pages</h2>
          <Link
            href="/admin/pages"
            className="text-rotaract-pink hover:text-rotaract-pink/80 font-medium text-sm"
          >
            View All →
          </Link>
        </div>

        <div className="space-y-3">
          {recentPages.map((page) => (
            <div
              key={page.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{page.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {page.sections.length} sections •{" "}
                  {page.published ? (
                    <span className="text-green-600 font-medium">Published</span>
                  ) : (
                    <span className="text-yellow-600 font-medium">Draft</span>
                  )}
                </p>
              </div>
              <Link
                href={`/admin/pages/${page.id}`}
                className="p-2 hover:bg-rotaract-pink/10 rounded-lg text-rotaract-pink transition-all"
              >
                <Edit2 className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
