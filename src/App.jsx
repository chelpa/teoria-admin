import { useEffect, useState } from 'react'
import { PAGES } from './data/pages'
import { loadStudied, saveStudied } from './storage'
import Home from './pages/Home'
import ChapterPage from './pages/ChapterPage'
import QuizPage from './pages/QuizPage'
import GlosarioPage from './pages/GlosarioPage'

const TRACKED = PAGES.filter((p) => p.track).map((p) => p.id)

function currentRoute() {
  const id = window.location.hash.replace('#', '')
  return PAGES.some((p) => p.id === id) ? id : 'inicio'
}

export default function App() {
  const [route, setRoute] = useState(currentRoute)
  const [studied, setStudied] = useState(loadStudied)

  useEffect(() => {
    const onHash = () => {
      setRoute(currentRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const toggleStudied = (id) => {
    setStudied((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      saveStudied(next)
      return next
    })
  }

  useEffect(() => {
    if (window.innerWidth > 900) return
    const active = document.querySelector('.trail-link.is-active')
    if (active) active.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [route])

  const index = PAGES.findIndex((p) => p.id === route)
  const page = PAGES[index]

  let content
  if (route === 'inicio') content = <Home studied={studied} tracked={TRACKED} />
  else if (route === 'quiz') content = <QuizPage />
  else if (route === 'glosario') content = <GlosarioPage />
  else
    content = (
      <ChapterPage
        key={route}
        chapter={page.chapter}
        isStudied={studied.includes(route)}
        onToggleStudied={() => toggleStudied(route)}
        next={PAGES[index + 1]}
      />
    )

  return (
    <div className="app">
      <aside className="sidebar">
        <a className="brand" href="#inicio">
          <span className="brand-name">Teoría Administrativa</span>
          <span className="brand-sub">Unidad I, USACH 2026</span>
        </a>
        <nav aria-label="Secciones">
          <ol className="trail">
            {PAGES.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className={`trail-link ${route === p.id ? 'is-active' : ''} ${studied.includes(p.id) ? 'is-done' : ''}`}
                  aria-current={route === p.id ? 'page' : undefined}
                >
                  <span className="trail-dot" aria-hidden="true" />
                  <span className="trail-text">
                    <span className="trail-name">{p.nav}</span>
                    <span className="trail-sub">{p.sub}</span>
                  </span>
                  {studied.includes(p.id) && <span className="sr-only">(estudiado)</span>}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
      <main className="main">{content}</main>
    </div>
  )
}
