import Image from "next/image"
import { Cpu, Eye, Waves, Zap } from "lucide-react"

const capabilities = [
  {
    icon: Eye,
    title: "Optical Sensing",
    description:
      "High-resolution cameras capture surface defects, insulation irregularities, and color deviations at line speed.",
  },
  {
    icon: Waves,
    title: "Ultrasonic Analysis",
    description:
      "Ultrasonic transducers detect internal voids, delamination, and structural anomalies invisible to the eye.",
  },
  {
    icon: Zap,
    title: "Electromagnetic Testing",
    description:
      "Eddy current and partial discharge sensors identify conductor faults and insulation breakdown risks.",
  },
  {
    icon: Cpu,
    title: "AI Fusion Engine",
    description:
      "Deep learning models fuse multi-sensor data in real time for precise defect classification and root cause analysis.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/about-technology.jpg"
              alt="Multi-sensor AI technology scanning industrial cables"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
              About Us
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Where Sensor Intelligence
              <br />
              Meets Manufacturing Excellence
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              SensVX is a pioneering deep-tech software company building the
              next generation of quality assurance for the cable industry. In
              strategic partnership with Elsewedy Electric, we combine advanced
              sensor arrays with proprietary AI to transform how cables are
              inspected, qualified, and certified.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Our mission is to eliminate defective cables from reaching the
              market, reducing waste, preventing failures, and ensuring safety
              across power grids, infrastructure, and industrial networks
              worldwide.
            </p>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cap.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-card-foreground mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
