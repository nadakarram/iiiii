"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 99.7, suffix: "%", label: "Defect Detection Accuracy" },
  { value: 85, suffix: "%", label: "Reduction in Scrap Rate" },
  { value: 10, suffix: "x", label: "Faster Than Manual Inspection" },
  { value: 50, suffix: "M+", label: "Meters of Cable Inspected" },
]

const milestones = [
{
  year: "Jan – Apr 2025",
  title: "Concept & Planning",
  description:
    "Project idea development, research, system design, and dataset preparation for the AI-based cable defect detection system.",
},
{
  year: "May – Aug 2025",
  title: "Prototyping & Integration",
  description:
    "Development of the AI detection model, 3D sensing prototype, and integration with the software dashboard and database system.",
},
{
  year: "Sep – Dec 2025",
  title: "Validation & Publishing",
  description:
    "System testing, performance evaluation, documentation, and preparation of the research publication.",
},
]

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const startTime = performance.now()
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            start = eased * value
            setCount(start)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary">
        {suffix === "%" ? count.toFixed(1) : Math.round(count)}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32 bg-section-alt border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
            Our Impact
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Transforming Cable Manufacturing with Measurable Results
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5 md:mt-0 md:top-1/2 md:-translate-y-1.5" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <span className="text-xs font-medium text-primary tracking-wider uppercase">
                    {milestone.year}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mt-1">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
