export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "DDN",
    role: "Technical Account Manager — Strategic Accounts",
    period: "May 2024 – Present",
    location: "remote · us-east",
    current: true,
    highlights: [
      "Primary technical owner for strategic AI and HPC accounts running DDN Exascaler / Lustre.",
      "Translate deep storage internals into customer outcomes: performance, reliability, and scale.",
      "Bridge field reality and product — escalate the right issues, design the right architecture, keep clusters healthy under load.",
    ],
  },
  {
    company: "Q² Solutions",
    role: "Senior Systems Architect",
    period: "May 2022 – May 2024",
    location: "Durham, NC",
    highlights: [
      "Lustre SRE — reliability and operations for parallel filesystem environments.",
      "JuiceFS SRE — production care for JuiceFS-backed storage paths.",
      "Genomics pipelines — systems support for high-throughput bioinformatics workflows.",
      "SLURM — cluster scheduling and HPC job environment stewardship.",
    ],
  },
  // Timeline continuity only — no detail by request
  {
    company: "Atlantic Computer Services",
    role: "Senior Development Engineer",
    period: "Aug 2016 – May 2022",
    location: "Greater Wilmington Area",
    highlights: [],
  },
  {
    company: "Cape Fear Juice Company, LLC",
    role: "Senior Technology Specialist",
    period: "Mar 2014 – Aug 2016",
    location: "Wilmington, NC",
    highlights: [
      "Linux infrastructure deployment and management using containers for individual company services (intranet and extranet).",
      "Internal: Samba domain for mixed Windows / Linux / macOS clients — profile redirection, company shared storage, private user storage.",
      "Internal: NGINX (SuiteCRM, SmokePing) and MariaDB for all database needs.",
      "External: NGINX hosting a WordPress / WooCommerce online store.",
    ],
  },
  {
    company: "blue dog NETWORK",
    role: "Sr. Systems Engineer",
    period: "Oct 2010 – May 2015",
    highlights: [
      "Infrastructure design, deployment, and management for multi-service environments.",
      "Exchange 2010 SP1, SharePoint 2010, and Citrix XenApp 5.0 delivering DaaS.",
      "Virtualized foundation on Hyper-V.",
    ],
  },
  // Timeline continuity only — no detail by request
  {
    company: "Atlantic Computer Service",
    role: "Systems Engineer",
    period: "Jan 2009 – Oct 2010",
    highlights: [],
  },
  {
    company: "Maritime Company for Navigation",
    role: "Sr. Network Engineer",
    period: "Mar 2007 – Jan 2009",
    highlights: [
      "Project lead designing a complete cargo tracking and documentation system for international container shipping.",
      "Consolidated multi-location infrastructure using Citrix XenServer.",
    ],
  },
];
