"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { blogPosts } from "@/lib/blog-posts"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EmbedFacebookPostWordPressPage() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)
  const post = blogPosts.find(p => p.id === "embed-facebook-post-wordpress")

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
      {/* Article Header */}
      <section ref={sectionRef} className="relative py-12 mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                {post.category}
              </span>
              {post.featured && (
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow">
                  Featured
                </span>
              )}
            </div>
            
            <h1
              className={`text-3xl md:text-5xl font-bold leading-tight text-balance mb-6 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}
              style={{ fontFamily: "var(--font-space-grotesk), var(--font-sans)" }}
            >
              {post.title}
            </h1>
            
            <p className={`text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
              {post.excerpt}
            </p>

            {/* Article Content */}
            <div className={`prose prose-lg max-w-none ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
              <div 
                className="text-foreground/90 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
              />
            </div>

            {/* Tags */}
            <div className={`flex flex-wrap items-center justify-center gap-2 mt-6 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-border bg-secondary/50">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className={`flex items-center justify-between pt-4 border-t border-border ${isVisible ? "animate-fade-up delay-500" : "opacity-0"}`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <User size={14} className="text-brand-blue" />
                </div>
                <span className="text-sm text-foreground/80">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className={`text-center mb-12 ${isVisible ? "animate-fade-up delay-700" : "opacity-0"}`}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className={`group p-6 rounded-2xl border border-border glow-border hover:border-brand-blue/20 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? `animate-fade-up delay-${800 + index * 100}` : "opacity-0"
                  }`}
                >
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-brand-blue transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{relatedPost.readTime}</span>
                    <span className="text-brand-blue">Read More →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className={`p-8 md:p-12 rounded-2xl border border-border glow-border text-center ${isVisible ? "animate-fade-up delay-800" : "opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need Help With Your Project?
            </h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you bring your ideas to life. From web development to mobile apps, we've got you covered.
            </p>
            <a
              href="https://wa.me/27672488896"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold btn-glow glow-border hover:-translate-y-0.5 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  )
}
