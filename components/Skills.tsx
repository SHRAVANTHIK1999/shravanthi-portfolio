import type { Language } from "@/lib/translations"
import { getTranslations } from "@/lib/translations"

const skillGroups = [
  {
    icon: "</>",
    key: "development",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "C++",
      "SQL",
      "HTML",
      "CSS",
      "REST APIs",
      "Spring Boot",
    ],
  },
  {
    icon: "☁",
    key: "devops",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "GitHub Actions",
      "Azure DevOps",
      "AWS",
      "Azure",
      "GCP",
      "CI/CD",
      "Linux",
    ],
  },
  {
    icon: "◇",
    key: "security",
    skills: [
      "SAST",
      "DAST",
      "SCA",
      "SonarQube",
      "OWASP",
      "Trivy",
      "Application Security",
      "DevSecOps",
      "Incident Response",
    ],
  },
  {
    icon: "▤",
    key: "databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Oracle SQL",
      "MongoDB",
      "Prometheus",
      "Grafana",
      "Minikube",
      "ServiceNow",
      "Jira",
      "Confluence",
    ],
  },
] as const

type SkillsProps = {
  language: Language
}

export default function Skills({ language }: SkillsProps) {
  const t = getTranslations(language)

  const groupTitles = {
    development: t.skills.groups.development,
    devops: t.skills.groups.devops,
    security: t.skills.groups.security,
    databases: t.skills.groups.databases,
  }

  return (
    <section
      id="skills"
      className="border-t border-slate-200/80 px-6 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              {t.skills.eyebrow}
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              {language === "EN"
                ? "Tools, technologies & practices."
                : "Tools, Technologien & Methoden."}
            </h2>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.key}
              className="rounded-2xl border border-slate-200 bg-white/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-base font-bold text-cyan-600 ring-1 ring-cyan-100">
                  {group.icon}
                </div>

                <h3 className="text-base font-semibold text-slate-950">
                  {groupTitles[group.key]}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-50 px-2 py-1 text-[12px] font-medium text-slate-700 ring-1 ring-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
