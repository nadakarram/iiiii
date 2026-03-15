import {
  Cable,
  ScanLine,
  BrainCircuit,
  MonitorDot,
  Gauge,
  FileCheck,
} from "lucide-react"

const solutions = [
  {
    icon: ScanLine,
    title: "Inline Surface Inspection",
    description:
      "High-speed optical scanning detects surface scratches, dents, discoloration, and insulation damage on every meter of cable at full production speed.",
    tag: "Optical AI",
  },
  {
    icon: Cable,
    title: "Internal Structure Analysis",
    description:
      "Ultrasonic sensors penetrate cable layers to identify voids, delamination, conductor eccentricity, and sheath thickness variations in real time.",
    tag: "Ultrasonic",
  },
  {
    icon: BrainCircuit,
    title: "AI Defect Classification",
    description:
      "Proprietary deep learning models classify defect type, severity, and root cause instantly, enabling immediate corrective action on the production line.",
    tag: "Deep Learning",
  },
  {
    icon: MonitorDot,
    title: "Real-Time Monitoring Dashboard",
    description:
      "A centralized control dashboard provides live production quality metrics, defect heatmaps, trend analysis, and instant alerts for quality managers.",
    tag: "Monitoring",
  },
  {
    icon: Gauge,
    title: "Predictive Quality Analytics",
    description:
      "Machine learning models analyze historical and live data to predict potential defects before they occur, enabling proactive process adjustments.",
    tag: "Predictive",
  },
  {
    icon: FileCheck,
    title: "Automated Compliance Reporting",
    description:
      "Auto-generate quality certification reports aligned with IEC, ISO, and regional cable standards. Full traceability for every cable segment produced.",
    tag: "Compliance",
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
            Our Solutions
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            End-to-End Intelligent Cable Inspection
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
            From surface scanning to deep internal analysis, our suite of
            AI-powered solutions covers every aspect of cable quality assurance
            throughout the production lifecycle.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Number badge */}
              <span className="absolute top-6 right-6 font-[family-name:var(--font-heading)] text-5xl font-bold text-border/60 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                {solution.tag}
              </span>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-card-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
