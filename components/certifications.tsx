import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Code, Shield } from "lucide-react"

export function Certifications() {
  const education = [
    {
      institution: "SABAH groups",
      degree: "Bachelor's degree",
      field: "Computer Engineering",
      status: "In Progress",
    },
    {
      institution: "Azerbaijan State University of Oil and Industry",
      degree: "Bachelor's degree",
      field: "Computer Engineering",
      status: "In Progress",
    },
  ]

  const certifications = [
    {
      name: "Python (Basic)",
      issuer: "Programming Certification",
      icon: Code,
      type: "Technical",
    },
    {
      name: "Certificate Red Team Analyst",
      issuer: "Cybersecurity Certification",
      icon: Shield,
      type: "Security",
    },
    {
      name: "C3SA",
      issuer: "Security Analysis Certification",
      icon: Shield,
      type: "Security",
    },
    {
      name: "HCS Internship Certificate",
      issuer: "Hands-on Cybersecurity",
      icon: Award,
      type: "Internship",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications that validate my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-card-foreground">{edu.degree}</h3>
                    <Badge variant="outline" className="border-accent text-accent">
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">{edu.field}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <Award className="w-6 h-6 text-accent mr-3" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <cert.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-card-foreground">{cert.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
