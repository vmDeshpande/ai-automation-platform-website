import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Globe,
  Key,
  Lock,
  Zap,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Workflow APIs | AI Agent Automation Docs",
  description:
    "Expose workflows as public API endpoints with custom slugs, API key authentication, and sync or async invocation.",
  alternates: {
    canonical: "/docs/workflow-apis/",
  },
  openGraph: {
    url: "/docs/workflow-apis/",
  },
};

export default function WorkflowApisDocs() {
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
          Workflow APIs
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Turn any workflow into a callable HTTP endpoint. Expose it to external
          systems with a custom slug, optional bearer-token authentication, and
          synchronous or asynchronous execution.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          Each workflow can be assigned an <code>apiSettings</code> block that
          enables a public endpoint. When enabled, the workflow is reachable at{" "}
          <code>/api/workflows/public/:idOrSlug</code>. The endpoint accepts a
          JSON payload, validates optional authentication, creates a task, and
          returns either the completed result (synchronous) or a task ID
          (asynchronous).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Globe,
              title: "Custom Endpoint Slug",
              desc: "Assign a human-readable endpoint name instead of exposing the internal MongoDB ID.",
            },
            {
              icon: Key,
              title: "Bearer Authentication",
              desc: "Protect the endpoint with API keys. Keys are bcrypt-hashed and verified on each request.",
            },
            {
              icon: Zap,
              title: "Sync & Async Modes",
              desc: "Choose between immediate response with the workflow result, or fire-and-forget task creation.",
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
        <h2 className="text-3xl font-bold">Enabling a Workflow API</h2>
        <p className="text-muted-foreground">
          Enable the API endpoint from the Workflow Settings panel in the UI, or
          update the workflow directly via the API.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              workflow-api-settings.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "apiSettings": {
    "enabled": true,
    "endpointName": "summarize-report",
    "authentication": true,
    "sync": false
  }
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Public Endpoint Reference</h2>

        <div className="space-y-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/workflows/public/:idOrSlug
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Invoke a workflow by its MongoDB ID or custom endpoint slug.
            </p>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Request</h3>
          <Card className="overflow-hidden border-border/50 bg-card/50">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
              <span className="text-xs font-mono text-muted-foreground">
                Headers
              </span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
              <code>{`Content-Type: application/json
Authorization: Bearer <api_key>  # required if authentication is enabled`}</code>
            </pre>
          </Card>
          <Card className="overflow-hidden border-border/50 bg-card/50">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
              <span className="text-xs font-mono text-muted-foreground">
                Body
              </span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
              <code>{`{
  "input": {
    "topic": "AI automation trends",
    "format": "markdown"
  }
}`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responses</h3>
          <Card className="overflow-hidden border-border/50 bg-card/50">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
              <span className="text-xs font-mono text-muted-foreground">
                200 OK (async)
              </span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
              <code>{`{
  "ok": true,
  "taskId": "task_xyz",
  "workflowId": "wf_abc"
}`}</code>
            </pre>
          </Card>
          <Card className="overflow-hidden border-border/50 bg-card/50">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
              <span className="text-xs font-mono text-muted-foreground">
                200 OK (sync)
              </span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
              <code>{`{
  "ok": true,
  "taskId": "task_xyz",
  "result": { "summary": "..." },
  "stepResults": [ ... ]
}`}</code>
            </pre>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">API Key Management</h2>
        <p className="text-muted-foreground leading-relaxed">
          API keys are created per user via <code>POST /api/keys</code>. Each
          key is bcrypt-hashed before storage. The raw key is returned exactly
          once at creation. Keys can be revoked at any time. When a workflow
          endpoint has <code>authentication: true</code>, the backend compares
          the bearer token against all active keys for the workflow owner.
        </p>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Security Notes
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Public workflow
            endpoints do not require login, but can be locked behind API keys.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> If authentication is
            disabled, anyone with the slug can trigger the workflow.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Ownership is enforced:
            only the workflow owner can enable/disable the public endpoint.
          </li>
        </ul>
      </Card>
    </div>
  );
}
