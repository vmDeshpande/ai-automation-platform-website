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

export const metadata = {
  title: "Workflow Execution Model | AI Agent Automation Docs",
  description:
    "Learn how workflows execute deterministically in AI Agent Automation including task runners, step execution, and runtime context.",
  alternates: {
    canonical: "/docs/execution-model/",
  },
  openGraph: {
    url: "/docs/execution-model/",
  },
};

export default function ExecutionModelPage() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Execution Model
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Deterministic Execution
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Workflows run as structured programs. Every step, decision, and
          failure is explicit.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Is a Program</h2>
        <p className="text-muted-foreground leading-relaxed">
          Every workflow run becomes a <strong>Task</strong>. Tasks execute
          like deterministic programs — not probabilistic chats. Each step is
          ordered, observable, and final.
        </p>

        <div className="grid gap-4">
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
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Flow</h2>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>
            <strong>Task Creation</strong> — Trigger creates a Task with steps,
            edges, and context.
          </li>
          <li>
            <strong>Task Claiming</strong> — Worker atomically marks task as
            RUNNING.
          </li>
          <li>
            <strong>Context Init</strong> — Execution context is built from
            workflow input and variables.
          </li>
          <li>
            <strong>Step Execution</strong> — Steps run sequentially or in
            parallel, with distributed locks for safety.
          </li>
          <li>
            <strong>Result Persistence</strong> — Step results and logs are
            written to MongoDB.
          </li>
          <li>
            <strong>Completion</strong> — Task reaches terminal state:
            completed, failed, pending_approval, or rejected.
          </li>
        </ol>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Parallel & Join Execution</h2>
        <p className="text-muted-foreground leading-relaxed">
          Parallel nodes fan out execution into concurrent branches. Join nodes
          synchronize branches back together. MongoDB-backed distributed locks
          ensure safe execution across multiple workers.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Retry & Resume</h2>
        <p className="text-muted-foreground leading-relaxed">
          Steps support configurable retry policies with exponential backoff.
          Failed steps can be rerun without re-executing successful predecessors.
          Approval nodes pause execution for human review, and resumable tasks
          continue from the next step upon approval.
        </p>
      </div>
    </div>
  );
}
