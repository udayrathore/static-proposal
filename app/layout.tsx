import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://static-proposal-one.vercel.app"),
  title: "ConnectX — Proposal",
  description: "Phase One proposal for the ConnectX wedding and corporate event planning platform, prepared by ArtWorksIT.",
  openGraph: {
    title: "Proposal for the Event Planning Platform",
    description: "A proposed event planning platform connecting customers, vendors, venues and ConnectX operations in one connected ecosystem.",
    type: "website",
    images: [{ url: "/og.png?v=hero-20260830", width: 1200, height: 630, alt: "Proposal for the Event Planning Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposal for the Event Planning Platform",
    description: "A proposed event planning platform connecting customers, vendors, venues and ConnectX operations in one connected ecosystem.",
    images: ["/og.png?v=hero-20260830"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${inter.variable}`}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js" defer />
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/CustomEase.min.js" defer />
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js" defer />
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js" defer />
        <script src="/logo-loader.js" defer />
        <script src="/proposal-motion.js" defer />
      </body>
    </html>
  );
}
