import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City Vibes - Exploration",
  description: "Modern City Exploration App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background-light font-sans text-city-black min-h-screen text-base antialiased`}>
        <div className="flex flex-col h-screen max-w-md mx-auto bg-background-light shadow-2xl overflow-hidden relative">
          <Header />
          <SearchBar />
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
