"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { Send, ArrowRight } from "lucide-react"

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.08)
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:info@appmaniazar.co.za?subject=Project Inquiry from ${formState.name} (${formState.company})&body=${formState.message}%0A%0AFrom: ${formState.email}`
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden border-t border-border">
      {/* Background geometry */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.025]" viewBox="0 0 600 600" fill="none">
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={100 + i * 30} y={100 + i * 30} width={400 - i * 60} height={400 - i * 60} rx="8" stroke="#1a6dff" strokeWidth="1" transform={`rotate(${i * 5} 300 300)`} />
          ))}
        </svg>
      </div>

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA content */}
          <div>
            <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              Get In Touch
            </span>
            <h2
              className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-6 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
              style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
            >
              Ready to Build Your{" "}
              <span className="text-brand-blue">System</span>?
            </h2>
            <p className={`text-muted-foreground leading-relaxed mb-8 text-pretty ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
              Whether you need a mobile app, website, dashboard, CRM, or digital skills
              training — our team is ready to engineer a solution that scales.
              Let us start a conversation.
            </p>

            {/* Quick links */}
            <div className={`flex flex-col gap-4 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
              {[
                { label: "info@appmaniazar.co.za", href: "mailto:info@appmaniazar.co.za", color: "#1a6dff" },
                { label: "+27 21 023 1016", href: "tel:+27210231016", color: "#8ecfff" },
                { label: "Cape Town & George Offices", href: "#about", color: "#f5c518" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}12` }}>
                    <ArrowRight size={14} style={{ color: item.color }} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Logo-shaped accent SVG */}
            <div className={`mt-12 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
              <svg viewBox="0 0 300 120" fill="none" className="w-full max-w-xs opacity-30">
                <polygon points="40,10 80,10 60,110 20,110" fill="#1a6dff" fillOpacity="0.1" stroke="#1a6dff" strokeOpacity="0.15" strokeWidth="1" />
                <path d="M80 40 A30 30 0 0 1 110 70 L80 70 Z" fill="#8ecfff" fillOpacity="0.1" />
                <circle cx="100" cy="80" r="12" fill="#f5c518" fillOpacity="0.1" stroke="#f5c518" strokeOpacity="0.15" strokeWidth="1" />
                <polygon points="85,95 115,95 120,110 80,110" fill="#e85d75" fillOpacity="0.1" />
                <rect x="150" y="20" width="60" height="40" rx="8" fill="#1a6dff" fillOpacity="0.06" stroke="#1a6dff" strokeOpacity="0.1" strokeWidth="1" />
                <rect x="220" y="30" width="60" height="60" rx="8" fill="#8ecfff" fillOpacity="0.06" stroke="#8ecfff" strokeOpacity="0.1" strokeWidth="1" />
                <line x1="110" y1="60" x2="150" y2="40" stroke="#1a6dff" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="210" y1="40" x2="220" y2="55" stroke="#8ecfff" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 3" />
              </svg>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card">
              <h3 className="text-lg font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}>
                Tell us about your project
              </h3>
              <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                    <input
                      id="name" type="text" required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <input
                      id="company" type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                  <input
                    id="email" type="email" required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                  <textarea
                    id="message" rows={5} required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold hover:shadow-xl hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
