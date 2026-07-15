import type { Metadata } from "next";
import { Card, Tag } from "@/components/Card";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Open-source projects and tools by ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Projects
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Code that sometimes explodes
        </h1>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.name} href={p.href}>
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-mono text-sm font-medium text-foreground group-hover:text-accent">
                {p.name}
              </h2>
              <div className="flex gap-1.5">
                {p.featured && <Tag>featured</Tag>}
                {p.language && <Tag>{p.language}</Tag>}
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
