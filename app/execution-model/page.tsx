import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Play,
  ListOrdered,
  CheckCircle,
  XCircle,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import { ExecutionCanvas } from "@/components/execution-model/execution-canvas";

export const metadata = {
  title: "Workflow Execution Model | AI Agent Automation",
  description:
    "Learn how workflows execute deterministically in AI Agent Automation including task runners, step execution, and runtime context.",
  alternates: {
    canonical: "/execution-model/",
  },
  openGraph: {
    url: "/execution-model/",
  },
};

export default function ExecutionModelPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto pt-32 pb-20 px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
        >
          Execution Model
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Deterministic Execution,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {" "}
            Visualized
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Workflows run as structured programs. Every step, decision, and
          failure is explicit.
        </p>
      </section>

      {/* Visual Execution Principles */}
      <section className="container mx-auto pb-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Explanation */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Execution Is a Program,
              <span className="text-primary"> Not a Conversation</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Every workflow run becomes a <strong>Task</strong>. Tasks execute
              like deterministic programs — not probabilistic chats. Each step
              is ordered, observable, and final.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: ListOrdered,
                  title: "Strict Step Order",
                  desc: "Steps execute sequentially. No future access. No branching unless explicitly defined.",
                },
                {
                  icon: CheckCircle,
                  title: "Immutable Outputs",
                  desc: "Once a step completes, its output is frozen and permanently recorded.",
                },
                {
                  icon: XCircle,
                  title: "Fail-Fast Semantics",
                  desc: "Execution stops immediately on failure. No hidden retries or silent recovery.",
                },
                {
                  icon: RotateCcw,
                  title: "Explicit Re-runs",
                  desc: "Re-running a workflow creates a new task. History is never mutated.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/30"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Canvas */}
          <div className="flex justify-center">
            <ExecutionCanvas />
          </div>
        </div>
      </section>
    </div>
  );
}
