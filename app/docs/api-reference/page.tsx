import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Globe, Code, Box, Terminal, ArrowRight } from "lucide-react";

export const metadata = {
  title: "API Reference | AI Agent Automation Docs",
  description:
    "Complete API reference for the AI Agent Automation backend and workflow engine.",
  alternates: {
    canonical: "/docs/api-reference/",
  },
  openGraph: {
    url: "/docs/api-reference/",
  },
};

export default function APIReferenceDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Reference
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          API Reference (REST)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Integrate the AI Agent Automation Platform into your own applications
          using our structured REST API. All requests and responses use JSON.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          The platform exposes a REST API (v1) for managing workflows, agents,
          schedules, documents, teams, webhooks, and more. All authenticated
          routes require a Bearer token obtained from the login endpoint.
        </p>
        <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Base URL</h4>
            <code className="text-xs font-mono text-muted-foreground">
              http://localhost:5000/api
            </code>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {[
          {
            title: "Authentication",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/auth/register",
                desc: "Register a new user.",
              },
              {
                method: "POST",
                path: "/auth/login",
                desc: "Log in and receive a JWT token.",
              },
              {
                method: "GET",
                path: "/auth/me",
                desc: "Get the current user profile.",
              },
            ],
          },
          {
            title: "Agents",
            icon: Box,
            endpoints: [
              {
                method: "GET",
                path: "/agents",
                desc: "List all agents for the authenticated user.",
              },
              {
                method: "POST",
                path: "/agents",
                desc: "Create a new agent.",
              },
              {
                method: "GET",
                path: "/agents/:id",
                desc: "Get agent details.",
              },
              {
                method: "PUT",
                path: "/agents/:id",
                desc: "Update an agent.",
              },
              {
                method: "DELETE",
                path: "/agents/:id",
                desc: "Delete an agent.",
              },
              {
                method: "POST",
                path: "/agents/:id/run",
                desc: "Send a prompt directly to an agent (playground).",
              },
            ],
          },
          {
            title: "Agent Teams",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/agent-teams",
                desc: "Create a new agent team.",
              },
              {
                method: "GET",
                path: "/agent-teams",
                desc: "List agent teams for the user.",
              },
              {
                method: "POST",
                path: "/agent-teams/:id/run",
                desc: "Run an agent team with an objective.",
              },
              {
                method: "POST",
                path: "/agent-teams/:teamId/sessions",
                desc: "Create a new team session.",
              },
              {
                method: "GET",
                path: "/agent-teams/sessions/:sessionId/logs",
                desc: "Get session message logs.",
              },
              {
                method: "GET",
                path: "/agent-teams/:teamId/discovery",
                desc: "Get team capability discovery.",
              },
            ],
          },
          {
            title: "Workflows",
            icon: Box,
            endpoints: [
              {
                method: "GET",
                path: "/workflows",
                desc: "List workflows for the authenticated user.",
              },
              {
                method: "POST",
                path: "/workflows",
                desc: "Create a new workflow.",
              },
              {
                method: "GET",
                path: "/workflows/:id",
                desc: "Get workflow details.",
              },
              {
                method: "PUT",
                path: "/workflows/:id",
                desc: "Update a workflow.",
              },
              {
                method: "DELETE",
                path: "/workflows/:id",
                desc: "Delete a workflow.",
              },
              {
                method: "GET",
                path: "/workflows/:id/export",
                desc: "Export workflow as JSON.",
              },
              {
                method: "POST",
                path: "/workflows/:id/clone",
                desc: "Clone a workflow.",
              },
              {
                method: "POST",
                path: "/workflows/:id/run",
                desc: "Trigger a manual workflow execution.",
              },
              {
                method: "POST",
                path: "/workflows/:id/run-partial",
                desc: "Run a subset of workflow steps.",
              },
              {
                method: "PUT",
                path: "/workflows/:id/steps",
                desc: "Update workflow steps.",
              },
              {
                method: "POST",
                path: "/workflows/:id/add-task",
                desc: "Add a task to the workflow.",
              },
              {
                method: "PUT",
                path: "/workflows/:id/assign-agent",
                desc: "Assign an agent to the workflow.",
              },
              {
                method: "GET",
                path: "/workflows/:id/versions",
                desc: "List workflow version history.",
              },
              {
                method: "GET",
                path: "/workflows/:id/versions/:versionId",
                desc: "Get a specific workflow version.",
              },
              {
                method: "POST",
                path: "/workflows/:id/rollback/:versionId",
                desc: "Rollback workflow to a previous version.",
              },
              {
                method: "POST",
                path: "/workflows/generate-ai",
                desc: "Generate a workflow from natural language.",
              },
              {
                method: "GET",
                path: "/workflows/node-definitions",
                desc: "Get available node definitions for the builder.",
              },
            ],
          },
          {
            title: "Tasks",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/tasks",
                desc: "Create a new task.",
              },
              {
                method: "GET",
                path: "/tasks",
                desc: "List tasks with pagination.",
              },
              {
                method: "GET",
                path: "/tasks/:id",
                desc: "Get task details and step results.",
              },
              {
                method: "PUT",
                path: "/tasks/:id",
                desc: "Update a task.",
              },
              {
                method: "DELETE",
                path: "/tasks/:id",
                desc: "Delete a task.",
              },
              {
                method: "POST",
                path: "/tasks/:id/approve",
                desc: "Approve a pending_approval task.",
              },
              {
                method: "POST",
                path: "/tasks/:id/reject",
                desc: "Reject a pending_approval task.",
              },
              {
                method: "POST",
                path: "/tasks/:id/resume",
                desc: "Resume a paused task.",
              },
              {
                method: "POST",
                path: "/tasks/:id/rerun-from-failed",
                desc: "Rerun from the failed step, preserving prior results.",
              },
            ],
          },
          {
            title: "Schedules",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/schedules",
                desc: "Create a new schedule.",
              },
              {
                method: "GET",
                path: "/schedules",
                desc: "List schedules for the user.",
              },
              {
                method: "GET",
                path: "/schedules/:id",
                desc: "Get schedule details.",
              },
              {
                method: "PUT",
                path: "/schedules/:id",
                desc: "Update a schedule.",
              },
              {
                method: "DELETE",
                path: "/schedules/:id",
                desc: "Delete a schedule.",
              },
            ],
          },
          {
            title: "Documents",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/documents/upload",
                desc: "Upload a document for ingestion (multipart/form-data).",
              },
              {
                method: "GET",
                path: "/documents",
                desc: "List user documents.",
              },
              {
                method: "GET",
                path: "/documents/:id",
                desc: "Get document metadata.",
              },
              {
                method: "DELETE",
                path: "/documents/:id",
                desc: "Delete a document and its chunks.",
              },
              {
                method: "POST",
                path: "/documents/chat",
                desc: "Chat with selected documents using RAG.",
              },
            ],
          },
          {
            title: "Webhooks",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/webhooks",
                desc: "Create a webhook configuration (private).",
              },
              {
                method: "GET",
                path: "/webhooks",
                desc: "List webhooks for the user.",
              },
              {
                method: "DELETE",
                path: "/webhooks/:id",
                desc: "Delete a webhook configuration.",
              },
              {
                method: "POST",
                path: "/webhook/:source",
                desc: "Public endpoint to receive webhook payloads.",
              },
              {
                method: "POST",
                path: "/webhook/a2a/:teamId",
                desc: "Public A2A endpoint for external agent messaging.",
              },
            ],
          },
          {
            title: "Templates",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/templates",
                desc: "List available workflow templates.",
              },
              {
                method: "GET",
                path: "/templates/:id",
                desc: "Get template details.",
              },
              {
                method: "GET",
                path: "/templates/:id/validate",
                desc: "Validate a template schema.",
              },
              {
                method: "POST",
                path: "/templates/import/:id",
                desc: "Import a template as a new workflow.",
              },
            ],
          },
          {
            title: "Insights",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/insights/summary",
                desc: "Get global insights across all workflows.",
              },
              {
                method: "GET",
                path: "/insights/workflows/:workflowId",
                desc: "Get insights for a specific workflow.",
              },
            ],
          },
          {
            title: "Memory",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/memory",
                desc: "List memories for the user, optionally filtered by agent.",
              },
              {
                method: "GET",
                path: "/memory/agents",
                desc: "List agents with stored memory.",
              },
              {
                method: "DELETE",
                path: "/memory/:id",
                desc: "Delete a memory entry.",
              },
              {
                method: "DELETE",
                path: "/memory/agent/:agentId",
                desc: "Clear all memory for an agent.",
              },
            ],
          },
          {
            title: "Logs",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/logs",
                desc: "List logs with filtering by level, workflow, task, date, and search.",
              },
            ],
          },
          {
            title: "Settings",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/settings",
                desc: "Get user settings, available providers, and MCP runtime state.",
              },
              {
                method: "PUT",
                path: "/settings",
                desc: "Update user settings (partial update supported).",
              },
            ],
          },
          {
            title: "System",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/system/env",
                desc: "Get environment variable status for providers.",
              },
              {
                method: "GET",
                path: "/system/providers",
                desc: "Get provider discovery with available models.",
              },
            ],
          },
          {
            title: "Assistant",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/assistant/chat",
                desc: "Send a message to the in-app assistant.",
              },
            ],
          },
          {
            title: "Telemetry",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/telemetry",
                desc: "Get telemetry state and local metrics.",
              },
              {
                method: "PUT",
                path: "/telemetry",
                desc: "Enable or disable anonymous telemetry.",
              },
            ],
          },
          {
            title: "MCP",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/mcp/servers",
                desc: "List configured MCP servers and health.",
              },
              {
                method: "GET",
                path: "/mcp/tools",
                desc: "List tools exposed by MCP servers.",
              },
              {
                method: "GET",
                path: "/mcp/health",
                desc: "Check MCP server health.",
              },
              {
                method: "POST",
                path: "/mcp/tools/:serverId/:toolName/invoke",
                desc: "Invoke an MCP tool directly.",
              },
            ],
          },
          {
            title: "API Keys",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/keys",
                desc: "List active API keys for the user.",
              },
              {
                method: "POST",
                path: "/keys",
                desc: "Create a new API key (raw key returned once).",
              },
              {
                method: "DELETE",
                path: "/keys/:id",
                desc: "Revoke an API key.",
              },
            ],
          },
          {
            title: "Public Workflow APIs",
            icon: Terminal,
            endpoints: [
              {
                method: "POST",
                path: "/workflows/public/:idOrSlug",
                desc: "Invoke a workflow by ID or custom slug. Auth optional per workflow settings.",
              },
            ],
          },
        ].map((section, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-2">
              <section.icon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{section.title}</h3>
            </div>
            <div className="grid gap-4">
              {section.endpoints.map((ep, j) => (
                <Card
                  key={j}
                  className="p-4 border-border/50 bg-card/30 hover:bg-card/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        className={`${ep.method === "POST" ? "bg-success/20 text-success" : ep.method === "DELETE" ? "bg-destructive/20 text-destructive" : "bg-primary/20 text-primary"} border-none font-mono`}
                      >
                        {ep.method}
                      </Badge>
                      <code className="text-sm font-mono font-bold">
                        {ep.path}
                      </code>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {ep.desc}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Standard Error Response</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              error-response.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "ok": false,
  "error": "not_found"
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Interactive Documentation
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The backend does not auto-generate a Swagger UI. Use this reference
          along with the Postman collection included in the repository for
          interactive testing.
        </p>
      </Card>
    </div>
  );
}
