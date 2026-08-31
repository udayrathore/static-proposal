import type { Metadata } from "next";
import { Anton, Inter, Onest } from "next/font/google";
import { MotionRuntime } from "@/components/motion-runtime";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","yb0ckigdyx");`,
          }}
        />
      </head>
      <body className={`${onest.variable} ${inter.variable} ${anton.variable}`}>
        {children}
        <MotionRuntime />
        <script src="/vendor/gsap/gsap.min.js" defer />
        <script src="/vendor/gsap/CustomEase.min.js" defer />
        <script src="/vendor/gsap/SplitText.min.js" defer />
        <script src="/vendor/gsap/ScrollTrigger.min.js" defer />
        <script src="/logo-loader.js" defer />
        <script src="/proposal-motion.js" defer />
      </body>
    </html>
  );
}
