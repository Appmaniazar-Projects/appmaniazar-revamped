"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { blogPosts } from "@/lib/blog-posts"
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(26, 109, 255, 0.03)" }} />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className={`text-xs font-medium tracking-widest uppercase text-brand-blue mb-4 block ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              Blog & Resources
            </span>
            <h1
              className={`text-4xl md:text-6xl font-bold leading-tight text-balance mb-6 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
              style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
            >
              Insights & <span className="text-brand-blue">Tutorials</span>
            </h1>
            <p className={`text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
              Expert tips, tutorials, and insights on web development, digital solutions, and technology trends from the Appmaniazar team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={sectionRef} className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group relative p-6 rounded-2xl border border-border glow-border hover:border-brand-blue/20 transition-all duration-500 flex flex-col hover:-translate-y-1 ${
                  isVisible ? `animate-fade-up delay-${(index + 1) * 100}` : "opacity-0"
                }`}
              >
                {/* Post Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                </div>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-ZA', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-border bg-secondary/50">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                      <User size={14} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-foreground/80">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  )
}
