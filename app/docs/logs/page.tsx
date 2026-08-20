import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Shield,
  History,
  Activity,
  Code,
  Bug,
} from "lucide-react";

export const metadata = {
  title: "Execution Logs | AI Agent Automation Docs",
  description:
    "Inspect workflow execution logs, step results, and debugging information.",
  alternates: {
    canonical: "/docs/logs/",
  },
  openGraph: {
    url: "/docs/logs/",
  },
};

export default function ExecutionLogsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Observability & Debugging
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Execution Logs
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Every workflow execution produces a complete, immutable audit trail —
          allowing you to debug failures, analyze performance, and understand
          agent behavior at every step.
        </p>
      </div>

      {/* Why Logs Matter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why Execution Logs Matter</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          In AI automation, failures are inevitable — models hallucinate, APIs
          timeout, tools misbehave. This platform treats observability as a{" "}
          <strong className="text-foreground">first-class feature</strong>. Logs
          are not an afterthought; they are the foundation for trust, safety,
          and reproducibility.
        </p>
      </section>

      {/* Observability Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Observability Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 border-border/50 bg-card/30 text-center space-y-2">
            <History className="h-8 w-8 mx-auto text-primary opacity-80" />
            <h4 className="font-semibold">Run History</h4>
            <p className="text-xs text-muted-foreground">
              Every workflow trigger creates a permanent execution record.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30 text-center space-y-2">
            <Activity className="h-8 w-8 mx-auto text-green-500 opacity-80" />
            <h4 className="font-semibold">Step-Level Status</h4>
            <p className="text-xs text-muted-foreground">
              Track success, failure, retries, and timing for each step.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30 text-center space-y-2">
            <Code className="h-8 w-8 mx-auto text-blue-500 opacity-80" />
            <h4 className="font-semibold">Payload Inspection</h4>
            <p className="text-xs text-muted-foreground">
              Full visibility into inputs, outputs, and intermediate results.
            </p>
          </Card>
        </div>
      </section>

      {/* Log Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Log Structure</h2>
        <p className="text-muted-foreground max-w-3xl">
          Logs are stored per task execution and indexed by workflow, step, and
          timestamp. This enables efficient querying, debugging, and replay.
        </p>

        <div className="rounded-md border border-border/50 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left font-medium text-muted-foreground/70 uppercase text-[11px] tracking-wider">
                  Field
                </th>
                <th className="p-4 text-left font-medium text-muted-foreground/70 uppercase text-[11px] tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {[
                ["message", "Human-readable log message"],
                ["level", "Log severity: debug, info, success, warn, error"],
                ["workerId", "Identifier of the worker that emitted the log"],
                ["workflowId", "ID of the workflow being executed"],
                ["taskId", "ID of the task execution"],
                ["createdAt", "ISO timestamp of the log entry"],
                ["traceId", "Trace ID for correlating logs across steps"],
              ].map(([field, desc]) => (
                <tr key={field} className="hover:bg-muted/20">
                  <td className="p-4 font-mono text-xs">{field}</td>
                  <td className="p-4 text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Log Levels */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Log Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["debug", "Detailed diagnostic information."],
            ["info", "General informational messages."],
            ["success", "Step or workflow completed successfully."],
            ["warn", "Potential issues that do not stop execution."],
            ["error", "Failures that caused a step or workflow to fail."],
          ].map(([level, desc]) => (
            <Card key={level} className="p-4 border-border/50 bg-card/30 flex items-center gap-4">
              <Badge variant="secondary" className="font-mono uppercase">
                {level}
              </Badge>
              <span className="text-sm text-muted-foreground">{desc}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Filtering */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Filtering Logs</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Logs page supports filtering by level, workflow ID, task ID,
          search text, and date range. Use structured view for detailed
          inspection or raw terminal view for quick scanning.
        </p>
      </section>

      {/* Log API */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Log API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">/api/logs</code>
            </div>
            <p className="text-sm text-muted-foreground">
              List logs with filtering by level, workflowId, taskId, search, and
              date range. Supports pagination.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
