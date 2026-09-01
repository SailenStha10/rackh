"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Save,
  Settings,
  Database,
  Shield,
  Mail,
  Globe,
  Check,
} from "lucide-react";

export default function AdminSettings() {
  const [isSaved, setIsSaved] = useState(false);
  const [settings, setSettings] = useState({
    // General Settings
    siteTitle: "Rotaract Club of Kathmandu Height",
    siteUrl: "https://racktmh.com",
    adminEmail: "admin@racktmh.com",
    supportEmail: "support@racktmh.com",

    // SEO Settings
    seoTitle: "Rotaract Club of Kathmandu Height",
    seoDescription:
      "Creating lasting change through service, leadership, and fellowship",
    seoKeywords: ["rotaract", "kathmandu", "service", "leadership"],

    // Contact Settings
    contactEmail: "contact@racktmh.com",
    contactPhone: "+977-1-1234567",
    contactAddress: "Kathmandu, Nepal",

    // Social Links
    facebook: "https://facebook.com/racktmh",
    instagram: "https://instagram.com/racktmh",
    linkedin: "https://linkedin.com/company/racktmh",
    twitter: "https://twitter.com/racktmh",

    // Feature Flags
    enableComments: false,
    enableNewsletter: true,
    enableDownloads: true,
    maintenanceMode: false,
  });

  const handleSaveSettings = () => {
    console.log("Settings saved:", settings);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const sections = [
    {
      title: "General Settings",
      icon: Settings,
      fields: [
        {
          label: "Site Title",
          key: "siteTitle",
          type: "text",
        },
        {
          label: "Site URL",
          key: "siteUrl",
          type: "url",
        },
        {
          label: "Admin Email",
          key: "adminEmail",
          type: "email",
        },
        {
          label: "Support Email",
          key: "supportEmail",
          type: "email",
        },
      ],
    },
    {
      title: "SEO & Meta",
      icon: Globe,
      fields: [
        {
          label: "SEO Title",
          key: "seoTitle",
          type: "text",
        },
        {
          label: "SEO Description",
          key: "seoDescription",
          type: "textarea",
          rows: 3,
        },
        {
          label: "Keywords (comma-separated)",
          key: "seoKeywords",
          type: "text",
        },
      ],
    },
    {
      title: "Contact Information",
      icon: Mail,
      fields: [
        {
          label: "Contact Email",
          key: "contactEmail",
          type: "email",
        },
        {
          label: "Phone",
          key: "contactPhone",
          type: "tel",
        },
        {
          label: "Address",
          key: "contactAddress",
          type: "textarea",
          rows: 2,
        },
      ],
    },
    {
      title: "Social Media",
      icon: Globe,
      fields: [
        {
          label: "Facebook",
          key: "facebook",
          type: "url",
        },
        {
          label: "Instagram",
          key: "instagram",
          type: "url",
        },
        {
          label: "LinkedIn",
          key: "linkedin",
          type: "url",
        },
        {
          label: "Twitter",
          key: "twitter",
          type: "url",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage site configuration, SEO, and general settings
        </p>
      </div>

      {/* Settings Sections */}
      {sections.map((section, sectionIndex) => {
        const Icon = section.icon;
        return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="surface rounded-[1.5rem] border border-border overflow-hidden"
          >
            {/* Section Header */}
            <div className="p-6 border-b border-border bg-background/50 flex items-center gap-3">
              <Icon className="w-6 h-6 text-rotaract-pink" />
              <h2 className="text-xl font-bold text-foreground">
                {section.title}
              </h2>
            </div>

            {/* Section Content */}
            <div className="p-6">
              <div className="space-y-6">
                {section.fields.map((field: any) => (
                  <div key={field.key}>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        value={
                          Array.isArray(settings[field.key as keyof typeof settings])
                            ? (settings[field.key as keyof typeof settings] as any).join(", ")
                            : (settings[field.key as keyof typeof settings] as any)
                        }
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            [field.key]: field.key === "seoKeywords"
                              ? e.target.value
                              : e.target.value,
                          })
                        }
                        rows={field.rows || 3}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50 resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={
                          Array.isArray(settings[field.key as keyof typeof settings])
                            ? (settings[field.key as keyof typeof settings] as any).join(", ")
                            : (settings[field.key as keyof typeof settings] as any)
                        }
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            [field.key]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-rotaract-pink/50"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Feature Flags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="surface rounded-[1.5rem] border border-border"
      >
        <div className="p-6 border-b border-border bg-background/50 flex items-center gap-3">
          <Shield className="w-6 h-6 text-rotaract-pink" />
          <h2 className="text-xl font-bold text-foreground">Feature Flags</h2>
        </div>

        <div className="p-6 space-y-4">
          {[
            {
              key: "enableComments",
              label: "Enable Comments",
              description: "Allow visitors to leave comments",
            },
            {
              key: "enableNewsletter",
              label: "Enable Newsletter",
              description: "Show newsletter subscription form",
            },
            {
              key: "enableDownloads",
              label: "Enable Downloads",
              description: "Allow file downloads on pages",
            },
            {
              key: "maintenanceMode",
              label: "Maintenance Mode",
              description: "Show maintenance page to visitors",
            },
          ].map((flag: any) => (
            <label
              key={flag.key}
              className="flex items-start gap-4 cursor-pointer p-4 rounded-lg hover:bg-background/50 transition-all"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={settings[flag.key as keyof typeof settings] as any}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      [flag.key]: e.target.checked,
                    })
                  }
                  className="w-4 h-4 rounded border-border cursor-pointer"
                />
                <div>
                  <p className="font-medium text-foreground">{flag.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {flag.description}
                  </p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </motion.div>

      {/* Save Button */}
      <div className="flex items-center justify-between">
        <div>
          {isSaved && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-green-600 font-medium"
            >
              <Check className="w-5 h-5" /> Settings saved successfully!
            </motion.div>
          )}
        </div>
        <button
          onClick={handleSaveSettings}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rotaract-pink to-rotaract-pink/70 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          <Save className="w-5 h-5" /> Save All Settings
        </button>
      </div>

      {/* Danger Zone */}
      <div className="surface rounded-[1.5rem] border-2 border-red-500/30 p-8">
        <h2 className="text-xl font-bold text-red-600 mb-4">⚠️ Danger Zone</h2>
        <p className="text-muted-foreground mb-4">
          Irreversible actions that cannot be undone. Proceed with caution.
        </p>
        <div className="space-y-3">
          <button className="w-full px-6 py-3 border-2 border-red-500 text-red-600 font-semibold rounded-lg hover:bg-red-500/10 transition-all">
            Reset All Settings to Default
          </button>
          <button className="w-full px-6 py-3 border-2 border-red-500 text-red-600 font-semibold rounded-lg hover:bg-red-500/10 transition-all">
            Clear All Cache
          </button>
        </div>
      </div>
    </div>
  );
}
