import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Webhook,
  Shield,
  Zap,
  Globe,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Webhooks | AI Agent Automation Docs",
  description:
    "Trigger workflows from external services using webhooks. Supports public routes, secret authentication, and A2A agent messaging.",
  alternates: {
    canonical: "/docs/webhooks/",
  },
  openGraph: {
    url: "/docs/webhooks/",
  },
};

export default function WebhooksDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Integrations
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Webhooks
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Receive HTTP callbacks from external services and trigger workflows
          automatically. Supports secret-based authentication, payload storage,
          and A2A agent-to-agent messaging.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Webhook Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Globe,
              title: "Public Webhooks",
              desc: "External services POST to /webhook/:source. The platform looks up the webhook by source name and secret, then creates a task.",
            },
            {
              icon: Shield,
              title: "A2A Webhooks",
              desc: "External agents POST to /webhook/a2a/:teamId with an x-a2a-secret header to send messages into an agent team war room.",
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
        <h2 className="text-3xl font-bold">Creating a Webhook</h2>
        <p className="text-muted-foreground">
          Create a webhook configuration from the Webhooks page or via the API.
          Each webhook gets a unique secret. Link it to a workflow to
          automatically queue executions.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/webhooks
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "GitHub PR Opened",
  "source": "github",
  "workflowId": "wf_123",
  "metadata": {
    "events": ["pull_request.opened"]
  }
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Public Webhook Endpoint</h2>
        <p className="text-muted-foreground leading-relaxed">
          Once created, external services can call the public endpoint. The
          request body is stored as the task input payload.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Webhook className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /webhook/:source
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Authorization via query param or header
POST /webhook/github?secret=wh_secret_abc

# Or
POST /webhook/github
Header: x-webhook-secret: wh_secret_abc

Body: any JSON payload from the external service`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">A2A Agent Webhook</h2>
        <p className="text-muted-foreground leading-relaxed">
          External agents use the A2A webhook to inject messages into a team
          session. The request must include the team&apos;s A2A secret and a
          valid session ID.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Webhook className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /webhook/a2a/:teamId
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`Headers:
  x-a2a-secret: <team_a2a_secret>

Body:
{
  "sessionId": "session_abc",
  "from": { "id": "external-agent", "type": "external" },
  "to": { "id": "broadcast", "type": "internal" },
  "type": "user_prompt",
  "content": { "result": "Analysis complete" }
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Best Practices
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Store webhook secrets
            securely. Do not expose them in client-side code.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Use descriptive{" "}
            <code>source</code> names to avoid collisions.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Verify that the linked
            workflow is idempotent or handles duplicate triggers gracefully.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Public webhook routes are
            rate-limited to 20 requests per minute.
          </li>
        </ul>
      </Card>
    </div>
  );
}
