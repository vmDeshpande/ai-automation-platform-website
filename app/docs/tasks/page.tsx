import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  CheckSquare,
  Clock,
  Search,
  Play,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Task Executions | AI Agent Automation Docs",
  description:
    "View and manage workflow execution history with real-time status tracking and detailed step analysis.",
  alternates: {
    canonical: "/docs/tasks/",
  },
  openGraph: {
    url: "/docs/tasks/",
  },
};

export default function TasksDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Observability
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Task Executions
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Every workflow run creates a task. Track status, inspect step results,
          filter by workflow, and manage execution history.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What is a Task?</h2>
        <p className="text-muted-foreground leading-relaxed">
          A Task is the runtime instance of a workflow execution. It contains
          the execution context, step results, status, and metadata. Tasks are
          created by manual runs, schedules, webhooks, or public API calls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Play,
              title: "Execution Record",
              desc: "Tasks capture the full lifecycle: pending, running, completed, failed, pending_approval, or rejected.",
            },
            {
              icon: Search,
              title: "Filtering & Search",
              desc: "Filter tasks by workflow, search by name or ID, and paginate through execution history.",
            },
            {
              icon: Clock,
              title: "Step Detail",
              desc: "Drill into a task to see every step&apos;s input, output, duration, status, and error details.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Task Lifecycle</h2>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>
            <strong>Pending</strong> — Task is created and queued for execution.
          </li>
          <li>
            <strong>Running</strong> — A worker has claimed the task and is
            executing steps.
          </li>
          <li>
            <strong>Pending Approval</strong> — Execution is paused at an
            approval node.
          </li>
          <li>
            <strong>Completed</strong> — All steps finished successfully.
          </li>
          <li>
            <strong>Failed / Rejected</strong> — Execution ended due to an error
            or human rejection.
          </li>
        </ol>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Task API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Create a new task. Optionally link it to a workflow.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              List tasks for the authenticated user with pagination.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks/:id
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Get task details including step results and metadata.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-destructive/20 text-destructive border-none font-mono">
                DELETE
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks/:id
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Permanently delete a task and its associated step results.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          UI Features
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Task list supports
            workflow filtering, search, and pagination.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Task detail view shows
            step logs, variables, metadata, replay controls, and API settings.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Approval tasks show an
            inline action to approve or reject directly from the task list.
          </li>
        </ul>
      </Card>
    </div>
  );
}
