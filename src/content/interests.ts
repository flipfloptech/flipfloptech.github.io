export type Interest = {
  title: string;
  subtitle?: string;
  body: string;
  tags: string[];
  status?: "active" | "paused" | "always";
};

export const interests: Interest[] = [
  {
    title: "2025 Honda Civic Type-R",
    subtitle: "FL5 — track-capable daily",
    body: "The Type-R is precision engineering you can hear. Manual, mechanical, unapologetic — the same energy as debugging a misbehaving client under load, except the feedback loop is a redline and a corner exit.",
    tags: ["cars", "type-r", "fl5"],
    status: "active",
  },
  {
    title: "Custom VESC Funwheel",
    subtitle: "Fungineers ×10 / Onewheel territory",
    body: "Custom VESC-powered Funwheel builds — open hardware, tunable power delivery, and the kind of engineering that rewards people who read schematics at midnight. Onewheel energy with a tinkerer's stack.",
    tags: ["vesc", "funwheel", "ewheel", "diy"],
    status: "active",
  },
  {
    title: "Drones",
    subtitle: "14 years in the air",
    body: "Fourteen years of multirotors, FPV culture, and field repairs. Recently stepped back from the hobby — may return when the next airframe (or regulatory mess) makes it impossible to stay grounded.",
    tags: ["fpv", "drones", "rc"],
    status: "paused",
  },
  {
    title: "3D Printing",
    subtitle: "Bambu Lab X2D · 2× AMS Pro",
    body: "Production-minded desktop manufacturing: a Bambu Lab X2D paired with dual AMS Pros for multi-material runs. Parts for Funwheel builds, fixtures, enclosures — if it can be modeled, it can probably be printed tonight.",
    tags: ["bambu", "3d-printing", "ams"],
    status: "active",
  },
];
