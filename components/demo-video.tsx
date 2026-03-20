"use client"

import { useState } from "react"
import { Play, Monitor, Cpu, Eye, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Eye,
    label: "Real-Time Detection",
    description: "Watch defects identified in milliseconds",
  },
  {
    icon: Cpu,
    label: "AI Classification",
    description: "See how our models classify defect types",
  },
  {
    icon: Monitor,
    label: "Live Dashboard",
    description: "Monitor production quality in real time",
  },
  {
    icon: BarChart3,
    label: "Analytics Preview",
    description: "Explore predictive quality insights",
  },
]

export function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section
      id="demo"
      className="py-20 sm:py-24 md:py-32 bg-section-alt border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm text-primary font-medium tracking-wide uppercase mb-3">
            See It in Action
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Watch Our AI Detection System at Work
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Experience how SensVX identifies, classifies, and reports cable defects in real time on a live production line — powered by our partnership with Elsewedy Electric.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card shadow-xl shadow-primary/5">

            <div className="relative aspect-video w-full max-h-[70vh] sm:max-h-none">

              {/* Video */}
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://drive.google.com/file/d/1tCoI6jA8fdAPFLVUGtbPktGq3ysOuOw0/preview"
                  title="Google Drive Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10">

                    {/* Grid */}
                    <div className="absolute inset-0 opacity-[0.04]">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 40 0 L 0 0 0 40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              className="text-foreground"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    {/* ================= FULL UI (hidden on ≤358px) ================= */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 text-center max-[358px]:hidden">

                      {/* Icon */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        <div className="relative h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 32 32"
                            fill="none"
                            className="sm:w-10 sm:h-10 text-primary"
                          >
                            <circle cx="16" cy="16" r="4" fill="currentColor" />
                            <circle
                              cx="16"
                              cy="16"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              opacity="0.5"
                            />
                            <circle
                              cx="16"
                              cy="16"
                              r="15"
                              stroke="currentColor"
                              strokeWidth="1"
                              opacity="0.25"
                            />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <p className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold text-foreground">
                          SensVX Demo
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          Cable Defect Detection in Real Time
                        </p>
                      </div>

                      {/* Main Button (hidden on tiny screens) */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-medium hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/25"
                      >
                        <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                        <span className="text-xs sm:text-sm">Watch Demo</span>
                      </button>
                    </div>

                    {/* ================= ULTRA SMALL UI (≤358px) ================= */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center hidden max-[358px]:flex">
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-medium active:scale-95 shadow-lg"
                        >
                          Play Demo
                        </button>
                      </div>
                    )}

                    {/* HUD (hidden on ultra small) */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2 max-[358px]:hidden">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                        SENSOR ARRAY ONLINE
                      </span>
                    </div>

                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 max-[358px]:hidden">
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                        RES 4K / 120fps
                      </span>
                    </div>

                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-[358px]:hidden">
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                        AI MODEL v3.2
                      </span>
                    </div>

                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-2 max-[358px]:hidden">
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                        ELSEWEDY ELECTRIC
                      </span>
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-card p-4 sm:p-5"
              >
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    {feature.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-[11px] sm:text-xs text-muted-foreground mt-6 sm:mt-8">
            Replace the embedded video URL with your actual product demo to showcase your cable inspection system.
          </p>
        </div>
      </div>
    </section>
  )
}