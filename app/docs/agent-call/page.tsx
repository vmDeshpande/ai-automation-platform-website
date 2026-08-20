import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Bot,
  Network,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Agent Call Node | AI Agent Automation Docs",
  description:
    "Delegate workflow execution to a specialized AI agent using the agent call node.",
  alternates: {
    canonical: "/docs/agent-call/",
  },
  openGraph: {
    url: "/docs/agent-call/",
  },
};

export default function AgentCallDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Workflow Nodes
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Call
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Delegate a step to a specific agent within a workflow. The workflow
          pauses, the agent processes the input, and the result is injected back
          into the execution context.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Agent Call node references an existing agent by ID. When the
          workflow reaches this node, the executor fetches the agent
          configuration, runs the LLM with the provided input, and returns the
          structured output. If the agent is not found, the step falls back to
          the workflow&apos;s default agent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Bot,
              title: "Specialized Agents",
              desc: "Assign different agents to different steps. Each agent can have its own provider, model, and system instructions.",
            },
            {
              icon: Network,
              title: "Context Isolation",
              desc: "The called agent receives only the input payload you specify. Its output is returned to the workflow context.",
            },
            {
              icon: Code,
              title: "Structured Output",
              desc: "Agent responses are validated and stored as step results, just like any other step type.",
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
        <h2 className="text-3xl font-bold">Agent Call Configuration</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              agent-call-node.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "agent_call",
  "agentId": "agent_001",
  "input": "Summarize the following research: {{steps.s1.output}}",
  "waitForResponse": true
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Notes
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> The agent must be owned
            by the same user as the workflow.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> If{" "}
            <code>waitForResponse</code> is true, the workflow waits for the
            agent to finish before continuing.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Agent call steps support
            retry policies and timeouts like any other step.
          </li>
        </ul>
      </Card>
    </div>
  );
}
