export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200/80 px-6 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-200 bg-cyan-50">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-9 lg:p-11">
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-700">
                Contact
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-6 text-slate-700">
                I&apos;m open to internships, working-student opportunities,
                and software engineering roles in Germany, with a focus on
                DevOps, DevSecOps, cloud, and backend development.
              </p>

              <a
                href="mailto:shravanthik1999@gmail.com"
                className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Send me an email →
              </a>
            </div>

            <div className="border-t border-cyan-200 bg-white/70 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="grid gap-2">
                <a
                  href="mailto:shravanthik1999@gmail.com"
                  className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-cyan-300 hover:shadow-sm"
                >
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                    Email
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-slate-800 group-hover:text-cyan-700">
                    shravanthik1999@gmail.com
                  </p>
                </a>

                <a
                  href="tel:+4915563105197"
                  className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-cyan-300 hover:shadow-sm"
                >
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                    Phone
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-slate-800 group-hover:text-cyan-700">
                    +49 155 63105197
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/shravanthi-k-ab163116b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-cyan-300 hover:shadow-sm"
                >
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                    LinkedIn
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-slate-800 group-hover:text-cyan-700">
                    Connect with me →
                  </p>
                </a>

                <a
                  href="https://github.com/SHRAVANTHIK1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-cyan-300 hover:shadow-sm"
                >
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                    GitHub
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-slate-800 group-hover:text-cyan-700">
                    View my projects →
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-200 pt-5 text-[12px] text-slate-700 sm:flex-row">
          <p>© {new Date().getFullYear()} Shravanthi Keshavamurthy</p>
        </footer>
      </div>
    </section>
  )
}
