"use client"

import { useState } from "react"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-[#f7f7f5]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex items-center justify-between py-5">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold tracking-tight text-slate-950 transition hover:text-slate-700"
          >
            Shravanthi Keshavamurthy
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-base font-medium md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 transition hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-950 hover:bg-white md:hidden"
          >
            <span className="text-xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-100 py-3 text-base font-medium text-slate-700 transition hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex w-fit rounded-full border border-slate-300 px-4 py-2 text-base font-medium text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
