import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cables.jpg"
          alt="AI-powered cable defect detection sensors in a manufacturing environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        {/* Partnership badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground tracking-wide uppercase">
            SensVX x Elsewedy Electric
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground text-balance">
          AI-Powered Cable
          <br />
          <span className="text-primary">Defect Detection</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Multi-sensor fusion technology that detects, classifies, and prevents
          cable manufacturing defects in real time — delivering zero-defect
          production at industrial scale.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Discover Our Solution
          </a>
          <a
            href="#contact"
            className="border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors text-sm"
          >
            Partner With Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto" />
          </a>
        </div>
      </div>
    </section>
  )
}
