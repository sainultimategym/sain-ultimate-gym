import type { Metadata } from "next";
import { Space_Grotesk, Syncopate } from "next/font/google";
import "./globals.css";

// Loading the premium fonts
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const syncopate = Syncopate({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-syncopate" });

export const metadata = {
  title: "Sain Ultimate Gym | Sawra",
  description: "Judge no one. Just improve. Premium fitness facility in Sawra, HP.",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syncopate.variable} font-sans bg-[#F4F4F4]`}>
        {children}
      </body>
    </html>
  );
}