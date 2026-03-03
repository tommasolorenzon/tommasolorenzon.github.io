import { skills }    from '../data.js'
import { useInView } from '../hooks/useInView.js'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="expertise" className="border-t border-rim">
      <div
        ref={ref}
        className={`section-wrap py-24 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">

          {/* ── Left ── */}
          <div>
            <p className="section-label">Expertise</p>
          </div>

          {/* ── Right ── */}
          <div>
            <h2 className="section-heading mb-11">Technical Stack</h2>

            <div className="space-y-7">
              {skills.map(group => (
                <div
                  key={group.area}
                  className="group flex flex-col sm:flex-row gap-3 sm:gap-8 items-start"
                >
                  {/* Domain label */}
                  <span
                    className="text-[11px] font-medium uppercase tracking-[0.18em]
                               text-muted/50 sm:w-44 shrink-0 sm:pt-[3px]
                               group-hover:text-muted/80 transition-colors duration-200"
                  >
                    {group.area}
                  </span>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="text-[11px] px-2.5 py-[4px] border border-rim
                                   text-muted/75 tracking-wide
                                   hover:border-gold/40 hover:text-gold/90
                                   transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
