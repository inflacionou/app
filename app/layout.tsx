import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import { Nav } from "@/components/ui/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["200", "600"]
})

export const metadata: Metadata = {
  title: "Inflacionou",
  description: "Verifique os preços que você quer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased flex flex-col h-svh`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
