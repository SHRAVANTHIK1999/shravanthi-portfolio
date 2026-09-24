export default function About() {
  return (
    <section id="about" className="border-t border-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Building reliable software and secure systems.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              I&apos;m Shravanthi Keshavamurthy, a Master&apos;s student in
              Applied Computer Science at Hochschule Schmalkalden, Germany.
            </p>

            <p>
              I have a background in software development and experience
              working with Java, SQL, cloud technologies, CI/CD, and
              application security.
            </p>

            <p>
              My current focus is on DevOps and DevSecOps, where I enjoy
              combining software development, automation, containerization,
              monitoring, and security practices to build reliable
              applications and delivery pipelines.
            </p>

            <p>
              I&apos;m particularly interested in opportunities where I can
              contribute to real-world software engineering and continue
              developing my skills in cloud, DevOps, and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
