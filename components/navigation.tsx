import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              AI Agent Automation
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 ml-10">
            <Link
              href="/docs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Docs
            </Link>
            <Link
              href="/showcase"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Showcase
            </Link>
            <Link
              href="/docs/workflows"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Workflows
            </Link>
            <Link
              href="/docs/agents"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Agents
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
            <Link
              href="https://github.com/vmDeshpande/ai-agent-automation"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
          <Link href="/docs">
            <Button size="sm">Get started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
