import { Blocks } from '../components/Block'
import { SOURCE_LABELS } from '../data/pages'

export default function ChapterPage({ chapter, isStudied, onToggleStudied, next }) {
  const jump = (id) => {
    const el = document.getElementById(`s-${id}`)
    if (!el) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <article className="page chapter">
      <header className="chapter-head">
        <p className="kicker">{chapter.kicker}</p>
        <h1>{chapter.title}</h1>
        <p className="chapter-meta">{chapter.meta}</p>
        <p className="lede">{chapter.intro}</p>
      </header>

      <nav className="toc" aria-label="En esta página">
        <p className="toc-title">En esta página</p>
        <ul>
          {chapter.sections.map((s) => (
            <li key={s.id}>
              <button type="button" onClick={() => jump(s.id)}>
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {chapter.sections.map((s) => (
        <section key={s.id} id={`s-${s.id}`} className="chapter-section">
          <div className="section-head">
            <h2>{s.title}</h2>
            {s.source && <span className={`source source-${s.source}`}>{SOURCE_LABELS[s.source]}</span>}
          </div>
          <Blocks blocks={s.blocks} />
        </section>
      ))}

      <footer className="chapter-foot">
        <button type="button" className={`btn btn-study ${isStudied ? 'is-on' : ''}`} aria-pressed={isStudied} onClick={onToggleStudied}>
          {isStudied ? 'Estudiado' : 'Marcar como estudiado'}
        </button>
        {next && (
          <a className="next-link" href={`#${next.id}`}>
            <span className="muted">Siguiente</span>
            <span>{next.nav}</span>
          </a>
        )}
      </footer>
    </article>
  )
}
