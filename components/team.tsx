import Image from "next/image"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Nada Karam Awad",
    role: "Full-Stack & AI Developer",
    linkedin: "https://www.linkedin.com/in/nada-karram-a07208252",
    bio: "Develops the dashboard, database integration, and contributes to AI model deployment and system usability.",
  },
  {
    name: "Abdullah Tarek Hassan",
    role: "Cyber Security Engineer",
    linkedin: "https://www.linkedin.com/in/abdullah-aljaziry-4bb32a366",
    bio: "Responsible for system security, infrastructure protection, and secure integration of the AI inspection platform.",
  },
  {
    name: "Ahmed Mostafa Elalfy",
    role: "AI & Computer Vision Engineer",
    linkedin: "https://www.linkedin.com/in/ahmed-elalfy-02565b297",
    bio: "Develops deep learning models for cable defect detection and works on training and optimizing YOLO-based systems.",
  },
  {
    name: "Fares Mohsen Abdelaziz",
    role: "Software Engineer",
    linkedin: "http://linkedin.com/in/fares-m-93b359278",
    bio: "Focuses on backend development, system integration, and building scalable components for the inspection platform.",
  },
  {
    name: "Moustafa Ehab Abdelalim",
    role: "Computer Vision Engineer",
    linkedin: "https://www.linkedin.com/in/moustafa-seliem-2857663a8",
    bio: "Works on image processing, sensor data handling, and improving defect detection accuracy.",
  },

  {
    name: "Judy Zyad Zaky",
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/judy-zyad-9961a3334",
    bio: "Supports software development, testing, and UI improvements for the inspection and analytics platform.",
  },
  {
    name: "Dalia lotfy Ibrahim",
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/hania-lotfy-41911a334",
    bio: "Supports software development.",
  },
  {
    name: "Hania lotfy Ibrahim",
    role: "Software Developer",
    linkedin: "https://eg.linkedin.com/in/dalia-lotfy-492170334",
    bio: "Supports software development.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left side - Heading + Image */}
          <div>
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
              Our Team
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-card-foreground leading-tight text-balance">
              Engineers, Scientists, and Industry Experts
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Our world-class team brings together deep expertise in AI, sensor
              technology, and cable manufacturing to build solutions that
              redefine industrial quality assurance.
            </p>
            <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[3/2]">
              <Image
                src="/images/team-engineering.jpeg"
                alt="SensVX engineering team collaborating in the lab"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Team grid */}
          <div className="grid sm:grid-cols-3 gap-6 lg:col-span-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-background p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${member.name} on LinkedIn`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-blue-600 hover:text-blue-800" />
                  </a>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs text-primary mt-0.5">{member.role}</p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
