import { meta, research } from '../data.js'
import { useInView }      from '../hooks/useInView.js'

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Research() {
  const [ref, inView] = useInView()

  return (
    <section id="research" className="border-t border-rim">
      <div
        ref={ref}
        className={`section-wrap py-24 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">

          {/* ── Left ── */}
          <div>
            <p className="section-label">Research</p>
          </div>

          {/* ── Right ── */}
          <div>
            <h2 className="section-heading mb-11">Published Work</h2>

            <ol className="space-y-9">
              {research.map((paper, i) => (
                <li key={paper.id} className="group flex gap-6 items-start">
                  {/* Index */}
                  <span
                    className="font-serif text-sm text-gold/50 mt-[3px] tabular-nums
                               shrink-0 w-5 text-right"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div>
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2.5 text-[15px] font-medium
                                 text-ink hover:text-gold transition-colors duration-200
                                 leading-snug"
                    >
                      <span>{paper.title}</span>
                      <span
                        className="mt-[3px] shrink-0 opacity-0 group-hover:opacity-60
                                   transition-opacity duration-200"
                      >
                        <ExternalLinkIcon />
                      </span>
                    </a>

                    <p className="text-xs text-muted/70 mt-1.5 tracking-wide">
                      {paper.venue}&ensp;·&ensp;{paper.year}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* ORCID link */}
            {meta.orcid && (
              <div className="mt-11 pt-8 border-t border-rim flex flex-col sm:flex-row
                              items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-muted/40 italic">
                  4 selected publications.
                </p>
                <a
                  href={meta.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs text-muted/70
                             hover:text-gold transition-colors duration-200"
                >
                  <span>Full list on ORCID</span>
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLinkIcon />
                  </span>
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
