"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import type { Language } from "@/lib/translations"
import { getTranslations } from "@/lib/translations"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import OtherProjects from "@/components/OtherProjects"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  const [language, setLanguage] = useState<Language>("EN")
  const t = getTranslations(language)

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="ambient-grid absolute inset-0 opacity-50" />
          <div className="ambient-float-one absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="ambient-float-two absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/20 blur-3xl" />
        </div>

        <section className="px-6 pb-8 pt-24 sm:pt-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white/75 shadow-sm backdrop-blur-sm lg:grid-cols-[1.15fr_0.85fr]">
              {/* Hero content */}
              <div className="p-7 sm:p-8 lg:p-9">
                <p className="text-base font-semibold uppercase tracking-[0.25em] text-cyan-600">
                  {t.hero.eyebrow}
                </p>

                <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-6xl">
                  Shravanthi
                  <br />
                  Keshavamurthy
                </h1>

                <p className="mt-4 max-w-xl text-xl font-medium leading-7 tracking-tight text-slate-700 sm:text-xl">
                  {t.hero.tagline}
                </p>

                <p className="mt-3 max-w-xl text-base leading-6 text-slate-700">
                  {t.hero.intro}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <a
                    href="#projects"
                    className="rounded-full bg-slate-950 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-slate-800"
                  >
                    {t.hero.work}
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-base font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                  >
                    {t.hero.contact}
                  </a>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
                    {t.hero.technologies}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-base font-medium text-slate-700">
                    <span>Java</span>
                    <span>Python</span>
                    <span>Spring Boot</span>
                    <span>Docker</span>
                    <span>Kubernetes</span>
                    <span>Helm</span>
                    <span>CI/CD</span>
                    <span>GitHub Actions</span>
                    <span>Azure DevOps</span>
                    <span>Linux</span>
                    <span>Git</span>
                  </div>
                </div>
              </div>

              {/* Portrait + quick facts */}
              <div className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 lg:border-l lg:border-t-0">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />

                <div className="relative grid h-full items-end gap-3 p-5 sm:p-6">
                  <div className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -inset-3 rounded-[2rem] bg-cyan-200/30 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 shadow-lg">
                      <img
                        src="/profile.png"
                        alt="Shravanthi Keshavamurthy"
                        className="h-[300px] w-full object-cover object-top sm:h-[320px]"
                      />
                    </div>
                  </div>

                  <div className="relative grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                    <div className="rounded-xl border border-cyan-100 bg-white/80 p-3">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                        {t.hero.focus}
                      </p>

                      <p className="mt-1.5 text-sm leading-5 text-slate-700">
                        {t.hero.focusText}
                      </p>
                    </div>

                    <div className="rounded-xl border border-cyan-100 bg-white/80 p-3">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                        {t.hero.experience}
                      </p>

                      <p className="mt-1 text-base font-semibold text-slate-950">
                        {t.hero.experienceValue}
                      </p>

                      <p className="text-[12px] text-slate-700">
                        {t.hero.experienceText}
                      </p>
                    </div>

                    <div className="rounded-xl border border-cyan-100 bg-white/80 p-3">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                        {t.hero.education}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {t.hero.educationValue}
                      </p>

                      <p className="text-[12px] text-slate-700">
                        {t.hero.educationText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <OtherProjects language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>
    </>
  )
}
