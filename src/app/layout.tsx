
// src/app/layout.tsx - Updated typography
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free the Youth Festival 2026 - The Ultimate Rave',
  description: 'January 3rd, 2026 at GHUD Park, Accra. Where music meets fashion in the ultimate youth cultural experience.',
  keywords: 'festival, music, fashion, Accra, Ghana, youth culture, Afrobeats, streetwear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Load Helvetica Neue (fallback to system fonts) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-helvetica bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}