// Progreso guardado solo en este navegador. Si el almacenamiento no está disponible, el sitio funciona igual.
const KEY = 'teoria-admin-u1-estudiado'

export function loadStudied() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

export function saveStudied(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    /* sin almacenamiento: el progreso dura solo esta sesión */
  }
}
