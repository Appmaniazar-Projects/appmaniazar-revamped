"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.png"
            alt="AppManiazar logo"
            width={160}
            height={44}
            className="h-9 w-auto group-hover:scale-[1.02] transition-transform"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50 ${
                (pathname === link.href) || (pathname?.includes('/blog') && link.label === "Blog") || (pathname?.includes('/#') && link.href === pathname)
                  ? "text-brand-blue bg-secondary/50"
                  : ""
              }`}
            >
              {link.label}
              {(pathname === link.href) || (pathname?.includes('/blog') && link.label === "Blog") || (pathname?.includes('/#') && link.href === pathname) && (
                <span className="absolute bottom-0 left-1/2 w-8 h-0.5 bg-brand-blue rounded-full"></span>
              )}
            </a>
          ))}
          <a
            href="mailto:info@appmaniazar.co.za?subject=Project%20Inquiry"
            className="ml-4 px-6 py-2.5 text-sm font-semibold rounded-lg bg-brand-blue text-white hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/20"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-6 animate-fade-in">
          <div className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors ${
                  (pathname === link.href) || (pathname?.includes('/blog') && link.label === "Blog") || (pathname?.includes('/#') && link.href === pathname)
                    ? "text-brand-blue bg-secondary/50"
                    : ""
                }`}
              >
                {link.label}
                {(pathname === link.href) || (pathname?.includes('/blog') && link.label === "Blog") || (pathname?.includes('/#') && link.href === pathname) && (
                  <span className="absolute bottom-0 left-1/2 w-8 h-0.5 bg-brand-blue rounded-full"></span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 text-sm font-semibold rounded-lg bg-brand-blue text-white hover:bg-brand-blue/90 transition-all text-center"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
