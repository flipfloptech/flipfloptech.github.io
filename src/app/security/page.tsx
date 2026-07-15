import type { Metadata } from "next";
import { Card, Tag } from "@/components/Card";
import { advisories, securityIntro } from "@/content/security";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Security",
  description: `Security research and disclosures by ${site.name}.`,
};

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Security research
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Hobby with teeth
        </h1>
        <div className="mt-4 space-y-3 text-muted">
          {securityIntro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-12 space-y-6">
        {advisories.map((a) => (
          <Card key={a.title} className="!block">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-medium text-foreground">{a.title}</h2>
              {a.risk && (
                <span className="rounded-md border border-danger/30 bg-danger/10 px-2 py-0.5 font-mono text-[11px] text-danger">
                  {a.risk}
                </span>
              )}
              <Tag>{a.date}</Tag>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {a.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
              {a.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
