import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Server, Shield, Database, Cpu, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title: "System Architecture | AI Agent Automation Docs",
  description:
    "Detailed architecture documentation of the AI Agent Automation engine.",
  alternates: {
    canonical: "/docs/architecture/",
  },
  openGraph: {
    url: "/docs/architecture/",
  },
};

export default function ArchitectureDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          System Design
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Backend Architecture
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A deep dive into the modular, production-grade execution engine that
          powers your autonomous workflows.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Execution Engine Layers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "API Layer",
              icon: Globe,
              desc: "Express server handling REST requests, authentication, validation, and workflow registration.",
              items: ["Route Handlers", "Input Validation", "Auth Middleware", "Rate Limiting", "Helmet Headers"],
            },
            {
              title: "Orchestration Layer",
              icon: Cpu,
              desc: "The Step Runner manages the workflow lifecycle, state transitions, variable passing, and retries.",
              items: [
                "Step Runner",
                "Variable Interpolation",
                "Error Policy Engine",
                "Distributed Locks",
                "Trace IDs",
              ],
            },
            {
              title: "Persistence Layer",
              icon: Database,
              desc: "MongoDB stores workflow definitions, execution logs, agent memory, and telemetry.",
              items: [
                "Mongoose Models",
                "Vector Search (RAG)",
                "Execution History",
                "Replica Set",
              ],
            },
          ].map((layer, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col h-full"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <layer.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{layer.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                {layer.desc}
              </p>
              <ul className="space-y-2 border-t border-border/50 pt-4">
                {layer.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-xs font-mono"
                  >
                    <ArrowRight className="h-3 w-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Component Interaction</h2>
        <Card className="p-8 border-border/50 bg-muted/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The platform follows a unidirectional data flow for executions.
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Frontend</strong> sends workflow definitions and
                  execution requests to the Express API.
                </li>
                <li>
                  <strong>Express API</strong> validates input, persists
                  workflows/tasks, and enqueues tasks.
                </li>
                <li>
                  <strong>Worker</strong> polls for pending tasks and passes
                  them to the Step Runner.
                </li>
                <li>
                  <strong>Runner</strong> claims tasks atomically, initializes
                  context, and executes steps sequentially or in parallel.
                </li>
                <li>
                  <strong>Executor</strong> dispatches each step to the correct
                  handler (LLM, HTTP, tool, MCP, etc.).
                </li>
                <li>
                  <strong>Results</strong> are persisted to MongoDB and
                  broadcast via Socket.IO.
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <Card className="p-4 border-border/50 bg-card/30">
                <h4 className="font-bold mb-2">Event Broker</h4>
                <p className="text-xs text-muted-foreground">
                  Socket.IO streams workflow progress and task updates to the
                  frontend in real time.
                </p>
              </Card>
              <Card className="p-4 border-border/50 bg-card/30">
                <h4 className="font-bold mb-2">Distributed Locks</h4>
                <p className="text-xs text-muted-foreground">
                  MongoDB-backed locks ensure safe parallel and join-node
                  execution across multiple workers.
                </p>
              </Card>
              <Card className="p-4 border-border/50 bg-card/30">
                <h4 className="font-bold mb-2">Scheduler</h4>
                <p className="text-xs text-muted-foreground">
                  Cron-based task creation runs within the backend process,
                  creating tasks that the worker picks up automatically.
                </p>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Key Subsystems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Agent Teams & A2A",
              desc: "Multi-agent coordination with visual team builder, war room chat, session logs, capability discovery, and external agent webhooks.",
            },
            {
              title: "Workflow APIs",
              desc: "Public endpoints with custom slugs, optional bearer auth, and sync/async invocation modes.",
            },
            {
              title: "MCP Integration",
              desc: "Model Context Protocol client manager with stdio and streamable-http transports, tool discovery, and execution adapter.",
            },
            {
              title: "Hybrid RAG",
              desc: "Pluggable document retrieval strategies combining keyword and semantic search with document analysis metadata.",
            },
            {
              title: "Telemetry",
              desc: "Optional anonymous heartbeat collection with local metrics for workflow executions, step counts, and version tracking.",
            },
            {
              title: "Template System",
              desc: "JSON workflow templates with validation, import, export, and starter templates for common automations.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-border/50 bg-card/30">
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
