export type Language = "EN" | "DE"

export const translations = {
  EN: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },

    hero: {
      eyebrow: "Software Engineering · DevOps · DevSecOps",
      titleLine1: "Shravanthi",
      titleLine2: "Keshavamurthy",
      tagline: "I build reliable software and secure delivery pipelines.",
      intro:
        "Master's student in Applied Computer Science with 3+ years of enterprise software engineering experience at Accenture.",
      work: "View my work →",
      contact: "Get in touch",
      technologies: "Technologies I work with",
      focus: "Current Focus",
      focusText: "DevOps · DevSecOps · Application Security · Cloud · Backend",
      experience: "Experience",
      experienceValue: "3+ years",
      experienceText: "Enterprise software engineering · Accenture",
      education: "Education",
      educationValue: "M.Sc. Applied Computer Science",
      educationText: "Hochschule Schmalkalden · Germany",
    },

    about: {
      eyebrow: "About",
      title: "Engineering with a security-first mindset.",
      text1:
        "I'm Shravanthi Keshavamurthy, a Master's student in Applied Computer Science at Hochschule Schmalkalden, Germany.",
      text2:
        "I have 3+ years of enterprise software engineering experience at Accenture, working across Java backend development, CI/CD, deployment workflows and application security.",
      text3:
        "My current focus is DevOps and DevSecOps, combining software engineering, automation, containerization, monitoring and security practices.",
    },

    skills: {
      eyebrow: "Skills",
      title: "Technical toolkit",
      groups: {
        development: "Development",
        devops: "DevOps & Cloud",
        security: "Security",
        databases: "Databases & Tools",
      },
    },

    projects: {
      eyebrow: "Featured Project",
      title: "Cloud-Native DevSecOps Platform",
      description:
        "A hands-on DevSecOps platform demonstrating the complete software delivery lifecycle, from application development and automated CI/CD to container security, Kubernetes deployment and production-style observability.",
      stages: "Delivery Stages",
      engineeringFocus: "Engineering Focus",
      stack: "Technology Stack",
      results: "Verified Results",
      github: "View on GitHub",
      stageLabels: {
        code: "Code",
        build: "Build",
        secure: "Secure",
        deploy: "Deploy",
        observe: "Observe",
      },
      focusItems: [
        "CI/CD Automation",
        "DevSecOps Security",
        "Kubernetes & Helm",
        "Observability",
      ],
      resultsItems: [
        "2 healthy Kubernetes replicas",
        "Prometheus + Grafana monitoring",
        "ServiceMonitor configured",
        "0 HIGH/CRITICAL Trivy findings",
      ],
    },

    otherProjects: {
      eyebrow: "Other Projects",
      titles: {
        smartDoor: "Smart Door Lock System Based on IoT",
        fitPulse: "FitPulse",
        textAnalysis: "Text Analysis and Data Search",
        wifiIds: "WiFi-Based Intrusion Detection System",
      },
      categories: {
        smartDoor: "IoT • Embedded Security",
        fitPulse: "Android • Java",
        textAnalysis: "LLM • NLP • Python",
        wifiIds: "Cybersecurity • IoT",
      },
      descriptions: {
        smartDoor:
          "IoT security system using RFID authentication, motion detection and Wi-Fi connectivity for secure access and monitoring.",
        fitPulse:
          "Android fitness tracking application with step monitoring, daily goals, historical statistics and sensor-based activity tracking.",
        textAnalysis:
          "LLM and NLP-based text analysis project focused on searching, processing and discovering relevant information from structured data.",
        wifiIds:
          "Passive WiFi intrusion detection system using Raspberry Pi 5, Suricata and Python to detect network reconnaissance activity.",
      },
      github: "GitHub",
    },

    experience: {
      eyebrow: "Experience",
      roles: [
        {
          title: "Application Development Analyst – DevSecOps & Java Backend",
          company: "Accenture",
          location: "Bangalore, India",
          period: "Dec 2023 – Sep 2024",
          points: [
            "Contributed to enterprise DevSecOps workflows by integrating and maintaining SAST, DAST and SCA security checks within CI/CD pipelines, enabling automated security validation during software delivery.",
            "Worked on CI/CD build and deployment workflows, supporting automated builds, testing, release activities and rollback-capable deployments across Linux-based environments.",
            "Worked with Docker-based containerization and deployment workflows to improve consistency and portability across application environments.",
            "Contributed to Java and Spring Boot backend services, RESTful APIs and database operations involving MySQL and Oracle SQL.",
            "Performed production troubleshooting through log analysis, incident investigation and root-cause analysis, with incidents and SLA tracking managed through ServiceNow.",
            "Used Git-based development practices including feature branches, pull requests and code reviews to maintain controlled and traceable changes.",
            "Collaborated within Agile/Scrum delivery processes using Jira for work tracking and Confluence for technical documentation and knowledge sharing.",
          ],
        },
        {
          title: "Application Development Associate – Backend & Deployment",
          company: "Accenture",
          location: "Bangalore, India",
          period: "Oct 2021 – Nov 2023",
          points: [
            "Contributed to backend development and deployment of enterprise applications using Java, Spring Boot, RESTful services, MySQL and Oracle SQL.",
            "Supported CI/CD deployment pipelines through build automation, release preparation and deployment activities across Linux environments.",
            "Worked with Git-based development workflows including feature branches, pull requests, code reviews and change tracking.",
            "Performed application troubleshooting and log analysis to investigate deployment and production issues and support timely resolution.",
            "Worked with ServiceNow for incident management, service requests and SLA tracking within enterprise support processes.",
            "Used Jira to track development and operational tasks and Confluence to maintain technical documentation and project knowledge.",
            "Collaborated with cross-functional Agile/Scrum teams to coordinate development, deployment, issue resolution and technical documentation.",
          ],
        },
      ],
    },

    education: {
      eyebrow: "Education",
      degrees: [
        {
          degree: "M.Sc. Applied Computer Science",
          institution: "Hochschule Schmalkalden",
          location: "Schmalkalden, Germany",
          period: "Oct 2024 – Present",
          grade: "Note: 1,7",
          focus: "Relevant coursework",
          subjects: [
            "IT Security",
            "Distributed Systems",
            "Agile Software Development",
            "Web Applications",
            "Blockchain",
            "Knowledge Discovery in Databases",
          ],
        },
        {
          degree: "Bachelor’s in Computer Science & Engineering",
          institution: "SJC Institute of Technology",
          location: "India",
          period: "Jun 2017 – Aug 2021",
          grade: "Note: 1,5",
          focus: "Relevant coursework",
          subjects: [
            "Computer Networks",
            "Database Management Systems",
            "Advanced Java & J2EE",
            "Cryptography & Network Security",
            "Operating Systems",
            "Unix & Shell Programming",
            "Web Technology & Applications",
            "Internet of Things",
          ],
        },
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's build something meaningful.",
      description:
        "I'm open to internships, working-student opportunities, and software engineering roles in Germany, with a focus on DevOps, DevSecOps, cloud, and backend development.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  DE: {
    nav: {
      about: "Über mich",
      skills: "Kenntnisse",
      projects: "Projekte",
      experience: "Erfahrung",
      education: "Ausbildung",
      contact: "Kontakt",
    },

    hero: {
      eyebrow: "Software Engineering · DevOps · DevSecOps",
      titleLine1: "Shravanthi",
      titleLine2: "Keshavamurthy",
      tagline: "Ich entwickle zuverlässige Software und sichere Delivery-Pipelines.",
      intro:
        "Masterstudentin der Angewandten Informatik mit über 3 Jahren Erfahrung in der Softwareentwicklung bei Accenture.",
      work: "Meine Projekte →",
      contact: "Kontakt aufnehmen",
      technologies: "Technologien, mit denen ich arbeite",
      focus: "Aktueller Fokus",
      focusText: "DevOps · DevSecOps · Application Security · Cloud · Backend",
      experience: "Berufserfahrung",
      experienceValue: "3+ Jahre",
      experienceText: "Softwareentwicklung im Enterprise-Umfeld · Accenture",
      education: "Ausbildung",
      educationValue: "M.Sc. Angewandte Informatik",
      educationText: "Hochschule Schmalkalden · Deutschland",
    },

    about: {
      eyebrow: "Über mich",
      title: "Softwareentwicklung mit einem Security-First-Ansatz.",
      text1:
        "Ich bin Masterstudentin der Angewandten Informatik und habe über 3 Jahre Erfahrung in der Softwareentwicklung bei Accenture.",
      text2:
        "Meine Arbeit verbindet Backend-Entwicklung, Cloud-Technologien, CI/CD-Automatisierung und Application Security. Ich entwickle gerne zuverlässige Systeme und verbessere den Prozess von Entwicklung, Testing, Security und Deployment.",
      text3:
        "Aktuell konzentriere ich mich auf DevOps, DevSecOps, Kubernetes, Cloud-Plattformen und sichere Softwarebereitstellung.",
    },

    skills: {
      eyebrow: "Kenntnisse",
      title: "Technisches Profil",
      groups: {
        development: "Entwicklung",
        devops: "DevOps & Cloud",
        security: "Security",
        databases: "Datenbanken & Tools",
      },
    },

    projects: {
      eyebrow: "Featured Project",
      title: "Cloud-Native DevSecOps Platform",
      description:
        "Eine vollständige Software-Delivery-Plattform mit CI/CD-Automatisierung, Security Scanning, Containerisierung, Kubernetes Deployment und Observability.",
      stages: "Delivery-Phasen",
      engineeringFocus: "Engineering-Fokus",
      stack: "Technologie-Stack",
      results: "Verifizierte Ergebnisse",
      github: "Auf GitHub ansehen",
      stageLabels: {
        code: "Code",
        build: "Build",
        secure: "Security",
        deploy: "Deploy",
        observe: "Observability",
      },
      focusItems: [
        "CI/CD-Automatisierung",
        "DevSecOps Security",
        "Kubernetes & Helm",
        "Observability",
      ],
      resultsItems: [
        "2 aktive Kubernetes-Replikas",
        "Prometheus + Grafana Monitoring",
        "ServiceMonitor konfiguriert",
        "0 HIGH/CRITICAL Trivy Findings",
      ],
    },

    otherProjects: {
      eyebrow: "Weitere Projekte",
      titles: {
        smartDoor: "Intelligentes Türschloss auf IoT-Basis",
        fitPulse: "FitPulse",
        textAnalysis: "Text Analysis and Data Search",
        wifiIds: "WiFi-basiertes Intrusion Detection System",
      },
      categories: {
        smartDoor: "IoT • Embedded Security",
        fitPulse: "Android • Java",
        textAnalysis: "LLM • NLP • Python",
        wifiIds: "Cybersecurity • IoT",
      },
      descriptions: {
        smartDoor:
          "IoT-Sicherheitssystem mit RFID-Authentifizierung, Bewegungserkennung und Wi-Fi-Konnektivität für sicheren Zugang und Überwachung.",
        fitPulse:
          "Android-Fitness-App mit Schrittüberwachung, Tageszielen, historischen Statistiken und sensorbasierter Aktivitätserfassung.",
        textAnalysis:
          "LLM- und NLP-basiertes Textanalyseprojekt zur Suche, Verarbeitung und Ermittlung relevanter Informationen aus strukturierten Daten.",
        wifiIds:
          "Passives WiFi-Intrusion-Detection-System mit Raspberry Pi 5, Suricata und Python zur Erkennung von Netzwerkaufklärungsaktivitäten.",
      },
      github: "GitHub",
    },

    experience: {
      eyebrow: "Berufserfahrung",
      roles: [
        {
          title: "Application Development Analyst – DevSecOps & Java Backend",
          company: "Accenture",
          location: "Bangalore, Indien",
          period: "Dez 2023 – Sep 2024",
          points: [
            "Mitarbeit an Enterprise-DevSecOps-Workflows durch Integration und Pflege von SAST-, DAST- und SCA-Sicherheitsprüfungen in CI/CD-Pipelines zur automatisierten Security-Validierung während der Softwarebereitstellung.",
            "Mitarbeit an CI/CD-Build- und Deployment-Workflows mit automatisierten Builds, Tests, Release-Aktivitäten und rollback-fähigen Deployments in Linux-basierten Umgebungen.",
            "Arbeit mit Docker-basierter Containerisierung und Deployment-Workflows zur Verbesserung von Konsistenz und Portabilität über verschiedene Anwendungsumgebungen hinweg.",
            "Mitarbeit an Java- und Spring-Boot-Backend-Services, RESTful APIs und Datenbankoperationen mit MySQL und Oracle SQL.",
            "Durchführung von Produktions-Fehleranalysen durch Log-Analyse, Incident-Untersuchung und Root-Cause-Analyse; Incident- und SLA-Tracking erfolgte über ServiceNow.",
            "Nutzung Git-basierter Entwicklungsprozesse einschließlich Feature-Branches, Pull Requests und Code Reviews zur Sicherstellung kontrollierter und nachvollziehbarer Änderungen.",
            "Zusammenarbeit in Agile/Scrum-Prozessen mit Jira für das Work Tracking und Confluence für technische Dokumentation und Wissensaustausch.",
          ],
        },
        {
          title: "Application Development Associate – Backend & Deployment",
          company: "Accenture",
          location: "Bangalore, Indien",
          period: "Okt 2021 – Nov 2023",
          points: [
            "Mitarbeit an der Backend-Entwicklung und Bereitstellung von Enterprise-Anwendungen mit Java, Spring Boot, RESTful Services, MySQL und Oracle SQL.",
            "Unterstützung von CI/CD-Deployment-Pipelines durch Build-Automatisierung, Release-Vorbereitung und Deployment-Aktivitäten in Linux-Umgebungen.",
            "Arbeit mit Git-basierten Entwicklungsprozessen einschließlich Feature-Branches, Pull Requests, Code Reviews und Änderungsverfolgung.",
            "Durchführung von Application Troubleshooting und Log-Analyse zur Untersuchung von Deployment- und Produktionsproblemen und zur zeitnahen Lösung.",
            "Arbeit mit ServiceNow für Incident Management, Service Requests und SLA-Tracking im Enterprise-Support.",
            "Nutzung von Jira zur Verfolgung von Entwicklungs- und Betriebsaufgaben sowie Confluence zur Pflege technischer Dokumentation und Projektwissen.",
            "Zusammenarbeit mit funktionsübergreifenden Agile/Scrum-Teams zur Koordination von Entwicklung, Deployment, Problemlösung und technischer Dokumentation.",
          ],
        },
      ],
    },

    education: {
      eyebrow: "Ausbildung",
      degrees: [
        {
          degree: "M.Sc. Angewandte Informatik",
          institution: "Hochschule Schmalkalden",
          location: "Schmalkalden, Deutschland",
          period: "Okt 2024 – Heute",
          grade: "Note: 1,7",
          focus: "Relevante Kurse",
          subjects: [
            "IT-Sicherheit",
            "Verteilte Systeme",
            "Agile Softwareentwicklung",
            "Webanwendungen",
            "Blockchain",
            "Knowledge Discovery in Databases",
          ],
        },
        {
          degree: "Bachelor in Computer Science & Engineering",
          institution: "SJC Institute of Technology",
          location: "Indien",
          period: "Jun 2017 – Aug 2021",
          grade: "Note: 1,5",
          focus: "Relevante Kurse",
          subjects: [
            "Computernetzwerke",
            "Datenbankmanagementsysteme",
            "Advanced Java & J2EE",
            "Kryptografie & Netzwerksicherheit",
            "Betriebssysteme",
            "Unix & Shell-Programmierung",
            "Webtechnologien & Anwendungen",
            "Internet of Things",
          ],
        },
      ],
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns etwas Sinnvolles entwickeln.",
      description:
        "Ich bin offen für Praktika, Werkstudentenstellen und Positionen in der Softwareentwicklung in Deutschland, mit Fokus auf DevOps, DevSecOps, Cloud und Backend-Entwicklung.",
      email: "E-Mail",
      phone: "Telefon",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const

export function getTranslations(language: Language) {
  return translations[language]
}
