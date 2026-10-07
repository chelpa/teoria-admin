import { useState } from 'react'
import GLOSARIO from '../data/glosario'
import { CAP_LABELS } from '../data/pages'

const norm = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export default function GlosarioPage() {
  const [query, setQuery] = useState('')
  const [cap, setCap] = useState('todo')
  const q = norm(query.trim())
  const items = GLOSARIO.filter((g) => (cap === 'todo' || g.cap === cap) && (!q || norm(g.term).includes(q) || norm(g.def).includes(q)))

  return (
    <div className="page">
      <header className="chapter-head">
        <p className="kicker">Referencia</p>
        <h1>Glosario</h1>
        <p className="lede">Todos los conceptos de la unidad en una línea cada uno.</p>
      </header>

      <div className="quiz-controls">
        <label className="search">
          <span className="sr-only">Buscar un concepto</span>
          <input id="glosario-search" type="search" placeholder="Buscar un concepto, por ejemplo entropía" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <div className="filter-chips" role="group" aria-label="Filtrar por capítulo">
          {[['todo', 'Todo'], ...Object.entries(CAP_LABELS)].map(([k, label]) => (
            <button key={k} type="button" className="chip-btn" aria-pressed={cap === k} onClick={() => setCap(k)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="prose">No hay conceptos que coincidan con “{query}”. Prueba con otra palabra o quita el filtro.</p>
      ) : (
        <dl className="glossary">
          {items.map((g) => (
            <div key={g.term} className="gl-item">
              <dt>
                {g.term} <span className="gl-cap">{CAP_LABELS[g.cap]}</span>
              </dt>
              <dd>{g.def}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
