import type { Metadata } from "next";
import { Card, Tag } from "@/components/Card";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Skills",
  description: `Skills and expertise — Lustre, HPC storage, Linux, and more. ${site.name}.`,
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Stack, craft, and field skills
        </h1>
        <p className="mt-4 text-muted">
          Lustre and parallel storage sit at the center. Everything else supports making
          large systems trustworthy under real load.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title} className="!block">
            <h2 className="text-lg font-medium text-foreground">{group.title}</h2>
            {group.description && (
              <p className="mt-1 text-sm text-muted">{group.description}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
