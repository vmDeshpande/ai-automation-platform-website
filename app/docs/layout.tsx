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
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute left-0 top-0 flex h-full w-[85vw] max-w-sm flex-col border-r border-border bg-background shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <span className="font-semibold">Documentation</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Close documentation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto p-4">
              <DocsSidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </aside>
        </div>
      )}

      {/* ================= PAGE CONTENT ================= */}
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden md:block md:pr-2">
            <div className="no-scrollbar sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pb-6">
              <DocsSidebar />
            </div>
          </aside>

          <main className="min-w-0 w-full">
            <div className="mx-auto w-full max-w-4xl pb-20">
              {children}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
