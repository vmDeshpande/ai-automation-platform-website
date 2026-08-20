import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Installation Guide | AI Agent Automation",
  description:
    "Install AI Agent Automation locally and run the workflow automation engine with agents, tools, and scheduling.",
  alternates: {
    canonical: "/docs/installation/",
  },
  openGraph: {
    url: "/docs/installation/",
  },
};

export default function InstallationDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Get Started
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Set up the AI Agent Automation Platform locally or with Docker. No
          cloud required. Everything runs on your machine.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Prerequisites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Node.js 18.x or higher",
            "MongoDB 7.x (local or Atlas, must be a replica set)",
            "npm or yarn",
            "LLM API Key (OpenAI, Gemini, Groq, Ollama, or Hugging Face)",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-muted/20"
            >
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Setup */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Setup Steps</h2>

        {/* Step 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              1
            </div>
            Clone the Repository
          </h3>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                git clone https://github.com/vmDeshpande/ai-agent-automation.git
                {"\n"}
                cd ai-agent-automation
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              2
            </div>
            Backend Configuration
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Install backend dependencies and configure environment variables.
          </p>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd backend{"\n"}
                npm install{"\n"}
                cp .env.example .env
              </code>
            </pre>
          </Card>
          <p className="text-sm text-muted-foreground">
            Edit <code>backend/.env</code> and fill in the required values:
            <code>MONGO_URI</code>, <code>JWT_SECRET</code>, and at least one
            LLM provider key.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              3
            </div>
            Frontend Configuration
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Install frontend dependencies.
          </p>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd ../frontend{"\n"}
                npm install
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              4
            </div>
            Start MongoDB
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            MongoDB must run with a replica set enabled. For local development,
            start mongod with the <code>--replSet</code> flag, or use Docker:
          </p>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                docker run -d -p 27017:27017 --name mongo mongo:7 --replSet rs0
                --bind_ip_all
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 5 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              5
            </div>
            Start the Backend
          </h3>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd backend{"\n"}
                npm run dev
              </code>
            </pre>
          </Card>
          <p className="text-sm text-muted-foreground">
            The API server starts on <code>http://localhost:5000</code>.
          </p>
        </div>

        {/* Step 6 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              6
            </div>
            Start the Worker
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Open a new terminal and start the worker process. The worker polls
            for pending tasks and executes workflow steps.
          </p>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd backend{"\n"}
                npm run worker
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 7 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              7
            </div>
            Start the Frontend
          </h3>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd frontend{"\n"}
                npm run dev
              </code>
            </pre>
          </Card>
          <p className="text-sm text-muted-foreground">
            Open <code>http://localhost:3000</code> in your browser.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Docker Quick Start</h2>
        <p className="text-muted-foreground leading-relaxed">
          The fastest way to run the complete platform is with Docker Compose.
          It provisions MongoDB with a replica set, the backend API, the worker,
          the frontend, and an optional nginx proxy.
        </p>
        <Card className="p-4 bg-muted/30 border-border/50">
          <pre className="text-sm font-mono text-muted-foreground">
            <code>
              cp infra/.env.example infra/.env{"\n"}
              docker compose up --build
            </code>
          </pre>
        </Card>
        <p className="text-sm text-muted-foreground">
          Access the frontend at <code>http://localhost:3000</code> and the API
          at <code>http://localhost:5000</code>.
        </p>
      </div>
    </div>
  );
}
