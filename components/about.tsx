"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Mail, Phone, Users, Target, Zap, Shield } from "lucide-react"
import Image from "next/image"

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.08)

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "rgba(26, 109, 255, 0.04)" }} />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Who We Are
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-5 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
          >
            The Home for Technology{" "}
            <span className="text-brand-blue">Systems</span> Development
          </h2>
          <p className={`text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Appmaniazar is a Cape Town-based ICT company engineering interconnected
            technology systems that solve real-world problems. We don&apos;t just build
            products — we architect digital ecosystems that help businesses grow
            confidently.
          </p>
        </div>

        {/* Value pillars */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          {[
            { icon: <Target size={22} />, title: "Mission-Driven", desc: "Innovation through technology is our core mission. Every solution we build solves a real problem.", color: "#1a6dff" },
            { icon: <Users size={22} />, title: "Client-Centric", desc: "We collaborate closely with each client, becoming an extension of your team from day one.", color: "#8ecfff" },
            { icon: <Zap size={22} />, title: "Systems Thinking", desc: "We engineer interconnected systems — not isolated products — so everything works together.", color: "#f5c518" },
            { icon: <Shield size={22} />, title: "Quality First", desc: "Clean code, robust architecture, and rigorous testing. We deliver work we are proud of.", color: "#e85d75" },
          ].map((item) => (
            <div key={item.title} className="group p-6 rounded-2xl border border-border glow-border hover:border-brand-blue/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 glow-border" style={{ background: `${item.color}12`, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}>
                {item.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* About + Contact split */}
        <div className="grid xl:grid-cols-5 gap-8 xl:gap-12 items-start">
          {/* Left: Brand system diagram */}
          <div className={`xl:col-span-3 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl border border-border glow-border">
              <h3 className="text-base sm:text-lg lg:text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}>
                Our Development Ecosystem
              </h3>
              <p className="text-xs sm:text-sm lg:text-sm text-foreground/80 mb-4 sm:mb-6 lg:mb-8">How we connect every phase of your project into one unified system.</p>
              <div className="w-full overflow-x-auto">
                <BrandSystemDiagram />
              </div>
            </div>

            {/* Logos strip */}
            <div className="mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 lg:p-6 rounded-2xl border border-border glow-border overflow-hidden">
              <p className="text-xs text-foreground/60 uppercase tracking-widest mb-2 sm:mb-3 lg:mb-5 text-center">Trusted by businesses across South Africa</p>
              <div className="relative">
                <div className="flex animate-slide-logos items-center">
                  {[
                    "/partner images/Zibonele - Logo.png",
                    "/partner images/MSI - Logo.png", 
                    "/partner images/LC - Logo.png",
                    "/partner images/BMC - Logo.png",
                    "/partner images/Ponontle - Logo.png",
                    "/partner images/SADICO - Logo.png",
                    "/partner images/Zibonele - Logo.png",
                    "/partner images/MSI - Logo.png",
                    "partner images/TechPozi - Logo.png",
                    "partner images/SiyaMed - Logo.png",
                    "partner images/Thuto - Logo.png",
                    "/partner images/LC - Logo.png", 
                    "/partner images/BMC - Logo.png",
                    "/partner images/Ponontle - Logo.png",
                    "/partner images/SADICO - Logo.png",
                    "partner images/TechPozi - Logo.png",
                    "partner images/SiyaMed - Logo.png",  
                    "partner images/Thuto - Logo.png",
                    

                  ].map((src, index) => (
                    <div key={index} className="flex-shrink-0 px-2 sm:px-3 lg:px-6 xl:px-8">
                      <Image 
                        src={src} 
                        alt={`Partner logo ${index + 1}`}
                        width={80}
                        height={40}
                        className="h-6 sm:h-8 lg:h-10 xl:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className={`xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 lg:gap-4 ${isVisible ? "animate-slide-left delay-300" : "opacity-0"}`}>
            <ContactCard 
              icon={<MapPin size={16} />} 
              title="Cape Town Office" 
              lines={["19 Brug Street, Triangle", "Bellville, Cape Town"]} 
              href="https://maps.google.com/?q=19+Brug+Street+Triangle+Bellville+Cape+Town" 
              accentColor="#1a6dff" 
            />
            <ContactCard 
              icon={<MapPin size={16} />} 
              title="George Office" 
              lines={["8 St. John's Street", "Dormehls Drift, George, 6529"]} 
              href="https://maps.google.com/?q=8+St.+John's+Street+Dormehls+Drift+George+6529" 
              accentColor="#8ecfff" 
            />
            <ContactCard 
              icon={<Mail size={16} />} 
              title="Email Us" 
              lines={["info@appmaniazar.co.za"]} 
              href="mailto:info@appmaniazar.co.za" 
              accentColor="#f5c518" 
            />
            <ContactCard 
              icon={<Phone size={16} />} 
              title="Call Us" 
              lines={["+27 21 023 1016"]} 
              href="tel:+27210231016" 
              accentColor="#e85d75" 
            />

            {/* Small CTA */}
            <a 
              href="mailto:info@appmaniazar.co.za?subject=Project%20Inquiry%20-%20About%20Page&body=Hi%20Appmaniazar%20Team,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 lg:mt-2 flex items-center justify-center gap-2 px-4 lg:px-6 py-3 lg:py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-xs lg:text-sm btn-glow glow-border transition-all"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, lines, href, accentColor }: { icon: React.ReactNode; title: string; lines: string[]; href?: string; accentColor: string }) {
  const Wrapper = href ? "a" : "div"
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group flex items-start gap-3 lg:gap-4 p-4 lg:p-5 rounded-xl border border-border glow-border hover:border-brand-blue/20 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-8 lg:w-10 h-8 lg:h-10 rounded-lg flex items-center justify-center glow-border" style={{ background: `${accentColor}12`, color: accentColor }}>
        {icon}
      </div>
      <div>
        <div className="text-xs lg:text-sm font-semibold text-foreground mb-0.5">{title}</div>
        {lines.map((line) => (
          <div key={line} className="text-xs lg:text-sm text-foreground/80">{line}</div>
        ))}
      </div>
    </Wrapper>
  )
}

function BrandSystemDiagram() {
  return (
    <svg viewBox="0 0 580 180" fill="none" className="w-full h-auto min-w-[320px] max-w-full">
      {/* Nodes */}
      {[
        { x: 20, y: 60, w: 80, h: 50, label: "Strategy", color: "#1a6dff" },
        { x: 130, y: 15, w: 80, h: 50, label: "Design", color: "#8ecfff" },
        { x: 130, y: 115, w: 80, h: 50, label: "Develop", color: "#f5c518" },
        { x: 240, y: 60, w: 80, h: 50, label: "Test", color: "#e85d75" },
        { x: 350, y: 30, w: 80, h: 45, label: "Deploy", color: "#1a6dff" },
        { x: 350, y: 105, w: 80, h: 45, label: "Scale", color: "#8ecfff" },
        { x: 460, y: 60, w: 80, h: 50, label: "Support", color: "#f5c518" },
      ].map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8" fill={`${node.color}10`} stroke={`${node.color}30`} strokeWidth="1" />
          <text x={node.x + node.w / 2} y={node.y + node.h / 2 + 3} textAnchor="middle" fill={node.color} fontSize="10" fontFamily="var(--font-sans)">{node.label}</text>
        </g>
      ))}
      {/* Connections */}
      <path d="M100 85 L130 40" stroke="#1a6dff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M100 95 L130 140" stroke="#1a6dff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M210 40 L240 85" stroke="#8ecfff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M210 140 L240 95" stroke="#f5c518" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M320 80 L350 52" stroke="#e85d75" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M320 95 L350 127" stroke="#e85d75" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M430 52 L460 85" stroke="#1a6dff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M430 127 L460 85" stroke="#8ecfff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 2" />
      {/* Dot accents */}
      <circle cx="100" cy="90" r="2.5" fill="#1a6dff" fillOpacity="0.3" />
      <circle cx="240" cy="90" r="2.5" fill="#e85d75" fillOpacity="0.3" />
      <circle cx="350" cy="52" r="2.5" fill="#1a6dff" fillOpacity="0.3" />
      <circle cx="350" cy="127" r="2.5" fill="#8ecfff" fillOpacity="0.3" />
      <circle cx="460" cy="85" r="2.5" fill="#f5c518" fillOpacity="0.3" />
    </svg>
  )
}
