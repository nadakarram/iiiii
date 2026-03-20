import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { DemoVideo } from "@/components/demo-video"
import { ValueProposition } from "@/components/value-proposition"
import { Impact } from "@/components/impact"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <DemoVideo />
      <ValueProposition />
      <Impact />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}