"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  ChevronUp,
  ChevronDown,
  Save,
  X,
} from "lucide-react";
import { mockSiteConfig, NavigationItem, SiteConfig } from "@/lib/admin-data";

export default function NavigationManager() {
  const [config, setConfig] = useState<SiteConfig>(mockSiteConfig);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingItemLabel, setEditingItemLabel] = useState("");
  const [editingItemHref, setEditingItemHref] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleAddNavigationItem = () => {
    const newItem: NavigationItem = {
      id: `nav-${Date.now()}`,
      label: "New Item",
      href: "/",
      order: config.navigation.length + 1,
      isVisible: true,
    };
    setConfig({
      ...config,
      navigation: [...config.navigation, newItem].sort((a, b) => a.order - b.order),
    });
  };

  const handleEditItem = (item: NavigationItem) => {
    setEditingItemId(item.id);
    setEditingItemLabel(item.label);
    setEditingItemHref(item.href);
  };

  const handleSaveEdit = () => {
    if (editingItemId) {
      setConfig({
        ...config,
        navigation: config.navigation.map((item) =>
          item.id === editingItemId
            ? { ...item, label: editingItemLabel, href: editingItemHref }
            : item
        ),
      });
      setEditingItemId(null);
    }
  };

  const handleDeleteItem = (itemId: string) => {
    setConfig({
      ...config,
      navigation: config.navigation.filter((item) => item.id !== itemId),
    });
  };

  const handleToggleVisibility = (itemId: string) => {
    setConfig({
      ...config,
      navigation: config.navigation.map((item) =>
        item.id === itemId ? { ...item, isVisible: !item.isVisible } : item
      ),
    });
  };

  const handleReorder = (itemId: string, direction: "up" | "down") => {
    const index = config.navigation.findIndex((item) => item.id === itemId);
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < config.navigation.length - 1)
    ) {
      const newNav = [...config.navigation];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      [newNav[index], newNav[targetIndex]] = [newNav[targetIndex], newNav[index]];
      newNav.forEach((item, i) => (item.order = i + 1));
      setConfig({ ...config, navigation: newNav });
    }
  };

  const handleSaveConfig = () => {
    console.log("Configuration saved:", config);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Navigation Manager
          </h1>
          <p className="text-muted-foreground">
            Manage your site's navigation menu and links
          </p>
        </div>
        <button
          onClick={handleAddNavigationItem}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" /> Add Item
        </button>
      </div>

      {/* Site Configuration */}
      <div className="surface rounded-[1.5rem] p-8 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6">Site Configuration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={config.siteName}
              onChange={(e) =>
                setConfig({ ...config, siteName: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Primary Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={config.primaryColor}
                onChange={(e) =>
                  setConfig({ ...config, primaryColor: e.target.value })
                }
                className="w-12 h-10 rounded-lg cursor-pointer border border-border"
              />
              <input
                type="text"
                value={config.primaryColor}
                onChange={(e) =>
                  setConfig({ ...config, primaryColor: e.target.value })
                }
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Site Description
            </label>
            <textarea
              value={config.siteDescription}
              onChange={(e) =>
                setConfig({ ...config, siteDescription: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50 resize-none"
            />
          </div>
        </div>

        <button
          onClick={handleSaveConfig}
          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
        >
          <Save className="w-4 h-4" /> Save Configuration
        </button>

        {isSaved && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-green-600 text-sm font-medium"
          >
            ✓ Configuration saved successfully!
          </motion.p>
        )}
      </div>

      {/* Navigation Items */}
      <div className="surface rounded-[1.5rem] p-8 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6">Navigation Items</h2>

        <div className="space-y-4">
          {config.navigation
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-6 rounded-lg border border-border bg-background/50 hover:border-rotaract-pink/30 transition-all"
              >
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleReorder(item.id, "up")}
                    disabled={index === 0}
                    className="p-2 hover:bg-secondary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleReorder(item.id, "down")}
                    disabled={index === config.navigation.length - 1}
                    className="p-2 hover:bg-secondary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {editingItemId === item.id ? (
                  <div className="flex-1 flex gap-3 items-end">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Label
                      </label>
                      <input
                        type="text"
                        value={editingItemLabel}
                        onChange={(e) => setEditingItemLabel(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        URL
                      </label>
                      <input
                        type="text"
                        value={editingItemHref}
                        onChange={(e) => setEditingItemHref(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
                      />
                    </div>
                    <button
                      onClick={handleSaveEdit}
                      className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingItemId(null)}
                      className="p-2 hover:bg-secondary rounded-lg transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.href}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleVisibility(item.id)}
                        className="p-2 hover:bg-secondary rounded-lg transition-all text-muted-foreground hover:text-foreground"
                        title={item.isVisible ? "Hide" : "Show"}
                      >
                        {item.isVisible ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleEditItem(item)}
                        className="p-2 hover:bg-secondary rounded-lg transition-all text-muted-foreground hover:text-foreground"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
