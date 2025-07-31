import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TOG x Reflect Studio - Stratejik Ortaklık",
  description:
    "TOG'un gençlik vizyonu için stratejik ortaklık başlıyor. Kanıtlanmış başarı hikayemiz, sürdürülebilir iş modelimiz ve profesyonel altyapımızla Türkiye'nin gençlik alanındaki öncü vakfına değer katmaya hazırız.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
