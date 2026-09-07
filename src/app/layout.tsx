import type { Metadata } from "next";
import { Fraunces, Varela_Round, Inter, DM_Sans, Open_Sans, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const varelaRound = Varela_Round({
  variable: "--font-varela",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaltas Villa by Jungle Diaries | Jim Corbett",
  description: "Leave the city behind. Let the forest set the pace. A boutique luxury villa on Dhela Road, Jim Corbett.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${varelaRound.variable} ${inter.variable} ${dmSans.variable} ${openSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#EEEEDC] text-[#5F6764]">
        {children}
      </body>
    </html>
  );
}

