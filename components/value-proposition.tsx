import { Shield, TrendingUp, Clock, Target, BarChart3, Settings } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Zero-Defect Production",
    description:
      "Catch every defect before it leaves the factory. Our multi-sensor AI identifies micro-level flaws that traditional inspection misses.",
  },
  {
    icon: Clock,
    title: "Real-Time Inspection",
    description:
      "Inline detection at full production speed. No sampling, no slowdowns — every meter of cable is inspected continuously.",
  },
  {
    icon: TrendingUp,
    title: "Cost Reduction",
    description:
      "Reduce scrap rates, warranty claims, and field failures. Predictive insights help optimize processes before defects occur.",
  },
  {
    icon: Target,
    title: "Precision Classification",
    description:
      "AI-driven defect classification with 99.7% accuracy. Know exactly what went wrong and why, every single time.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description:
      "Comprehensive dashboards and reporting for production teams, quality managers, and executive leadership.",
  },
  {
    icon: Settings,
    title: "Seamless Integration",
    description:
      "Plug into existing manufacturing lines with minimal downtime. Compatible with all major cable production equipment.",
  },
]

export function ValueProposition() {
  return (
    <section id="value" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
            Our Value
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-card-foreground leading-tight text-balance">
            Why Leading Manufacturers Choose SensVX
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
            We deliver end-to-end intelligent inspection that transforms cable
            quality assurance from reactive sampling to proactive, AI-driven
            precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative rounded-xl border border-border bg-background p-8 hover:border-primary/40 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
