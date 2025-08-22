"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import type { Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Experience language={language} />
      <Education language={language} />
      <Contact language={language} />
    </main>
  )
}
