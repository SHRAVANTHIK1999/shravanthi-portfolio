const education = [
  {
    degree: "M.Sc. Applied Computer Science",
    institution: "Hochschule Schmalkalden",
    location: "Schmalkalden, Germany",
    period: "Oct 2024 – Present",
    grade: "Note: 1,7",
    focus: [
      "IT Security",
      "Distributed Systems",
      "Agile Software Development",
      "Web Applications",
      "Blockchain",
      "Knowledge Discovery in Databases",
    ],
  },
  {
    degree: "Bachelor’s in Computer Science & Engineering",
    institution: "SJC Institute of Technology",
    location: "India",
    period: "Jun 2017 – Aug 2021",
    grade: "Note: 1,5",
    focus: [
      "Computer Networks",
      "Database Management Systems",
      "Advanced Java & J2EE",
      "Cryptography & Network Security",
      "Operating Systems",
      "Unix & Shell Programming",
      "Web Technology & Applications",
      "Internet of Things",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="border-t border-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Education
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Academic background.
        </h2>

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.degree}
                  </h3>

                  <p className="mt-2 font-medium text-gray-600">
                    {item.institution} · {item.location}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-sm font-medium text-gray-500">
                    {item.period}
                  </p>

                  <p className="mt-1 text-sm font-semibold">{item.grade}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Relevant Coursework
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.focus.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
