import { useState } from 'react'

/* ---------- Sistema abierto: cinco parámetros ---------- */

const DEFS = {
  entradas: 'Lo que el sistema importa del ambiente: materiales, energía, información, personas y capital.',
  proceso: 'La transformación de las entradas en salidas.',
  salidas: 'Lo que el sistema exporta al ambiente: productos, servicios e información.',
  retro: 'Información sobre las salidas que vuelve al sistema para compararla con el objetivo y corregir.',
  ambiente: 'El medio que rodea al sistema, del que recibe entradas y al que entrega salidas.',
}

const EXAMPLES = {
  andina: {
    label: 'Andina Outdoor',
    entradas: [
      'Telas técnicas, algunas importadas',
      'Cierres e hilos',
      '90 trabajadores y su conocimiento',
      'Capital',
      'Información: pedidos, mensajes de Instagram, opiniones de clientes',
    ],
    proceso: ['Diseño de productos', 'Corte y confección en el taller de Puerto Varas', 'Calidad y despacho'],
    salidas: [
      'Mochilas, carpas y ropa outdoor',
      'Ventas en 4 tiendas, online, distribuidores y Argentina',
      'Reputación: “te dura 10 años”',
      'Residuos de tela',
    ],
    retro: {
      hoy: {
        estado: 'Cortada',
        items: ['Ventas por modelo que no llegan a producción', 'Clientes molestos por modelos agotados', 'Fechas prometidas que no se cumplen'],
        note: 'La información existe, pero no vuelve a producción ni a la planificación. Por eso se sigue fabricando la carpa que no se vende.',
      },
      propuesta: {
        estado: 'Conectada',
        items: ['Reunión semanal de ventas, marketing y producción', 'Datos de venta y stock por modelo', 'Reclamos y reseñas analizados por modelo'],
        note: 'Las salidas informan a las entradas: se compra y se produce según lo que el mercado pide.',
      },
    },
    micro: ['Clientes que valoran la durabilidad', 'Cadena de retail con línea barata importada', 'Proveedores de telas, incluidas las recicladas', 'Distribuidores'],
    macro: ['Tendencia de consumo sustentable', 'Clima del sur de Chile', 'Mercado argentino', 'Tecnología textil'],
  },
  electrosur: {
    label: 'Industrias ElectroSur',
    entradas: ['Materias primas importadas', 'Información de mercado', 'Capital'],
    proceso: ['Proceso productivo con maquinaria renovada', 'Software de programación de producción', 'Layout rediseñado para reducir tiempos muertos'],
    salidas: ['Electrodomésticos terminados', 'Exportados al mercado'],
    retro: {
      hoy: {
        estado: 'Conectada',
        items: ['Encuestas de satisfacción de clientes', 'Reportes de devoluciones', 'Reuniones mensuales con proveedores'],
        note: 'Permite corregir desviaciones de calidad y anticipar nuevas exigencias regulatorias.',
      },
    },
    micro: ['Competidores importadores con precios más bajos', 'Clientes', 'Proveedores'],
    macro: ['Regulaciones medioambientales sobre reciclaje de componentes', 'Aceleración del cambio tecnológico'],
  },
}

const NODES = [
  { id: 'entradas', name: 'Entradas' },
  { id: 'proceso', name: 'Procesamiento' },
  { id: 'salidas', name: 'Salidas' },
]

export function OpenSystem({ example = 'andina', selector = false }) {
  const [ex, setEx] = useState(example)
  const [sel, setSel] = useState('retro')
  const [propuesta, setPropuesta] = useState(false)
  const data = EXAMPLES[ex]
  const retro = propuesta && data.retro.propuesta ? data.retro.propuesta : data.retro.hoy
  const broken = retro.estado === 'Cortada'

  let detailItems
  let detailNote = null
  if (sel === 'retro') {
    detailItems = retro.items
    detailNote = retro.note
  } else if (sel === 'ambiente') {
    detailItems = null
  } else {
    detailItems = data[sel]
  }
  const selName = sel === 'retro' ? 'Retroalimentación' : sel === 'ambiente' ? 'Ambiente' : NODES.find((n) => n.id === sel).name

  return (
    <figure className="widget os">
      {(selector || data.retro.propuesta) && (
        <div className="widget-bar">
          {selector && (
            <div className="seg" role="group" aria-label="Ejemplo">
              {Object.entries(EXAMPLES).map(([k, v]) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={ex === k}
                  onClick={() => {
                    setEx(k)
                    setPropuesta(false)
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}
          {data.retro.propuesta && (
            <div className="seg" role="group" aria-label="Retroalimentación">
              <button type="button" aria-pressed={!propuesta} onClick={() => setPropuesta(false)}>
                Hoy
              </button>
              <button type="button" aria-pressed={propuesta} onClick={() => setPropuesta(true)}>
                Con la propuesta
              </button>
            </div>
          )}
        </div>
      )}

      <div className={`os-env ${sel === 'ambiente' ? 'is-sel' : ''}`}>
        <button type="button" className="os-env-label" aria-pressed={sel === 'ambiente'} onClick={() => setSel('ambiente')}>
          Ambiente
        </button>
        <div className="os-row">
          {NODES.map((n, i) => (
            <div className="os-cell" key={n.id}>
              <button type="button" className="os-node" aria-pressed={sel === n.id} onClick={() => setSel(n.id)}>
                <span className="os-node-name">{n.name}</span>
                <span className="os-node-sample">{data[n.id][0]}</span>
              </button>
              {i < NODES.length - 1 && <span className="os-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className={`os-loop ${broken ? 'is-broken' : ''}`} aria-hidden="true">
          <span className="os-loop-head" />
          {broken && <span className="os-loop-cut">✕</span>}
        </div>
        <button type="button" className={`os-retro ${broken ? 'is-broken' : ''}`} aria-pressed={sel === 'retro'} onClick={() => setSel('retro')}>
          Retroalimentación: {retro.estado.toLowerCase()}
        </button>
      </div>

      <div className="widget-detail" aria-live="polite">
        <p className="detail-title">
          {selName} <span className="muted">en {data.label}</span>
        </p>
        <p className="detail-def">{DEFS[sel]}</p>
        {detailItems && (
          <ul className="detail-list">
            {detailItems.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        )}
        {sel === 'ambiente' && (
          <div className="os-amb">
            <div>
              <p className="detail-meta">Microambiente</p>
              <ul className="detail-list">
                {data.micro.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="detail-meta">Macroambiente</p>
              <ul className="detail-list">
                {data.macro.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {detailNote && <p className={`detail-note ${broken ? 'is-bad' : 'is-good'}`}>{detailNote}</p>}
      </div>
      <figcaption>Selecciona cada parámetro, incluido el marco del ambiente.</figcaption>
    </figure>
  )
}

/* ---------- Sinergia ---------- */

export function Synergy() {
  const [coord, setCoord] = useState(false)
  return (
    <figure className="widget">
      <div className="widget-bar">
        <div className="seg" role="group" aria-label="Relación entre áreas">
          <button type="button" aria-pressed={!coord} onClick={() => setCoord(false)}>
            Áreas aisladas
          </button>
          <button type="button" aria-pressed={coord} onClick={() => setCoord(true)}>
            Áreas coordinadas
          </button>
        </div>
      </div>
      <div className="syn" aria-live="polite">
        <div className="syn-part">
          <span className="syn-n">2</span>
          <span className="syn-l">Marketing</span>
        </div>
        <span className="syn-op">+</span>
        <div className="syn-part">
          <span className="syn-n">2</span>
          <span className="syn-l">Producción</span>
        </div>
        <span className="syn-op">=</span>
        <div className={`syn-part syn-total ${coord ? 'is-good' : 'is-bad'}`}>
          <span className="syn-n">{coord ? 5 : 3}</span>
          <span className="syn-l">Resultado</span>
        </div>
      </div>
      <p className="syn-text">
        {coord
          ? 'Marketing promete lo que producción puede entregar, y producción fabrica lo que marketing sabe que se vende. El todo vale más que la suma: eso es sinergia.'
          : 'Marketing promete fechas que producción no puede cumplir. Cada área hace su parte, pero el cliente recibe menos: el todo vale menos que la suma.'}
      </p>
    </figure>
  )
}

/* ---------- Suprasistema, sistema, subsistemas ---------- */

export function SystemLevels() {
  return (
    <figure className="widget">
      <div className="nest">
        <div className="nest-outer">
          <p className="nest-label">
            Suprasistema <span className="muted">Mercado outdoor de Chile y Argentina</span>
          </p>
          <div className="nest-mid">
            <p className="nest-label">
              Sistema <span className="muted">Andina Outdoor</span>
            </p>
            <p className="nest-sub-label">Subsistemas</p>
            <ul className="nest-subs">
              {['Diseño', 'Compras', 'Producción', 'Marketing', 'Tiendas y venta online', 'Personas'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figcaption>Cada nivel es un sistema completo visto desde el nivel de arriba.</figcaption>
    </figure>
  )
}

/* ---------- Entropía y negentropía ---------- */

function tier(v) {
  if (v < 35)
    return {
      cls: 'is-bad',
      title: 'Se cierra: entropía',
      text: 'La empresa ignora el ambiente y repite lo de siempre. Se desordena y se desgasta: pierde clientes jóvenes, acumula stock que no se vende y las decisiones se atascan.',
    }
  if (v < 70)
    return {
      cls: 'is-warn',
      title: 'Equilibrio frágil',
      text: 'Recibe algo de información del ambiente, pero no la usa para cambiar. Sobrevive sin renovarse.',
    }
  return {
    cls: 'is-good',
    title: 'Se abre: entropía negativa',
    text: 'Importa información y energía del ambiente (tendencias, opiniones de clientes, telas recicladas) y la usa para renovarse. Conserva su identidad cambiando: homeostasis dinámica.',
  }
}

export function EntropyMeter() {
  const [v, setV] = useState(20)
  const t = tier(v)
  return (
    <figure className="widget">
      <label className="range-label" htmlFor="entropy-range">
        Cuánto intercambia Andina con su ambiente
      </label>
      <div className="range-row">
        <span className="muted">Cerrada</span>
        <input id="entropy-range" type="range" min="0" max="100" value={v} onChange={(e) => setV(Number(e.target.value))} />
        <span className="muted">Abierta</span>
      </div>
      <div className={`entropy-state ${t.cls}`} aria-live="polite">
        <p className="detail-title">{t.title}</p>
        <p>{t.text}</p>
      </div>
    </figure>
  )
}
