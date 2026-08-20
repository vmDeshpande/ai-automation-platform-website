import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Terminal, Rocket, CheckCircle2, Cpu, Workflow } from "lucide-react";

export const metadata = {
  title: "Quickstart Guide | AI Agent Automation Docs",
  description:
    "Get started quickly with AI Agent Automation by installing the platform and running your first AI workflow.",
  alternates: {
    canonical: "/docs/quickstart/",
  },
  openGraph: {
    url: "/docs/quickstart/",
  },
};

export default function QuickstartPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Getting Started
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Quickstart
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Build and run your first AI-powered automation workflow in minutes —
          fully local, privacy-first, and under your control.
        </p>
      </div>

      {/* Intro */}
      <Card className="p-6 bg-card/40 border-border/60">
        <p className="text-muted-foreground leading-relaxed">
          This platform is designed around <strong>local AI agents</strong> and
          <strong> deterministic workflows</strong>. Nothing is hidden, nothing
          is sent to third-party SaaS platforms by default.
          <br />
          <br />
          You define agents, compose workflows, and execute tasks using a runner
          that you own and operate.
        </p>
      </Card>

      {/* Step 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Cpu className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">1. Create an Agent</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          An agent represents an autonomous unit that can reason, use tools, and
          execute steps. Agents can send emails, read/write files, browse the
          web, or call language models.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-blue-400">
            {`{
  "name": "Research Agent",
  "description": "Summarizes and analyzes information",
  "provider": "openai",
  "model": "gpt-4o-mini",
  "capabilities": ["llm", "web_search"]
}`}
          </pre>
        </div>
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Workflow className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">2. Define a Workflow</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          A workflow is a sequence of steps executed in order. Each step
          produces structured output that feeds into the next step.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-green-400">
            {`{
  "name": "Daily Report Workflow",
  "metadata": {
    "steps": [
      { "stepId": "fetch", "type": "http", "method": "GET", "url": "https://api.example.com/data" },
      { "stepId": "summarize", "type": "llm", "prompt": "Summarize: {{steps.fetch.output}}" },
      { "stepId": "save", "type": "file", "action": "write", "path": "./report.txt", "content": "{{steps.summarize.output}}" },
      { "stepId": "notify", "type": "email", "to": "me@example.com", "subject": "Daily Report", "body": "{{steps.summarize.output}}" }
    ],
    "edges": [
      { "id": "e1", "source": "fetch", "target": "summarize" },
      { "id": "e2", "source": "summarize", "target": "save" },
      { "id": "e3", "source": "save", "target": "notify" }
    ]
  }
}`}
          </pre>
        </div>
      </section>

      {/* Step 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Terminal className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">3. Run the Workflow</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Save the workflow in the UI or via the API, then trigger a manual
          execution. The worker picks up the task and executes each step in
          order.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-yellow-400">
            {`# Create workflow
curl -X POST http://localhost:5000/api/workflows \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d @workflow.json

# Run workflow
curl -X POST http://localhost:5000/api/workflows/<id>/run \\
  -H "Authorization: Bearer <token>"`}
          </pre>
        </div>
      </section>

      {/* Step 4 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">4. Inspect Results</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Check the Tasks page to see the execution status, step results, and
          logs. Each step&apos;s input, output, and duration are recorded for
          debugging.
        </p>
      </section>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2">What&apos;s Next?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Explore the{" "}
            <a href="/docs/agents/" className="text-primary underline">
              Agents
            </a>{" "}
            page to configure provider-specific models.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Read about{" "}
            <a href="/docs/memory/" className="text-primary underline">
              Agent Memory
            </a>{" "}
            to enable cross-execution context.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Set up the{" "}
            <a href="/docs/scheduler/" className="text-primary underline">
              Scheduler
            </a>{" "}
            for recurring workflow runs.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Configure{" "}
            <a href="/docs/webhooks/" className="text-primary underline">
              Webhooks
            </a>{" "}
            to trigger workflows from external services.
          </li>
        </ul>
      </Card>
    </div>
  );
}
