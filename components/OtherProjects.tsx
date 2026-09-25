const projects = [
  {
    number: "01",
    title: "Smart Door Lock System Based on IoT",
    category: "IoT • Embedded Security",
    description:
      "IoT security system using RFID authentication, motion detection and Wi-Fi connectivity for secure access and monitoring.",
    technologies: ["PineCone", "Embedded C", "RFID", "Wi-Fi"],
    github:
      "https://github.com/SHRAVANTHIK1999/Smart-Door-Lock-System-based-on-IOT",
    visual: "IoT",
  },
  {
    number: "02",
    title: "FitPulse",
    category: "Android • Java",
    description:
      "Android fitness tracking application with step monitoring, daily goals, historical statistics and sensor-based activity tracking.",
    technologies: ["Java", "Android", "Room", "Sensors"],
    github: "https://github.com/SHRAVANTHIK1999/FitPulse",
    visual: "FIT",
  },
  {
    number: "03",
    title: "Text Analysis and Data Search",
    category: "LLM • NLP • Python",
    description:
      "LLM and NLP-based text analysis project focused on searching, processing and discovering relevant information from structured data.",
    technologies: ["Python", "LLM", "NLP", "Jupyter", "Data Analysis"],
    github:
      "https://github.com/SHRAVANTHIK1999/Text-Analysis-and-Data-Search",
    visual: "DATA",
  },
  {
    number: "04",
    title: "WiFi-Based Intrusion Detection System",
    category: "Cybersecurity • IoT",
    description:
      "Passive WiFi intrusion detection system using Raspberry Pi 5, Suricata and Python to detect network reconnaissance activity.",
    technologies: ["Raspberry Pi", "Suricata", "Python", "WiFi"],
    github:
      "https://github.com/SHRAVANTHIK1999/wifi-based-ids-iot-suricata",
    visual: "IDS",
  },
]

function ProjectVisual({ type }: { type: string }) {
  if (type === "IDS") {
    return (
      <div className="relative h-32 overflow-hidden rounded-xl bg-slate-950 p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.18),transparent_45%)]" />

        <div className="relative flex h-full items-center justify-between gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-300 ring-1 ring-cyan-400/20">
            WiFi
          </div>

          <div className="h-px flex-1 bg-cyan-400/30" />

          <div className="rounded-lg border border-cyan-400/20 bg-white/5 px-3 py-2 text-center">
            <p className="text-[12px] font-bold text-cyan-300">SURICATA</p>
            <p className="mt-1 text-[12px] text-slate-700">IDS</p>
          </div>

          <div className="h-px flex-1 bg-cyan-400/30" />

          <div className="rounded-lg border border-cyan-400/20 bg-white/5 px-3 py-2 text-center">
            <p className="text-[12px] font-bold text-cyan-300">ALERT</p>
            <p className="mt-1 text-[12px] text-slate-700">Python</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === "IoT") {
    return (
      <div className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-50 to-slate-100 p-4">
        <div className="flex h-full items-center justify-center">
          <div className="rounded-2xl border border-cyan-200 bg-white px-5 py-4 text-center shadow-sm">
            <div className="text-2xl">◉</div>
            <p className="mt-1 text-[12px] font-bold text-slate-700">
              SMART LOCK
            </p>
            <p className="text-[12px] text-slate-700">
              RFID · Wi-Fi · PIR
            </p>
          </div>
        </div>

        <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-cyan-400" />
        <div className="absolute right-8 bottom-5 h-2 w-2 rounded-full bg-cyan-300" />
      </div>
    )
  }

  if (type === "FIT") {
    return (
      <div className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 p-4">
        <div className="mx-auto h-full w-20 rounded-[1.2rem] border-4 border-slate-800 bg-white p-2 shadow-md">
          <div className="h-1 w-7 rounded-full bg-slate-200 mx-auto" />

          <div className="mt-4 text-center">
            <p className="text-[12px] font-bold text-slate-700">
              DAILY STEPS
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">8,420</p>

            <div className="mx-auto mt-2 h-1.5 w-12 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-9 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 p-4">
      <div className="flex h-full items-end justify-center gap-2">
        <div className="h-10 w-6 rounded-t bg-cyan-200" />
        <div className="h-16 w-6 rounded-t bg-cyan-300" />
        <div className="h-24 w-6 rounded-t bg-cyan-400" />
        <div className="h-14 w-6 rounded-t bg-cyan-300" />
        <div className="h-20 w-6 rounded-t bg-cyan-500/70" />
      </div>

      <div className="absolute left-4 top-4 rounded-md bg-white/80 px-2 py-1 text-[12px] font-semibold text-slate-700">
        TEXT ANALYSIS
      </div>
    </div>
  )
}

export default function OtherProjects() {
  return (
    <section
      className="border-t border-slate-200/80 px-6 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Other Projects
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              More things I&apos;ve built.
            </h2>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              <div className="p-3">
                <ProjectVisual type={project.visual} />
              </div>

              <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-cyan-600">
                    {project.category}
                  </span>

                  <span className="text-base font-semibold text-slate-300">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-2 text-base font-semibold leading-5 text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-base leading-5 text-slate-700 transition-all duration-300 group-hover:line-clamp-none">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-50 px-1.5 py-1 text-[12px] font-medium text-slate-700 ring-1 ring-slate-100"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-base font-semibold text-slate-700 transition group-hover:text-cyan-700"
                  >
                    View project →
                  </a>
                ) : (
                  <span className="mt-4 inline-flex text-base font-semibold text-slate-700">
                    Academic project
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
