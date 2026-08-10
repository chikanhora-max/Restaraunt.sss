import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osteria Borcelle — A Taste of Genuine Tradition",
  description:
    "Osteria Borcelle is a cinematic Italian dining experience built around genuine tradition, handmade pasta, and an exceptional wine cellar.",
  keywords: ["Osteria Borcelle", "Italian restaurant", "fine dining", "handmade pasta"],
  openGraph: {
    title: "Osteria Borcelle",
    description: "A Taste of Genuine Tradition.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
