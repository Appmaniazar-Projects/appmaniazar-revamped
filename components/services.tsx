"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { Smartphone, Globe, LayoutDashboard, GraduationCap, ArrowRight, Check } from "lucide-react"

const services = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboards & CRMs",
    subtitle: "Data-Driven Solutions",
    description:
      "Custom dashboards and CRM systems that give you real-time visibility into your business. We build data-driven interfaces that streamline operations, automate workflows, and empower decision-making.",
    details: [
      "Real-time KPI dashboards & reporting",
      "Custom CRM development",
      "Sales pipeline & lead management",
      "Automated workflows & notifications",
      "API integrations with existing tools",
    ],
    tags: ["Dashboards", "CRM", "Analytics", "Automation"],
    color: "#f5c518",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "We build high-quality Android and iOS apps using native and hybrid frameworks. Our product development is carefully architected for performance, scalability, and future-proof quality.",
    details: [
      "Native Android & iOS development",
      "Cross-platform with React Native & Flutter",
      "UX/UI design and prototyping",
      "App Store & Play Store deployment",
      "Ongoing maintenance and updates",
    ],
    tags: ["Android", "iOS", "React Native", "Flutter"],
    color: "#1a6dff",
  },
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    subtitle: "Websites & Platforms",
    description:
      "From marketing sites to full e-commerce platforms, we craft secure, modern web experiences with optimal design, SEO best practices, and user-friendly interfaces that convert visitors into customers.",
    details: [
      "Custom website design & development",
      "E-commerce platforms & payment integration",
      "Content management systems (CMS)",
      "SEO optimisation & performance tuning",
      "Responsive, mobile-first design",
    ],
    tags: ["Next.js", "WordPress", "E-commerce", "SEO"],
    color: "#8ecfff",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Digital Skills Training",
    subtitle: "Empower Your Team",
    description:
      "We provide tailored digital skills training programs that empower teams and individuals with the technology knowledge they need to thrive in the digital age. From coding bootcamps to digital literacy workshops.",
    details: [
      "Custom training programs for teams",
      "Coding bootcamps & workshops",
      "Digital literacy & productivity tools",
      "One-on-one mentorship & coaching",
      "Certification & skills assessment",
    ],
    tags: ["Training", "Workshops", "Mentorship", "Bootcamps"],
    color: "#e85d75",
  },
]

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "rgba(26, 109, 255, 0.03)" }} />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: "rgba(245, 197, 24, 0.03)" }} />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            What We Do
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-4 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
          >
            End-to-End Technology{" "}
            <span className="text-brand-blue">Services</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            We go beyond functionality and design. Our systems-first methodology
            delivers interconnected solutions that scale with your business.
          </p>
        </div>

        {/* Tabbed service selector (desktop) */}
        <div className={`hidden md:flex items-center justify-center gap-2 mb-12 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "bg-card border border-brand-blue/30 text-foreground shadow-lg shadow-brand-blue/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
              }`}
            >
              <span style={{ color: activeIndex === index ? service.color : undefined }}>{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active service detail (desktop) */}
        <div className={`hidden md:block ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <ServiceDetail service={services[activeIndex]} />
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${isVisible ? `animate-scale-in delay-${(index + 1) * 100}` : "opacity-0"}`}
            >
              <ServiceDetail service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceDetail({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10 rounded-2xl border border-border bg-card">
      {/* Left: Info */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${service.color}12`, color: service.color }}>
            {service.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}>
              {service.title}
            </h3>
            <span className="text-xs text-muted-foreground">{service.subtitle}</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground bg-secondary/50">
              {tag}
            </span>
          ))}
        </div>
        <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: service.color }}>
          Discuss your project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Right: Details list */}
      <div className="flex flex-col justify-center">
        <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">What&apos;s included</h4>
        <ul className="flex flex-col gap-3.5">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: `${service.color}15`, color: service.color }}>
                <Check size={12} />
              </div>
              <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
