import type { Metadata } from "next";
import { Bebas_Neue, Special_Elite } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const calling = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calling",
});

export const metadata: Metadata = {
  title: "Persona 5 Royal — Fan Site",
  description:
    "A fan tribute to Persona 5 Royal. Developed by Atlus (P-Studio), published by Sega.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${calling.variable} h-full`}>
      <body className="relative min-h-full overflow-x-hidden antialiased">
        <div className="p5r-bg" aria-hidden>
          <div className="p5r-bg-photo" />
          <div className="p5r-bg-stars" />
          <div className="p5r-halftone" />
        </div>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
