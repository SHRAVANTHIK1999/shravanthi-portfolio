import type { Language } from "@/lib/translations"
import { getTranslations } from "@/lib/translations"

const strengths = {
  EN: [
    {
      number: "01",
      title: "Problem Solver",
      description:
        "I enjoy solving real-world software problems through practical engineering, automation and reliable delivery.",
    },
    {
      number: "02",
      title: "Continuous Learner",
      description:
        "I am continuously expanding my skills across DevOps, cloud, security and modern software engineering.",
    },
    {
      number: "03",
      title: "Team Player",
      description:
        "I have worked with Agile teams across development, deployment, troubleshooting and technical documentation.",
    },
    {
      number: "04",
      title: "Security Mindset",
      description:
        "I focus on building secure delivery practices through application security, vulnerability scanning and DevSecOps.",
    },
  ],
  DE: [
    {
      number: "01",
      title: "Problemlöserin",
      description:
        "Ich löse gerne reale Softwareprobleme durch praktische Entwicklung, Automatisierung und zuverlässige Softwarebereitstellung.",
    },
    {
      number: "02",
      title: "Lernbereitschaft",
      description:
        "Ich erweitere kontinuierlich meine Kenntnisse in DevOps, Cloud, Security und moderner Softwareentwicklung.",
    },
    {
      number: "03",
      title: "Teamplayerin",
      description:
        "Ich habe in agilen Teams in den Bereichen Entwicklung, Deployment, Fehleranalyse und technische Dokumentation gearbeitet.",
    },
    {
      number: "04",
      title: "Security-Mindset",
      description:
        "Ich konzentriere mich auf sichere Softwarebereitstellung durch Application Security, Vulnerability Scanning und DevSecOps.",
    },
  ],
} as const

type AboutProps = {
  language: Language
}

export default function About({ language }: AboutProps) {
  const t = getTranslations(language)
  const items = strengths[language]

  return (
    <section
      id="about"
      className="border-t border-slate-200/80 px-6 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="pr-0 lg:pr-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              {t.about.eyebrow}
            </p>

            <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-4xl">
              {language === "EN"
                ? "Building reliable software and secure systems."
                : "Zuverlässige Software und sichere Systeme entwickeln."}
            </h2>

            <div className="mt-4 max-w-xl space-y-3 text-base leading-6 text-slate-700">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
              <p>{t.about.text3}</p>
            </div>

            <a
              href="#experience"
              className="mt-5 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-base font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
            >
              {language === "EN" ? "More about me →" : "Mehr über mich →"}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-base font-bold text-cyan-700 ring-1 ring-cyan-100">
                    {item.number}
                  </div>
                  <span className="text-lg text-cyan-500">✦</span>
                </div>

                <h3 className="mt-5 text-base font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-base leading-5 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
