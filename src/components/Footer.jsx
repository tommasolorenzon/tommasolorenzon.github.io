import { meta } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-rim">
      <div className="section-wrap py-10 flex flex-col md:flex-row
                      items-start md:items-center justify-between gap-6">

        <span className="font-serif text-sm text-muted/70">{meta.name}</span>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${meta.email}`}
            className="text-xs text-muted/60 hover:text-gold transition-colors"
          >
            e-mail
          </a>
          <span className="text-muted/20 select-none">·</span>
          <a
            href={meta.linkedin}
            target="_blank" rel="noopener noreferrer"
            className="text-xs text-muted/60 hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted/20 select-none">·</span>
          <a
            href={meta.github}
            target="_blank" rel="noopener noreferrer"
            className="text-xs text-muted/60 hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted/20 select-none">·</span>
          <a
            href={`tel:${meta.phone.replace(/\s/g, '')}`}
            className="text-xs text-muted/60 hover:text-gold transition-colors"
          >
            Phone
          </a>
        </div>

        <span className="text-[11px] text-muted/30">© {new Date().getFullYear()}</span>

      </div>
    </footer>
  )
}
