import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface EducationProps {
  language: Language
}

export function Education({ language }: EducationProps) {
  const t = translations[language]

  const education = [
    {
      institution:
        language === "en"
          ? "Azerbaijan State Oil and Industry University (ASOIU)"
          : "Азербайджанский государственный университет нефти и промышленности (ASOIU)",
      degree: language === "en" ? "Computer Engineering" : "Компьютерная инженерия",
      duration: language === "en" ? "2023 - Present" : "2023 - Настоящее время",
      location: language === "en" ? "Baku, Azerbaijan" : "Баку, Азербайджан",
      type: language === "en" ? "Bachelor's Degree" : "Степень бакалавра",
      description:
        language === "en"
          ? "Studying in the computer engineering program, gaining deep knowledge in computer systems, programming and cybersecurity fields."
          : "Обучение по программе компьютерной инженерии, получение глубоких знаний в области компьютерных систем, программирования и кибербезопасности.",
      achievements:
        language === "en"
          ? [
              "Computer Engineering",
              "Mathematical Analysis",
              "Differential Equations",
              "OSI Model",
              "Cybersecurity fundamentals",
            ]
          : [
              "Компьютерная инженерия",
              "Математический анализ",
              "Дифференциальные уравнения",
              "Модель OSI",
              "Основы кибербезопасности",
            ],
    },
    {
      institution: "SABAH Groups",
      degree: language === "en" ? "Computer Engineering" : "Компьютерная инженерия",
      duration: "2024",
      location: language === "en" ? "Azerbaijan" : "Азербайджан",
      type: language === "en" ? "Bachelor's Degree" : "Степень бакалавра",
      description:
        language === "en"
          ? "Obtained additional education and practical experience in computer engineering field through SABAH Groups education program."
          : "Получил дополнительное образование и практический опыт в области компьютерной инженерии через образовательную программу SABAH Groups.",
      achievements:
        language === "en"
          ? [
              "Computer Engineering",
              "Mathematical Analysis",
              "Differential Equations",
              "OSI Model",
              "Advanced technical skills",
            ]
          : [
              "Компьютерная инженерия",
              "Математический анализ",
              "Дифференциальные уравнения",
              "Модель OSI",
              "Продвинутые технические навыки",
            ],
    },
  ]

  const digitalSkills = [
    {
      category: "Penetration Testing",
      skills:
        language === "en"
          ? [
              "Web/API Pentesting – OWASP Top 10, API Security",
              "Active Directory Pentest – Lateral Movement, Privilege Escalation, Data Exfiltration",
              "Mobile Pentest – Android/iOS Static & Dynamic Analysis, Reverse Engineering",
              "Red Teaming – C2 Tools (Cobalt Strike, Havoc, Metasploit), Social Engineering, Network Attacks, Malware Simulation",
              "SAST – SonarQube, Checkmarx, Fortify",
              "DAST – OWASP ZAP, Burp Suite, Nessus, Acunetix",
            ]
          : [
              "Тестирование веб/API – OWASP Top 10, безопасность API",
              "Тестирование Active Directory – латеральное движение, повышение привилегий, извлечение данных",
              "Мобильное тестирование – статический и динамический анализ Android/iOS, реверс-инжиниринг",
              "Red Teaming – инструменты C2 (Cobalt Strike, Havoc, Metasploit), социальная инженерия, сетевые атаки, симуляция вредоносного ПО",
              "SAST – SonarQube, Checkmarx, Fortify",
              "DAST – OWASP ZAP, Burp Suite, Nessus, Acunetix",
            ],
    },
    {
      category: language === "en" ? "Network Administration" : "Сетевое администрирование",
      skills:
        language === "en"
          ? [
              "Network Monitoring & Troubleshooting – Wireshark",
              "Cloud Networking – Azure Networking",
              "Protocols – TCP/IP, HTTP/HTTPS, DNS, DHCP",
              "Wireless Security – WPA2, WPA3 Standards",
            ]
          : [
              "Мониторинг и устранение неполадок сети – Wireshark",
              "Облачные сети – Azure Networking",
              "Протоколы – TCP/IP, HTTP/HTTPS, DNS, DHCP",
              "Беспроводная безопасность – стандарты WPA2, WPA3",
            ],
    },
    {
      category: language === "en" ? "System Administration" : "Системное администрирование",
      skills:
        language === "en"
          ? [
              "Operating Systems – GNU/Linux (Ubuntu, Debian), Windows Client/Server",
              "Automation & Scripting – Python",
              "Server Management – Apache, Nginx, IIS",
              "Network Services – DHCP, DNS, Active Directory",
            ]
          : [
              "Операционные системы – GNU/Linux (Ubuntu, Debian), Windows Client/Server",
              "Автоматизация и скриптинг – Python",
              "Управление серверами – Apache, Nginx, IIS",
              "Сетевые службы – DHCP, DNS, Active Directory",
            ],
    },
    {
      category: language === "en" ? "SOC (Security Operations Center)" : "SOC (Центр операций безопасности)",
      skills:
        language === "en"
          ? [
              "Manual Log Analysis",
              "SIEM – Splunk, QRadar",
              "EDR/XDR – Bitdefender XDR",
              "IDS/IPS – Suricata",
              "WAF – Sucuri",
              "Firewall – Fortigate",
              "CTI/XTI – SOCRadar, VirusTotal",
            ]
          : [
              "Ручной анализ логов",
              "SIEM – Splunk, QRadar",
              "EDR/XDR – Bitdefender XDR",
              "IDS/IPS – Suricata",
              "WAF – Sucuri",
              "Межсетевой экран – Fortigate",
              "CTI/XTI – SOCRadar, VirusTotal",
            ],
    },
    {
      category: language === "en" ? "Programming" : "Программирование",
      skills:
        language === "en"
          ? ["Python – Scripting, Automation", "SQL – CRUD Operations, Joins, Subqueries", "C Programming Language"]
          : [
              "Python – скриптинг, автоматизация",
              "SQL – операции CRUD, соединения, подзапросы",
              "Язык программирования C",
            ],
    },
  ]

  const languages = [
    {
      language: language === "en" ? "Azerbaijani" : "Азербайджанский",
      level: language === "en" ? "Native" : "Родной",
    },
    {
      language: language === "en" ? "English" : "Английский",
      level: language === "en" ? "Intermediate (B1)" : "Средний (B1)",
    },
    {
      language: language === "en" ? "Turkish" : "Турецкий",
      level: language === "en" ? "Advanced (C1)" : "Продвинутый (C1)",
    },
    {
      language: language === "en" ? "Russian" : "Русский",
      level: language === "en" ? "Beginner (A1)" : "Начальный (A1)",
    },
  ]

  const personalQualities =
    language === "en"
      ? [
          "Problem solving and decision making skills",
          "Teamwork skills",
          "Leadership and management skills",
          "Business communication and analytical skills",
          "Strategic and analytical thinking skills",
        ]
      : [
          "Навыки решения проблем и принятия решений",
          "Навыки командной работы",
          "Лидерские и управленческие навыки",
          "Деловое общение и аналитические навыки",
          "Стратегическое и аналитическое мышление",
        ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.educationTitle}</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t.educationDescription}</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{edu.degree}</CardTitle>
                    <div className="flex items-center text-accent font-semibold mt-1">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="outline" className="border-accent text-accent w-fit">
                      {edu.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{edu.description}</p>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {language === "en" ? "Key Study Areas:" : "Основные области изучения:"}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16" id="skills">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            {language === "en" ? "Digital Skills" : "Цифровые навыки"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalSkills.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">{t.languages}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-card-foreground">{lang.language}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{lang.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">{t.personalQualities}</h3>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <ul className="grid md:grid-cols-2 gap-3">
                {personalQualities.map((quality, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {quality}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
