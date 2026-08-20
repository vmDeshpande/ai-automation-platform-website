import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Search,
  FileText,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Document Chat | AI Agent Automation Docs",
  description:
    "Chat with your uploaded documents using retrieval-augmented generation.",
  alternates: {
    canonical: "/docs/document-chat/",
  },
  openGraph: {
    url: "/docs/document-chat/",
  },
};

export default function DocumentChatDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Document Intelligence
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Document Chat
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Ask questions about your uploaded documents and get answers grounded in
          the actual content with source attribution.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: MessageSquare,
              title: "Multi-Document Chat",
              desc: "Select multiple documents and chat with them together. The system retrieves context from all selected sources.",
            },
            {
              icon: Search,
              title: "Hybrid Retrieval",
              desc: "Combines keyword and semantic search to find the most relevant chunks across your knowledge base.",
            },
            {
              icon: FileText,
              title: "Source Attribution",
              desc: "Every answer includes citations showing which document and chunk the information came from.",
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
        <h2 className="text-3xl font-bold">Document Chat API</h2>
        <div className="grid gap-4">
          <Card className="p-4 border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-success/20 text-success border-none font-mono">
                POST
              </Badge>
              <code className="text-sm font-mono font-bold">
                /api/documents/chat
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Send a chat message against selected documents.
            </p>
          </Card>
        </div>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              Request Body
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "query": "What are the key findings about neural networks?",
  "documentIds": ["doc_abc123", "doc_def456"],
  "topK": 5
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">UI Experience</h2>
        <p className="text-muted-foreground leading-relaxed">
          In the Documents page, select one or more documents and click &quot;Chat
          with Selected&quot;. The chat interface supports Markdown rendering,
          streaming responses, and source cards that link back to the original
          document chunks.
        </p>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Configuration
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Document chat settings are managed per-user in Settings under Knowledge
          Assistant. You can configure the provider, model override, top-K
          retrieval, and temperature. The feature is enabled by default when a
          provider is available.
        </p>
      </Card>
    </div>
  );
}
