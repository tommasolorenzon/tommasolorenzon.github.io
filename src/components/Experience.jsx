import { experience } from '../data.js'
import { useInView }  from '../hooks/useInView.js'

/* ─── Size → Tailwind span classes ────────────────────────────
   Layout on a 3-col grid (auto-placement fills row by row):

   │ CERN (xl: 2×2) │ CERN  │ ILL (tall: 1×2) │
   │ CERN            │ CERN  │ ILL             │
   │ PoliMi (wide: 2×1)     │ GSI  (sm: 1×1)  │
   │ EPFL (full: 3×1)                          │
─────────────────────────────────────────────── */
const SIZE_CLS = {
  xl:   'md:col-span-2 md:row-span-2',
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  sm:   '',
  full: 'md:col-span-3',
}

function BentoCard({ item }) {
  const sizeCls = SIZE_CLS[item.size] ?? ''

  return (
    <div
      className={`group border border-rim bg-surface/25
                  transition-all duration-300
                  hover:bg-surface/65 hover:border-gold/25
                  p-6 flex flex-col justify-between gap-5 ${sizeCls}`}
    >
      {/* Top: org / role / period */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-[1.05rem] font-medium text-ink leading-snug">
            {item.org}
          </h3>
          <span className="text-[11px] text-muted/60 whitespace-nowrap pt-0.5 shrink-0
                           group-hover:text-muted/80 transition-colors">
            {item.period}
          </span>
        </div>

        <p className="text-sm text-muted">{item.role}</p>

        {item.note && (
          <p className="text-[11px] text-gold font-medium mt-1.5">{item.note}</p>
        )}

        <p className="text-[11px] text-muted/40 mt-1">{item.location}</p>
      </div>

      {/* Bottom: keyword chips */}
      <div className="flex flex-wrap gap-1.5">
        {item.keywords.map(kw => (
          <span
            key={kw}
            className="text-[10px] px-2 py-[3px] bg-rim/40
                       text-muted/70 tracking-wide
                       group-hover:bg-rim/60 transition-colors"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="border-t border-rim">
      <div
        ref={ref}
        className={`section-wrap py-24 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="section-label mb-5">Experience &amp; Education</p>
        <h2 className="section-heading mb-12">Background</h2>

        {/* Bento grid — items placed in document order, sizes drive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {experience.map(item => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
