import type { Metadata } from "next";
import { Card, Tag } from "@/components/Card";
import { interests } from "@/content/interests";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Interests",
  description: `Personal interests — Type-R, Funwheel, drones, 3D printing. ${site.name}.`,
};

export default function InterestsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Interests
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Outside the cluster
        </h1>
        <p className="mt-4 text-muted">
          Hardware you can drive, ride, fly, or print — the same tinker energy as storage,
          just louder.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {interests.map((i) => (
          <Card key={i.title} className="!block">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-medium text-foreground">{i.title}</h2>
                {i.subtitle && (
                  <p className="mt-1 font-mono text-xs text-accent">{i.subtitle}</p>
                )}
              </div>
              {i.status && <Tag>{i.status}</Tag>}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{i.body}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {i.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
