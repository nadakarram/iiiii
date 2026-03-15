"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
            Contact Us
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Ready to Transform Your Quality Assurance?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
            Get in touch to schedule a demo, discuss partnership opportunities,
            or learn how SensVX can integrate with your production
            line.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground text-sm">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  sensvx.info.tech@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground text-sm">
                  Phone
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  +20 01018774201
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground text-sm">
                  Location
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Elswady university SUT
                  <br />
                  Cairo, Egypt
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-card p-6">
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-2">
                Our Partner
              </p>
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-card-foreground">
                Elsewedy Electric
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                A leading global integrated energy solutions provider, operating
                in over 110 countries with 15,000+ employees worldwide.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-12 text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                  Message Sent
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/mreyldwl"
  method="POST"
            
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                       name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="technical">Technical Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project or question..."
                    className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
