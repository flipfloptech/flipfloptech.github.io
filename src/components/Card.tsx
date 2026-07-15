import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function Card({ children, className = "", href }: Props) {
  const base =
    "group block rounded-xl border border-border/80 bg-surface p-5 shadow-[0_0_0_1px_color-mix(in_srgb,var(--cosmic-blue1)_4%,transparent)] backdrop-blur-sm transition hover:border-accent/45 hover:bg-surface-2 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--cosmic-cyan)_12%,transparent)]";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
