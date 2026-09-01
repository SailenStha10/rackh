"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Code, Eye } from "lucide-react";
import { componentTemplates, ComponentTemplate } from "@/lib/admin-data";

export default function ComponentsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState<Record<string, boolean>>({});

  const categories = Array.from(
    new Set(componentTemplates.map((c) => c.category))
  );
  const filteredComponents = selectedCategory
    ? componentTemplates.filter((c) => c.category === selectedCategory)
    : componentTemplates;

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const togglePreview = (id: string) => {
    setShowPreview((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Component Library
        </h1>
        <p className="text-muted-foreground">
          Pre-built components and design patterns for consistent UI
        </p>
      </div>

      {/* Category Filter */}
      <div className="surface rounded-[1.5rem] p-6 border border-border">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? "bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white"
                : "bg-secondary hover:bg-secondary/70 text-foreground"
            }`}
          >
            All Components ({componentTemplates.length})
          </button>
          {categories.map((category) => {
            const count = componentTemplates.filter(
              (c) => c.category === category
            ).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white"
                    : "bg-secondary hover:bg-secondary/70 text-foreground"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredComponents.map((component, index) => (
          <motion.div
            key={component.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="surface rounded-[1.5rem] border border-border overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Header */}
            <div className="p-6 border-b border-border bg-background/50">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {component.name}
                  </h3>
                  <p className="text-xs font-semibold text-rotaract-pink uppercase mt-1">
                    {component.category}
                  </p>
                </div>
                <span className="px-2 py-1 bg-secondary rounded text-xs font-medium text-muted-foreground">
                  Copy
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {component.description}
              </p>
            </div>

            {/* Preview Section */}
            <div className="border-b border-border">
              <button
                onClick={() => togglePreview(component.id)}
                className="w-full p-4 flex items-center justify-center gap-2 hover:bg-background/50 transition-all text-muted-foreground hover:text-foreground font-medium"
              >
                <Eye className="w-4 h-4" />
                {showPreview[component.id] ? "Hide Preview" : "Show Preview"}
              </button>

              {showPreview[component.id] && (
                <div className="p-6 bg-background/30 flex items-center justify-center min-h-[200px]">
                  <div className="w-full">
                    {/* Render component preview */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: component.preview || component.code,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Code Section */}
            <div className="bg-[#1e1e1e] p-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-medium">JSX Code</span>
                </div>
                <button
                  onClick={() => handleCopyCode(component.id, component.code)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-secondary hover:bg-secondary/70 transition-all text-xs font-medium"
                >
                  {copiedId === component.id ? (
                    <>
                      <Check className="w-3 h-3" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-xs text-gray-300 overflow-x-auto">
                <code>{component.code}</code>
              </pre>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredComponents.length === 0 && (
        <div className="surface rounded-[1.5rem] p-12 border border-border text-center">
          <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg font-medium text-foreground mb-2">
            No components found
          </p>
          <p className="text-muted-foreground">
            Try selecting a different category
          </p>
        </div>
      )}

      {/* Component Info */}
      <div className="surface rounded-[1.5rem] p-8 border border-border bg-gradient-to-br from-rotaract-pink/5 to-rotaract-pink/0">
        <h2 className="text-xl font-bold text-foreground mb-4">
          📚 Using Components
        </h2>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="flex gap-3">
            <span className="text-rotaract-pink font-bold">1.</span>
            <span>Select a component from the library above</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rotaract-pink font-bold">2.</span>
            <span>Click "Copy" to copy the component code</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rotaract-pink font-bold">3.</span>
            <span>Paste the code into your page sections</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rotaract-pink font-bold">4.</span>
            <span>Customize the props and styling as needed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
