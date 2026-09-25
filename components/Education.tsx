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
    <section
      id="education"
      className="border-t border-slate-200 px-6 py-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            Education
          </p>

          <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Academic background.
          </h2>

          <p className="mt-3 text-base leading-6 text-slate-700">
            Academic foundation in computer science with a current focus on
            security, distributed systems, software development and modern
            computing technologies.
          </p>
        </div>

        <div className="mt-7 space-y-4">
          {education.map((item, index) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-sm md:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-base font-semibold text-cyan-700 ring-1 ring-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {item.institution}
                      <span className="mx-2 text-slate-300">·</span>
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="ml-15 flex flex-col gap-2 md:ml-0 md:items-end">
                  <span className="w-fit rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                    {item.period}
                  </span>

                  <span className="w-fit rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-700 ring-1 ring-cyan-200">
                    {item.grade}
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Relevant Coursework
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.focus.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-700 ring-1 ring-cyan-200"
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
