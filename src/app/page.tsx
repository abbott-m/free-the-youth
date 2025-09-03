'use client'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Tickets from '@/components/Tickets'
import Lineup from '@/components/Lineup'
import Experience from '@/components/Experience'
import Merch from '@/components/Merch'
import StyleGuide from '@/components/StyleGuide'
import FestivalInfo from '@/components/FestivalInfo'
import Community from '@/components/Community'
import Press from '@/components/Press'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div className="noise-bg fixed inset-0 pointer-events-none z-0" />
      <Navigation />
      <Hero />
      <Tickets />
      <Lineup />
      <Experience />
      <Merch />
      <StyleGuide />
      <FestivalInfo />
      <Community />
      <Press />
    </main>
  )
}
