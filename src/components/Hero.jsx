import { meta } from '../data.js'

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5
               .28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2
               c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5
               -.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1
               4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2
               1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0
               6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73
               16.92z" />
    </svg>
  )
}

const contacts = [
  { icon: <MailIcon />,    label: 'e-mail',   href: `mailto:${meta.email}` },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: meta.linkedin },
  { icon: <GitHubIcon />,  label: 'GitHub',   href: meta.github },
  { icon: <PhoneIcon />,   label: 'Phone',    href: `tel:${meta.phone.replace(/\s/g, '')}` },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col border-b border-rim"
    >
      {/* ── Main content ── */}
      <div className="flex-1 flex items-center">
        <div className="section-wrap w-full py-24 animate-fade-up">
          {/* Eyebrow */}
          <p className="section-label mb-7">
            {meta.title} · {meta.org}
          </p>

          {/* Name */}
          <h1 className="font-serif text-[2.2rem] sm:text-[3.4rem] md:text-[5.5rem] font-medium
                         leading-[1.06] tracking-tight text-ink mb-8">
            {meta.name.split(' ')[0]}<br />
            <span className="text-ink/50">{meta.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* Tagline */}
          <p className="max-w-[52ch] text-base md:text-[1.05rem] text-muted
                        font-light leading-[1.85] mb-12">
            {meta.tagline}
          </p>

          {/* Contacts */}
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {contacts.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-muted
                           hover:text-gold transition-colors duration-200"
              >
                <span className="text-muted/60 group-hover:text-gold transition-colors">
                  {icon}
                </span>
                <span className="group-hover:underline underline-offset-4">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="section-wrap pb-12 flex items-center gap-3 text-muted/30">
        <div className="w-px h-9 bg-current animate-bounce" />
      </div>
    </section>
  )
}
