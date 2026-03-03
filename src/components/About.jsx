import { about, stats } from '../data.js'
import { useInView }    from '../hooks/useInView.js'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="border-t border-rim">
      <div
        ref={ref}
        className={`section-wrap py-24 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">

          {/* ── Left column: label + stats ── */}
          <div>
            <p className="section-label">About</p>

            <div className="mt-12 space-y-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-serif text-[2.2rem] font-medium text-gold leading-none">
                    {value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: copy ── */}
          <div className="flex flex-col justify-start pt-1">
            <h2 className="section-heading mb-9">Profile</h2>

            {about.map((para, i) => (
              <p
                key={i}
                className={`text-[15px] text-muted leading-[1.9] max-w-[60ch] ${
                  i > 0 ? 'mt-6' : ''
                }`}
              >
                {para.replace(/\s+/g, ' ').trim()}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
