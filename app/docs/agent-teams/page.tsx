import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Users,
  MessageSquare,
  Shield,
  Zap,
  Network,
  Key,
  Activity,
} from "lucide-react";

export const metadata = {
  title: "Agent Teams & A2A | AI Agent Automation Docs",
  description:
    "Build multi-agent teams with visual team builders, war room chat, capability discovery, and agent-to-agent communication.",
  alternates: {
    canonical: "/docs/agent-teams/",
  },
  openGraph: {
    url: "/docs/agent-teams/",
  },
};

export default function AgentTeamsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Multi-Agent Systems
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Teams & A2A
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Coordinate multiple AI agents as a team. Use the visual team builder,
          war room chat, capability discovery, and A2A webhooks for
          agent-to-agent communication.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What is an Agent Team?</h2>
        <p className="text-muted-foreground leading-relaxed">
          An Agent Team is a group of agents configured to work together toward
          a shared objective. Teams support internal agents (managed in the
          platform) and external agents (connected via A2A webhooks). Each team
          has a topology, a set of capabilities, and a secure A2A secret for
          external communication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Users,
              title: "Visual Team Builder",
              desc: "Drag-and-drop interface to assemble teams, assign roles, and connect agents.",
            },
            {
              icon: MessageSquare,
              title: "War Room Chat",
              desc: "Real-time multi-agent chat with shared state, session logs, and live updates via Socket.IO.",
            },
            {
              icon: Network,
              title: "A2A Protocol",
              desc: "Standardized webhook endpoints for external agents to join team sessions securely.",
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
        <h2 className="text-3xl font-bold">Team Concepts</h2>
        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Agent vs Agent Team</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An <strong>Agent</strong> is a single execution unit with a
              provider, model, and capabilities. An <strong>Agent Team</strong>{" "}
              is a collection of agents (and optional external agents) that share
              a session, objective, and message log. Workflows can delegate
              execution to a specific agent via the Agent Call node, while teams
              coordinate multiple agents through the war room.
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">
              Internal vs External Agents
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Internal agents</strong> are registered in the platform
              and managed through the Agents page. <strong>External agents</strong>{" "}
              connect via the A2A webhook endpoint. Each external agent must be
              pre-authorized in the team configuration and authenticated using
              the team&apos;s A2A secret.
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">
              A2A Communication vs Workflow Agent Call
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>A2A (Agent-to-Agent)</strong> communication happens
              asynchronously through the war room message broker. Any agent in
              the team can broadcast or send direct messages.{" "}
              <strong>Workflow Agent Call</strong> is a synchronous step within a
              workflow graph that delegates execution to a specific agent and
              waits for the result before continuing.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Creating a Team</h2>
        <p className="text-muted-foreground">
          Teams are created via the Agent Teams page or the API. Each team
          receives a unique <code>A2A secret</code> that external agents must
          present when connecting.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/agent-teams
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "Research Squad",
  "description": "Research, analysis, and reporting team",
  "agents": ["agent_001", "agent_002"],
  "externalAgents": [
    { "name": "external-summarizer", "capabilities": ["summarize"] }
  ],
  "topology": "mesh"
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">War Room Chat</h2>
        <p className="text-muted-foreground leading-relaxed">
          The war room is a real-time chat interface for a team session. When a
          team run is triggered, a session is created and the runner broadcasts
          status updates through Socket.IO. Users and agents can exchange
          messages in the shared session. All messages are persisted in the
          MessageLog collection.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Capability Discovery</h2>
        <p className="text-muted-foreground leading-relaxed">
          The discovery endpoint returns the combined capabilities of all
          internal and external agents in a team. This allows the system (or a
          supervising agent) to understand what skills are available before
          delegating tasks.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <span className="text-xs font-mono text-muted-foreground">
              GET /api/agent-teams/:teamId/discovery
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "ok": true,
  "discovery": [
    { "id": "agent_001", "name": "Researcher", "type": "internal", "capabilities": ["web_search", "summarize"] },
    { "id": "external-summarizer", "name": "External Summarizer", "type": "external", "capabilities": ["summarize"] }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">A2A Webhook Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          External agents authenticate using the team&apos;s A2A secret, passed
          via the <code>x-a2a-secret</code> header. The webhook validates the
          secret against the team metadata and checks that the external agent
          identity is authorized for that team.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
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
  "from": { "id": "external-summarizer", "type": "external" },
  "to": { "id": "broadcast", "type": "internal" },
  "type": "user_prompt",
  "content": { "result": "Summarize this report" }
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Team Run Flow</h2>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>
            User triggers a team run via the UI or <code>POST /api/agent-teams/:id/run</code>.
          </li>
          <li>Backend creates an AgentSession with the provided objective.</li>
          <li>
            If a war room is active, the runner immediately broadcasts a
            <code>NEW_SWARM_MESSAGE</code> event. Otherwise, it waits up to 10
            seconds for a client to join before triggering.
          </li>
          <li>Agents exchange messages through the Socket.IO war room.</li>
          <li>Session logs are queryable via <code>GET /api/agent-teams/sessions/:sessionId/logs</code>.</li>
        </ol>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Shield className="h-5 w-5 text-secondary" />
          Security Notes
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> The A2A secret is
            generated once at team creation and is never returned again after
            the initial response.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> All team routes require
            JWT authentication.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> External agents must be
            explicitly listed in <code>externalAgents</code> to be authorized.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> The A2A webhook endpoint
            (<code>/webhook/a2a/:teamId</code>) is public but enforces secret
            and identity checks.
          </li>
        </ul>
      </Card>
    </div>
  );
}
