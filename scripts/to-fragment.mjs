// Convierte dist-single/index.html en un fragmento HTML (sin <html>/<head>/<body>)
// para publicarlo como página de vista previa.
import { readFileSync, writeFileSync } from 'node:fs'

const src = readFileSync('dist-single/index.html', 'utf8')
const head = (src.match(/<head>([\s\S]*?)<\/head>/) || [, ''])[1]
const body = (src.match(/<body>([\s\S]*?)<\/body>/) || [, ''])[1]

const title = (head.match(/<title>[\s\S]*?<\/title>/) || [''])[0]
const rest = head
  .replace(/<title>[\s\S]*?<\/title>/, '')
  .replace(/<meta charset[^>]*>/i, '')
  .replace(/<meta name="viewport"[^>]*>/i, '')

writeFileSync('dist-single/teoria-admin.html', `${title}\n${rest.trim()}\n${body.trim()}\n`)
console.log('dist-single/teoria-admin.html listo')
