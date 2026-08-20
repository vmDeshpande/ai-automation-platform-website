import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Activity,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Insights & Analytics | AI Agent Automation Docs",
  description:
    "Monitor workflow performance, execution trends, and step analytics with global and per-workflow insights.",
  alternates: {
    canonical: "/docs/insights/",
  },
  openGraph: {
    url: "/docs/insights/",
  },
};

export default function InsightsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Observability
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Insights & Analytics
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Track execution trends, step performance, and workflow health with
          computed insights. Available globally across all workflows or drilled
          down into a single workflow.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Types of Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Activity,
              title: "Global Insights",
              desc: "Aggregated metrics across all your workflows: total executions, success rate, average duration, and step-type distribution.",
            },
            {
              icon: TrendingUp,
              title: "Workflow Insights",
              desc: "Per-workflow analytics including execution timeline, step failure rates, and retry patterns.",
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
        <h2 className="text-3xl font-bold">Insights API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/insights/summary
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Returns global insights for the authenticated user across all
              workflows.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary border-none font-mono">
                GET
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/insights/workflows/:workflowId
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Returns computed insights for a specific workflow. Accepts an
              optional <code>limit</code> query parameter (default 200).
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Dashboard & UI</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Insights page provides charts and filters for execution trends.
          You can filter by time range, workflow, and step type. The dashboard
          also surfaces live workflow status, execution trend charts, and system
          health indicators.
        </p>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Metrics Scope
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Insights are computed
            from task and step result data. They do not include prompts,
            workflow definitions, or uploaded documents.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> The default lookback
            window is the most recent 200 executions. Adjust via the{" "}
            <code>limit</code> query parameter.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Step-level metrics
            include execution count, average duration, and failure count per
            step type.
          </li>
        </ul>
      </Card>
    </div>
  );
}
