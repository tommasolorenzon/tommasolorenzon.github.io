import { useState }   from 'react'
import ReactMarkdown  from 'react-markdown'
import { projects }   from '../data.js'
import { useInView }  from '../hooks/useInView.js'

function ChevronIcon({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border border-rim transition-colors duration-300 ${
        open ? 'bg-surface' : 'hover:bg-surface/50'
      }`}
    >
      {/* ── Header — always visible ── */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-6 py-5 flex items-start gap-4 justify-between"
        aria-expanded={open}
      >
        <div className="space-y-1.5">
          <h3 className="text-[15px] font-medium text-ink leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {project.summary}
          </p>
        </div>
        <span className="mt-0.5 text-muted/60">
          <ChevronIcon open={open} />
        </span>
      </button>

      {/* ── Expanded detail ── */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[2400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-7 border-t border-rim pt-5 space-y-6">

          {/* Period */}
          {project.period && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted/45">
              {project.period}
            </p>
          )}

          {/* Description — Markdown */}
          <div className="prose-detail">
            <ReactMarkdown
              components={{
                p:      ({ children }) => <p className="text-[14px] text-muted leading-[1.9] max-w-[64ch] mb-3 last:mb-0">{children}</p>,
                ul:     ({ children }) => <ul className="space-y-2 mb-3">{children}</ul>,
                li:     ({ children }) => <li className="text-[14px] text-muted leading-[1.85] flex gap-2"><span className="text-gold/60 mt-[0.35em] shrink-0">–</span><span>{children}</span></li>,
                strong: ({ children }) => <strong className="font-medium text-ink/80">{children}</strong>,
                a:      ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-gold/80 underline underline-offset-2 hover:text-gold transition-colors">{children}</a>,
              }}
            >
              {project.detail}
            </ReactMarkdown>
          </div>

          {/* Image gallery — only when images are present */}
          {project.images && project.images.length > 0 && (
            <div className="flex flex-col gap-5 pt-1 max-w-xl">
              {project.images.map((img, i) => (
                <figure key={i} className="space-y-3">
                  <div className="border border-rim bg-rim/10 overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto max-h-[280px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-[11px] text-muted/65 text-center leading-relaxed px-2">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <span>{children}</span>,
                        a: ({ href, children }) => (
                          <a href={href} target="_blank" rel="noopener noreferrer"
                             className="text-gold/70 underline underline-offset-2 hover:text-gold transition-colors">
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {img.caption}
                    </ReactMarkdown>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default function Projects({ resetKey }) {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="border-t border-rim">
      <div
        ref={ref}
        className={`section-wrap py-24 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">

          {/* ── Left ── */}
          <div>
            <p className="section-label">Projects</p>
          </div>

          {/* ── Right ── */}
          <div>
            <h2 className="section-heading mb-11">Selected Work</h2>

            <div key={resetKey} className="space-y-3">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
