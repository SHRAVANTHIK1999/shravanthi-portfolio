export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          Shravanthi<span className="text-gray-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="transition hover:text-gray-500">About</a>
          <a href="#skills" className="transition hover:text-gray-500">Skills</a>
          <a href="#projects" className="transition hover:text-gray-500">Projects</a>
          <a href="#experience" className="transition hover:text-gray-500">Experience</a>
          <a href="#education" className="transition hover:text-gray-500">Education</a>
          <a href="#contact" className="transition hover:text-gray-500">Contact</a>
        </div>
      </div>
    </nav>
  )
}
