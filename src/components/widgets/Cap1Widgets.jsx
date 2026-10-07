import { useState } from 'react'

/* ---------- Matriz eficiencia / eficacia ---------- */

const QUADRANTS = [
  {
    id: 'costo',
    pos: 'tl',
    title: 'Eficaz, no eficiente',
    text: 'Logra el objetivo a cualquier costo.',
    ej: 'Cumplir la fecha que prometió marketing con horas extra y envíos urgentes que se comen el margen.',
  },
  {
    id: 'ambas',
    pos: 'tr',
    title: 'Eficiente y eficaz',
    text: 'Logra el objetivo usando bien los recursos. Es la meta de una buena administración.',
    ej: 'La mochila que se vende sola por su durabilidad y se fabrica con poco desperdicio.',
  },
  {
    id: 'ninguna',
    pos: 'bl',
    title: 'Ni eficiente ni eficaz',
    text: 'Gasta mal y además no logra el objetivo.',
    ej: 'Producir con mucho desperdicio un modelo que tampoco se vende.',
  },
  {
    id: 'eficiente',
    pos: 'br',
    title: 'Eficiente, no eficaz',
    text: 'Usa bien los recursos, pero persigue el objetivo equivocado.',
    ej: 'Producción fabrica rápido y sin desperdicio una carpa que casi nadie compra.',
  },
]

export function EfficiencyMatrix({ initial = 'eficiente' }) {
  const [sel, setSel] = useState(initial)
  const q = QUADRANTS.find((x) => x.id === sel)
  return (
    <figure className="widget">
      <div className="matrix">
        <span className="matrix-y">Eficacia</span>
        <span className="matrix-y-hi">alta</span>
        <span className="matrix-y-lo">baja</span>
        <div className="matrix-grid" role="group" aria-label="Combinaciones de eficiencia y eficacia">
          {QUADRANTS.map((x) => (
            <button
              key={x.id}
              type="button"
              className={`matrix-cell pos-${x.pos} ${x.id === 'ambas' ? 'is-goal' : ''}`}
              aria-pressed={sel === x.id}
              onClick={() => setSel(x.id)}
            >
              {x.title}
            </button>
          ))}
        </div>
        <span className="matrix-x-lo">baja</span>
        <span className="matrix-x-hi">alta</span>
        <span className="matrix-x">Eficiencia</span>
      </div>
      <div className="widget-detail" aria-live="polite">
        <p className="detail-title">{q.title}</p>
        <p>{q.text}</p>
        <p className="detail-example">
          <span>Ejemplo en Andina:</span> {q.ej}
        </p>
      </div>
      <figcaption>Selecciona un cuadrante.</figcaption>
    </figure>
  )
}

/* ---------- Proceso administrativo ---------- */

const FUNCTIONS = [
  {
    id: 'planificar',
    name: 'Planificar',
    q: '¿Qué queremos lograr?',
    d: 'Definir objetivos, prioridades y acciones.',
    estado: 'débil',
    andina: 'No hay prioridades comunes entre áreas ni una respuesta definida al competidor barato o a la tendencia sustentable.',
  },
  {
    id: 'organizar',
    name: 'Organizar',
    q: '¿Cómo lo haremos?',
    d: 'Asignar recursos, roles y responsabilidades.',
    estado: 'crítica',
    andina: 'Camila concentra diseño, compras y contratación. Nadie más tiene autoridad para decidir.',
  },
  {
    id: 'dirigir',
    name: 'Dirigir',
    q: '¿Cómo movilizamos?',
    d: 'Liderar, comunicar, motivar y coordinar personas.',
    estado: 'débil',
    andina: 'Marketing y producción casi no se hablan. Marco no logra liderar a su equipo de 30.',
  },
  {
    id: 'controlar',
    name: 'Controlar',
    q: '¿Vamos bien?',
    d: 'Medir resultados, supervisar actividades y corregir desviaciones.',
    estado: 'crítica',
    andina: 'Nadie compara producción con ventas: sobran carpas de un modelo y falta el otro.',
  },
]

export function ProcessCycle({ initialAndina = false }) {
  const [andina, setAndina] = useState(initialAndina)
  return (
    <figure className="widget">
      <div className="widget-bar">
        <button type="button" className="btn" aria-pressed={andina} onClick={() => setAndina((v) => !v)}>
          {andina ? 'Ocultar diagnóstico de Andina' : 'Ver diagnóstico de Andina'}
        </button>
      </div>
      <ol className="cycle">
        {FUNCTIONS.map((f, i) => (
          <li key={f.id} className="cycle-step">
            <span className="cycle-num">{i + 1}</span>
            <p className="cycle-name">{f.name}</p>
            <p className="cycle-q">{f.q}</p>
            <p className="cycle-d">{f.d}</p>
            {andina && (
              <div className="cycle-andina">
                <span className={`pill pill-${f.estado === 'crítica' ? 'bad' : 'warn'}`}>
                  {f.estado === 'crítica' ? 'Descuidada' : 'Débil'}
                </span>
                <p>{f.andina}</p>
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className="cycle-return">Controlar retroalimenta la planificación: el ciclo vuelve a empezar.</p>
    </figure>
  )
}

/* ---------- Habilidades de Katz por nivel ---------- */

const LEVELS = [
  { id: 'institucional', short: 'Institucional', name: 'Nivel institucional', role: 'Alta dirección', c: 47, h: 38, t: 15 },
  { id: 'intermedio', short: 'Intermedio', name: 'Nivel intermedio', role: 'Gerencia', c: 31, h: 38, t: 31 },
  { id: 'operacional', short: 'Operacional', name: 'Nivel operacional', role: 'Supervisión', c: 15, h: 38, t: 47 },
]

export function KatzLevels({ initial = 'institucional' }) {
  const [sel, setSel] = useState(initial)
  const lv = LEVELS.find((l) => l.id === sel)
  const bars = [
    { k: 'c', label: 'Conceptuales', note: 'ideas y conceptos', v: lv.c },
    { k: 'h', label: 'Humanas', note: 'relación interpersonal', v: lv.h },
    { k: 't', label: 'Técnicas', note: 'manejo de objetos físicos', v: lv.t },
  ]
  return (
    <figure className="widget katz">
      <div className="katz-pyramid" role="group" aria-label="Niveles de la organización">
        {LEVELS.map((l, i) => (
          <button
            key={l.id}
            type="button"
            className={`katz-level katz-level-${i}`}
            aria-pressed={sel === l.id}
            onClick={() => setSel(l.id)}
          >
            <span className="katz-level-name">{l.short}</span>
            <span className="katz-level-role">{l.role}</span>
          </button>
        ))}
      </div>
      <div className="katz-bars" aria-live="polite">
        <p className="detail-title">
          {lv.name}: {lv.role.toLowerCase()}
        </p>
        {bars.map((b) => (
          <div className="katz-bar" key={b.k}>
            <div className="katz-bar-label">
              <span>{b.label}</span>
              <span className="muted">{b.note}</span>
            </div>
            <div className="katz-track">
              <div className={`katz-fill katz-fill-${b.k}`} style={{ width: `${b.v * 2}%` }} />
            </div>
          </div>
        ))}
        <p className="katz-marco">
          {sel === 'intermedio'
            ? 'Aquí está Marco ahora: jefe de 30 personas. Lo humano pesa tanto como lo técnico.'
            : sel === 'operacional'
              ? 'Aquí estaba Marco antes del ascenso: lo técnico pesaba más.'
              : 'Aquí debería estar Camila: viendo la empresa como un todo.'}
        </p>
      </div>
      <figcaption>Proporciones ilustrativas, según el gráfico de clase. Selecciona un nivel.</figcaption>
    </figure>
  )
}

/* ---------- Seis variables de la TGA ---------- */

const VARIABLES = [
  {
    id: 'tareas',
    name: 'Tareas',
    d: 'Cómo se ejecuta cada tarea: métodos, tiempos, especialización.',
    teorias: ['Administración científica'],
    andina: 'Producción optimiza cortes y tiempos.',
  },
  {
    id: 'estructura',
    name: 'Estructura',
    d: 'Cómo se divide el trabajo, se agrupan los cargos y se distribuye la autoridad.',
    teorias: ['Teoría clásica', 'Teoría neoclásica', 'Teoría de la burocracia', 'Teoría estructuralista'],
    andina: 'Toda la autoridad pasa por Camila.',
  },
  {
    id: 'personas',
    name: 'Personas',
    d: 'Motivación, liderazgo, grupos y comportamiento.',
    teorias: ['Relaciones humanas', 'Teoría del comportamiento', 'Desarrollo organizacional'],
    andina: 'Marco y los conflictos con su equipo.',
  },
  {
    id: 'ambiente',
    name: 'Ambiente',
    d: 'El entorno externo del que depende la organización.',
    teorias: ['Teoría estructuralista', 'Teoría de sistemas', 'Teoría de la contingencia'],
    andina: 'El retail barato y la tendencia sustentable.',
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    d: 'Los medios y conocimientos que la organización usa para producir.',
    teorias: ['Teoría de la contingencia'],
    andina: 'Las nuevas telas recicladas.',
  },
  {
    id: 'competitividad',
    name: 'Competitividad',
    d: 'La capacidad de competir en un mercado global y cambiante.',
    teorias: ['Nuevos enfoques de la administración'],
    andina: 'Competir por durabilidad, no por precio.',
  },
]

export function TGAVariables() {
  const [sel, setSel] = useState('tareas')
  const v = VARIABLES.find((x) => x.id === sel)
  return (
    <figure className="widget">
      <div className="tga">
        <div className="tga-center">Organización</div>
        {VARIABLES.map((x, i) => (
          <button
            key={x.id}
            type="button"
            className={`tga-var tga-var-${i}`}
            aria-pressed={sel === x.id}
            onClick={() => setSel(x.id)}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="widget-detail" aria-live="polite">
        <p className="detail-title">{v.name}</p>
        <p>{v.d}</p>
        <p className="detail-meta">Teorías que la enfatizan</p>
        <ul className="chips">
          {v.teorias.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="detail-example">
          <span>En Andina:</span> {v.andina}
        </p>
      </div>
      <figcaption>Énfasis de cada teoría según Chiavenato. Selecciona una variable.</figcaption>
    </figure>
  )
}

/* ---------- Gráfico de incentivo por producción ---------- */

export function IncentiveChart() {
  // Escala: eficiencia 0..120 % en x (50..410 px); remuneración 0..150 en y (220..20 px)
  const x = (e) => 50 + (e / 120) * 360
  const y = (r) => 220 - (r / 150) * 200
  return (
    <figure className="widget chart">
      <div className="chart-scroll">
        <svg viewBox="0 0 460 270" role="img" aria-labelledby="inc-title inc-desc">
          <title id="inc-title">Remuneración según eficiencia del obrero</title>
          <desc id="inc-desc">
            Hasta el 100 % de eficiencia la remuneración crece en proporción. Sobre el 100 % se suma un incentivo por producción y la línea sube más rápido.
          </desc>
          <line className="axis" x1={x(0)} y1={y(0)} x2={x(120) + 10} y2={y(0)} />
          <line className="axis" x1={x(0)} y1={y(0)} x2={x(0)} y2={y(150) - 6} />
          {[0, 50, 100, 110].map((e) => (
            <g key={e}>
              <line className="axis" x1={x(e)} y1={y(0)} x2={x(e)} y2={y(0) + 5} />
              <text className="tick" x={x(e)} y={y(0) + 20} textAnchor="middle">
                {e}%
              </text>
            </g>
          ))}
          <line className="guide" x1={x(100)} y1={y(0)} x2={x(100)} y2={y(100)} />
          <line className="guide" x1={x(110)} y1={y(0)} x2={x(110)} y2={y(122)} />
          <line className="line-base" x1={x(0)} y1={y(0)} x2={x(120)} y2={y(120)} />
          <line className="line-inc" x1={x(100)} y1={y(100)} x2={x(120)} y2={y(144)} />
          <circle className="dot-inc" cx={x(100)} cy={y(100)} r="4" />
          <text className="lbl lbl-inc" x={x(100) - 8} y={y(118)} textAnchor="end">
            Con incentivo
          </text>
          <text className="lbl" x={x(40) + 8} y={y(40) + 22}>
            Salario proporcional
          </text>
          <text className="axis-title" x={x(60)} y="262" textAnchor="middle">
            Eficiencia del obrero
          </text>
          <text className="axis-title" x="16" y={y(75)} textAnchor="middle" transform={`rotate(-90 16 ${y(75)})`}>
            Remuneración
          </text>
        </svg>
      </div>
      <figcaption>Sobre el 100 % del estándar, cada punto extra de eficiencia se paga más.</figcaption>
    </figure>
  )
}

/* ---------- Supervisión funcional ---------- */

export function FunctionalSupervision() {
  const sups = [
    { x: 20, label: 'Producción' },
    { x: 180, label: 'Mantenimiento' },
    { x: 340, label: 'Calidad' },
  ]
  const workers = [20, 135, 250, 365]
  return (
    <figure className="widget chart">
      <div className="chart-scroll">
        <svg viewBox="0 0 460 230" role="img" aria-label="Organigrama de supervisión funcional: tres supervisores especializados dirigen a los mismos cuatro obreros">
          <line className="org-line" x1="230" y1="44" x2="230" y2="70" />
          <line className="org-line" x1="70" y1="70" x2="390" y2="70" />
          {sups.map((s) => (
            <line key={s.x} className="org-line" x1={s.x + 50} y1="70" x2={s.x + 50} y2="88" />
          ))}
          {sups.map((s) =>
            workers.map((w) => (
              <line key={`${s.x}-${w}`} className="org-cross" x1={s.x + 50} y1="128" x2={w + 37.5} y2="180" />
            ))
          )}
          <rect className="org-box org-box-top" x="165" y="8" width="130" height="36" rx="6" />
          <text className="org-text" x="230" y="31" textAnchor="middle">
            Gerente de fábrica
          </text>
          {sups.map((s) => (
            <g key={s.label}>
              <rect className="org-box org-box-sup" x={s.x} y="88" width="100" height="40" rx="6" />
              <text className="org-text org-small" x={s.x + 50} y="105" textAnchor="middle">
                Supervisor de
              </text>
              <text className="org-text" x={s.x + 50} y="121" textAnchor="middle">
                {s.label}
              </text>
            </g>
          ))}
          {workers.map((w, i) => (
            <g key={w}>
              <rect className="org-box" x={w} y="180" width="75" height="34" rx="6" />
              <text className="org-text" x={w + 37.5} y="202" textAnchor="middle">
                Obrero {i + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption>Cada obrero recibe órdenes de tres supervisores, uno por especialidad.</figcaption>
    </figure>
  )
}

/* ---------- Principio de excepción ---------- */

export function ExceptionChart() {
  return (
    <figure className="widget chart">
      <div className="chart-scroll">
        <svg viewBox="0 0 440 250" role="img" aria-labelledby="exc-title exc-desc">
          <title id="exc-title">Principio de excepción</title>
          <desc id="exc-desc">
            Distribución de resultados. La zona central, entre Q1 y Q3, es rutina que se resuelve en la operación. Las colas fuera de Q1 y Q3 son excepciones que suben al administrador.
          </desc>
          <polygon className="zone-routine" points="130,190 130,110 220,30 310,110 310,190" />
          <polygon className="zone-exc" points="40,190 130,110 130,190" />
          <polygon className="zone-exc" points="310,190 310,110 400,190" />
          <polyline className="curve" points="40,190 220,30 400,190" />
          <line className="axis" x1="30" y1="190" x2="415" y2="190" />
          <line className="axis" x1="30" y1="190" x2="30" y2="20" />
          {[
            [130, 110, 'Q1'],
            [220, 30, 'Q2'],
            [310, 110, 'Q3'],
          ].map(([qx, qy, label]) => (
            <g key={label}>
              <line className="q-line" x1={qx} y1="190" x2={qx} y2={qy} />
              <text className="tick" x={qx} y="208" textAnchor="middle">
                {label}
              </text>
            </g>
          ))}
          <text className="lbl" x="220" y="165" textAnchor="middle">
            Rutina: se resuelve abajo
          </text>
          <text className="lbl lbl-exc" x="78" y="230" textAnchor="middle">
            Excepción
          </text>
          <text className="lbl lbl-exc" x="362" y="230" textAnchor="middle">
            Excepción
          </text>
          <text className="axis-title" x="12" y="105" textAnchor="middle" transform="rotate(-90 12 105)">
            Frecuencia
          </text>
        </svg>
      </div>
      <figcaption>Solo las excepciones, fuera de Q1 y Q3, llegan al escritorio del jefe.</figcaption>
    </figure>
  )
}

