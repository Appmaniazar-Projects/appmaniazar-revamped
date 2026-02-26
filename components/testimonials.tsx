"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We wanted a modern, fresh and different website that matches our brand. The team at Appmaniazar have done a fantastic job. The attention to detail is fabulous. We look forward to working with Appmaniazar in the near future.",
    name: "Buhle Lindwa",
    role: "Founder",
    company: "Lindwa Communications",
    color: "#1a6dff",
  },
  {
    quote:
      "Appmaniazar has been more than helpful and has gone out of their way to ensure that the PlanetGuardian program will be able to deliver what is needed. We salute Appmaniazar, and we recommend them to help you achieve your dreams.",
    name: "Martin Brink",
    role: "Program Director",
    company: "Planet Guardian",
    color: "#8ecfff",
  },
  {
    quote:
      "We tried many companies before to do our website but the whole experience was just a headache until we found Appmaniazar, which have done a wonderful job for us. I would recommend this company to anyone looking for a brilliant website.",
    name: "Mawande Jara",
    role: "Station Manager",
    company: "ZiboneleFM",
    color: "#f5c518",
  },
]

export function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.08)

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: "rgba(26, 109, 255, 0.03)" }} />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Client Stories
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-4 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
          >
            What Our Clients{" "}
            <span className="text-brand-blue">Say</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            We have worked with businesses across South Africa — building
            relationships that last beyond project delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-brand-blue/20 transition-all duration-500 flex flex-col hover:-translate-y-1 ${
                isVisible ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#f5c518" stroke="#f5c518" />
                ))}
              </div>

              <Quote size={28} className="mb-4 opacity-15" style={{ color: testimonial.color }} />

              <p className="text-muted-foreground leading-relaxed text-pretty flex-1 mb-6 text-sm">
                {`"${testimonial.quote}"`}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
