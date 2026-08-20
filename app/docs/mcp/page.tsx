import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Plug,
  Server,
  Settings,
  Code,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "MCP Integration | AI Agent Automation Docs",
  description:
    "Connect Model Context Protocol servers to extend agent capabilities with external tools and system integrations.",
  alternates: {
    canonical: "/docs/mcp/",
  },
  openGraph: {
    url: "/docs/mcp/",
  },
};

export default function McpDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Extensions
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          MCP Integration
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Model Context Protocol (MCP) lets you connect external tool servers
          and expose their capabilities to your workflows and agents.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What is MCP?</h2>
        <p className="text-muted-foreground leading-relaxed">
          MCP is an open protocol that standardizes how applications provide
          context to LLMs. In this platform, MCP servers are managed through
          Settings. Each server can use <code>stdio</code> or{" "}
          <code>streamable-http</code> transport. Once connected, MCP tools are
          listed automatically and can be invoked from the MCP workflow step or
          the MCP API.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Plug,
              title: "Dynamic Tool Discovery",
              desc: "Tools exposed by an MCP server are auto-discovered and available in the tool registry.",
            },
            {
              icon: Server,
              title: "Two Transports",
              desc: "stdio for local child-process servers, streamable-http for remote MCP services.",
            },
            {
              icon: Shield,
              title: "Per-User Isolation",
              desc: "MCP servers and tools are scoped per user. Only the owning user can invoke tools.",
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
        <h2 className="text-3xl font-bold">Configuration</h2>
        <p className="text-muted-foreground leading-relaxed">
          MCP is configured in Settings under Developer Integrations. You can
          add multiple servers, enable or disable them individually, and choose
          between stdio and streamable-http transports. The backend also supports
          environment-based configuration via <code>.env</code>.
        </p>

        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              .env
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Enable MCP globally
MCP_ENABLED=true

# Optional: path to a JSON config file
MCP_CONFIG_PATH=/path/to/mcp-config.json

# Optional: inline JSON config
MCP_CONFIG_JSON={"servers":[...]}

# Optional: default server URL for streamable-http
MCP_SERVER_URL=http://localhost:3001/mcp`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Server Configuration</h2>
        <p className="text-muted-foreground">
          Each MCP server requires a unique ID, a name, a transport, and
          transport-specific fields. The <code>autoDiscover</code> flag controls
          whether the platform automatically lists the server&apos;s tools.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              MCP Server Object
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "id": "my-mcp-server",
  "name": "My MCP Server",
  "transport": "stdio",
  "command": "node",
  "args": ["/path/to/server.js"],
  "url": "",
  "headers": {},
  "env": {},
  "enabled": true,
  "autoDiscover": true,
  "timeoutMs": 30000
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">MCP Workflow Step</h2>
        <p className="text-muted-foreground">
          Use the <code>mcp</code> step type in a workflow to call a tool
          exposed by an MCP server. The step requires the server ID, tool name,
          and arguments.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              mcp-step.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "mcp",
  "serverId": "my-mcp-server",
  "toolName": "search_docs",
  "arguments": { "query": "{{last}}" },
  "timeoutMs": 30000,
  "maxRetries": 2,
  "backoffMultiplier": 2
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">MCP API Reference</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/mcp/servers
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              List configured MCP servers and their health status.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/mcp/tools
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              List all tools exposed by the user&apos;s MCP servers.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/mcp/health
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Check the health of each MCP server connection.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/mcp/tools/:serverId/:toolName/invoke
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Invoke an MCP tool directly. The request body accepts tool
              arguments.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Security Notes
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> MCP servers are
            per-user. Users cannot access servers belonging to other users.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> stdio servers run as
            child processes. Use <code>TOOL_SANDBOX_UID</code> and{" "}
            <code>TOOL_SANDBOX_GID</code> to restrict process permissions.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Tool execution is
            bounded by <code>timeoutMs</code> and the global{" "}
            <code>TOOL_EXECUTION_TIMEOUT_MS</code>.
          </li>
        </ul>
      </Card>
    </div>
  );
}
