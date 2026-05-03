import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Evolve8 Enterprises — You Are Not Imagining It. The Silent Apocalypse Is Now.",
  description:
    "Evolve8 is the public-interest infrastructure for the AI economy. The Silent Apocalypse Public Transparency Campaign helps families understand and respond to the systemic collapse of food, housing, healthcare, jobs, debt, insurance, internet, and money.",
  metadataBase: new URL("https://evolve8enterprises.com"),
  openGraph: {
    title: "Evolve8 Enterprises — The Silent Apocalypse",
    description:
      "You are not imagining it. The Silent Apocalypse is already here. Run the Simulator and document harm in the Public Action Network.",
    url: "https://evolve8enterprises.com",
    siteName: "Evolve8 Enterprises",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Evolve8 — The Silent Apocalypse" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink text-bone">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
