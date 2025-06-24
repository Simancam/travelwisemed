import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Philosopher, Lato, Montserrat } from "next/font/google"; // Importa tus fuentes de Google Fonts
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-philosopher",
  display: "swap", 
});

const lato = Lato({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelWiseMed",
  description: "Tu asesoría médica internacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${philosopher.variable} ${lato.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}