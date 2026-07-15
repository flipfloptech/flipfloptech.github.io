import Link from "next/link";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      {/* Hero */}
      <div className="bg-nebula">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-8 sm:px-6 sm:pt-28 sm:pb-10">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {site.location} · {site.company}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {site.name}
              <span className="mt-2 block text-2xl font-normal text-muted sm:text-3xl">
                <span className="text-lime">//</span> {site.tagline}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {site.pitch}
            </p>

            <div className="mt-12 grid gap-3 font-mono text-xs text-muted sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface/60 px-4 py-3">
                <div className="text-accent">role</div>
                <div className="mt-1 text-foreground">{site.role}</div>
              </div>
              <div className="rounded-lg border border-border bg-surface/60 px-4 py-3">
                <div className="text-accent">focus</div>
                <div className="mt-1 text-foreground">Lustre · Exascaler · AI storage</div>
              </div>
              <div className="rounded-lg border border-border bg-surface/60 px-4 py-3">
                <div className="text-accent">side quest</div>
                <div className="mt-1 text-foreground">Security research · hardware</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {posts.length > 0 && (
          <Section
            className="!pt-6 sm:!pt-8 !pb-12 sm:!pb-14"
            eyebrow="blog"
            title="Recent posts"
            description="Notes from the field — storage, tooling, and whatever broke lately."
          >
            <div className="space-y-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-surface/60 px-5 py-4 transition hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-medium text-foreground">{post.title}</h3>
                    <p className="mt-1 text-sm text-muted">{post.description}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">{post.date}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/blog/" className="font-mono text-sm text-accent hover:underline">
                all posts →
              </Link>
            </div>
          </Section>
        )}

        <section className="mb-20 rounded-2xl border border-border/80 bg-surface px-6 py-12 shadow-[0_0_40px_color-mix(in_srgb,var(--cosmic-magenta)_8%,transparent)] backdrop-blur-sm sm:px-10">
          <div className="mx-auto max-w-md">
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <dl className="mt-8 space-y-4 font-mono text-sm">
              {site.contact.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1 border-b border-border/60 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="shrink-0 text-muted">{c.label}</dt>
                  <dd className="sm:text-right">
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground transition hover:text-accent"
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </>
  );
}
