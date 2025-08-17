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
  title: "Onohilosophe - Seydou KONE | Philosophe & Créateur de Contenu",
  description:
    "Portfolio de Seydou KONE, philosophe de formation, professeur, créateur de contenu et conseiller en relations. Découvrez mes livres, cours et services.",
  keywords: "philosophie, professeur, créateur contenu, relations amoureuses, culture générale, concours",
  authors: [{ name: "Seydou KONE" }],
  creator: "Onohilosophe",
  openGraph: {
    title: "Onohilosophe - Seydou KONE | Philosophe & Créateur de Contenu",
    description: "Philosophe de formation, professeur et créateur de contenu spécialisé en relations amoureuses",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onohilosophe - Seydou KONE",
    description: "Philosophe de formation, professeur et créateur de contenu",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
