const experiences = [
  {
    role: "Application Development Analyst – DevSecOps & Java Backend",
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
    role: "Application Development Associate – Backend & Deployment",
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
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-200 bg-slate-50/60 px-6 py-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            Experience
          </p>

          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Professional experience.
          </h2>

          <p className="mt-3 text-base leading-6 text-slate-700">
            Three years of enterprise software engineering experience at
            Accenture, spanning backend development, CI/CD, DevSecOps,
            deployment support and production operations.
          </p>
        </div>

        <div className="relative mt-7">
          <div className="absolute bottom-8 left-[15px] top-8 hidden w-px bg-slate-200 md:block" />

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.role}-${experience.period}`}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-slate-50 bg-cyan-500 text-[12px] font-bold text-white shadow-sm md:flex">
                  {index + 1}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/60 md:p-6">
                  <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                        Accenture
                      </p>

                      <h3 className="mt-2 text-lg font-bold leading-tight tracking-tight text-slate-950 sm:text-xl">
                        {experience.role}
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
