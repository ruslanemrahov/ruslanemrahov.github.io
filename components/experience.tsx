import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface ExperienceProps {
  language: Language
}

export function Experience({ language }: ExperienceProps) {
  const t = translations[language]

  const experiences = [
    {
      company: "AzInTelecom",
      position: language === "en" ? "Penetration Tester" : "Тестировщик на проникновение",
      duration: language === "en" ? "Jul 2025 - Present · 2 months" : "Июл 2025 - Настоящее время · 2 месяца",
      location: language === "en" ? "Azerbaijan · Hybrid" : "Азербайджан · Гибрид",
      type: language === "en" ? "Intern" : "Стажер",
      description:
        language === "en"
          ? "Conducting penetration tests to identify web application vulnerabilities, testing attack vectors such as cookie hijacking, SQL Injection, XSS, and reporting results. Collecting and visually mapping open source information about company infrastructure using OSINT methods."
          : "Проведение тестов на проникновение для выявления уязвимостей веб-приложений, тестирование векторов атак, таких как перехват cookie, SQL-инъекции, XSS, и составление отчетов о результатах. Сбор и визуальное картографирование информации из открытых источников об инфраструктуре компании с использованием методов OSINT.",
      skills:
        "Red Teaming · Web Application Firewalls · Cybersecurity · Report Writing · Docker · Buffer Overflow · Elastic Stack (ELK) · C Programming · Nginx Reverse Proxy · OSINT · CI/CD",
      achievements:
        language === "en"
          ? [
              "Analysis of vulnerabilities in DevSecOps environment, verification of CI/CD processes and preparation of security reports",
              "Setting up CI/CD projects and conducting security checks using Ansible, Docker and SonarQube technologies",
              "Detection of open ports and vulnerabilities in network infrastructure, fuzzing and buffer overflow experiments",
              "Privilege escalation tests, NoSQL vulnerability analysis and exploitation script development",
              "SSTV (Slow Scan Television) signal analysis, decoding encrypted information and visualizing results",
            ]
          : [
              "Анализ уязвимостей в среде DevSecOps, проверка процессов CI/CD и подготовка отчетов по безопасности",
              "Настройка проектов CI/CD и проведение проверок безопасности с использованием технологий Ansible, Docker и SonarQube",
              "Обнаружение открытых портов и уязвимостей в сетевой инфраструктуре, фаззинг и эксперименты с переполнением буфера",
              "Тесты повышения привилегий, анализ уязвимостей NoSQL и разработка эксплойт-скриптов",
              "Анализ сигналов SSTV (медленное сканирующее телевидение), декодирование зашифрованной информации и визуализация результатов",
            ],
    },
    {
      company: "Cyber Club ASOIU",
      position: language === "en" ? "Red Teamer" : "Специалист Red Team",
      duration: language === "en" ? "Aug 2025 - Present · 1 month" : "Авг 2025 - Настоящее время · 1 месяц",
      location: language === "en" ? "Azerbaijan · Hybrid" : "Азербайджан · Гибрид",
      type: language === "en" ? "Part-time" : "Частичная занятость",
      description:
        language === "en"
          ? "Red team operations and cybersecurity activities, security testing and attack simulations."
          : "Операции красной команды и деятельность в области кибербезопасности, тестирование безопасности и симуляция атак.",
      skills: "Red Teaming · Cybersecurity",
    },
    {
      company: "YouTube",
      position: language === "en" ? "Content Creator" : "Создатель контента",
      duration: language === "en" ? "Jun 2025 - Present · 3 months" : "Июн 2025 - Настоящее время · 3 месяца",
      location: language === "en" ? "Remote" : "Удаленно",
      type: language === "en" ? "Freelance" : "Фриланс",
      description:
        language === "en"
          ? "Creating content in cybersecurity field and preparing educational materials, producing video content on security topics."
          : "Создание контента в области кибербезопасности и подготовка образовательных материалов, производство видеоконтента по темам безопасности.",
      skills: "Cybersecurity",
    },
    {
      company: "TryHackMe",
      position: language === "en" ? "CTF Player" : "Игрок CTF",
      duration:
        language === "en" ? "Apr 2024 - Present · 1 year 5 months" : "Апр 2024 - Настоящее время · 1 год 5 месяцев",
      location: language === "en" ? "Remote" : "Удаленно",
      type: language === "en" ? "Freelance" : "Фриланс",
      description:
        language === "en"
          ? "Participating in Capture The Flag competitions, developing practical cybersecurity skills and working on various security scenarios."
          : "Участие в соревнованиях Capture The Flag, развитие практических навыков кибербезопасности и работа с различными сценариями безопасности.",
      skills: "Cybersecurity · Docker · Buffer Overflow",
    },
    {
      company: "MilliSec",
      position: language === "en" ? "Red Teaming Student" : "Студент Red Teaming",
      duration: language === "en" ? "Oct 2024 - Apr 2025 · 7 months" : "Окт 2024 - Апр 2025 · 7 месяцев",
      location: language === "en" ? "On-site" : "В офисе",
      type: language === "en" ? "Full-time" : "Полная занятость",
      description:
        language === "en"
          ? "Learning red teaming methodologies, conducting practical attack simulations and researching defense strategies."
          : "Изучение методологий красной команды, проведение практических симуляций атак и исследование стратегий защиты.",
      skills: "Linux · Windows · Web Application Security · Red Teaming · Cybersecurity · OSINT · OSI Model",
    },
    {
      company: "Hacktify Cyber Security",
      position: language === "en" ? "Penetration Tester" : "Тестировщик на проникновение",
      duration: language === "en" ? "Feb 2025 - Mar 2025 · 2 months" : "Фев 2025 - Мар 2025 · 2 месяца",
      location: language === "en" ? "Remote" : "Удаленно",
      type: language === "en" ? "Intern" : "Стажер",
      description:
        language === "en"
          ? "Conducting penetration testing activities, identifying security vulnerabilities and preparing security reports."
          : "Проведение деятельности по тестированию на проникновение, выявление уязвимостей безопасности и подготовка отчетов по безопасности.",
      skills: "Cybersecurity · Report Writing",
    },
  ]

  const certifications = [
    {
      name: "Certificate Red Team Analyst",
      issuer: "CyberWarFare Labs",
      date: language === "en" ? "Mar 2025" : "Мар 2025",
      id: "",
    },
    {
      name: "Fortinet Certified Associate Cybersecurity",
      issuer: "Fortinet",
      date: language === "en" ? "Mar 2025 - Mar 2027" : "Мар 2025 - Мар 2027",
      id: "",
    },
    {
      name: "HCS Internship Certificate",
      issuer: "Hacktify Cyber Security",
      date: language === "en" ? "Mar 2025" : "Мар 2025",
      id: "hd9tzzzai8",
    },
    {
      name: "C3SA",
      issuer: "CyberWarFare Labs",
      date: language === "en" ? "Jan 2025" : "Янв 2025",
      id: "",
    },
    {
      name: "Problem Solving",
      issuer: "HackerRank",
      date: language === "en" ? "Jan 2025" : "Янв 2025",
      id: "https://www.hackerrank.com/certificates/82306e9e7800",
    },
    {
      name: "CodeAlpha Internship Certificate",
      issuer: "CodeAlpha",
      date: language === "en" ? "Mar 2025 - Jun 2025" : "Мар 2025 - Июн 2025",
      id: "CA/MA3/4719",
    },
  ]

  const projects = [
    {
      name: "THM - Millisec CTF Challenge",
      platform: "TryHackMe | Cyber Security Training",
    },
    {
      name: "THM - V CTF challenge",
      platform: "TryHackMe | Cyber Security Training",
    },
    {
      name: "THM - millisec.1.0 CTF Challenge",
      platform: "TryHackMe | Cyber Security Training",
    },
    {
      name: "The Advancement of Cybersecurity in Space through AI – IAC 2025",
      platform:
        language === "en"
          ? "Co-author | Abstract accepted by the International Astronautical Federation | Supported by Azercosmos"
          : "Соавтор | Тезисы приняты Международной астронавтической федерацией | При поддержке Azercosmos",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.experienceTitle}</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t.experienceDescription}</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{exp.position}</CardTitle>
                    <div className="flex items-center text-accent font-semibold mt-2 text-base">
                      <Building className="w-5 h-5 mr-2" />
                      {exp.company} · {exp.type}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="outline" className="border-accent text-accent w-fit text-sm px-3 py-1">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-base">{exp.description}</p>
                {exp.achievements && (
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3 text-base">{t.achievements}:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3 text-base">{t.skills}:</h4>
                  <p className="text-sm text-muted-foreground">{exp.skills}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">{t.certifications}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{cert.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                  {cert.id && <p className="text-xs text-muted-foreground">ID: {cert.id}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">{t.projects}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.platform}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
