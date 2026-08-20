import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FileText, Search, Brain, Database, Code } from "lucide-react";

export const metadata = {
  title: "Document RAG System | AI Agent Automation Docs",
  description:
    "Use retrieval-augmented generation to query documents using embeddings and AI models.",
  alternates: {
    canonical: "/docs/rag/",
  },
  openGraph: {
    url: "/docs/rag/",
  },
};

export default function RAGDocs() {
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
          Document Chat (RAG)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Upload PDFs, TXT, Markdown, CSV, and JSON files. Ingest them into a
          local vector store, and chat with your documents using
          retrieval-augmented generation with hybrid search and source
          attribution.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How RAG Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          Retrieval-Augmented Generation (RAG) combines the power of semantic
          search with LLM reasoning. Documents are chunked, embedded, and stored
          in a vector database. When you ask a question, the system retrieves
          the most relevant chunks and uses them to ground the AI&apos;s
          response.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {[
            {
              icon: FileText,
              title: "PDF Ingestion",
              desc: "Upload and parse PDF documents with text extraction.",
            },
            {
              icon: Brain,
              title: "Semantic Chunking",
              desc: "Break documents into meaningful segments with overlap.",
            },
            {
              icon: Database,
              title: "Vector Storage",
              desc: "Embed chunks using OpenAI or local models and store in MongoDB.",
            },
            {
              icon: Search,
              title: "Hybrid Search",
              desc: "Combine keyword and semantic search for best retrieval.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col items-center text-center gap-3"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Document Ingestion API</h2>
        <p className="text-muted-foreground">
          Use the REST API to upload documents and trigger the ingestion
          pipeline.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              curl
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`curl -X POST http://localhost:5000/api/documents/upload \\
  -H "Authorization: Bearer <token>" \\
  -F "file=@research_paper.pdf"

# Response:
{
  "ok": true,
  "document": {
    "_id": "doc_abc123",
    "title": "research_paper.pdf",
    "fileType": "pdf",
    "chunkCount": 45,
    "status": "processing"
  }
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Querying Documents</h2>
        <p className="text-muted-foreground">
          Ask natural language questions and get answers grounded in your
          uploaded documents with source citations.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              document-query.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "query": "What are the key findings about neural networks?",
  "documentIds": ["doc_abc123"],
  "topK": 5
}

# Response:
{
  "ok": true,
  "answer": "The key findings indicate that...",
  "sources": [
    { "chunkId": "chunk_12", "page": 3, "relevance": 0.92 },
    { "chunkId": "chunk_45", "page": 8, "relevance": 0.88 }
  ]
}`}</code>
          </pre>
        </Card>
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
              Send a chat message against selected documents with RAG retrieval.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-3">Privacy & Local Storage</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All document embeddings and vector data are stored locally in MongoDB.
          No data is sent to external services unless you explicitly configure
          an external embedding API. You can use local embedding models for
          complete offline operation.
        </p>
      </Card>
    </div>
  );
}
