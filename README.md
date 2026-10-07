# Teoría Administrativa, Unidad I

Sitio de estudio en Vite + React para Teoría Administrativa (USACH, FAE, 2º semestre 2026): Chiavenato capítulos 1 y 8, el caso Andina Outdoor resuelto, los casos de ayudantía, quiz, tarjetas y glosario.

## Cómo correrlo

Necesitas Node.js 18 o superior.

```bash
npm install
npm run dev        # abre http://localhost:5173
```

## Cómo publicarlo

```bash
npm run build          # genera dist/ para Netlify, Vercel o GitHub Pages
npm run build:single   # genera un solo HTML autocontenido en dist-single/
```

`dist/` usa rutas relativas, así que funciona en cualquier subcarpeta.

## Dónde está el contenido

Todo el texto vive en `src/data/`, separado del diseño:

| Archivo | Contenido |
| --- | --- |
| `cap1.js` | Capítulo 1: administración, funciones, Katz, competencias, TGA, megatendencias |
| `cap1b.js` | Capítulo 1, parte II: orígenes, Taylor, ORT, Gilbreth, Emerson, Ford |
| `cap8.js` | Capítulo 8: teoría de sistemas, Schein, Katz y Kahn, Tavistock |
| `caso.js` | Caso Andina Outdoor con respuestas guía |
| `practica.js` | Casos Ecológica Verde y ElectroSur |
| `oportunidades.js` | Unidad II, Muñoz (2010) |
| `quiz.js` | Preguntas del quiz |
| `glosario.js` | Glosario y tarjetas |
| `pages.js` | Orden del menú |

## Cómo agregar contenido del PDF completo

Cada capítulo es una lista de secciones, y cada sección una lista de bloques:

```js
{
  id: 'nueva-seccion',
  title: 'Título de la sección',
  source: 'libro',          // 'diapositivas' | 'libro' | 'caso'
  blocks: [
    { t: 'p', text: 'Párrafo con **negrita**.' },
    { t: 'list', items: ['uno', 'dos'], ordered: false },
    { t: 'defs', items: [{ term: 'Concepto', def: 'Definición' }] },
    { t: 'cols', cols: [{ title: 'A', text: '...' }, { title: 'B', items: ['...'] }] },
    { t: 'flow', steps: [{ title: 'Paso 1', text: '...' }, { title: 'Paso 2' }] },
    { t: 'table', head: ['Col 1', 'Col 2'], rows: [['a', 'b']] },
    { t: 'callout', kind: 'clave', title: 'Opcional', text: '...' }, // clave | andina | examen | libro | nota
    { t: 'qa', q: 'Pregunta', a: 'Respuesta' },
    { t: 'widget', name: 'OpenSystem', props: { example: 'andina' } },
  ],
}
```

Para un capítulo nuevo: crea `src/data/capX.js` con la misma forma y agrégalo a `PAGES` en `src/data/pages.js`.

Widgets disponibles (`src/components/widgets/`): `EfficiencyMatrix`, `ProcessCycle`, `KatzLevels`, `TGAVariables`, `IncentiveChart`, `FunctionalSupervision`, `ExceptionChart`, `OpenSystem`, `Synergy`, `SystemLevels`, `EntropyMeter`.

Las secciones con `source: 'libro'` (papeles de Mintzberg y apreciación crítica de la TGS) vienen de Chiavenato y no de las diapositivas: conviene verificarlas contra el PDF.

El progreso ("Marcar como estudiado") se guarda solo en el navegador de cada persona.
