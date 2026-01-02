import type React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="container mx-auto flex-1 py-10 px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <aside className="hidden md:block w-72 shrink-0">
            <div className="h-[calc(100vh-4.5rem)]">
              <DocsSidebar />
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto pb-20">{children}</div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
