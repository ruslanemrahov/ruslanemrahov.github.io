export const translations = {
  en: {
    // Navigation
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",

    // Hero
    heroTitle: "Penetration Tester & Red Teamer",
    heroDescription:
      "Cybersecurity professional specializing in penetration testing, red team operations, and vulnerability assessment. Based in Baku, Azerbaijan.",
    getInTouch: "Get In Touch",
    downloadCV: "Download CV",
    fullName: "Ruslan Amrahov",
    name: "Ruslan Amrahov",

    // Experience
    experienceTitle: "Professional Experience",
    experienceDescription: "My journey in cybersecurity and penetration testing across various organizations.",

    // Education
    educationTitle: "Education & Certifications",
    educationDescription: "Academic background and professional certifications in cybersecurity.",

    // Projects
    projectsTitle: "Projects",
    projectsDescription: "Key cybersecurity and penetration testing projects",

    // Contact
    contactTitle: "Get In Touch",
    contactDescription:
      "Ready to discuss cybersecurity projects or collaboration opportunities? Let's connect and explore how we can work together.",
    contactInfo: "Contact Information",
    location: "Location",
    email: "Email",
    availability: "Availability",
    openForOpportunities: "Open for opportunities",
    connectWithMe: "Connect With Me",
    availableForFreelance: "Available for freelance projects",
    sendMessage: "Send a Message",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    projectInquiry: "Project inquiry, collaboration, etc.",
    tellMeAbout: "Tell me about your project or how we can work together...",
    sendMessageBtn: "Send Message",

    // Common
    present: "Present",
    certifications: "Certifications",
    projects: "Projects",
    achievements: "Key Achievements",
    skills: "Skills",
    languages: "Languages",
    personalQualities: "Personal Qualities",
    locationBaku: "Baku, Azerbaijan",
    azintelecom: "AzInTelecom MMC",
    asoiu: "Azerbaijan State Oil and Industry University",
    sabahGroups: "SABAH Groups",
  },
  ru: {
    // Navigation
    experience: "Опыт",
    education: "Образование",
    projects: "Проекты",
    skills: "Навыки",
    contact: "Контакты",

    // Hero
    heroTitle: "Тестировщик на проникновение и Red Team специалист",
    heroDescription:
      "Специалист по кибербезопасности, специализирующийся на тестировании на проникновение, операциях красной команды и оценке уязвимостей. Базируется в Баку, Азербайджан.",
    getInTouch: "Связаться",
    downloadCV: "Скачать CV",
    fullName: "Руслан Амрахов",
    name: "Руслан Амрахов",

    // Experience
    experienceTitle: "Профессиональный опыт",
    experienceDescription: "Мой путь в кибербезопасности и тестировании на проникновение в различных организациях.",

    // Education
    educationTitle: "Образование и сертификаты",
    educationDescription: "Академическое образование и профессиональные сертификаты в области кибербезопасности.",

    // Projects
    projectsTitle: "Проекты",
    projectsDescription: "Ключевые проекты в области кибербезопасности и тестирования на проникновение",

    // Contact
    contactTitle: "Связаться со мной",
    contactDescription:
      "Готовы обсудить проекты по кибербезопасности или возможности сотрудничества? Давайте свяжемся и изучим, как мы можем работать вместе.",
    contactInfo: "Контактная информация",
    location: "Местоположение",
    email: "Электронная почта",
    availability: "Доступность",
    openForOpportunities: "Открыт для возможностей",
    connectWithMe: "Связаться со мной",
    availableForFreelance: "Доступен для фриланс проектов",
    sendMessage: "Отправить сообщение",
    yourName: "Ваше имя",
    yourEmail: "ваш.email@example.com",
    projectInquiry: "Запрос по проекту, сотрудничество и т.д.",
    tellMeAbout: "Расскажите о вашем проекте или как мы можем работать вместе...",
    sendMessageBtn: "Отправить сообщение",

    // Common
    present: "Настоящее время",
    certifications: "Сертификаты",
    projects: "Проекты",
    achievements: "Ключевые достижения",
    skills: "Навыки",
    languages: "Языки",
    personalQualities: "Личные качества",
    locationBaku: "Баку, Азербайджан",
    azintelecom: "АзИнТелеком ММС",
    asoiu: "Азербайджанский Государственный Университет Нефти и Промышленности",
    sabahGroups: "САБАХ Групс",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
