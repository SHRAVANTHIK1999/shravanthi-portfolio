"use client"

import type { Language } from "@/lib/translations"
import { getTranslations } from "@/lib/translations"

type ExperienceProps = {
  language: Language
}

export default function Experience({ language }: ExperienceProps) {
  const t = getTranslations(language)

  return (
    <section
      id="experience"
      className="border-t border-slate-200 bg-slate-50/60 px-6 py-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            {t.experience.eyebrow}
          </p>

          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {language === "EN"
              ? "Professional experience."
              : "Berufserfahrung."}
          </h2>

          <p className="mt-3 text-base leading-6 text-slate-700">
            {language === "EN"
              ? "Three years of enterprise software engineering experience at Accenture, spanning backend development, CI/CD, DevSecOps, deployment support and production operations."
              : "Drei Jahre Erfahrung in der Enterprise-Softwareentwicklung bei Accenture mit Fokus auf Backend-Entwicklung, CI/CD, DevSecOps, Deployment und Produktionsbetrieb."}
          </p>
        </div>

        <div className="relative mt-7">
          <div className="absolute bottom-8 left-[15px] top-8 hidden w-px bg-slate-200 md:block" />

          <div className="space-y-5">
            {t.experience.roles.map((experience, index) => (
              <article
                key={`${experience.title}-${experience.period}`}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-slate-50 bg-cyan-500 text-[12px] font-bold text-white shadow-sm md:flex">
                  {index + 1}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/60 md:p-6">
                  <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                        {experience.company}
                      </p>

                      <h3 className="mt-2 text-lg font-bold leading-tight tracking-tight text-slate-950 sm:text-xl">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {experience.location}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                      {experience.period}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {experience.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className={`flex gap-2.5 text-sm leading-5 text-slate-700 ${
                          pointIndex === experience.points.length - 1 &&
                          experience.points.length % 2 !== 0
                            ? "md:col-span-2"
                            : ""
                        }`}
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                    {(index === 0
                      ? [
                          "DevSecOps",
                          "SAST",
                          "DAST",
                          "SCA",
                          "CI/CD",
                          "Docker",
                          "Java",
                          "Spring Boot",
                          "ServiceNow",
                          "Git",
                        ]
                      : [
                          "Java",
                          "Spring Boot",
                          "REST APIs",
                          "CI/CD",
                          "Linux",
                          "Git",
                          "ServiceNow",
                          "Jira",
                          "Confluence",
                        ]
                    ).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
