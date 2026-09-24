export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            I&apos;m open to internships, working-student opportunities, and
            software engineering roles in Germany, with a focus on DevOps,
            DevSecOps, cloud, and backend development.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+4915563105197"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-2 text-sm font-medium text-white group-hover:text-cyan-300">
              +49 155 63105197
            </p>
          </a>

          <a
            href="mailto:shravanthik1999@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-2 break-all text-sm font-medium text-white group-hover:text-cyan-300">
              shravanthik1999@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/shravanthi-k-ab163116b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <p className="text-sm text-slate-500">LinkedIn</p>
            <p className="mt-2 text-sm font-medium text-white group-hover:text-cyan-300">
              Connect with me →
            </p>
          </a>

          <a
            href="https://github.com/SHRAVANTHIK1999"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <p className="text-sm text-slate-500">GitHub</p>
            <p className="mt-2 text-sm font-medium text-white group-hover:text-cyan-300">
              View my projects →
            </p>
          </a>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Shravanthi Keshavamurthy</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
