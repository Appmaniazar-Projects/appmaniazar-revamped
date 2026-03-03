"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Dashboards & CRMs", "Web Development", "Apps Development", "Digital Skills Training"]

const projects = [
  {
    title: "MSI Learning Platform",
    category: "Web Development",
    description:
      "Modern educational website for Maths & Science Infinity — designed to showcase academic programs, student resources, and community impact with a clean, professional digital presence.",
    outcome: "Educational Platform Excellence",
    color: "#1a6dff",
    url: "https://www.mathsandscienceinfinity.org.za/",
  },
  {
    title: "Bongani Music Creations",
    category: "Web Development",
    description:
      "Creative portfolio website for a music production brand — highlighting services, musical projects, and brand identity with an engaging, performance-driven design.",
    outcome: "Creative Portfolio Platform",
    color: "#8ecfff",
    url: "https://bonganimusic.com/",
  },
  {
    title: "Lindwa Communications",
    category: "Web Development",
    description:
      "Corporate brand website built to communicate services, credibility, and digital transformation expertise — delivering a refined and conversion-focused experience.",
    outcome: "Corporate Digital Transformation",
    color: "#f5c518",
    url: "https://www.lindwacommunications.com/",
  },
  {
    title: "VL Media",
    category: "Web Development",
    description:
      "Dynamic media and creative agency website — crafted to showcase storytelling, visual projects, and digital marketing solutions with a bold, modern interface.",
    outcome: "Media Agency Platform",
    color: "#e85d75",
    url: "https://vlmedia.co.za/",
  },
  {
    title: "Ponontle Group",
    category: "Web Development",
    description:
      "South African company website — showcasing IT, project management, business consulting, construction, and education services through efficient, budget-conscious solutions.",
    outcome: "Corporate Solutions Platform",
    color: "#1a6dff",
    url: "https://www.ponontle.co.za/",
  },
  {
    title: "Zibonele FM Dashboard",
    category: "Dashboards & CRMs",
    description:
      "Admin dashboard for managing Zibonele FM mobile app — providing real-time analytics, content management, and user engagement tools for seamless radio station operations.",
    outcome: "Radio Management System",
    color: "#f5c518",
    url: "https://zibonele-fm-dashboard.vercel.app/",
  },
  {
    title: "Thuto School Relationship Platform",
    category: "Dashboards & CRMs",
    description:
      "Educational relationship management system — connecting schools, students, and parents with comprehensive communication tools and academic tracking capabilities.",
    outcome: "Educational CRM Excellence",
    color: "#8ecfff",
    url: "https://thuto.app/",
  },
  {
    title: "Tech Poxi Business System",
    category: "Dashboards & CRMs",
    description:
      "Business form creation and management platform — streamlining data collection, workflow automation, and business process optimization for modern enterprises.",
    outcome: "Business Process Automation",
    color: "#e85d75",
    url: null,
  },
  {
    title: "Zibonele FM App",
    category: "Apps Development",
    description:
      "Cross-platform mobile application for Zibonele FM radio station — featuring live streaming, show schedules, and interactive listener engagement features.",
    outcome: "Radio Mobile Experience",
    color: "#1a6dff",
    url: "https://play.google.com/store/apps/details?id=io.ionic.zibonelefm1234&hl=en_ZA",
  },
  {
    title: "Tapps Dam Level Management",
    category: "Apps Development",
    description:
      "Mobile application for dam level monitoring across all provinces — featuring real-time geolocation tracking, weather integration, and comprehensive water management analytics.",
    outcome: "National Water Management System",
    color: "#8ecfff",
    url: "https://play.google.com/store/apps/details?id=com.tapps.appmaniazar&hl=en_ZA",
  },
  {
    title: "Digital Skills Training Program",
    category: "Digital Skills Training",
    description:
      "Comprehensive web development training program for beginners from disadvantaged backgrounds — offering hands-on coding experience, mentorship, and pathways to tech careers.",
    outcome: "Tech Skills Empowerment Initiative",
    color: "#f5c518",
    url: null,
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
          <p className={`text-foreground/80 max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
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
                  ? "bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/15 glow-border"
                  : "bg-transparent text-foreground/80 border-border hover:border-brand-blue/30 hover:text-foreground glow-border"
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
  
  if (project.url) {
    return (
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`group relative block p-7 rounded-2xl border border-border glow-border hover:border-brand-blue/20 transition-all duration-500 flex flex-col hover:-translate-y-1 ${isVisible ? `animate-scale-in ${delayClass}` : "opacity-0"}`}
      >
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
        <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1 text-pretty">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs font-semibold" style={{ color: project.color }}>
            {project.outcome}
          </span>
          <ArrowUpRight size={16} className="text-foreground/80 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </a>
    )
  }

  return (
    <div className={`group relative p-7 rounded-2xl border border-border glow-border hover:border-brand-blue/20 transition-all duration-500 flex flex-col hover:-translate-y-1 ${isVisible ? `animate-scale-in ${delayClass}` : "opacity-0"}`}>
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
      <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1 text-pretty">
        {project.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs font-semibold" style={{ color: project.color }}>
          {project.outcome}
        </span>
        <ArrowUpRight size={16} className="text-foreground/80 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
