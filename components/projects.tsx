"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Web Development", "Apps Development", "Dashboards & CRMs", "Digital Skills Training"]

const projects = [
  {
    title: "ZiboneleFM Platform",
    category: "Web Development",
    description:
      "Complete website overhaul for ZiboneleFM radio station — featuring live stream integration, show schedules, and a modern content management system.",
    outcome: "300% increase in online engagement",
    color: "#1a6dff",
  },
  {
    title: "PlanetGuardian App",
    category: "Apps Development",
    description:
      "Cross-platform mobile application for the PlanetGuardian environmental program — connecting guardians, tracking impact, and managing local activities.",
    outcome: "Deployed across 5 regions",
    color: "#8ecfff",
  },
  {
    title: "Lindwa Communications",
    category: "Web Development",
    description:
      "Full brand identity and website redesign — modern, fresh digital presence that perfectly matches the Lindwa Communications brand voice.",
    outcome: "Complete digital transformation",
    color: "#f5c518",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Scalable e-commerce solution with integrated payment gateways, inventory management, and optimised checkout flows for South African businesses.",
    outcome: "45% conversion rate improvement",
    color: "#e85d75",
  },
  {
    title: "Operations Dashboard",
    category: "Dashboards & CRMs",
    description:
      "Real-time operations dashboard with KPI tracking, automated reports, and team performance metrics — giving management complete visibility.",
    outcome: "80% faster decision-making",
    color: "#1a6dff",
  },
  {
    title: "Client CRM System",
    category: "Dashboards & CRMs",
    description:
      "Custom CRM platform for managing client relationships, sales pipelines, and automated follow-ups — built to scale with growing teams.",
    outcome: "Used by 100+ businesses",
    color: "#8ecfff",
  },
]

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-28 overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(26, 109, 255, 0.03)" }} />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Our Work
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-4 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
          >
            Featured <span className="text-brand-blue">Projects</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            A selection of systems we have engineered for businesses across South Africa — from fresh builds to transformative rescues.
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-12 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/15"
                  : "bg-transparent text-muted-foreground border-border hover:border-brand-blue/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, isVisible, index }: { project: (typeof projects)[0]; isVisible: boolean; index: number }) {
  const delayClass = `delay-${Math.min((index + 2) * 100, 600)}`
  return (
    <div className={`group relative p-7 rounded-2xl border border-border bg-card hover:border-brand-blue/20 transition-all duration-500 flex flex-col hover:-translate-y-1 ${isVisible ? `animate-scale-in ${delayClass}` : "opacity-0"}`}>
      {/* Geometric header */}
      <div className="h-36 mb-6 rounded-xl border border-border flex items-center justify-center overflow-hidden relative" style={{ background: `${project.color}04` }}>
        <ProjectGeometry index={index} color={project.color} />
      </div>

      <span className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: project.color }}>
        {project.category}
      </span>
      <h3
        className="text-lg font-bold text-foreground mb-2 group-hover:text-brand-blue transition-colors"
        style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
      >
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 text-pretty">
        {project.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs font-semibold" style={{ color: project.color }}>
          {project.outcome}
        </span>
        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </div>
  )
}

function ProjectGeometry({ index, color }: { index: number; color: string }) {
  const patterns = [
    // Logo "A" triangles
    <svg key="0" viewBox="0 0 200 100" fill="none" className="w-full h-full">
      <polygon points="100,10 160,85 40,85" fill={`${color}08`} stroke={`${color}20`} strokeWidth="1" />
      <polygon points="100,25 145,75 55,75" fill={`${color}12`} />
      <circle cx="100" cy="65" r="8" fill="#f5c51815" />
      <polygon points="75,85 125,85 130,95 70,95" fill="#e85d7510" />
    </svg>,
    // Scattered logo elements
    <svg key="1" viewBox="0 0 200 100" fill="none" className="w-full h-full">
      <polygon points="30,20 70,20 55,80 15,80" fill="#1a6dff0d" stroke="#1a6dff20" strokeWidth="1" />
      <path d="M120 20 A30 30 0 0 1 150 50 L120 50 Z" fill="#8ecfff12" />
      <circle cx="140" cy="65" r="15" fill="#f5c5180d" stroke="#f5c51820" strokeWidth="1" />
      <polygon points="160,70 190,70 195,90 155,90" fill="#e85d750d" />
    </svg>,
    // Grid nodes
    <svg key="2" viewBox="0 0 200 100" fill="none" className="w-full h-full">
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
          const colors = ["#1a6dff", "#8ecfff", "#f5c518", "#e85d75"]
          return <rect key={`${row}-${col}`} x={10 + col * 24} y={10 + row * 22} width="16" height="16" rx="3" fill={`${colors[(row + col) % 4]}0d`} />
        })
      )}
    </svg>,
    // Concentric triangles
    <svg key="3" viewBox="0 0 200 100" fill="none" className="w-full h-full">
      <polygon points="100,8 180,90 20,90" stroke="#1a6dff15" strokeWidth="1" fill="none" />
      <polygon points="100,25 160,82 40,82" stroke="#8ecfff15" strokeWidth="1" fill="none" />
      <polygon points="100,42 140,74 60,74" stroke="#f5c51815" strokeWidth="1" fill="none" />
      <circle cx="100" cy="60" r="10" fill="#e85d750d" stroke="#e85d7520" strokeWidth="1" />
    </svg>,
    // Dashboard-like grid
    <svg key="4" viewBox="0 0 200 100" fill="none" className="w-full h-full">
      <rect x="15" y="15" width="80" height="30" rx="4" fill="#1a6dff0a" stroke="#1a6dff15" strokeWidth="1" />
      <rect x="105" y="15" width="80" height="30" rx="4" fill="#8ecfff0a" stroke="#8ecfff15" strokeWidth="1" />
      <rect x="15" y="55" width="50" height="30" rx="4" fill="#f5c5180a" stroke="#f5c51815" strokeWidth="1" />
      <rect x="75" y="55" width="50" height="30" rx="4" fill="#e85d750a" stroke="#e85d7515" strokeWidth="1" />
      <rect x="135" y="55" width="50" height="30" rx="4" fill="#1a6dff08" stroke="#1a6dff12" strokeWidth="1" />
    </svg>,
    // Connected nodes
    <svg key="5" viewBox="0 0 200 100" fill="none" className="w-full h-full">
      <line x1="40" y1="50" x2="100" y2="25" stroke="#1a6dff15" strokeWidth="1" />
      <line x1="40" y1="50" x2="100" y2="75" stroke="#8ecfff15" strokeWidth="1" />
      <line x1="100" y1="25" x2="160" y2="50" stroke="#f5c51815" strokeWidth="1" />
      <line x1="100" y1="75" x2="160" y2="50" stroke="#e85d7515" strokeWidth="1" />
      <circle cx="40" cy="50" r="10" fill="#1a6dff10" stroke="#1a6dff25" strokeWidth="1" />
      <circle cx="100" cy="25" r="8" fill="#8ecfff10" stroke="#8ecfff25" strokeWidth="1" />
      <circle cx="100" cy="75" r="8" fill="#f5c51810" stroke="#f5c51825" strokeWidth="1" />
      <circle cx="160" cy="50" r="10" fill="#e85d7510" stroke="#e85d7525" strokeWidth="1" />
    </svg>,
  ]

  return patterns[index % patterns.length]
}
