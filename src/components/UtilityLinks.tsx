import { site } from "@/content/site";

const linkClass = "hover:text-accent transition-colors";

/** Footer social links */
export function UtilityLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 font-mono text-xs text-muted ${className}`}>
      <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
        GitHub
      </a>
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
        LinkedIn
      </a>
    </div>
  );
}
