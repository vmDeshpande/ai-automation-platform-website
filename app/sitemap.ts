import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://vmdeshpande.github.io/ai-automation-platform-website";

const pages = [
  "",
  "/features",
  "/architecture",
  "/community",
  "/execution-model",
  "/internals",
  "/roadmap",
  "/showcase",

  "/docs",
  "/docs/installation",
  "/docs/quickstart",
  "/docs/configuration",
  "/docs/local-first",
  "/docs/workflows",
  "/docs/agents",
  "/docs/tools",
  "/docs/security",
  "/docs/memory",
  "/docs/rag",
  "/docs/runner",
  "/docs/scheduler",
  "/docs/logs",
  "/docs/api-reference",
  "/docs/deployment",
  "/docs/architecture",
  "/docs/why",
  "/docs/why-compare",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${base}${page}/`.replace(/([^:]\/)\/+/g, "$1"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}