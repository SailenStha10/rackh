"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Search,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { PageData, mockPages } from "@/lib/admin-data";

export default function PagesManager() {
  const [pages, setPages] = useState<PageData[]>(mockPages);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">(
    "all"
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const filteredPages = pages.filter((page) => {
    const matchesSearch =
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "published" && page.published) ||
      (filterStatus === "draft" && !page.published);

    return matchesSearch && matchesFilter;
  });

  const handleDeletePage = (pageId: string) => {
    setPages(pages.filter((p) => p.id !== pageId));
    setShowDeleteConfirm(null);
  };

  const handleTogglePublish = (pageId: string) => {
    setPages(
      pages.map((p) =>
        p.id === pageId ? { ...p, published: !p.published } : p
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Pages</h1>
          <p className="text-muted-foreground">
            Manage all pages on your website
          </p>
        </div>
        <Link
          href="/admin/pages/new"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white rounded-lg font-semibold hover:shadow-lg transition-all w-full sm:w-auto justify-center sm:justify-start"
        >
          <Plus className="w-5 h-5" /> Create New Page
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="surface rounded-[1.5rem] p-6 border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {(["all", "published", "draft"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filterStatus === status
                    ? "bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white"
                    : "bg-secondary hover:bg-secondary/70 text-foreground"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pages List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPages.length > 0 ? (
          filteredPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="surface rounded-[1.5rem] p-6 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {page.title}
                    </h3>
                    {page.published ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-600 font-medium text-xs">
                        <CheckCircle className="w-3 h-3" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 font-medium text-xs">
                        <AlertCircle className="w-3 h-3" /> Draft
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    /{page.slug} • {page.sections.length} sections
                  </p>

                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {page.description}
                  </p>

                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Updated{" "}
                      {page.updatedAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleTogglePublish(page.id)}
                    className="p-3 hover:bg-secondary rounded-lg transition-all text-muted-foreground hover:text-foreground"
                    title={
                      page.published ? "Unpublish" : "Publish"
                    }
                  >
                    {page.published ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <EyeOff className="w-5 h-5" />
                    )}
                  </button>

                  <Link
                    href={`/admin/pages/${page.id}`}
                    className="p-3 hover:bg-secondary rounded-lg transition-all text-muted-foreground hover:text-foreground"
                    title="Edit"
                  >
                    <Edit2 className="w-5 h-5" />
                  </Link>

                  <div className="relative group">
                    <button
                      onClick={() =>
                        setShowDeleteConfirm(
                          showDeleteConfirm === page.id ? null : page.id
                        )
                      }
                      className="p-3 hover:bg-red-500/10 rounded-lg transition-all text-muted-foreground hover:text-red-500"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    {showDeleteConfirm === page.id && (
                      <div className="absolute right-0 mt-2 bg-surface border border-border rounded-lg p-4 shadow-xl z-50 min-w-[250px]">
                        <p className="text-sm font-medium text-foreground mb-3">
                          Delete "{page.title}"?
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowDeleteConfirm(null)}
                            className="flex-1 px-3 py-2 text-sm rounded-lg border border-border hover:bg-secondary transition-all"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleDeletePage(page.id)}
                            className="flex-1 px-3 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="surface rounded-[1.5rem] p-12 border border-border text-center">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground mb-2">No pages found</p>
            <p className="text-muted-foreground mb-6">
              {searchQuery || filterStatus !== "all"
                ? "Try adjusting your search or filters"
                : "Create your first page to get started"}
            </p>
            {!searchQuery && filterStatus === "all" && (
              <Link
                href="/admin/pages/new"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rotaract-pink text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Plus className="w-5 h-5" /> Create New Page
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
