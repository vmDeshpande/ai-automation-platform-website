import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Database, Search, Clock, Code } from "lucide-react";

export default function MemoryDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Agent Intelligence
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Memory
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Persistent memory system that allows agents to remember past
          interactions, learn from experience, and maintain context across
          sessions.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Why Memory Matters</h2>
        <p className="text-muted-foreground leading-relaxed">
          Without memory, every agent interaction starts from scratch. With
          memory, agents can reference past conversations, recall user
          preferences, and build on previous reasoning to provide more
          personalized and contextually aware responses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Brain,
              title: "Conversation History",
              desc: "Full transcript of past interactions with semantic indexing for retrieval.",
            },
            {
              icon: Database,
              title: "Fact Storage",
              desc: "Agents can store and recall specific facts, preferences, and user data.",
            },
            {
              icon: Search,
              title: "Semantic Recall",
              desc: "Query memory using natural language to retrieve relevant past context.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col items-center text-center gap-3"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
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
        <h2 className="text-3xl font-bold">Memory Types</h2>
        <div className="grid gap-6">
          {[
            {
              type: "Short-Term Memory",
              desc: "Active conversation context kept in the agent's working memory during a single session.",
              icon: Clock,
            },
            {
              type: "Long-Term Memory",
              desc: "Persistent storage of facts, preferences, and summarized interactions across multiple sessions.",
              icon: Database,
            },
            {
              type: "Episodic Memory",
              desc: "Specific events or past workflow executions that can be referenced for continuity.",
              icon: Brain,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/30"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{item.type}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Storing and Retrieving Memory</h2>
        <p className="text-muted-foreground">
          Agents can explicitly save important information to memory or retrieve
          relevant context before responding.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              memory-example.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`// Storing a memory
{
  "type": "memory_save",
  "key": "user_preference",
  "value": "The user prefers concise technical explanations.",
  "tags": ["preference", "communication"]
}

// Retrieving memories
{
  "type": "memory_query",
  "query": "What does the user prefer for explanations?",
  "top_k": 3
}

// Response:
{
  "memories": [
    { "key": "user_preference", "value": "prefers concise technical...", "relevance": 0.95 }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <h2 className="text-3xl font-bold">When Memory Is Used</h2>
      <p className="text-muted-foreground leading-relaxed">
        Before executing an LLM step, the agent can optionally retrieve relevant
        memories. These memories are injected into the prompt as contextual
        grounding, allowing the agent to remain consistent across executions.
      </p>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-3">Privacy & Security</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All memory data is stored locally in MongoDB and is scoped to
          individual users or agent instances. You have full control over what
          gets stored, how long it's retained, and when it's deleted. No memory
          data is ever sent to external services.
        </p>
      </Card>
    </div>
  );
}
