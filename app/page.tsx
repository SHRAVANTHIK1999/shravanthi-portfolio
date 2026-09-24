import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import OtherProjects from "@/components/OtherProjects"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Open to opportunities in Germany
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Applied Computer Science • DevOps • DevSecOps
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m Shravanthi.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Master&apos;s student in Applied Computer Science with a background
              in software development and a growing focus on DevOps,
              cloud technologies, and DevSecOps.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <About />

        <Skills />

        <Projects />

        <OtherProjects />

        <Experience />

        <Education />
        <Contact />
      </main>
    </>
  )
}
