import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Search, Lock, Network, Database, Eye } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Penetration Testing",
      icon: Shield,
      skills: [
        "Web Application Testing (OWASP Top 10)92%",
        "Cookie Hijacking & Session Management88%",
        "SQL Injection & Database Attacks90%",
        "Cross-Site Scripting (XSS)89%",
        "API Security Testing85%",
        "Mobile Pentest (Android/iOS)82%",
      ],
    },
    {
      title: "Red Team Operations",
      icon: Lock,
      skills: [
        "Active Directory Attacks88%",
        "Lateral Movement & Privilege Escalation90%",
        "C2 Tools (Cobalt Strike, Havoc, Metasploit)85%",
        "Social Engineering80%",
        "Network Attacks & Fuzzing87%",
        "Buffer Overflow Exploitation83%",
      ],
    },
    {
      title: "Security Operations (SOC)",
      icon: Eye,
      skills: [
        "SIEM (Splunk, QRadar)88%",
        "EDR/XDR (Bitdefender XDR)85%",
        "Log Analysis & Threat Detection90%",
        "Incident Response82%",
        "CTI/XTI (SOCRadar, VirusTotal)86%",
        "IDS/IPS (Suricata)80%",
      ],
    },
    {
      title: "DevSecOps & Automation",
      icon: Code,
      skills: [
        "CI/CD Security Analysis85%",
        "SAST (SonarQube, Checkmarx, Fortify)88%",
        "DAST (OWASP ZAP, Burp Suite, Nessus)92%",
        "Docker & Ansible80%",
        "Python Scripting & Automation87%",
        "Security Report Generation90%",
      ],
    },
    {
      title: "Network & Infrastructure",
      icon: Network,
      skills: [
        "Network Port Scanning & Discovery93%",
        "Wireshark & Traffic Analysis88%",
        "Wireless Security (WPA2/WPA3)82%",
        "Firewall (Fortigate) & WAF (Sucuri)85%",
        "Cloud Networking (Azure)78%",
        "TCP/IP, HTTP/HTTPS, DNS, DHCP90%",
      ],
    },
    {
      title: "Specialized Skills",
      icon: Database,
      skills: [
        "OSINT & Infrastructure Mapping89%",
        "NoSQL Vulnerabilities83%",
        "SSTV Signal Analysis75%",
        "Encrypted Data Decoding80%",
        "Exploit Script Development85%",
        "Reverse Engineering78%",
      ],
    },
  ]

  const certifications = [
    "eWPTXv3 - INE Security (eLearnSecurity Web Application Penetration Tester eXtreme)",
    "C3SA - CyberWarfare Labs",
    "eJPT - eLearnSecurity Junior Penetration Tester",
    "CRTA - CyberWarFare Labs (Certified Red Team Analyst)",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity skills developed through real-world projects and continuous hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <category.icon className="w-6 h-6 text-accent mr-3" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-card-foreground flex-1">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-card-foreground">
              <Search className="w-6 h-6 text-accent mr-3" />
              Certifications & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="border-accent text-accent p-2 text-center">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
