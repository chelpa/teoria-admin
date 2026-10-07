import cap1 from './cap1'
import cap1b from './cap1b'
import cap8 from './cap8'
import caso from './caso'
import practica from './practica'
import oportunidades from './oportunidades'

// Orden del menú. `track: true` permite marcar la página como estudiada.
export const PAGES = [
  { id: 'inicio', nav: 'Inicio', sub: 'Mapa de la unidad' },
  { id: 'cap1', nav: 'Capítulo 1', sub: 'Administración y perspectivas', chapter: cap1, track: true },
  { id: 'cap1b', nav: 'Capítulo 1, parte II', sub: 'Orígenes y Taylor', chapter: cap1b, track: true },
  { id: 'cap8', nav: 'Capítulo 8', sub: 'Teoría de sistemas', chapter: cap8, track: true },
  { id: 'caso', nav: 'Caso Andina', sub: 'Análisis grupal resuelto', chapter: caso, track: true },
  { id: 'practica', nav: 'Práctica', sub: 'Ecológica Verde y ElectroSur', chapter: practica, track: true },
  { id: 'oportunidades', nav: 'Unidad II', sub: 'Oportunidades (Muñoz)', chapter: oportunidades, track: true },
  { id: 'quiz', nav: 'Quiz y tarjetas', sub: 'Ponte a prueba' },
  { id: 'glosario', nav: 'Glosario', sub: 'Todos los conceptos' },
]

export const CAP_LABELS = {
  cap1: 'Cap. 1',
  cap1b: 'Cap. 1, parte II',
  cap8: 'Cap. 8',
  op: 'Unidad II',
}

export const SOURCE_LABELS = {
  diapositivas: 'Diapositivas de clase',
  libro: 'Complemento del libro',
  caso: 'Material del caso',
}
