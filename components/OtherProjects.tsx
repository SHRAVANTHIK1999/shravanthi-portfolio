const projects = [
  {
    title: "Smart Door Lock System Based on IoT",
    category: "IoT • Embedded Security",
    description:
      "A collaborative IoT security system built around a PineCone microcontroller for secure door access and remote monitoring. The system combines RFID-based authentication, motion detection and Wi-Fi connectivity to provide access control and real-time mobile alerts.",
    highlights: [
      "RFID-based authentication for authorized access",
      "Motion detection with real-time alert notifications",
      "Wi-Fi connectivity for remote monitoring and mobile interaction",
      "Hardware and software integration using a PineCone microcontroller",
    ],
    technologies: [
      "PineCone",
      "Embedded C",
      "RFID",
      "IoT",
      "Wi-Fi",
      "Motion Detection",
    ],
    github:
      "https://github.com/SHRAVANTHIK1999/Smart-Door-Lock-System-based-on-IOT",
  },
  {
    title: "FitPulse",
    category: "Android • Java • Fitness Tracking",
    description:
      "A lightweight Android fitness tracking application with real-time step monitoring, daily goal tracking, historical statistics and sensor-based activity monitoring.",
    highlights: [
      "Real-time step counting using the hardware-backed Step Counter sensor",
      "Daily step goals with progress, calories and walking-time tracking",
      "Historical step statistics stored locally using Room and SQLite",
      "Accelerometer and Gyroscope monitoring for live sensor data",
      "Local credentials and settings management using SharedPreferences",
      "Multiple Android screens for Home, Stats, Monitoring, Settings and Profile",
    ],
    technologies: [
      "Java",
      "Android",
      "Room",
      "SQLite",
      "SharedPreferences",
      "Step Counter",
      "Accelerometer",
      "Gyroscope",
    ],
    github:
      "https://github.com/SHRAVANTHIK1999/FitPulse",
  },
  {
    title: "Text Analysis and Data Search",
    category: "Data Search • Python",
    description:
      "A course-search application developed to make it easier to discover required courses through a searchable dataset. The project is implemented as a Python notebook and explores practical text analysis and search-oriented data processing.",
    highlights: [
      "Search-based interface for discovering relevant courses",
      "Course dataset used as the foundation for search functionality",
      "Python notebook implementation using CourseHunt.ipynb",
      "Designed as part of the Text Analysis and Data Search coursework",
    ],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Text Analysis",
      "Data Search",
      "Data Processing",
    ],
    github:
      "https://github.com/SHRAVANTHIK1999/Text-Analysis-and-Data-Search",
  },
]

export default function OtherProjects() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            More Projects
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Other things I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Selected academic and engineering projects spanning IoT security,
            embedded systems, data search and software development.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-medium text-gray-500">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {project.description}
              </p>

              <ul className="mt-6 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-100"
                >
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
