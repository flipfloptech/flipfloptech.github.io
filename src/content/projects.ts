export type Project = {
  name: string;
  description: string;
  href: string;
  language?: string;
  stars?: number;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "squeezefs",
    description:
      "An opinionated filesystem written with AI — systems thinking meets modern tooling.",
    href: "https://github.com/flipfloptech/squeezefs",
    language: "Rust",
    tags: ["filesystem", "rust", "storage"],
    featured: true,
  },
  {
    name: "cortex-mcp",
    description: "LLM diagnostics at scale — MCP-oriented tooling for understanding model behavior in the wild.",
    href: "https://github.com/flipfloptech/cortex-mcp",
    language: "Go",
    tags: ["mcp", "llm", "diagnostics"],
    featured: true,
  },
  {
    name: "nCentralDumpsterDiver",
    description:
      "Security research tool against SolarWinds N-central: rogue agent via self-registration dumps appliance configuration (including potential plaintext secrets). Reported to PSIRT.",
    href: "https://github.com/flipfloptech/nCentralDumpsterDiver",
    language: "C#",
    stars: 4,
    tags: ["security", "research", "msp"],
    featured: true,
  },
  {
    name: "ADLockAudit",
    description:
      "Utility to analyze Active Directory lockouts across 2008R2–2016 domain controllers via remoting and WMI.",
    href: "https://github.com/flipfloptech/ADLockAudit",
    language: "C#",
    stars: 4,
    tags: ["active-directory", "ops", "windows"],
    featured: true,
  },
  {
    name: "thermald-ng",
    description:
      "Sometimes you just want to write your own daemon to keep temps in check.",
    href: "https://github.com/flipfloptech/thermald-ng",
    language: "Go",
    tags: ["systems", "linux", "thermal"],
  },
  {
    name: "lustrefs-exporter",
    description:
      "Prometheus exporter for Lustre — observability for the filesystems that matter at AI scale.",
    href: "https://github.com/flipfloptech/lustrefs-exporter",
    language: "Rust",
    tags: ["lustre", "prometheus", "observability"],
    featured: true,
  },
  {
    name: "Graph2AutoTask",
    description:
      "O365 email parser via Microsoft Graph API that creates tickets in Autotask PSA.",
    href: "https://github.com/flipfloptech/Graph2AutoTask",
    language: "C#",
    stars: 2,
    tags: ["automation", "msp", "o365"],
  },
  {
    name: "Datto_Monitors_Components",
    description:
      "Datto RMM components for monitoring, deployment, and day-to-day MSP operations.",
    href: "https://github.com/flipfloptech/Datto_Monitors_Components",
    language: "Batchfile",
    stars: 4,
    tags: ["msp", "rmm", "ops"],
  },
  {
    name: "AnteroAddSQLAuth",
    description:
      "Dynamic patcher for Antero AllAmax to add SQL authentication, server, and port specification.",
    href: "https://github.com/flipfloptech/AnteroAddSQLAuth",
    language: "C#",
    tags: ["patching", "sql", "tools"],
  },
];
