import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  GitBranch,
  HelpCircle,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Conditions & Switch | AI Agent Automation Docs",
  description:
    "Branch workflow execution based on conditions or multi-case routing using condition and switch nodes.",
  alternates: {
    canonical: "/docs/conditions-switch/",
  },
  openGraph: {
    url: "/docs/conditions-switch/",
  },
};

export default function ConditionsSwitchDocs() {
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
          Conditions & Switch
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Route execution dynamically based on step outputs, input values, or
          external data.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Condition Node</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Condition node evaluates a boolean expression and routes execution
          to one of two branches: <code>if_true</code> or <code>if_false</code>.
          It supports operators like <code>==</code>, <code>!=</code>,{" "}
          <code>&gt;</code>, <code>&lt;</code>, <code>contains</code>, and{" "}
          <code>startsWith</code>.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              condition-node.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "condition",
  "conditionType": "step_output",
  "operator": "==",
  "value": "200",
  "if_true": [
    { "type": "email", "to": "success@example.com" }
  ],
  "if_false": [
    { "type": "email", "to": "error@example.com" }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Switch Node</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Switch node routes execution to one of multiple cases based on a
          value. It is useful when you have more than two outcomes. Cases are
          defined as edges in the visual builder.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              switch-node.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "switch",
  "cases": {
    "success": [{ "type": "email", "to": "success@example.com" }],
    "error": [{ "type": "email", "to": "error@example.com" }],
    "timeout": [{ "type": "delay", "seconds": 60 }]
  }
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
            <span className="text-secondary">•</span> Routing is edge-driven:
            connections define execution paths.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> If no case matches, the
            switch node falls through to the default branch if one is defined.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Condition evaluation uses
            strict boolean logic and avoids unsafe substring matching.
          </li>
        </ul>
      </Card>
    </div>
  );
}
