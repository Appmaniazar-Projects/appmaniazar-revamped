"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We map your business goals, audience, and technology landscape to build a comprehensive system blueprint that aligns technology with your strategic objectives.",
    color: "#1a6dff",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We design modular, interconnected system architecture and user experiences that scale with your growth — balancing aesthetics with functionality.",
    color: "#8ecfff",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Our team engineers your solution with precision — clean code, robust APIs, and seamless platform integrations. We ship fast without sacrificing quality.",
    color: "#f5c518",
  },
  {
    number: "04",
    title: "Deploy & Evolve",
    description:
      "We launch, monitor, and continuously improve your system. Our relationship doesn't end at delivery — we become your long-term technology partner.",
    color: "#e85d75",
  },
]

export function Approach() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.08)

  return (
    <section id="approach" className="relative py-28 overflow-hidden border-t border-border">
      {/* Background geometry */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.025]" viewBox="0 0 800 800" fill="none">
          <polygon points="400,100 600,650 200,650" stroke="#1a6dff" strokeWidth="1" />
          <polygon points="400,200 550,600 250,600" stroke="#8ecfff" strokeWidth="1" />
          <polygon points="400,300 500,550 300,550" stroke="#f5c518" strokeWidth="0.5" />
          <circle cx="400" cy="450" r="60" stroke="#e85d75" strokeWidth="0.5" />
        </svg>
      </div>

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Our Methodology
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-4 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
          >
            A Systems-First{" "}
            <span className="text-brand-blue">Approach</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Every project follows our proven lean methodology — designed to
            deliver scalable, connected outcomes with transparency at every stage.
          </p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className={`hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px ${isVisible ? "animate-fade-in delay-400" : "opacity-0"}`}>
            <div className="w-full h-full" style={{ background: "linear-gradient(to right, #1a6dff30, #8ecfff30, #f5c51830, #e85d7530)" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative ${isVisible ? `animate-fade-up delay-${(index + 2) * 100}` : "opacity-0"}`}
              >
                {/* Number circle */}
                <div className="flex items-center gap-4 mb-5 lg:flex-col lg:items-center lg:text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 flex-shrink-0"
                    style={{ borderColor: `${step.color}40`, color: step.color, background: `${step.color}08` }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-bold text-foreground lg:mt-3"
                    style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty lg:text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div className={`mt-20 p-8 md:p-12 rounded-2xl border border-border glow-border flex flex-col md:flex-row items-center justify-between gap-6 ${isVisible ? "animate-fade-up delay-600" : "opacity-0"}`}>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}>
              Ready to start your project?
            </h3>
            <p className="text-foreground/80 text-pretty">
              Let us engineer a system that transforms your business. No obligation, just a conversation.
            </p>
          </div>
          <a
            href="mailto:info@appmaniazar.co.za?subject=Project%20Inquiry%20-%20Approach%20Page&body=Hi%20Appmaniazar%20Team,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold btn-glow glow-border hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
