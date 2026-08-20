import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  GitBranch,
  Zap,
  Shield,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Parallel & Join Nodes | AI Agent Automation Docs",
  description:
    "Execute multiple workflow branches in parallel and synchronize them with join nodes.",
  alternates: {
    canonical: "/docs/parallel-join/",
  },
  openGraph: {
    url: "/docs/parallel-join/",
  },
};

export default function ParallelJoinDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Workflow Nodes
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Parallel & Join Nodes
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Split workflow execution into multiple concurrent branches and merge
          them back with join nodes. Built on distributed locks for safe
          multi-worker execution.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Parallel Node</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Parallel node fans out execution into multiple outgoing branches.
          Each branch runs independently and concurrently. The node supports two
          failure strategies: <code>fail-fast</code> (stop all branches on first
          failure) and <code>continue-on-error</code> (let other branches finish
          even if one fails).
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              parallel-node.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "parallel",
  "failureStrategy": "fail-fast",
  "branches": [
    { "steps": [{ "type": "http", "url": "https://api.a" }] },
    { "steps": [{ "type": "http", "url": "https://api.b" }] }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Join Node</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Join node waits for all parallel branches to complete before
          continuing. It merges branch results into the shared execution context.
          If a branch failed and the strategy is <code>fail-fast</code>, the
          join will propagate the failure.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              join-node.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "join",
  "branches": ["branch_a", "branch_b"]
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Guarantees</h2>
        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Distributed Locking
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Parallel and join nodes use MongoDB-backed distributed locks and
              semaphores. This ensures that even when multiple workers are
              running, branches do not race or corrupt shared state.
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Concurrency Control
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each worker respects the configured concurrency limit. The lock
              manager prevents over-subscription of parallel tasks across the
              cluster.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Builder Usage
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          In the visual workflow builder, drag a Parallel node onto the canvas.
          Connect multiple branches from its output port. Connect a Join node at
          the end of each branch and wire them back to the join&apos;s input
          port. The builder enforces that every branch reaching a join has a
          corresponding edge.
        </p>
      </Card>
    </div>
  );
}
