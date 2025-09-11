import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human Freedom Foundation - Liberating Human Potential Through AI",
  description: "Harnessing the transformative power of AI to free humanity from mundane tasks and unlock unprecedented creativity, collaboration, and human flourishing.",
  keywords: "AI, artificial intelligence, human freedom, accessibility, medical AI, creative AI, coding assistance",
  authors: [{ name: "Human Freedom Foundation" }],
  icons: {
    icon: "/hff-logo.png",
  },
  openGraph: {
    title: "Human Freedom Foundation - Liberating Human Potential Through AI",
    description: "Harnessing the transformative power of AI to free humanity from mundane tasks and unlock unprecedented creativity, collaboration, and human flourishing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Freedom Foundation - Liberating Human Potential Through AI",
    description: "Harnessing the transformative power of AI to free humanity from mundane tasks and unlock unprecedented creativity, collaboration, and human flourishing.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}