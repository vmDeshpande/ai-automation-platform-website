import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Play,
  Bot,
  Settings,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Agent Playground | AI Agent Automation Docs",
  description:
    "Test agents directly from the UI. Send prompts, inspect outputs, and iterate on system instructions.",
  alternates: {
    canonical: "/docs/playground/",
  },
  openGraph: {
    url: "/docs/playground/",
  },
};

export default function PlaygroundDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Agent Tools
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Playground
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A dedicated UI for testing agents without creating workflows. Send
          prompts, switch providers, and inspect raw responses.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Using the Playground</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Playground is accessible from the Agents page. Select an agent,
          enter a message, and choose a provider/model override if desired. The
          playground sends the message through the same LLM adapter used by
          workflow steps, so results are representative of production execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Bot,
              title: "Agent Selection",
              desc: "Pick any registered agent. The playground uses the agent's system instructions and capabilities.",
            },
            {
              icon: Settings,
              title: "Provider Override",
              desc: "Override the agent's default provider and model for quick experiments.",
            },
            {
              icon: Code,
              title: "Raw Output",
              desc: "Inspect the full LLM response including token usage, finish reason, and raw content.",
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
        <h2 className="text-3xl font-bold">Playground API</h2>
        <p className="text-muted-foreground">
          The playground calls the agent run endpoint under the hood.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/agents/:id/run
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "prompt": "Explain quantum computing in one paragraph.",
  "provider": "openai",
  "model": "gpt-4o-mini"
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
            <span className="text-secondary">•</span> Playground execution is
            rate-limited alongside other expensive operations.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Memory is not persisted
            during playground runs unless explicitly enabled for the agent.
          </li>
        </ul>
      </Card>
    </div>
  );
}
