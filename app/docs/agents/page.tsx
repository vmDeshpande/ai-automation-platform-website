import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Bot, Brain, Wrench, MessageSquare, Code, Users } from "lucide-react";

export const metadata = {
  title: "AI Agents | AI Agent Automation Docs",
  description:
    "Learn how AI agents work in the automation platform including configuration, providers, models, execution behavior, teams, and playground testing.",
  alternates: {
    canonical: "/docs/agents/",
  },
  openGraph: {
    url: "/docs/agents/",
  },
};

export default function AgentsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Core Module
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          AI Agent System
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Autonomous agents that can reason, use tools, and execute multi-step
          tasks with full observability. Supports multi-agent teams, agent
          delegation, and direct playground testing.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What is an Agent?</h2>
        <p className="text-muted-foreground leading-relaxed">
          An agent is an AI-powered execution unit that receives a goal, reasons
          about how to achieve it, selects and uses appropriate tools, and
          produces structured outputs. Agents are configured with a provider,
          model, role, system instructions, and a set of capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            {
              icon: Brain,
              title: "Reasoning Engine",
              desc: "Agents use LLMs to plan, make decisions, and adapt to unexpected situations.",
            },
            {
              icon: Wrench,
              title: "Tool Selection",
              desc: "Automatically chooses the right tool for each sub-task from a registry of capabilities.",
            },
            {
              icon: MessageSquare,
              title: "Memory & Context",
              desc: "Maintains conversation history and retrieves relevant past interactions using semantic memory.",
            },
            {
              icon: Code,
              title: "Structured Output",
              desc: "Returns validated JSON responses that can be consumed by downstream steps.",
            },
            {
              icon: Users,
              title: "Agent Teams",
              desc: "Group multiple agents into teams with shared objectives, war room chat, and A2A communication.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/30"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent Configuration</h2>
        <p className="text-muted-foreground">
          Agents are created via the Agents page or the API. Each agent requires
          a name, provider, and model. Optional fields include role, objective,
          system instructions, avatar, type, capabilities, and quota.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              agent-definition.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "Research Assistant",
  "description": "Summarizes and analyzes information",
  "type": "custom",
  "provider": "openai",
  "model": "gpt-4o-mini",
  "role": "researcher",
  "objective": "Find and summarize latest AI papers",
  "systemInstructions": "You are a research assistant...",
  "capabilities": ["llm", "web_search"],
  "isActive": true
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent Execution Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "1",
              title: "Receive Goal",
              desc: "Agent gets a high-level task description.",
            },
            {
              step: "2",
              title: "Plan Actions",
              desc: "LLM breaks down the goal into executable steps.",
            },
            {
              step: "3",
              title: "Execute Tools",
              desc: "Agent calls tools sequentially or in parallel.",
            },
            {
              step: "4",
              title: "Return Result",
              desc: "Final output is validated and logged.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 text-center space-y-2 border-primary/20 bg-primary/5"
            >
              <div className="text-3xl font-bold text-primary">{item.step}</div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent Safety & Guardrails</h2>
        <Card className="p-6 border-secondary/20 bg-secondary/5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-secondary">•</span> Maximum iteration
              limits prevent infinite loops.
            </li>
            <li className="flex gap-2">
              <span className="text-secondary">•</span> Tool permissions are
              enforced at the executor level.
            </li>
            <li className="flex gap-2">
              <span className="text-secondary">•</span> Output validation
              ensures structured responses.
            </li>
            <li className="flex gap-2">
              <span className="text-secondary">•</span> All actions are logged
              for audit and debugging.
            </li>
          </ul>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent Playground</h2>
        <p className="text-muted-foreground leading-relaxed">
          Test agents directly from the UI without creating a workflow. The
          playground sends prompts through the same LLM adapter used by workflow
          steps, so results are representative of production execution.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/agents
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Create a new agent profile.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/agents
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              List all registered agent profiles for the user.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/agents/:id/run
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Send a prompt directly to an agent. Used by the playground.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
