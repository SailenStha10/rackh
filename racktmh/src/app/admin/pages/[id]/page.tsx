"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { PageEditor } from "@/components/PageEditor";
import { mockPages, PageData } from "@/lib/admin-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EditPagePage() {
  const router = useRouter();
  const params = useParams();
  const pageId = params.id as string;

  const isNewPage = pageId === "new";
  const basePage = isNewPage
    ? {
        id: `page-${Date.now()}`,
        slug: "",
        title: "New Page",
        description: "",
        published: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        sections: [],
      }
    : mockPages.find((p) => p.id === pageId);

  const [page, setPage] = useState<PageData | undefined>(basePage);
  const [isSaving, setIsSaving] = useState(false);

  if (!page) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Page not found</p>
        <Link href="/admin/pages" className="text-rotaract-pink hover:underline">
          Back to Pages
        </Link>
      </div>
    );
  }

  const handleSave = async (updatedPage: PageData) => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Page saved:", updatedPage);
    setPage(updatedPage);
    setIsSaving(false);
    // Redirect after save
    router.push("/admin/pages");
  };

  const handleCancel = () => {
    router.push("/admin/pages");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/admin/pages"
          className="inline-flex items-center gap-2 text-rotaract-pink hover:text-rotaract-pink/80 mb-4 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Pages
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          {isNewPage ? "Create New Page" : `Edit: ${page.title}`}
        </h1>
        <p className="text-muted-foreground">
          {isNewPage
            ? "Create a new page for your website"
            : "Edit page content, sections, and metadata"}
        </p>
      </div>

      {/* Loading State */}
      {isSaving && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 rounded-lg">
          <div className="bg-surface rounded-[1.5rem] p-8 text-center">
            <div className="w-10 h-10 border-4 border-rotaract-pink/20 border-t-rotaract-pink rounded-full animate-spin mx-auto mb-4" />
            <p className="text-foreground font-medium">Saving...</p>
          </div>
        </div>
      )}

      {/* Editor */}
      <PageEditor page={page} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
