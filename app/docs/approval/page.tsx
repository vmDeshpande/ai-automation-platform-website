import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  CheckSquare,
  AlertTriangle,
  User,
  Clock,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Approval Workflows | AI Agent Automation Docs",
  description:
    "Pause workflow execution for human review with approval nodes. Resume or reject paused tasks.",
  alternates: {
    canonical: "/docs/approval/",
  },
  openGraph: {
    url: "/docs/approval/",
  },
};

export default function ApprovalDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Human-in-the-Loop
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Approval Workflows
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Pause automated execution and wait for human approval before
          proceeding. Ideal for sensitive actions like sending emails, publishing
          content, or triggering downstream systems.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          When a workflow reaches an Approval node, the runner marks the task as{" "}
          <code>pending_approval</code> and stops execution. The task remains in
          this state until a user explicitly approves or rejects it via the UI
          or API. Upon approval, execution resumes from the next step. Upon
          rejection, the task is marked as <code>rejected</code> and no further
          steps run.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: User,
              title: "Pending Approval",
              desc: "Task status becomes pending_approval. The step result includes requiresApproval: true.",
            },
            {
              icon: Clock,
              title: "Paused Execution",
              desc: "No subsequent steps run until a decision is made. Previous step outputs are preserved.",
            },
            {
              icon: CheckSquare,
              title: "Resume or Reject",
              desc: "Approval resumes execution from the next step. Rejection marks the task as rejected.",
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
        <h2 className="text-3xl font-bold">Approval Node Configuration</h2>
        <p className="text-muted-foreground">
          The approval node requires a message displayed to the approver.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              approval-node.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "approval",
  "approvalMessage": "Approve sending the weekly report to 500 customers?",
  "stepId": "approve_send_email"
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Approval API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks/:id/approve
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Approve a pending_approval task. Execution resumes from the next
              step.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-destructive/20 text-destructive border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks/:id/reject
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Reject a pending_approval task. The task status becomes rejected
              and execution stops.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/tasks/:id/resume
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Resume a paused task. Used after approval to continue execution.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Task States</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30 flex items-center gap-4">
            <Badge variant="secondary" className="font-mono">
              pending_approval
            </Badge>
            <span className="text-sm text-muted-foreground">
              Workflow paused at an approval node, waiting for human decision.
            </span>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30 flex items-center gap-4">
            <Badge variant="secondary" className="font-mono">
              rejected
            </Badge>
            <span className="text-sm text-muted-foreground">
              Approval was rejected. Task ends without executing remaining steps.
            </span>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          UI Behavior
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Tasks with status{" "}
            <code>pending_approval</code> appear in the Tasks page with an
            approval action button.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> The task detail view
            shows the approval message and the step that requested approval.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> After approval, the
            runner picks up the resumed task and continues from the next step.
          </li>
        </ul>
      </Card>
    </div>
  );
}
