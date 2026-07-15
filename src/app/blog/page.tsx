import type { Metadata } from "next";
import Link from "next/link";
import { Tag } from "@/components/Card";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes and writeups from ${site.name}.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Field notes
        </h1>
        <p className="mt-4 text-muted">
          Storage war stories, tooling, security notes, and occasional hardware tangents.
          New posts live as Markdown under{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-xs text-lime">
            content/blog/
          </code>
          .
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {posts.length === 0 && (
          <p className="text-muted">No posts yet — check back soon.</p>
        )}
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            className="block rounded-xl border border-border bg-surface/60 px-5 py-5 transition hover:border-accent/40 hover:bg-surface-2/60"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-medium text-foreground">{post.title}</h2>
                <p className="mt-1 text-sm text-muted">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>
              <time className="shrink-0 font-mono text-xs text-muted">{post.date}</time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
