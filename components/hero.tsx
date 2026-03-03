"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background geometry - logo-inspired shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating angular "A" shape inspired by logo */}
        <svg
          className={`absolute -top-20 -right-20 w-[700px] h-[700px] opacity-0 ${
            mounted ? "animate-rotate-slow opacity-[0.05]" : ""
          }`}
          viewBox="0 0 600 600"
          fill="none"
        >
          <polygon points="300,50 450,500 150,500" stroke="#1a6dff" strokeWidth="2" fill="none" />
          <polygon points="300,120 410,450 190,450" stroke="#8ecfff" strokeWidth="1.5" fill="none" />
          <polygon points="300,190 370,400 230,400" stroke="#1a6dff" strokeWidth="1" fill="none" />
        </svg>

        {/* Floating logo element - parallelogram */}
        <div className={`absolute top-28 left-[8%] w-16 h-24 ${mounted ? "animate-float" : ""}`} style={{ animationDelay: "0s" }}>
          <svg viewBox="0 0 60 90" fill="none" className="w-full h-full">
            <polygon points="20,0 60,0 40,90 0,90" fill="#1a6dff" fillOpacity="0.07" stroke="#1a6dff" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        </div>

        {/* Light blue arc */}
        <div className={`absolute top-44 right-[10%] w-16 h-16 ${mounted ? "animate-float" : ""}`} style={{ animationDelay: "2s" }}>
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <path d="M30 5 A25 25 0 0 1 55 30 L30 30 Z" fill="#8ecfff" fillOpacity="0.12" />
          </svg>
        </div>

        {/* Yellow circle */}
        <div
          className={`absolute bottom-44 left-[15%] w-12 h-12 rounded-full ${mounted ? "animate-float" : ""}`}
          style={{ animationDelay: "4s", background: "rgba(245, 197, 24, 0.08)", border: "1px solid rgba(245, 197, 24, 0.12)" }}
        />

        {/* Coral trapezoid */}
        <div className={`absolute bottom-36 right-[18%] w-18 h-10 ${mounted ? "animate-float" : ""}`} style={{ animationDelay: "1s" }}>
          <svg viewBox="0 0 72 36" fill="none" className="w-full h-full">
            <polygon points="10,0 62,0 72,36 0,36" fill="#e85d75" fillOpacity="0.08" stroke="#e85d75" strokeOpacity="0.12" strokeWidth="1" />
          </svg>
        </div>

        {/* Additional floating shapes */}
        <div className={`absolute top-[65%] left-[4%] w-6 h-6 rounded-full ${mounted ? "animate-float" : ""}`} style={{ animationDelay: "3s", background: "rgba(26, 109, 255, 0.06)" }} />
        <div className={`absolute top-[25%] right-[4%] w-10 h-16 ${mounted ? "animate-float" : ""}`} style={{ animationDelay: "5s" }}>
          <svg viewBox="0 0 40 64" fill="none" className="w-full h-full">
            <polygon points="12,0 40,0 28,64 0,64" fill="#1a6dff" fillOpacity="0.04" stroke="#1a6dff" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Blue glow orb */}
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] ${mounted ? "animate-pulse-glow" : ""}`} style={{ background: "rgba(26, 109, 255, 0.04)" }} />

        {/* Diamond connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 800" fill="none">
          <path d="M200 400 L600 200 L1000 400 L600 600 Z" stroke="#1a6dff" strokeWidth="1" strokeDasharray="8 4" className={mounted ? "animate-dash-flow" : ""} />
          <circle cx="200" cy="400" r="5" fill="#1a6dff" fillOpacity="0.3" />
          <circle cx="600" cy="200" r="5" fill="#f5c518" fillOpacity="0.4" />
          <circle cx="1000" cy="400" r="5" fill="#8ecfff" fillOpacity="0.3" />
          <circle cx="600" cy="600" r="5" fill="#e85d75" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-24">
        <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border glow-border mb-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-blue" />
          </span>
          <span className="text-xs font-bold text-foreground tracking-wide uppercase">
            Cape Town&apos;s Premier ICT Systems Company
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight text-balance mb-7 ${mounted ? "animate-fade-up delay-100" : "opacity-0"} glow-text`}
          style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
        >
          We Engineer{" "}
          <span className="relative inline-block">
            <span className="text-brand-blue">Systems</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-30" viewBox="0 0 200 12" fill="none">
              <path d="M2 8 Q50 2 100 6 T198 4" stroke="#1a6dff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <br className="hidden sm:block" />
          That Drive Growth
        </h1>

        <p className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-pretty ${mounted ? "animate-fade-up delay-200" : "opacity-0"}`}>
          End-to-end technology services and solutions — from mobile apps and web
          platforms to dashboards, CRMs, and digital skills training — we
          collaborate with you to go from good to great.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${mounted ? "animate-fade-up delay-300" : "opacity-0"}`}>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold btn-glow glow-border transition-all duration-300"
          >
            Explore Our Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold glow-border hover:-translate-y-0.5 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        {/* Stats bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-border ${mounted ? "animate-fade-up delay-500" : "opacity-0"}`}>
          {[
            { value: "50+", label: "Projects Delivered", color: "text-brand-blue" },
            { value: "10+", label: "Years of Experience", color: "text-brand-yellow" },
            { value: "100%", label: "Client Satisfaction", color: "text-brand-lightblue" },
            { value: "24h", label: "Response Time", color: "text-brand-coral" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div
                className={`text-3xl md:text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}
                style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ${mounted ? "animate-fade-in delay-600" : "opacity-0"}`}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
