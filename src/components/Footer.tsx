import { site } from "@/content/site";
import { UtilityLinks } from "@/components/UtilityLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-[color-mix(in_srgb,var(--cosmic-bg-dark1)_72%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-0.5">
          <p className="font-mono text-sm text-foreground">
            <span className="text-accent">$</span> whoami
            <span className="text-muted"> → </span>
            {site.name}
          </p>
          <p className="text-xs text-muted sm:text-sm">
            © {year} · Lustre first. Break things second. Ship credibility always.
          </p>
        </div>
        <UtilityLinks />
      </div>
    </footer>
  );
}
