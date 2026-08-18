import { Bodoni_Moda } from "next/font/google";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bodoni-font",
});

export const metadata: Metadata = {
  title: "Kayeon Onyeka — Storyteller, Creative Practitioner, Social Impact Leader",
  description:
    "Showcases a storyteller's work, social impact, and speaking engagements with elegant design to engage event organizers and supporters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} bg-background min-h-screen font-sans overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}