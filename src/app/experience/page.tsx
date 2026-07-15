import type { Metadata } from "next";
import { Card, Tag } from "@/components/Card";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience for ${site.name} — ${site.role} at ${site.company}.`,
};


export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Experience
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Field-tested systems & storage
        </h1>
        <p className="mt-4 text-muted">
          From multi-site infrastructure and Linux platforms to strategic Lustre / AI storage
          accounts — design, deploy, break, fix, repeat.
        </p>
      </div>

      <div className="relative mt-14 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-[15px]">
        {experience.map((job) => (
          <div key={job.company + job.role + job.period} className="relative pl-10 sm:pl-12">
            <div
              className={`absolute left-0 top-2 h-6 w-6 rounded-full border-2 ${
                job.current
                  ? "border-accent bg-accent/20 shadow-[0_0_12px_var(--glow)]"
                  : "border-border bg-surface"
              }`}
            />
            <Card className="!block">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-medium text-foreground">{job.role}</h2>
                  <p className="mt-1 text-accent">{job.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.current && <Tag>current</Tag>}
                  <Tag>{job.period}</Tag>
                </div>
              </div>
              {job.location && (
                <p className="mt-2 font-mono text-xs text-muted">{job.location}</p>
              )}
              {job.highlights.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
