import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://connectx-statement-of-work-2026.artworksit-9888.chatgpt.site"),
  title: "ConnectX — Statement of Work",
  description: "Phase One proposal for the ConnectX wedding and corporate event planning platform, prepared by ArtWorksIT.",
  openGraph: {
    title: "ConnectX — Statement of Work",
    description: "Proposed wedding and corporate event planning platform, prepared by ArtWorksIT.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ConnectX Statement of Work" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${onest.variable} ${inter.variable}`}>{children}</body></html>;
}
