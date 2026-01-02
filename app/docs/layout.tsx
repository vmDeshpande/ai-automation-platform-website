"use client";

import type React from "react";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DocsSidebar } from "@/components/docs-sidebar";
import { X } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <Navigation onDocsToggle={() => setMobileOpen(true)} />

      {/* ================= MOBILE SIDEBAR ================= */}
{mobileOpen && (
  <div className="fixed inset-0 z-[100] md:hidden">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/60"
      onClick={() => setMobileOpen(false)}
    />

    {/* Sidebar */}
    <aside className="absolute left-0 top-0 h-full w-72 bg-background border-r border-border flex flex-col">
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        <span className="font-semibold">Documentation</span>
        <button onClick={() => setMobileOpen(false)}>
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <DocsSidebar onNavigate={() => setMobileOpen(false)} />
      </div>
    </aside>
  </div>
)}


      {/* ================= PAGE CONTENT ================= */}
      <div className="container mx-auto flex-1 py-10 px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {/* Desktop Sidebar (UNCHANGED) */}
          <aside className="hidden md:block w-72 shrink-0">
            <div className="h-[calc(100vh-4.5rem)]">
              <DocsSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto pb-20">
              {children}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
