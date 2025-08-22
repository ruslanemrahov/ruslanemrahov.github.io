"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Language, translations } from "@/lib/translations"

interface ProjectsProps {
  language: Language
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language]

  const projects = [
    {
      title: language === "ru" ? "Анализ уязвимостей веб-приложений" : "Web Application Vulnerability Analysis",
      description:
        language === "ru"
          ? "Комплексное тестирование на проникновение веб-приложений с использованием OWASP методологии"
          : "Comprehensive penetration testing of web applications using OWASP methodology",
      technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "SQLMap"],
      achievements:
        language === "ru"
          ? [
              "Обнаружено 15+ критических уязвимостей",
              "Создан детальный отчет по безопасности",
              "Предложены решения для устранения",
            ]
          : [
              "Discovered 15+ critical vulnerabilities",
              "Created detailed security report",
              "Provided remediation solutions",
            ],
    },
    {
      title: language === "ru" ? "OSINT исследование инфраструктуры" : "OSINT Infrastructure Research",
      description:
        language === "ru"
          ? "Сбор и анализ открытых данных для оценки безопасности корпоративной инфраструктуры"
          : "Open source intelligence gathering and analysis for corporate infrastructure security assessment",
      technologies: ["Maltego", "Shodan", "TheHarvester", "Recon-ng"],
      achievements:
        language === "ru"
          ? [
              "Создана карта цифровых активов",
              "Выявлены потенциальные точки входа",
              "Документированы риски безопасности",
            ]
          : ["Created digital asset mapping", "Identified potential entry points", "Documented security risks"],
    },
    {
      title: language === "ru" ? "Анализ сетевой безопасности" : "Network Security Analysis",
      description:
        language === "ru"
          ? "Тестирование сетевой инфраструктуры на предмет уязвимостей и неправильных конфигураций"
          : "Network infrastructure testing for vulnerabilities and misconfigurations",
      technologies: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
      achievements:
        language === "ru"
          ? [
              "Проанализировано 500+ сетевых узлов",
              "Обнаружены критические уязвимости",
              "Улучшена сетевая безопасность",
            ]
          : ["Analyzed 500+ network nodes", "Discovered critical vulnerabilities", "Improved network security posture"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.projects}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "ru"
              ? "Ключевые проекты в области кибербезопасности и тестирования на проникновение"
              : "Key cybersecurity and penetration testing projects"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">{language === "ru" ? "Технологии:" : "Technologies:"}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">{t.achievements}:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
