// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProviderWrapper from "../components/SessionProviderWrapper";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EZ Minutes",
  description: "Generate your meeting minutes, in minutes!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
