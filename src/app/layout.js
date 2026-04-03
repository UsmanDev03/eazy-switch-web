import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = { 
  title: "Eazy Switch Limited | Effortless Business Energy Solutions",
  // ... baki metadata wahi rehne dein jo aapne likha hai
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#0f1113]" suppressHydrationWarning={true}>
        {/* Yahan sirf children aayega, Footer ya WhatsApp nahi */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}