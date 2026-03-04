"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="AppManiazar logo"
                width={140}
                height={38}
                className="h-9 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              The home for technology systems development in Cape Town. Innovation through technology is our mission.
            </p>
            {/* Logo-inspired mini shapes */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-6" style={{ background: "#1a6dff", clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)", opacity: 0.4 }} />
              <div className="w-4 h-4 rounded-full" style={{ background: "#8ecfff", opacity: 0.3 }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#f5c518", opacity: 0.3 }} />
              <div className="w-5 h-2" style={{ background: "#e85d75", clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)", opacity: 0.3 }} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Our Approach", href: "#approach" },
                { label: "Projects", href: "#projects" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                "Mobile App Development",
                "Web Development",
                "Dashboards & CRMs",
                "Digital Skills Training",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>19 Brug Street, Bellville, Cape Town</li>
              <li>8 St. John&apos;s Street, George, 6529</li>
              <li>
                <a href="tel:+27210231016" className="hover:text-brand-blue transition-colors">+27 21 023 1016</a>
              </li>
              <li>
                <a href="mailto:info@appmaniazar.co.za" className="hover:text-brand-blue transition-colors">info@appmaniazar.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Appmaniazar. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy.pdf" className="text-xs text-muted-foreground hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="/paia-manual.pdf" className="text-xs text-muted-foreground hover:text-brand-blue transition-colors">PAIA Manual</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
