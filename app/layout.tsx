import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://connectx-statement-of-work-2026.artworksit-9888.chatgpt.site"),
  title: "ConnectX — Proposal",
  description: "Phase One proposal for the ConnectX wedding and corporate event planning platform, prepared by ArtWorksIT.",
  openGraph: {
    title: "ConnectX — Proposal",
    description: "Proposed wedding and corporate event planning platform, prepared by ArtWorksIT.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ConnectX Statement of Work" }],
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
