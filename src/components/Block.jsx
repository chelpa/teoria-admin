import Rich from './Rich'
import { WIDGETS } from './widgets'

const CALLOUT_LABELS = {
  clave: 'Idea clave',
  andina: 'En Andina Outdoor',
  examen: 'Para la prueba',
  libro: 'Complemento del libro',
  nota: 'Nota',
}

export function Blocks({ blocks }) {
  return blocks.map((b, i) => <Block key={i} block={b} />)
}

export default function Block({ block: b }) {
  switch (b.t) {
    case 'p':
      return (
        <p className="prose">
          <Rich text={b.text} />
        </p>
      )

    case 'h3':
      return <h3 className="sub-h">{b.text}</h3>

    case 'list': {
      const Tag = b.ordered ? 'ol' : 'ul'
      return (
        <div className="list-block">
          {b.title && <h3 className="sub-h">{b.title}</h3>}
          <Tag className={`list ${b.columns ? 'list-cols' : ''}`}>
            {b.items.map((item, i) => (
              <li key={i}>
                <Rich text={item} />
              </li>
            ))}
          </Tag>
        </div>
      )
    }

    case 'defs':
      return (
        <dl className="defs">
          {b.items.map((item, i) => (
            <div className="def" key={i}>
              <dt>{item.term}</dt>
              <dd>
                <Rich text={item.def} />
              </dd>
            </div>
          ))}
        </dl>
      )

    case 'cols':
      return (
        <div className="cols" style={{ '--n': b.cols.length }}>
          {b.cols.map((c, i) => (
            <div className="col" key={i}>
              <h4>{c.title}</h4>
              {c.sub && <p className="col-sub">{c.sub}</p>}
              {c.text && (
                <p>
                  <Rich text={c.text} />
                </p>
              )}
              {c.items && (
                <ul>
                  {c.items.map((it, j) => (
                    <li key={j}>
                      <Rich text={it} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )

    case 'flow':
      return (
        <ol className={`flow ${b.vertical ? 'flow-vertical' : ''}`}>
          {b.steps.map((s, i) => (
            <li key={i} className="flow-step">
              <span className="flow-title">{s.title}</span>
              {s.text && (
                <span className="flow-text">
                  <Rich text={s.text} />
                </span>
              )}
            </li>
          ))}
        </ol>
      )

    case 'table':
      return (
        <figure className="table-fig">
          {b.caption && <figcaption>{b.caption}</figcaption>}
          <div className="table-wrap">
            <table className={b.headless ? 'headless' : ''}>
              {!b.headless && (
                <thead>
                  <tr>
                    {b.head.map((h, i) => (
                      <th key={i} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {b.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) =>
                      j === 0 ? (
                        <th key={j} scope="row">
                          <Rich text={cell} />
                        </th>
                      ) : (
                        <td key={j}>
                          <Rich text={cell} />
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      )

    case 'callout':
      return (
        <aside className={`callout callout-${b.kind || 'nota'}`}>
          <p className="callout-label">{b.title || CALLOUT_LABELS[b.kind] || 'Nota'}</p>
          <p>
            <Rich text={b.text} />
          </p>
        </aside>
      )

    case 'qa':
      return (
        <details className="qa">
          <summary>
            <span>{b.q}</span>
            <span className="qa-hint" aria-hidden="true" />
          </summary>
          <div className="qa-body">
            {typeof b.a === 'string' ? (
              <p className="prose">
                <Rich text={b.a} />
              </p>
            ) : (
              <Blocks blocks={b.a} />
            )}
          </div>
        </details>
      )

    case 'answer':
      return (
        <article className="answer">
          <header>
            <span className="answer-label">{b.label}</span>
            <h3>{b.q}</h3>
          </header>
          {b.concepts && (
            <ul className="chips" aria-label="Conceptos usados">
              {b.concepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          )}
          <div className="answer-body">
            <Blocks blocks={b.body} />
          </div>
        </article>
      )

    case 'widget': {
      const W = WIDGETS[b.name]
      return W ? <W {...(b.props || {})} /> : null
    }

    default:
      return null
  }
}
