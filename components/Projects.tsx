const projectHighlights = [
  {
    title: "CI/CD Automation",
    description:
      "GitHub Actions automates Maven build, testing, Docker image creation and security validation.",
  },
  {
    title: "DevSecOps Security",
    description:
      "SonarQube, OWASP Dependency-Check and Trivy integrate code, dependency and container security into the delivery workflow.",
  },
  {
    title: "Kubernetes & Helm",
    description:
      "The application runs on Kubernetes with Helm, two replicas, health probes, resource limits and non-root execution.",
  },
  {
    title: "Observability",
    description:
      "Prometheus metrics and Grafana dashboards provide visibility into availability, JVM memory, CPU, request rate and latency.",
  },
]

const technologies = [
  "Java 17",
  "Spring Boot",
  "Maven",
  "Docker",
  "GitHub Actions",
  "Kubernetes",
  "Helm",
  "SonarQube",
  "OWASP Dependency-Check",
  "Trivy",
  "Prometheus",
  "Grafana",
]

const results = [
  "CI pipeline successfully builds and tests the application",
  "SonarQube Quality Gate passed",
  "Final container image: 0 HIGH / 0 CRITICAL vulnerabilities",
  "Application deployed with 2 healthy Kubernetes replicas",
  "Prometheus monitoring with Grafana dashboards",
]

const deliveryStages = [
  ["01", "Code", "Java / Spring Boot"],
  ["02", "Build", "Maven / GitHub Actions"],
  ["03", "Secure", "SAST / SCA / Trivy"],
  ["04", "Deploy", "Docker / Kubernetes"],
  ["05", "Observe", "Prometheus / Grafana"],
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 px-6 py-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
              Featured Project
            </p>

            <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Cloud-Native DevSecOps Platform
            </h2>

            <p className="mt-3 text-base leading-6 text-slate-700">
              A hands-on DevSecOps platform demonstrating the complete software
              delivery lifecycle, from application development and automated
              CI/CD to container security, Kubernetes deployment and
              production-style observability.
            </p>
          </div>

          <span className="shrink-0 text-sm font-medium text-slate-700">
            Java · Spring Boot · DevSecOps
          </span>
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="border-b border-slate-200 bg-slate-50/70 px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                Software delivery lifecycle
              </p>

              <p className="text-sm text-slate-700">
                Code → Build → Secure → Deploy → Observe
              </p>
            </div>

            <div className="mt-2.5 grid gap-2 sm:grid-cols-5">
              {deliveryStages.map(([number, title, subtitle], index) => (
                <div
                  key={title}
                  className="relative rounded-xl border border-slate-200 bg-white px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-sm font-semibold text-cyan-700">
                      {number}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-4 text-slate-700">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {index < deliveryStages.length - 1 && (
                    <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-slate-300 sm:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-4 md:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Engineering Focus
              </p>

              <div className="mt-4 space-y-3">
                {projectHighlights.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-slate-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50/60 p-4 md:p-5 lg:border-l lg:border-t-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Technology Stack
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Verified Results
                </p>

                <ul className="mt-3 space-y-1.5">
                  {results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-2.5 text-sm leading-5 text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://github.com/SHRAVANTHIK1999/devsecops-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View project on GitHub
                <span className="ml-2 text-cyan-400">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
