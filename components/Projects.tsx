const projectHighlights = [
  {
    title: "CI/CD Automation",
    description:
      "GitHub Actions pipeline automates Maven build, testing, Docker image creation and security validation.",
  },
  {
    title: "DevSecOps Security",
    description:
      "Integrated SonarQube, OWASP Dependency-Check and Trivy to bring code, dependency and container security into the delivery workflow.",
  },
  {
    title: "Kubernetes & Helm",
    description:
      "Deployed the application on Kubernetes using Helm with two replicas, health probes, resource limits and non-root container execution.",
  },
  {
    title: "Observability",
    description:
      "Implemented Prometheus metrics and Grafana dashboards for application availability, JVM memory, CPU, request rate and latency.",
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

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Featured Project
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Cloud-Native DevSecOps Platform
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A hands-on DevSecOps platform built to demonstrate the complete
            software delivery lifecycle — from application development and
            automated CI/CD to container security, Kubernetes deployment and
            production-style observability.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Engineering Focus
              </p>

              <div className="mt-8 space-y-7">
                {projectHighlights.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 bg-white p-8 md:p-10 lg:border-l lg:border-t-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Technology Stack
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Verified Results
                </p>

                <ul className="mt-5 space-y-3">
                  {results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-3 text-sm leading-6 text-gray-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://github.com/SHRAVANTHIK1999/devsecops-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                View Project on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
