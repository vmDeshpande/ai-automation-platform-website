"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Workflow,
  Bot,
  PenTool as Tool,
  Terminal,
  Database,
  Shield,
  Cpu,
  Lock,
  FileCode,
  Calendar,
  Layers,
  Search,
  Settings,
  Code,
  Server,
  Rocket,
  History,
  Users,
  Webhook,
  Plug,
  BarChart3,
  GitBranch,
  CheckSquare,
  RefreshCw,
  Wand2,
  FileJson,
  BotIcon as AgentTeam,
  MessageSquare,
  Play,
  BookOpen,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/", icon: FileCode },
      { title: "Installation", href: "/docs/installation/", icon: Terminal },
      { title: "Quickstart", href: "/docs/quickstart/", icon: Rocket },
      { title: "Configuration", href: "/docs/configuration/", icon: Settings },
    ],
  },
  {
    title: "Why This Platform",
    items: [
      { title: "Overview", href: "/docs/why/", icon: Shield },
      { title: "Comparison & Alternatives", href: "/docs/why-compare/", icon: Layers },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Architecture", href: "/docs/architecture/", icon: Layers },
      { title: "Execution Model", href: "/docs/execution-model/", icon: Play },
      { title: "Workflows", href: "/docs/workflows/", icon: Workflow },
      { title: "AI Agents", href: "/docs/agents/", icon: Bot },
      { title: "Step Runner", href: "/docs/runner/", icon: Cpu },
    ],
  },
  {
    title: "Workflow Nodes",
    items: [
      { title: "All Step Types", href: "/docs/tools/", icon: Tool },
      { title: "Parallel & Join", href: "/docs/parallel-join/", icon: GitBranch },
      { title: "Conditions & Switch", href: "/docs/conditions-switch/", icon: GitBranch },
      { title: "Approval Workflows", href: "/docs/approval/", icon: CheckSquare },
      { title: "Agent Call", href: "/docs/agent-call/", icon: Bot },
      { title: "Replay & Resume", href: "/docs/replay/", icon: RefreshCw },
    ],
  },
  {
    title: "Agents & Teams",
    items: [
      { title: "Agent Configuration", href: "/docs/agents/", icon: Bot },
      { title: "Agent Teams & A2A", href: "/docs/agent-teams/", icon: Users },
      { title: "Agent Playground", href: "/docs/playground/", icon: Play },
    ],
  },
  {
    title: "Intelligence & Data",
    items: [
      { title: "Agent Memory", href: "/docs/memory/", icon: Database },
      { title: "Documents & RAG", href: "/docs/rag/", icon: Search },
      { title: "Document Chat", href: "/docs/document-chat/", icon: MessageSquare },
      { title: "MCP Integration", href: "/docs/mcp/", icon: Plug },
    ],
  },
  {
    title: "Automation & APIs",
    items: [
      { title: "Scheduler", href: "/docs/scheduler/", icon: Calendar },
      { title: "Webhooks", href: "/docs/webhooks/", icon: Webhook },
      { title: "Workflow APIs", href: "/docs/workflow-apis/", icon: Code },
      { title: "Templates", href: "/docs/templates/", icon: FileJson },
      { title: "AI Workflow Generation", href: "/docs/ai-generation/", icon: Wand2 },
    ],
  },
  {
    title: "Observability",
    items: [
      { title: "Execution Logs", href: "/docs/logs/", icon: History },
      { title: "Insights & Analytics", href: "/docs/insights/", icon: BarChart3 },
      { title: "Task Executions", href: "/docs/tasks/", icon: CheckSquare },
    ],
  },
  {
    title: "Reference & Ops",
    items: [
      { title: "API Reference", href: "/docs/api-reference/", icon: Code },
      { title: "Deployment", href: "/docs/deployment/", icon: Server },
      { title: "Security & Privacy", href: "/docs/security/", icon: Lock },
      { title: "Local-First Design", href: "/docs/local-first/", icon: Shield },
    ],
  },
];

export function DocsSidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full space-y-8">
      {sidebarItems.map((section, i) => (
        <div key={i} className="space-y-3">
          <h4 className="px-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground/70">
            {section.title}
          </h4>

          <div className="grid gap-1 text-sm">
            {section.items.map((item, j) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={j}
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "group flex w-full items-center rounded-md px-2.5 py-2 text-left transition-colors duration-200",
                    active
                      ? "bg-accent text-primary font-semibold shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-2.5 h-4 w-4 shrink-0",
                      active
                        ? "text-primary"
                        : "text-muted-foreground/60 group-hover:text-foreground"
                    )}
                  />
                  <span className="truncate">{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
