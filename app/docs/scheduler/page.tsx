import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Repeat, Zap, Code, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Scheduler | AI Agent Automation Docs",
  description:
    "Schedule AI workflows with cron jobs and recurring automation tasks.",
  alternates: {
    canonical: "/docs/scheduler/",
  },
  openGraph: {
    url: "/docs/scheduler/",
  },
};

export default function SchedulerDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Automation
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Scheduler System
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Cron-based task scheduler for recurring workflows, background jobs,
          and time-triggered automations.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How the Scheduler Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Scheduler is a service that evaluates cron expressions and creates
          workflow tasks at specified intervals. It runs as part of the backend
          process and uses the same task queue as manual executions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Clock,
              title: "Cron Expressions",
              desc: "Define schedules using standard cron syntax (minute, hour, day, month, weekday).",
            },
            {
              icon: Repeat,
              title: "Recurring Execution",
              desc: "Workflows are automatically queued and executed based on the schedule.",
            },
            {
              icon: Zap,
              title: "Timezone Support",
              desc: "All schedules respect the configured timezone for accurate triggering.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col items-center text-center gap-3"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
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
        <h2 className="text-3xl font-bold">Creating a Scheduled Workflow</h2>
        <p className="text-muted-foreground">
          Attach a cron schedule to any workflow definition. The scheduler will
          automatically create execution instances at the specified times.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              schedule-request.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "Daily Report Generator",
  "workflowId": "wf_123",
  "cron": "0 9 * * *",
  "timezone": "America/New_York",
  "enabled": true,
  "taskInput": {}
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Schedule API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/schedules
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Create a new schedule. Requires name, workflowId, and cron.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/schedules
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              List all schedules for the authenticated user.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/schedules/:id
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Get schedule details including next execution time.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                PUT
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/schedules/:id
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Update a schedule (cron, timezone, enabled, etc.).
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-destructive/20 text-destructive border-none font-mono">
                DELETE
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/schedules/:id
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Delete a schedule.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Notes
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> The scheduler validates
            that the linked workflow has steps before creating a schedule.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Ownership is enforced:
            only the workflow owner can create or modify schedules.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Disabled schedules are
            skipped by the scheduler loop.
          </li>
        </ul>
      </Card>
    </div>
  );
}
