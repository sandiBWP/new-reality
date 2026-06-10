import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "The New Reality",
    template: "%s | The New Reality",
  },
  description:
    "A sensemaking and agency platform for a changing world. Understand what changed, what assumptions no longer hold, and what actions are available.",
  openGraph: {
    title: "The New Reality",
    description:
      "The world changed. Our systems didn't. A platform for understanding and participating in what comes next.",
    siteName: "The New Reality",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
