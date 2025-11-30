import type React from "react"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Jost } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next"

import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"


import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "7 Voces - Próximamente",
  description:
    "Un podcast sobre crecimiento personal y transformación. De Worthy a Greatness: un viaje contado a través de las páginas en siete voces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`min-h-dvh  antialiased ${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${jost.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-dvh flex flex-col bg-[#f8f8e3] dark:bg-[#023f5c] dark:text-[#f8f8e3]">
            <Header />
            <Suspense fallback={null}>{children}</Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>


    </html>
  )
}