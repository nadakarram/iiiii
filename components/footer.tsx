export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/sensvx-logo.png"
                alt="SensVX"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered multi-sensor cable defect detection in partnership with
              Elsewedy Electric.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-card-foreground text-sm mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {["About", "Solutions", "Demo", "Value", "Impact", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-card-foreground text-sm mb-4">
              Our Partner
            </h4>
            <p className="text-sm text-muted-foreground">Elsewedy Electric</p>
            <p className="text-xs text-muted-foreground mt-1">
              Global integrated energy solutions
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-card-foreground text-sm mb-4">
              Contact
            </h4>
            <p className="text-sm text-muted-foreground">
              sensvx.info.tech@gmail.com
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              +20 01018774201
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Cairo, Egypt
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 SensVX Software Company. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            In partnership with Elsewedy Electric
          </p>
        </div>
      </div>
    </footer>
  )
}


