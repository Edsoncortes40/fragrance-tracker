import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {AuthContextProvider} from "./context/AuthContext";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fragrance Tracker",
  description: "Find Fragrances and cheapest places to buy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          <Suspense>
            {children}
          </Suspense>
          <Footer />
        </AuthContextProvider>
        
      </body>
    </html>
  );
}
