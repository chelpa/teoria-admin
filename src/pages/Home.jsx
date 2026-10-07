import Rich from '../components/Rich'

const STATIONS = [
  { id: 'cap1', name: 'Capítulo 1', when: '21 y 23 sep', x: 12.5, y: 62 },
  { id: 'cap1b', name: 'Cap. 1, parte II', when: '28 sep', x: 37.5, y: 46 },
  { id: 'cap8', name: 'Capítulo 8', when: '30 sep', x: 62.5, y: 30 },
  { id: 'caso', name: 'Caso Andina', when: 'Grupal', x: 87.5, y: 12 },
]

const ESSENTIALS = [
  'Administrar es **transformar objetivos en resultados** con eficiencia (usar bien los recursos) y eficacia (lograr el objetivo).',
  'Las cuatro funciones son **planificar, organizar, dirigir y controlar**, en un ciclo continuo.',
  'Katz: habilidades **técnicas** abajo, **conceptuales** arriba, **humanas** en todos los niveles.',
  'Competencias: **conocimiento** (saber), **habilidad** (saber hacer), **juicio** (saber analizar), **actitud** (hacer que las cosas sucedan).',
  'Taylor reemplaza la improvisación por **método**: tiempos y movimientos, estandarización, incentivos, principio de excepción.',
  'Su gran crítica: ve a la persona como **homo economicus** y a la empresa como **sistema cerrado**.',
  'Un sistema abierto tiene **entradas, procesamiento, salidas, retroalimentación y ambiente**.',
  'Sinergia: **2 + 2 = 5**. Entropía: tendencia al desorden. Entropía negativa: importar energía e información para renovarse.',
]

export default function Home({ studied, tracked }) {
  const done = tracked.filter((id) => studied.includes(id)).length
  return (
    <div className="page home">
      <header className="home-hero">
        <p className="kicker">USACH, Facultad de Administración y Economía, 2º semestre 2026</p>
        <h1>Teoría Administrativa</h1>
        <p className="lede">
          Unidad I con Chiavenato, capítulos 1 y 8: apuntes, diagramas que se pueden tocar, el caso Andina Outdoor resuelto con conceptos y
          práctica tipo prueba.
        </p>
        <p className="home-meta">
          Prof. Pablo Castro Ubal. Ayudante Fernanda Brito. Llevas {done} de {tracked.length} secciones estudiadas.
        </p>
      </header>

      <nav className="route" aria-label="Ruta de la unidad">
        <div className="route-land" aria-hidden="true">
          <div className="route-back" />
          <div className="route-front" />
        </div>
        {STATIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`route-stop ${studied.includes(s.id) ? 'is-done' : ''}`}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <span className="route-dot" aria-hidden="true" />
            <span className="route-name">{s.name}</span>
            <span className="route-when">{s.when}</span>
          </a>
        ))}
      </nav>

      <section className="home-section">
        <h2>Lo esencial en ocho líneas</h2>
        <ul className="essentials">
          {ESSENTIALS.map((e, i) => (
            <li key={i}>
              <Rich text={e} />
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <h2>Cómo usar este sitio</h2>
        <ol className="flow">
          <li className="flow-step">
            <span className="flow-title">Lee el capítulo</span>
            <span className="flow-text">Cada concepto trae un ejemplo de Andina Outdoor.</span>
          </li>
          <li className="flow-step">
            <span className="flow-title">Resuelve el caso</span>
            <span className="flow-text">Compara tus respuestas con la guía del análisis grupal.</span>
          </li>
          <li className="flow-step">
            <span className="flow-title">Ponte a prueba</span>
            <span className="flow-text">Quiz con explicación y tarjetas del glosario.</span>
          </li>
        </ol>
        <p className="prose muted-note">
          Las secciones marcadas como complemento del libro vienen de Chiavenato y no de las diapositivas. Se revisarán contra el PDF completo cuando lo
          subas.
        </p>
      </section>
    </div>
  )
}
