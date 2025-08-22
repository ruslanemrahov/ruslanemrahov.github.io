import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Download, Mail, Github, Linkedin, Youtube } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface HeroProps {
  language: Language
}

export function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-secondary animate-pulse-glow">
              <img
                src="/photo.jpg"
                alt="Ruslan Amrahov"
                className="w-full h-full rounded-full object-cover border-4 border-background"
              />
            </div>
            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-sm px-3 py-1">
              <Shield className="w-4 h-4 mr-1" />
              Red Teamer
            </Badge>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">{t.name}</h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8">{t.heroTitle}</p>

        <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">{t.heroDescription}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button size="default" className="bg-accent hover:bg-accent/90 px-6 py-2">
            <Mail className="w-4 h-4 mr-2" />
            {t.getInTouch}
          </Button>
          <Button variant="outline" size="default" className="px-6 py-2 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            {t.downloadCV}
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/ruslanemrahov" className="text-muted-foreground hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ruslan-amrahov-75b297285" className="text-muted-foreground hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCDqD3g4DKiq-Bt5kjKULi5Q" className="text-muted-foreground hover:text-accent transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
