"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation({
  onDocsToggle,
}: {
  onDocsToggle?: () => void;
}) {
  const [siteMenuOpen, setSiteMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            {/* Docs Menu (only on docs pages) */}
            {onDocsToggle && (
              <button
                onClick={onDocsToggle}
                className="md:hidden p-2 rounded-md hover:bg-accent"
                aria-label="Open docs menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}

            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                AI Agent Automation
              </span>
            </Link>
          </div>

           {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 ml-10">
          <Link href="/docs" className="text-sm font-medium hover:text-primary">
            Docs
          </Link>
          <Link href="/showcase" className="text-sm font-medium hover:text-primary">
            Showcase
          </Link>
          <Link href="/features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
        </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://github.com/vmDeshpande/ai-agent-automation"
                target="_blank"
              >
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/docs">Get started</Link>
            </Button>
          </div>

          {/* Mobile Site Menu Button */}
          <button
            onClick={() => setSiteMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
            aria-label="Open site menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE SITE MENU ================= */}
      {siteMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSiteMenuOpen(false)}
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-72 bg-background border-l border-border flex flex-col">
            <div className="h-16 flex items-center justify-between px-4 border-b border-border">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setSiteMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              {[
                ["/docs", "Docs"],
                ["/showcase", "Showcase"],
                ["/features", "Features"],
                ["/community", "Community"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setSiteMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-border space-y-2">
              <Button className="w-full" asChild>
                <Link href="/docs">Get started</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href="https://github.com/vmDeshpande/ai-agent-automation"
                  target="_blank"
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
