import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Cpu,
  Workflow,
  Wrench,
  Clock,
  Database,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "System Internals | AI Agent Automation",
  description:
    "No magic. Just execution. How AI Agent Automation actually runs workflows.",
  alternates: {
    canonical: "/internals/",
  },
  openGraph: {
    url: "/internals/",
  },
};

export default function InternalsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto pt-32 pb-20 px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
        >
          System Internals
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          No Magic. Just Execution.
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page documents how AI Agent Automation actually runs workflows —
          from task creation to final persistence — with nothing hidden.
        </p>
      </section>

      {/* Execution Spine */}
      <section className="container mx-auto pb-24 px-4">
        <Card className="p-10 border-border/50 bg-card/30">
          <h2 className="text-3xl font-bold mb-4">The Execution Spine</h2>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Every workflow execution follows the same immutable path. No
            shortcuts. No branching logic injected by agents.
          </p>

          <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-10 mt-8">
            {[
              [
                "Task Creation",
                "A trigger (manual, scheduler, webhook, or API) creates a Task document in MongoDB with steps, edges, and initial context.",
              ],
              [
                "Task Claiming",
                "The worker polls for PENDING tasks and atomically marks one as RUNNING using MongoDB findOneAndUpdate with $set.",
              ],
              [
                "Context Initialization",
                "The runner builds an execution context containing workflow input, step outputs, variables, and metadata.",
              ],
              [
                "Step Execution",
                "The executor dispatches each step to the correct handler. Parallel branches acquire distributed locks before executing.",
              ],
              [
                "Result Persistence",
                "Step results, logs, and trace IDs are written to the database. Socket.IO broadcasts progress to connected clients.",
              ],
              [
                "Completion",
                "The task is marked COMPLETED, FAILED, PENDING_APPROVAL, or REJECTED. No further steps run unless explicitly resumed.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
