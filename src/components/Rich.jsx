import { Fragment } from 'react'

// Texto con **negrita** simple dentro de los datos.
export default function Rich({ text }) {
  const parts = String(text ?? '').split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}
