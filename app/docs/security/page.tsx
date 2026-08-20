import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Lock,
  EyeOff,
  Key,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Security | AI Agent Automation Docs",
  description:
    "Security principles of AI Agent Automation including local-first architecture, authentication, rate limiting, and infrastructure ownership.",
  alternates: {
    canonical: "/docs/security/",
  },
  openGraph: {
    url: "/docs/security/",
  },
};

export default function SecurityDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Compliance & Safety
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Security & Privacy
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Learn how the platform ensures total data sovereignty and execution
          safety through a local-first, privacy-centric architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: EyeOff,
            title: "Zero Data Leakage",
            desc: "Sensitive data never leaves your infrastructure. All processing happens on your own hardware.",
          },
          {
            icon: Lock,
            title: "Isolated Execution",
            desc: "Workflows run in isolated environments with sandboxed tool execution and distributed locks.",
          },
          {
            icon: Key,
            title: "Secret Management",
            desc: "Credentials are stored exclusively in environment variables or a local encrypted vault.",
          },
        ].map((item, i) => (
          <Card key={i} className="p-6 border-border/50 bg-card/30 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Authentication & Authorization</h2>
        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">JWT Authentication</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All authenticated routes require a valid JWT bearer token. Tokens
              are signed with <code>JWT_SECRET</code> and verified on every
              request.
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Password Hashing</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              User passwords are hashed using bcrypt with salt rounds of 10.
              Plain-text passwords are never stored.
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">API Key Security</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              API keys are generated with a secure random prefix and hashed using
              bcrypt before storage. The raw key is returned exactly once at
              creation. Keys are compared using bcrypt on each request.
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Ownership Checks</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All resource routes enforce ownership by comparing the resource
              <code>userId</code> to <code>req.user._id</code>. Requests for
              resources owned by other users return 403 Forbidden.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Rate Limiting</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          The platform applies multiple rate limiters to protect sensitive
          endpoints and prevent abuse.
        </p>
        <div className="grid gap-4">
          {[
            {
              name: "Global Limiter",
              desc: "Applied to all /api routes. Default: 100 requests per 15 minutes.",
            },
            {
              name: "Auth Limiter",
              desc: "Applied to registration and login. Default: 5 attempts per 15 minutes.",
            },
            {
              name: "Expensive Limiter",
              desc: "Applied to AI generation, workflow runs, and uploads. Default: 10 requests per minute.",
            },
            {
              name: "Webhook Limiter",
              desc: "Applied to public /webhook routes. Default: 20 requests per minute.",
            },
            {
              name: "Dashboard Limiter",
              desc: "Applied to public /api/live-status routes. Default: 100 requests per minute.",
            },
          ].map((item) => (
            <Card
              key={item.name}
              className="p-4 border-border/50 bg-card/30 flex flex-col gap-1"
            >
              <h4 className="font-bold text-sm">{item.name}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Security Headers</h2>
        <Card className="p-6 border-border/50 bg-card/30">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Helmet middleware is enabled with <code>crossOriginEmbedderPolicy</code>{" "}
            and <code>crossOriginResourcePolicy</code> disabled to allow CORS
            for the frontend. All other default security headers are applied.
          </p>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Execution Guardrails</h2>
        <Card className="p-8 border-primary/20 bg-primary/5 relative overflow-hidden">
          <ShieldCheck className="absolute top-[-10%] right-[-5%] h-32 w-32 text-primary opacity-5 rotate-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Runtime Safety</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Timeout limits for
                  every step execution
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Memory usage
                  constraints for worker processes
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Sandboxed tool
                  execution with UID/GID restrictions
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Distributed locks
                  for safe parallel and join-node execution
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Audit & Transparency</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Full execution logs
                  for every workflow run
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Input/Output
                  sanitization for all tool calls
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Trace IDs attached to
                  every log entry
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Open-source codebase
                  for community security auditing
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Webhook & A2A Security</h2>
        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Webhook Secrets</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Public webhooks authenticate via a secret query parameter or{" "}
              <code>x-webhook-secret</code> header. The secret is stored hashed
              and compared on each request.
            </p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">A2A Authentication</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A2A webhooks require the team&apos;s unique <code>x-a2a-secret</code>{" "}
              header. External agents must be pre-authorized in the team
              configuration.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Shield className="h-5 w-5 text-secondary" />
          Security Best Practices
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">1.</span> Never commit{" "}
            <code>.env</code> files to git
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">2.</span> Use strong, unique API
            keys for LLM providers
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">3.</span> Restrict MongoDB access
            to localhost or your VPC
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">4.</span> Regularly audit workflow
            logs for unusual activity
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">5.</span> Enable replica set for
            MongoDB to prevent data loss
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">6.</span> Use
            <code>TOOL_SANDBOX_UID</code> and <code>TOOL_SANDBOX_GID</code> to
            restrict tool process permissions
          </li>
        </ul>
      </Card>
    </div>
  );
}
