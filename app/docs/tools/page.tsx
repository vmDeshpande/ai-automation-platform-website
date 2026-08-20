import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Wrench,
  Globe,
  Mail,
  FileText,
  Terminal,
  Clock,
  Code,
  Plug,
  GitBranch,
  CheckSquare,
  Bot,
  Search,
} from "lucide-react";

export const metadata = {
  title: "Automation Tools | AI Agent Automation Docs",
  description:
    "Extend AI workflows with automation tools and step types including HTTP, email, file, browser, MCP, conditions, approvals, and agent calls.",
  alternates: {
    canonical: "/docs/tools/",
  },
  openGraph: {
    url: "/docs/tools/",
  },
};

export default function ToolsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Step Types
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Tools & Step Types
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Pluggable modules that extend agent capabilities with actions like
          HTTP requests, email, file operations, browser automation, MCP calls,
          branching, and agent delegation.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Available Step Types</h2>
        <p className="text-muted-foreground">
          The platform supports a rich library of built-in step types. Each type
          is designed to handle a specific automation task with full error
          handling and logging.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Code,
              type: "LLM",
              title: "LLM / Agent Step",
              desc: "Invoke an AI agent with a prompt, tools, and context. Returns structured reasoning and output.",
              example: '{ "type": "llm", "prompt": "Analyze this data..." }',
            },
            {
              icon: Globe,
              type: "HTTP",
              title: "HTTP Request",
              desc: "Make REST API calls with full support for headers, authentication, and response parsing.",
              example:
                '{ "type": "http", "method": "GET", "url": "https://api.example.com" }',
            },
            {
              icon: Mail,
              type: "EMAIL",
              title: "Email Automation",
              desc: "Send emails via SMTP or fetch emails using IMAP. Supports attachments and templates.",
              example:
                '{ "type": "email", "to": "user@example.com", "subject": "Report" }',
            },
            {
              icon: FileText,
              type: "FILE",
              title: "File Operations",
              desc: "Read, write, or delete files. Supports JSON, CSV, TXT, and binary formats.",
              example:
                '{ "type": "file", "action": "write", "path": "/data/output.json" }',
            },
            {
              icon: Globe,
              type: "BROWSER",
              title: "Browser Automation",
              desc: "Scrape websites, fill forms, take screenshots using headless Playwright.",
              example:
                '{ "type": "browser", "action": "navigate", "url": "https://example.com" }',
            },
            {
              icon: Clock,
              type: "DELAY",
              title: "Delay / Wait",
              desc: "Pause workflow execution for a specified duration or until a condition is met.",
              example: '{ "type": "delay", "duration": 5000 }',
            },
            {
              icon: Search,
              type: "DOCUMENT_QUERY",
              title: "Document Query",
              desc: "Query a document in the knowledge base using RAG retrieval.",
              example:
                '{ "type": "document_query", "documentId": "doc_123", "query": "..." }',
            },
            {
              icon: Plug,
              type: "MCP",
              title: "MCP Tool Call",
              desc: "Call a tool exposed by an MCP server.",
              example:
                '{ "type": "mcp", "serverId": "my-server", "toolName": "search" }',
            },
            {
              icon: GitBranch,
              type: "CONDITION",
              title: "Condition",
              desc: "Branch execution based on a boolean expression with if_true and if_false paths.",
              example:
                '{ "type": "condition", "operator": "==", "value": "200", "if_true": [...], "if_false": [...] }',
            },
            {
              icon: GitBranch,
              type: "SWITCH",
              title: "Switch",
              desc: "Route execution to one of multiple cases based on a value.",
              example:
                '{ "type": "switch", "cases": { "success": [...], "error": [...] } }',
            },
            {
              icon: CheckSquare,
              type: "APPROVAL",
              title: "Human Approval",
              desc: "Pause the workflow and wait for human approval before proceeding.",
              example:
                '{ "type": "approval", "approvalMessage": "Approve this action?" }',
            },
            {
              icon: Bot,
              type: "AGENT_CALL",
              title: "Agent Call",
              desc: "Delegate execution to a specialized AI agent.",
              example:
                '{ "type": "agent_call", "agentId": "agent_001", "input": "..." }',
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-xs font-mono">
                    {item.type}
                  </Badge>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.desc}
              </p>
              <Card className="p-3 bg-muted/50 border-border/30">
                <pre className="text-xs font-mono text-muted-foreground overflow-x-auto no-scrollbar">
                  {item.example}
                </pre>
              </Card>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Built-in Tool Integrations</h2>
        <p className="text-muted-foreground">
          In addition to step types, the platform registers 8 built-in tools
          through the dynamic tool registry. These tools run in a sandboxed
          child process with configurable timeouts and environment restrictions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "email",
              desc: "Send emails via SMTP using configured MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS.",
            },
            {
              name: "file",
              desc: "Read, write, append, and list files. Configurable FILE_BASE_DIR for sandboxing.",
            },
            {
              name: "browser",
              desc: "Navigate pages, evaluate scripts, take screenshots using Puppeteer/Playwright.",
            },
            {
              name: "github",
              desc: "Interact with GitHub APIs using GITHUB_TOKEN.",
            },
            {
              name: "slack",
              desc: "Send messages to Slack using SLACK_WEBHOOK_URL.",
            },
            {
              name: "discord",
              desc: "Send messages to Discord using DISCORD_WEBHOOK_URL.",
            },
            {
              name: "hackerNews",
              desc: "Fetch top stories and comments from Hacker News.",
            },
            {
              name: "sandbox",
              desc: "Execute arbitrary code in an isolated child process with UID/GID restrictions.",
            },
          ].map((tool) => (
            <Card
              key={tool.name}
              className="p-4 border-border/50 bg-card/30 flex flex-col gap-2"
            >
              <h4 className="font-bold font-mono text-sm">{tool.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Building Custom Tools</h2>
        <p className="text-muted-foreground leading-relaxed">
          You can extend the platform by writing custom tool executors in
          Node.js. Each tool must export a <code>meta</code> object and a{" "}
          <code>run(step, context)</code> function. The tool is registered
          automatically when placed in <code>backend/src/tools/</code>.
        </p>
      </div>
    </div>
  );
}
