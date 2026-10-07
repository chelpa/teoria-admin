import { useMemo, useState } from 'react'
import QUIZ from '../data/quiz'
import GLOSARIO from '../data/glosario'
import { CAP_LABELS } from '../data/pages'

const FILTERS = [['todo', 'Todo'], ...Object.entries(CAP_LABELS)]

export default function QuizPage() {
  const [mode, setMode] = useState('quiz')
  const [filter, setFilter] = useState('todo')

  return (
    <div className="page">
      <header className="chapter-head">
        <p className="kicker">Repaso</p>
        <h1>Quiz y tarjetas</h1>
        <p className="lede">Preguntas tipo prueba con explicación, y tarjetas para memorizar los conceptos del glosario.</p>
      </header>

      <div className="quiz-controls">
        <div className="seg" role="group" aria-label="Modo">
          <button type="button" aria-pressed={mode === 'quiz'} onClick={() => setMode('quiz')}>
            Preguntas
          </button>
          <button type="button" aria-pressed={mode === 'cards'} onClick={() => setMode('cards')}>
            Tarjetas
          </button>
        </div>
        <div className="filter-chips" role="group" aria-label="Filtrar por capítulo">
          {FILTERS.map(([k, label]) => (
            <button key={k} type="button" className="chip-btn" aria-pressed={filter === k} onClick={() => setFilter(k)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {mode === 'quiz' ? <Quiz key={filter} filter={filter} /> : <Cards key={filter} filter={filter} />}
    </div>
  )
}

function Quiz({ filter }) {
  const questions = useMemo(() => QUIZ.filter((q) => filter === 'todo' || q.cap === filter), [filter])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const finished = i >= questions.length

  if (questions.length === 0) return <p className="prose">No hay preguntas para este filtro todavía.</p>

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-card quiz-end">
        <p className="quiz-score">
          {score} de {questions.length}
        </p>
        <p>{pct >= 80 ? 'Muy bien. Estás listo para la prueba en este tema.' : pct >= 50 ? 'Vas bien. Repasa las explicaciones de las que fallaste.' : 'Conviene volver a leer el capítulo antes de intentarlo de nuevo.'}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setI(0)
            setPicked(null)
            setScore(0)
          }}
        >
          Empezar de nuevo
        </button>
      </div>
    )
  }

  const q = questions[i]
  const answered = picked !== null

  return (
    <div className="quiz-card">
      <div className="quiz-top">
        <span className="muted">
          Pregunta {i + 1} de {questions.length}
        </span>
        <span className="muted">{CAP_LABELS[q.cap]}</span>
      </div>
      <div className="quiz-progress" aria-hidden="true">
        <div style={{ width: `${(i / questions.length) * 100}%` }} />
      </div>
      <p className="quiz-q">{q.q}</p>
      <div className="quiz-options">
        {q.options.map((opt, k) => {
          let cls = ''
          if (answered && k === q.answer) cls = 'is-right'
          else if (answered && k === picked) cls = 'is-wrong'
          return (
            <button
              key={k}
              type="button"
              className={`quiz-opt ${cls}`}
              disabled={answered}
              onClick={() => {
                setPicked(k)
                if (k === q.answer) setScore((s) => s + 1)
              }}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {answered && (
        <div className={`quiz-feedback ${picked === q.answer ? 'is-right' : 'is-wrong'}`} aria-live="polite">
          <p className="detail-title">{picked === q.answer ? 'Correcto.' : `No. La respuesta es: ${q.options[q.answer]}.`}</p>
          <p>{q.why}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setI((n) => n + 1)
              setPicked(null)
            }}
          >
            {i + 1 < questions.length ? 'Siguiente pregunta' : 'Ver resultado'}
          </button>
        </div>
      )}
    </div>
  )
}

function Cards({ filter }) {
  const cards = GLOSARIO.filter((g) => filter === 'todo' || g.cap === filter)
  const [open, setOpen] = useState({})
  if (cards.length === 0) return <p className="prose">No hay tarjetas para este filtro todavía.</p>
  return (
    <>
      <p className="muted cards-hint">Toca una tarjeta para ver la definición.</p>
      <ul className="cards">
        {cards.map((c) => {
          const isOpen = !!open[c.term]
          return (
            <li key={c.term}>
              <button
                type="button"
                className={`flash ${isOpen ? 'is-open' : ''}`}
                aria-expanded={isOpen}
                onClick={() => setOpen((o) => ({ ...o, [c.term]: !o[c.term] }))}
              >
                <span className="flash-term">{c.term}</span>
                {isOpen ? <span className="flash-def">{c.def}</span> : <span className="flash-cap">{CAP_LABELS[c.cap]}</span>}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
