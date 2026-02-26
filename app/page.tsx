import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider variant="circle-spin" />
      <About />
      <SectionDivider variant="parallelogram" />
      <Services />
      <SectionDivider variant="arc-pulse" />
      <Approach />
      <SectionDivider variant="trapezoid" />
      <Projects />
      <SectionDivider variant="diamond" />
      <Testimonials />
      <SectionDivider variant="dots" />
      <Footer />
    </main>
  )
}
