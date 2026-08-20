import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Play,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Replay & Resumable Execution | AI Agent Automation Docs",
  description:
    "Rerun failed workflows from the point of failure, resume paused tasks, and understand retry behavior.",
  alternates: {
    canonical: "/docs/replay/",
  },
  openGraph: {
    url: "/docs/replay/",
  },
};

export default function ReplayDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Execution Control
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Replay & Resumable Execution
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Recover from failures without starting over. Rerun from a failed step,
          resume paused tasks, and rely on automatic retries with exponential
          backoff.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Rerun From Failed Step</h2>
        <p className="text-muted-foreground leading-relaxed">
          When a workflow fails, you can trigger a rerun that starts execution
          from the failed step instead of the beginning. All successful step
          results from the previous run are preserved and injected into the
          context.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/tasks/:id/rerun-from-failed
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Request
POST /api/tasks/task_123/rerun-from-failed
Authorization: Bearer <token>

# Response
{
  "ok": true,
  "taskId": "task_123",
  "rerunFromStep": "step_5"
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Resumable Execution</h2>
        <p className="text-muted-foreground leading-relaxed">
          Tasks paused for approval can be resumed once the human decision is
          made. The runner continues from the next step with the preserved
          execution context.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/tasks/:id/resume
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Request
POST /api/tasks/task_123/resume
Authorization: Bearer <token>

# Response
{
  "ok": true,
  "taskId": "task_123",
  "status": "running"
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Retry Behavior</h2>
        <p className="text-muted-foreground leading-relaxed">
          Individual steps can be configured with retry policies. If a step
          fails, the executor retries up to the configured maximum attempts
          before marking the step as failed. Retries use exponential backoff.
        </p>
        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-primary" />
              Exponential Backoff
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The initial backoff is 1 second. Each retry multiplies the wait
              time by the configured <code>backoffMultiplier</code> (default 2).
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Maximum Attempts
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The <code>maxRetries</code> field controls how many times a step
              is retried. The default is 0 (no retries). Retries are per-step;
              a successful step is never re-executed on rerun.
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Step Result Preservation
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On rerun, all previously successful step results are preserved.
              Only the failed step and subsequent steps are re-executed. This
              ensures deterministic behavior and saves compute.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Partial Execution
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can also trigger partial execution via{" "}
          <code>POST /api/workflows/:workflowId/run-partial</code>, which runs
          only a subset of steps. Combined with version history and rollback,
          this gives you fine-grained control over workflow experimentation.
        </p>
      </Card>
    </div>
  );
}
