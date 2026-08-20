import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Settings, Key, Database, Globe, Code, Shield, Cpu, Mail, Activity, Plug, Lock } from "lucide-react";

export const metadata = {
  title: "Configuration | AI Agent Automation Docs",
  description:
    "Configure AI providers, system settings, and environment variables for the AI Agent Automation platform.",
  alternates: {
    canonical: "/docs/configuration/",
  },
  openGraph: {
    url: "/docs/configuration/",
  },
};

export default function ConfigurationDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Setup
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Configuration & Environment
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Complete guide to configuring the AI Agent Automation Platform using
          environment variables and settings.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">The .env File</h2>
        <p className="text-muted-foreground leading-relaxed">
          The primary way to configure the backend engine is through environment
          variables. Copy the <code>.env.example</code> file to <code>.env</code>{" "}
          in the <code>backend</code> directory.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Server Settings",
              icon: Globe,
              vars: [
                { name: "PORT", desc: "The port the Express server will listen on (default: 5000).", required: true },
                { name: "NODE_ENV", desc: "Set to 'production' or 'development'.", required: true },
                { name: "MONGO_URI", desc: "The connection string for your MongoDB instance (default: mongodb://localhost:27017).", required: true },
                { name: "MONGO_MAX_POOL_SIZE", desc: "MongoDB connection pool max size (default: 100).", required: false },
                { name: "MONGO_MIN_POOL_SIZE", desc: "MongoDB connection pool min size (default: 10).", required: false },
                { name: "JWT_SECRET", desc: "A strong secret for signing authentication tokens.", required: true },
              ],
            },
            {
              title: "AI Provider Settings",
              icon: Key,
              vars: [
                { name: "OLLAMA_HOST", desc: "Base URL of your local Ollama instance (e.g., http://localhost:11434). Required when using the 'ollama' provider.", required: false },
                { name: "GROQ_API_KEY", desc: "API key for the Groq provider. Required when using Groq-hosted LLM models.", required: false },
                { name: "OPENAI_API_KEY", desc: "API key for OpenAI models (e.g., gpt-4o, gpt-4o-mini). Required when using the 'openai' provider.", required: false },
                { name: "GEMINI_API_KEY", desc: "API key for Google Gemini models (e.g., gemini-2.5-flash). Required when using the 'gemini' provider.", required: false },
                { name: "HF_API_KEY", desc: "API key for Hugging Face Inference API. Required only when using the 'huggingface' provider.", required: false },
              ],
            },
            {
              title: "Worker Runtime Settings",
              icon: Cpu,
              vars: [
                { name: "WORKER_POLL_INTERVAL_MS", desc: "Poll interval in ms (default: 2000).", required: false },
                { name: "WORKER_BATCH_SIZE", desc: "Number of tasks to claim at once (default: 1).", required: false },
                { name: "WORKER_MAX_ATTEMPTS", desc: "Max retry attempts per task (default: 3).", required: false },
                { name: "WORKER_CONCURRENCY_LIMIT", desc: "Max concurrent tasks processed by this worker (default: 5).", required: false },
                { name: "WORKER_SERVICE_TOKEN", desc: "Token for internal service authentication (if using internal broadcast endpoints).", required: false },
                { name: "WORKER_ID", desc: "Unique identifier for this worker instance.", required: false },
              ],
            },
            {
              title: "Security & Rate Limiting",
              icon: Shield,
              vars: [
                { name: "RATE_LIMIT_WINDOW_MS", desc: "Rate limit window in ms (default: 900000 = 15 min).", required: false },
                { name: "RATE_LIMIT_GLOBAL_MAX", desc: "Max requests per window for global limiter (default: 100).", required: false },
                { name: "RATE_LIMIT_AUTH_MAX", desc: "Max auth attempts per window (default: 5).", required: false },
                { name: "RATE_LIMIT_EXPENSIVE_MAX", desc: "Max expensive operations per minute (default: 10).", required: false },
                { name: "RATE_LIMIT_WEBHOOK_MAX", desc: "Max webhook requests per minute (default: 20).", required: false },
              ],
            },
            {
              title: "Email Settings",
              icon: Mail,
              vars: [
                { name: "EMAIL_HOST", desc: "SMTP host for sending emails.", required: false },
                { name: "EMAIL_PORT", desc: "SMTP port (e.g., 587 for TLS).", required: false },
                { name: "EMAIL_USER", desc: "SMTP username.", required: false },
                { name: "EMAIL_PASS", desc: "SMTP password.", required: false },
                { name: "EMAIL_FROM", desc: "Default sender email address.", required: false },
              ],
            },
            {
              title: "Telemetry",
              icon: Activity,
              vars: [
                { name: "TELEMETRY_ENABLED", desc: "Enable anonymous telemetry (default: true). Set to 'false' to disable.", required: false },
                { name: "TELEMETRY_ENDPOINT", desc: "Endpoint for telemetry collection.", required: false },
                { name: "DISABLE_ALL_ANALYTICS", desc: "Set to 'true' to disable all outbound analytics.", required: false },
              ],
            },
            {
              title: "MCP Settings",
              icon: Plug,
              vars: [
                { name: "MCP_ENABLED", desc: "Enable MCP subsystem (default: false).", required: false },
                { name: "MCP_CONFIG_PATH", desc: "Path to MCP config JSON file.", required: false },
                { name: "MCP_CONFIG_JSON", desc: "Inline MCP config JSON.", required: false },
                { name: "MCP_SERVER_URL", desc: "Default server URL for streamable-http transport.", required: false },
              ],
            },
            {
              title: "Integrations",
              icon: Globe,
              vars: [
                { name: "GITHUB_TOKEN", desc: "GitHub personal access token for GitHub tool.", required: false },
                { name: "SLACK_WEBHOOK_URL", desc: "Slack incoming webhook URL.", required: false },
                { name: "DISCORD_WEBHOOK_URL", desc: "Discord webhook URL.", required: false },
              ],
            },
            {
              title: "Tool Sandbox",
              icon: Lock,
              vars: [
                { name: "TOOL_SANDBOX_UID", desc: "Optional Unix User ID for sandboxed tool processes.", required: false },
                { name: "TOOL_SANDBOX_GID", desc: "Optional Unix Group ID for sandboxed tool processes.", required: false },
                { name: "TOOL_EXECUTION_TIMEOUT_MS", desc: "Timeout for custom tool executions (default: 30000).", required: false },
              ],
            },
            {
              title: "Internal Auth",
              icon: Key,
              vars: [
                { name: "INTERNAL_AUTH_TOKEN", desc: "Token for internal runner-to-API broadcast requests.", required: false },
              ],
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <div className="grid gap-3">
                {section.vars.map((v, j) => (
                  <div
                    key={j}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg border border-border/50 bg-card/30"
                  >
                    <code className="text-sm font-mono text-primary font-bold min-w-[220px]">
                      {v.name}
                    </code>
                    <span className="text-sm text-muted-foreground">
                      {v.desc}
                    </span>
                    {v.required && (
                      <span className="text-xs text-destructive font-medium">
                        Required
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Example .env</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              .env
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`PORT=5000
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=<SECRET_1f4b2c3d>

# AI Providers
GROQ_API_KEY=
OPENAI_API_KEY=
GEMINI_API_KEY=
HF_API_KEY=
OLLAMA_HOST=http://localhost:11434

# Worker Runtime
WORKER_POLL_INTERVAL_MS=2000
WORKER_BATCH_SIZE=1
WORKER_MAX_ATTEMPTS=3
WORKER_CONCURRENCY_LIMIT=5
WORKER_SERVICE_TOKEN=

# Email
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=

# Telemetry
TELEMETRY_ENABLED=true
TELEMETRY_ENDPOINT=https://telematry-website.vercel.app/collector
DISABLE_ALL_ANALYTICS=false

# MCP
MCP_ENABLED=false
MCP_CONFIG_PATH=
MCP_CONFIG_JSON=
MCP_SERVER_URL=

# Integrations
GITHUB_TOKEN=
SLACK_WEBHOOK_URL=
DISCORD_WEBHOOK_URL=

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_GLOBAL_MAX=100
RATE_LIMIT_AUTH_MAX=5
RATE_LIMIT_EXPENSIVE_MAX=10
RATE_LIMIT_WEBHOOK_MAX=20

# Tool Sandbox
TOOL_SANDBOX_UID=
TOOL_SANDBOX_GID=
TOOL_EXECUTION_TIMEOUT_MS=30000`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Settings className="h-5 w-5 text-secondary" />
          Pro-Tip: Run Models Locally with Ollama
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can run LLMs locally using Ollama for faster iteration and zero
          API costs. Set <code>OLLAMA_HOST</code> in your <code>.env</code>,
          create an agent with provider <code>ollama</code>, and assign it to
          your workflow. The system will automatically route execution to your
          local model.
        </p>
      </Card>
    </div>
  );
}
