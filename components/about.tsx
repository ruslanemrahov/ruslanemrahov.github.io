import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Trophy, Shield } from "lucide-react"

export function About() {
  const languages = [
    { name: "Azerbaijani", level: "Native" },
    { name: "Turkish", level: "Professional" },
    { name: "English", level: "Professional" },
    { name: "Russian", level: "Elementary" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate cybersecurity professional with expertise in penetration testing, red team operations, and
            content creation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:border-accent transition-colors">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Security Expert</h3>
              <p className="text-muted-foreground">
                Specialized in penetration testing and red team operations with hands-on experience in vulnerability
                assessment and security analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-accent transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Content Creator</h3>
              <p className="text-muted-foreground">
                Active YouTube content creator sharing cybersecurity knowledge and insights with the community since
                June 2025.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-accent transition-colors">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">CTF Player</h3>
              <p className="text-muted-foreground">
                Active participant in Capture The Flag competitions on TryHackMe platform since April 2024, continuously
                improving skills.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-card-foreground">Languages</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="text-center">
                    <Badge variant="outline" className="mb-2 border-accent text-accent">
                      {lang.name}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
