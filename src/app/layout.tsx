import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CosmicBackdrop } from "@/components/CosmicBackdrop";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.pitch,
  keywords: [
    "Justin Oberdorf",
    "Lustre",
    "Exascaler",
    "DDN",
    "HPC storage",
    "AI storage",
    "security research",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.pitch,
    url: site.url,
    siteName: site.domain,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.tagline}`,
    description: site.pitch,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <CosmicBackdrop />
        <div className="site-shell flex min-h-full flex-1 flex-col">
          <Header />
          <main className="flex-1 pb-28 sm:pb-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
