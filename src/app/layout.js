import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/layouts/Footer";
import "./globals.css";
import WhatsAppIcon from "@/components/layouts/WhatsAppIcon";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Eazy Switch Limited | Effortless Business Energy Solutions",
  description:
    "Trusted UK-based energy consultancy. We offer Energy Comparison, Contract Management, Expert Consulting, Utility Solutions, Energy Audits, and Renewable Solutions to simplify switching for your business.",
  keywords: [
    "Eazy Switch Limited",
    "Business Energy Comparison",
    "Energy Contract Management",
    "Expert Energy Consulting",
    "Business Utility Solutions",
    "Energy Audits UK",
    "Renewable Energy Solutions for Business",
    "UK Energy Consultancy"
  ],
  authors: [{ name: "Eazy Switch Limited" }],
  openGraph: {
    title: "Eazy Switch Limited | Effortless Business Energy Solutions",
    description: "Tailored energy tariffs and expert consultancy to optimize your business performance.",
    url: "https://eazy-switch.com",
    siteName: "Eazy Switch Limited",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body 
        className="font-sans antialiased bg-[#0f1113]" 
        suppressHydrationWarning={true}
      >
         {/* <HeroSection /> */}
        {children}
        {/* <Analytics /> */}
        <WhatsAppIcon/>
        <Footer/>
      </body>
    </html>
  );
}