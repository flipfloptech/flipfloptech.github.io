export type Advisory = {
  title: string;
  date: string;
  risk?: string;
  summary: string;
  links: { label: string; href: string }[];
  tags: string[];
};

export const securityIntro = [
  "Security is a hobby with production consequences. I research how storage and infrastructure products actually authenticate, authorize, and fail — then disclose responsibly.",
  "The day job is keeping Lustre healthy at scale. The side quest is making sure the systems we trust deserve that trust.",
];

export const advisories: Advisory[] = [
  {
    title: "HammerSpace GDE / GFS Authentication Bypass",
    date: "2023-05",
    risk: "Medium",
    summary:
      "Default installations of HammerSpace Global Data Environment / Global File System (v4.6.6-324 and below) used a predictable TOTP-style passcode for the service admin account. Given a system serial from SSH, the daily support password could be regenerated — yielding root via the service admin path. Vendor was notified; fix shipped in a subsequent release.",
    links: [
      {
        label: "Code / writeup",
        href: "https://cxsecurity.com/issue/WLB-2023050027",
      },
    ],
    tags: ["auth-bypass", "storage", "totp", "responsible-disclosure"],
  },
  {
    title: "SolarWinds N-central Configuration Exposure",
    date: "2019-10",
    risk: "High",
    summary:
      "nCentralDumpsterDiver demonstrated that self-registration could be abused to create a rogue agent and dump ApplianceConfiguration — potentially including plaintext credentials. Reported to SolarWinds PSIRT with limited vendor feedback at the time.",
    links: [
      {
        label: "Code",
        href: "https://github.com/flipfloptech/nCentralDumpsterDiver",
      },
    ],
    tags: ["msp", "credentials", "agent", "disclosure"],
  },
  {
    title: "ARRIS DG860A — NVRAM Backup Password Disclosure",
    date: "2013-10",
    risk: "Medium",
    summary:
      "The ARRIS DG860A exposed a world-readable NVRAM backup (`router.data`) without authentication. The archive contains password material (including sysAdminPassword) recoverable after a simple XOR-based “compression” scheme reverse-engineered from firmware (`sc_mix`). Tooling included compressor/decompressor utilities to inspect backup contents.",
    links: [
      {
        label: "Code",
        href: "https://packetstorm.news/files/id/123667/",
      },
      {
        label: "Exploit-DB 29131",
        href: "https://www.exploit-db.com/exploits/29131",
      },
    ],
    tags: ["router", "arris", "info-disclosure", "credentials"],
  },
  {
    title: "ARRIS DG860A — WPS PIN Generator",
    date: "2013-10",
    risk: "Medium",
    summary:
      "Ruby tool that generates the default WPS PIN for an ARRIS DG860A when the HFC MAC address is known — static PIN derivation rather than random, enabling offline WPS attacks against affected gateways.",
    links: [
      {
        label: "Code",
        href: "https://packetstorm.news/files/id/123631/",
      },
    ],
    tags: ["router", "arris", "wps", "wifi"],
  },
];
