import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.title}, ${site.role} at ${site.company}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-lime">// {site.tagline}</p>
        <p className="mt-4 text-lg text-muted">
          {site.title} · {site.role} @ {site.company}
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          {site.about.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>

        <aside>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">
              snapshot
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="text-foreground">{site.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Company</dt>
                <dd className="text-foreground">{site.company}</dd>
              </div>
              <div>
                <dt className="text-muted">Role</dt>
                <dd className="text-foreground">{site.role}</dd>
              </div>
              <div>
                <dt className="text-muted">GitHub</dt>
                <dd>
                  <a
                    href={site.github}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{site.githubHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
