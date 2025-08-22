"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "ru" as Language, name: "Русский", flag: "🇷🇺" },
  ]

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
        <Globe className="w-4 h-4" />
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground flex items-center space-x-2 ${
                currentLanguage === language.code ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
