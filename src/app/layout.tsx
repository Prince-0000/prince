import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from '@/app/favicon.ico'
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Portfolio",
  description: "Personal Portfolio to describe ",
  icons:{
    icon:Favicon.src,
  }
};
// portfolio\src\app\favicon.ico

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Favicon.src} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
