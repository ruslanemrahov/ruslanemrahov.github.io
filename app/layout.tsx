import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Ruslan Amrahov - Penetration Tester & Red Teamer",
  description: "Professional cybersecurity expert specializing in penetration testing and red team operations",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
