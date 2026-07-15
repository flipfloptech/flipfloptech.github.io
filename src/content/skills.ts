export type SkillGroup = {
  title: string;
  description?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Storage & HPC",
    description: "The core craft — parallel filesystems and AI-scale data paths.",
    items: [
      "Lustre / Exascaler",
      "Parallel & distributed filesystems",
      "HPC / AI storage architecture",
      "Performance troubleshooting",
      "Capacity & lifecycle planning",
      "Prometheus / observability for storage",
    ],
  },
  {
    title: "Systems & Linux",
    description: "30+ years living in the kernel-adjacent trenches.",
    items: [
      "Linux internals & ops",
      "Kernel / client debugging",
      "Networking & RDMA awareness",
      "Automation & config management",
      "Containers & bare metal",
      "Open source advocacy",
    ],
  },
  {
    title: "Customer & Field",
    description: "Strategic accounts don't run on slides alone.",
    items: [
      "Technical account management",
      "Architecture design reviews",
      "Escalation ownership",
      "Executive-ready technical narrative",
      "Cross-team coordination",
    ],
  },
  {
    title: "Security (hobby, serious)",
    description: "Breaking things responsibly to understand them better.",
    items: [
      "Vulnerability research",
      "Auth / trust boundary analysis",
      "MSP platform security",
      "Responsible disclosure",
      "PoC tooling",
    ],
  },
  {
    title: "Languages & tooling",
    items: ["Rust", "Go", "C#", "Python", "Bash", "Lua", "Git", "MCP"],
  },
];
