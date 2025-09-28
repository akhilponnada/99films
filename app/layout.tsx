import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "99Films + MoveOn | Empowering Independent Filmmakers",
  description:
    "Complete ecosystem for filmmakers, producers, brands, and investors. From idea to global audience — one platform for creation, marketing, and distribution.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${bebasNeue.variable} ${montserrat.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
