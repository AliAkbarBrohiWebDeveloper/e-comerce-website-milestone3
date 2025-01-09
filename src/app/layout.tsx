import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Headertop from "@/components/layout/headertop";

import Footer from "@/components/layout/footer";
import Headermain from "@/components/layout/HeaderMain";
import ReduxProvider from "./(add to cart)/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
        <Headertop/>
      <Headermain/>
        {children}
        <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}



















