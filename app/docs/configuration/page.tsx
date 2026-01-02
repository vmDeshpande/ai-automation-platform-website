import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Settings, Key, Database, Globe, Code, Shield } from "lucide-react"

export default function ConfigurationDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
          Setup
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Configuration & Environment</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Complete guide to configuring the AI Agent Automation Platform using environment variables and configuration
          files.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">The .env File</h2>
        <p className="text-muted-foreground leading-relaxed">
          The primary way to configure the backend engine is through environment variables. Copy the
          <code>.env.example</code> file to <code>.env</code> in the <code>backend</code> directory.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Server Settings",
              icon: Globe,
              vars: [
                { name: "PORT", desc: "The port the Express server will listen on (default: 5000)." },
                { name: "NODE_ENV", desc: "Set to 'production' or 'development'." },
              ],
            },
            {
              title: "Database Configuration",
              icon: Database,
              vars: [
                { name: "MONGODB_URI", desc: "The connection string for your MongoDB instance." },
                { name: "DB_NAME", desc: "The name of the database to use (default: agent_automation)." },
              ],
            },
            {
              title: "AI Provider Settings",
              icon: Key,
              vars: [
                { name: "OPENAI_API_KEY", desc: "Your OpenAI API key for LLM and embeddings." },
                { name: "ANTHROPIC_API_KEY", desc: "Optional: Your Anthropic API key for Claude models." },
                { name: "GOOGLE_API_KEY", desc: "Optional: Your Google API key for Gemini models." },
              ],
            },
            {
              title: "Security & Secret",
              icon: Shield,
              vars: [
                { name: "JWT_SECRET", desc: "A strong secret for signing authentication tokens." },
                { name: "ENCRYPTION_KEY", desc: "A 32-character key for encrypting sensitive tools data." },
              ],
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <div className="grid gap-3">
                {section.vars.map((v, j) => (
                  <div
                    key={j}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg border border-border/50 bg-card/30"
                  >
                    <code className="text-sm font-mono text-primary font-bold min-w-[180px]">{v.name}</code>
                    <span className="text-sm text-muted-foreground">{v.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Advanced Configuration</h2>
        <p className="text-muted-foreground leading-relaxed">
          For more granular control, you can modify the configuration objects in <code>src/config/index.ts</code>. This
          includes settings for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Worker Settings",
              desc: "Adjust the number of concurrent workflow executions and retry intervals.",
            },
            {
              title: "Embedding Config",
              desc: "Switch between different embedding models and chunk sizes for RAG.",
            },
            {
              title: "Logging Policies",
              desc: "Configure log retention periods and verbosity levels.",
            },
            {
              title: "Scheduler Intervals",
              desc: "Change how often the scheduler polls for pending jobs.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-border/50 bg-card/30 space-y-2">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Example .env</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">.env</span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`PORT=5000
NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/agent_automation

OPENAI_API_KEY=sk-your-key-here
JWT_SECRET=your-super-secret-jwt-key
ENCRYPTION_KEY=your-32-char-encryption-key-here`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Settings className="h-5 w-5 text-secondary" />
          Pro-Tip: Local LLMs
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can use local LLMs (via Ollama or LocalAI) by overriding the <code>BASE_URL</code> for the OpenAI
          provider. Update the configuration in <code>src/config/ai.ts</code> to point to your local endpoint.
        </p>
      </Card>
    </div>
  )
}
