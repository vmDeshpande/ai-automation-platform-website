import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FileJson,
  Download,
  Upload,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Templates | AI Agent Automation Docs",
  description:
    "Import and export workflow templates for common automation patterns.",
  alternates: {
    canonical: "/docs/templates/",
  },
  openGraph: {
    url: "/docs/templates/",
  },
};

export default function TemplatesDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Reusability
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Templates
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Start from pre-built workflow templates or export your own workflows
          as reusable JSON blueprints.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What are Templates?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Templates are JSON files that describe a complete workflow definition
          including steps, edges, and metadata. They can be imported to create a
          new workflow instance, or exported from an existing workflow for
          sharing and version control.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Importing a Template</h2>
        <p className="text-muted-foreground">
          Import templates via the API or the Templates page in the UI.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              POST /api/templates/import/:id
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Import template by its registered ID
POST /api/templates/import/daily-report-generator
Authorization: Bearer <token>`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Validating a Template</h2>
        <p className="text-muted-foreground">
          Before importing, validate that a template has correct step IDs, edge
          references, and node types.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              GET /api/templates/:id/validate
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "ok": true,
  "valid": true,
  "errors": [],
  "warnings": []
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Exporting a Workflow</h2>
        <p className="text-muted-foreground">
          Export any workflow you own as a JSON template. The exported file
          contains the full workflow definition including steps, edges, and node
            metadata.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              GET /api/workflows/:workflowId/export
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Returns a JSON file with the workflow definition
GET /api/workflows/wf_123/export
Authorization: Bearer <token>`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Built-in Templates</h2>
        <p className="text-muted-foreground leading-relaxed">
          The platform ships with starter templates for common automation tasks.
          You can view the list via the Templates API.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              GET /api/templates
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "ok": true,
  "templates": [
    {
      "id": "daily-report",
      "name": "Daily Report Generator",
      "description": "Summarize data and email a daily report.",
      "steps": [ ... ],
      "edges": [ ... ]
    }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Tips
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Store templates in
            version control to share workflows across teams.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Use the{" "}
            <code>clone</code> endpoint (<code>POST /api/workflows/:id/clone</code>
            ) to duplicate a workflow before editing.
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Version history is
            preserved when importing from a template.
          </li>
        </ul>
      </Card>
    </div>
  );
}
