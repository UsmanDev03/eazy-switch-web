import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
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
        {children}
        <Analytics />
       <Toaster 
          position="top-right" 
          reverseOrder={false}
          containerStyle={{
            top: 40,
          }}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#6366f1", 
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}