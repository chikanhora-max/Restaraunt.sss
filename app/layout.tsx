import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://osteria-borcelle.vercel.app"),
  title: { default: "Osteria Borcelle — A Taste of Genuine Tradition", template: "%s — Osteria Borcelle" },
  description: "A cinematic Italian dining experience built around genuine tradition, handmade pasta, and an exceptional wine cellar.",
  keywords: ["Osteria Borcelle", "Italian restaurant", "fine dining", "handmade pasta", "wine cellar"],
  applicationName: "Osteria Borcelle",
  openGraph: { title: "Osteria Borcelle", description: "A Taste of Genuine Tradition.", type: "website", siteName: "Osteria Borcelle" },
  twitter: { card: "summary_large_image", title: "Osteria Borcelle", description: "A Taste of Genuine Tradition." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}
