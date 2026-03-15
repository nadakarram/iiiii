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
      className="py-24 md:py-32 bg-section-alt border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
            See It in Action
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Watch Our AI Detection System at Work
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
            Experience how SensVX identifies, classifies, and reports
            cable defects in real time on a live production line -- powered by
            our partnership with Elsewedy Electric.
          </p>
        </div>

        {/* Video Player Area */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-xl shadow-primary/5">
            {/* Aspect ratio container */}
            <div className="relative aspect-video">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://drive.google.com/file/d/1tCoI6jA8fdAPFLVUGtbPktGq3ysOuOw0/preview"
                  title="Google Drive Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  {/* Thumbnail / Poster */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10">
                    {/* Simulated sensor grid overlay */}
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

                    {/* Scanning line animation */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                      <div
                        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                        style={{
                          animation: "scanDown 3s ease-in-out infinite",
                        }}
                      />
                    </div>

                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                      {/* Sensor icon */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        <div className="relative h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 32 32"
                            fill="none"
                            className="text-primary"
                          >
                            <circle
                              cx="16"
                              cy="16"
                              r="4"
                              fill="currentColor"
                            />
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

                      <div className="text-center">
                        <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                          SensVX Demo
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Cable Defect Detection in Real Time
                        </p>
                      </div>

                      {/* Play button */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                        aria-label="Play demo video"
                      >
                        <Play className="h-5 w-5 fill-current" />
                        <span className="text-sm">Watch Demo</span>
                      </button>
                    </div>

                    {/* Corner HUD elements */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-mono text-muted-foreground">
                        SENSOR ARRAY ONLINE
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-mono text-muted-foreground">
                        RES 4K / 120fps
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-mono text-muted-foreground">
                        AI MODEL v3.2
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        ELSEWEDY ELECTRIC
                      </span>
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Feature highlights below video */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {feature.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about replacing video */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            Replace the embedded video URL with your actual product demo to
            showcase your cable inspection system.
          </p>
        </div>
      </div>

      {/* Scanning animation keyframes */}
      <style jsx>{`
        @keyframes scanDown {
          0%,
          100% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
        }
      `}</style>
    </section>
  )
}
