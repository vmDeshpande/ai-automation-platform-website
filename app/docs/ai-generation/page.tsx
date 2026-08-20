import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Wand2,
  Sparkles,
  CheckCircle2,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "AI Workflow Generation | AI Agent Automation Docs",
  description:
    "Generate complete workflows from natural language descriptions using AI.",
  alternates: {
    canonical: "/docs/ai-generation/",
  },
  openGraph: {
    url: "/docs/ai-generation/",
  },
};

export default function AIGenerationDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          AI Features
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          AI Workflow Generation
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Describe what you want to automate in plain language and let the
          platform generate a complete, validated workflow graph for you.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          The AI workflow generator takes a natural language prompt, sends it to
          the configured LLM provider, and normalizes the response into a valid
          workflow schema. The generated workflow is validated against the
          platform&apos;s graph schema before being saved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Wand2,
              title: "Natural Language Input",
              desc: "Type a description like 'Send me a daily email with the top HN stories'.",
            },
            {
              icon: Sparkles,
              title: "Schema Normalization",
              desc: "The AI output is normalized into steps, edges, and metadata that match the builder schema.",
            },
            {
              icon: CheckCircle2,
              title: "Graph Validation",
              desc: "The generated graph is validated for duplicate step IDs, missing edges, and invalid node types before import.",
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
        <h2 className="text-3xl font-bold">Generating a Workflow</h2>
        <p className="text-muted-foreground">
          Use the Generate AI button in the workflow builder or call the API
          directly.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/workflows/generate-ai
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "prompt": "Create a workflow that searches GitHub for my repos, summarizes the top 3, and saves the summary to a file."
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Generated Workflow Example</h2>
        <p className="text-muted-foreground">
          The normalized output is a standard workflow object with steps and
          edges.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              generated-workflow.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "GitHub Repo Summarizer",
  "metadata": {
    "steps": [
      { "stepId": "s1", "type": "http", "method": "GET", "url": "https://api.github.com/user/repos" },
      { "stepId": "s2", "type": "llm", "prompt": "Summarize these repos: {{steps.s1.output}}" },
      { "stepId": "s3", "type": "file", "action": "write", "path": "./repos.txt", "content": "{{steps.s2.output}}" }
    ],
    "edges": [
      { "id": "e1", "source": "s1", "target": "s2" },
      { "id": "e2", "source": "s2", "target": "s3" }
    ]
  }
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Limitations
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Generation is
            rate-limited to 10 requests per minute.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Complex multi-branch
            graphs may require manual adjustment in the builder.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Always review generated
            workflows before running them in production.
          </li>
        </ul>
      </Card>
    </div>
  );
}
