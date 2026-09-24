const skillGroups = [
  {
    title: "DevOps & CI/CD",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "Azure DevOps",
      "Jenkins",
      "Git",
      "CI/CD",
      "Build Automation",
    ],
  },
  {
    title: "DevSecOps & Security",
    skills: [
      "SAST",
      "DAST",
      "SCA",
      "SonarQube",
      "Trivy",
      "OWASP Dependency-Check",
      "Vulnerability Management",
      "Security Scanning",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Linux",
      "Shell Scripting",
      "Minikube",
    ],
  },
  {
    title: "Monitoring & Operations",
    skills: [
      "Prometheus",
      "Grafana",
      "Incident Response",
      "Log Analysis",
      "ServiceNow",
      "SLA Tracking",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Python",
      "JavaScript",
    ],
  },
  {
    title: "Databases & Collaboration",
    skills: [
      "MySQL",
      "Oracle SQL",
      "Jira",
      "Confluence",
      "Agile / Scrum",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools and technologies.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A practical engineering toolkit built through enterprise
            experience and hands-on DevSecOps projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
