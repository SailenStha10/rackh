"use client";

import React, { useState } from "react";
import { PageData, PageSection } from "@/lib/admin-data";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Eye, EyeOff, ChevronUp, ChevronDown } from "lucide-react";

interface PageEditorProps {
  page: PageData;
  onSave: (page: PageData) => void;
  onCancel: () => void;
}

export function PageEditor({ page, onSave, onCancel }: PageEditorProps) {
  const [editingPage, setEditingPage] = useState<PageData>(page);
  const [editingSection, setEditingSection] = useState<PageSection | null>(null);

  const handleAddSection = () => {
    const newSection: PageSection = {
      id: `section-${Date.now()}`,
      type: "content",
      title: "New Section",
      order: editingPage.sections.length + 1,
      isVisible: true,
    };
    setEditingPage({
      ...editingPage,
      sections: [...editingPage.sections, newSection],
    });
  };

  const handleUpdateSection = (sectionId: string, updates: Partial<PageSection>) => {
    setEditingPage({
      ...editingPage,
      sections: editingPage.sections.map((s) =>
        s.id === sectionId ? { ...s, ...updates } : s
      ),
    });
  };

  const handleDeleteSection = (sectionId: string) => {
    setEditingPage({
      ...editingPage,
      sections: editingPage.sections.filter((s) => s.id !== sectionId),
    });
  };

  const handleReorderSection = (sectionId: string, direction: "up" | "down") => {
    const index = editingPage.sections.findIndex((s) => s.id === sectionId);
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < editingPage.sections.length - 1)
    ) {
      const newSections = [...editingPage.sections];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      [newSections[index], newSections[targetIndex]] = [
        newSections[targetIndex],
        newSections[index],
      ];
      newSections.forEach((s, i) => (s.order = i + 1));
      setEditingPage({ ...editingPage, sections: newSections });
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Info Section */}
      <div className="surface rounded-[1.5rem] p-8 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">Page Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Page Title
            </label>
            <input
              type="text"
              value={editingPage.title}
              onChange={(e) =>
                setEditingPage({ ...editingPage, title: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              URL Slug
            </label>
            <input
              type="text"
              value={editingPage.slug}
              onChange={(e) =>
                setEditingPage({ ...editingPage, slug: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Description
            </label>
            <textarea
              value={editingPage.description}
              onChange={(e) =>
                setEditingPage({ ...editingPage, description: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50 resize-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={editingPage.published}
                onChange={(e) =>
                  setEditingPage({
                    ...editingPage,
                    published: e.target.checked,
                  })
                }
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm font-medium text-foreground">
                Published
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Sections Management */}
      <div className="surface rounded-[1.5rem] p-8 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Page Sections</h3>
          <button
            onClick={handleAddSection}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" /> Add Section
          </button>
        </div>

        <div className="space-y-4">
          {editingPage.sections
            .sort((a, b) => a.order - b.order)
            .map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-border rounded-lg p-6 bg-background/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={() =>
                          handleUpdateSection(section.id, {
                            isVisible: !section.isVisible,
                          })
                        }
                        className="p-2 hover:bg-secondary rounded-lg transition"
                      >
                        {section.isVisible ? (
                          <Eye className="w-4 h-4 text-foreground" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                      <input
                        type="text"
                        value={section.title || ""}
                        onChange={(e) =>
                          handleUpdateSection(section.id, { title: e.target.value })
                        }
                        placeholder="Section Title"
                        className="text-lg font-semibold bg-transparent border-b border-border pb-1 focus:outline-none focus:border-rotaract-pink"
                      />
                      <span className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                        {section.type}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">
                          Section Type
                        </label>
                        <select
                          value={section.type}
                          onChange={(e) =>
                            handleUpdateSection(section.id, {
                              type: e.target.value as any,
                            })
                          }
                          className="w-full mt-1 px-3 py-1 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
                        >
                          <option>hero</option>
                          <option>content</option>
                          <option>gallery</option>
                          <option>team</option>
                          <option>cta</option>
                          <option>testimonial</option>
                          <option>faq</option>
                          <option>form</option>
                          <option>stats</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">
                          Description
                        </label>
                        <textarea
                          value={section.description || ""}
                          onChange={(e) =>
                            handleUpdateSection(section.id, {
                              description: e.target.value,
                            })
                          }
                          rows={2}
                          placeholder="Section description"
                          className="w-full mt-1 px-3 py-2 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50 resize-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">
                          Content
                        </label>
                        <textarea
                          value={section.content || ""}
                          onChange={(e) =>
                            handleUpdateSection(section.id, {
                              content: e.target.value,
                            })
                          }
                          rows={2}
                          placeholder="Section content"
                          className="w-full mt-1 px-3 py-2 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleReorderSection(section.id, "up")}
                      className="p-2 hover:bg-secondary rounded-lg transition"
                      title="Move up"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleReorderSection(section.id, "down")}
                      className="p-2 hover:bg-secondary rounded-lg transition"
                      title="Move down"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteSection(section.id)}
                      className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-end">
        <button
          onClick={onCancel}
          className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-all"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            editingPage.updatedAt = new Date();
            onSave(editingPage);
          }}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white font-semibold hover:shadow-lg transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
