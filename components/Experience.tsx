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
    <section id="experience" className="border-t border-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Professional experience.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Three years of enterprise software engineering experience at
          Accenture, spanning backend development, CI/CD, DevSecOps,
          deployment support and production operations.
        </p>

        <div className="mt-14 space-y-14">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.period}`}
              className="relative border-l-2 border-gray-200 pl-6 md:pl-8"
            >
              <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-black" />

              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {experience.role}
                  </h3>

                  <p className="mt-2 font-medium text-gray-600">
                    {experience.company} · {experience.location}
                  </p>
                </div>

                <span className="whitespace-nowrap text-sm font-medium text-gray-500">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-7 space-y-4 text-gray-600">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
