// Chiavenato, Capítulo 1: La administración y sus perspectivas.
// Cada sección tiene `source`: "diapositivas" (clase), "libro" (complemento de Chiavenato) o "caso".
// Para agregar contenido del PDF completo, suma secciones o bloques a este arreglo.

export default {
  id: 'cap1',
  kicker: 'Chiavenato, capítulo 1',
  title: 'La administración y sus perspectivas',
  meta: 'Sesiones 1 y 2, 21 y 23 de septiembre',
  intro:
    'Qué hace un administrador, con qué habilidades y competencias, y por qué la administración cambia cuando cambia el entorno. Es la base de todo lo que viene después.',
  sections: [
    {
      id: 'que-es',
      title: '¿Qué es administrar?',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Administrar no es solo dirigir. Es **transformar objetivos en resultados** coordinando personas y recursos, con eficiencia y eficacia, en un entorno que cambia.',
        },
        {
          t: 'flow',
          steps: [
            { title: 'Objetivos', text: 'Definir hacia dónde quiere llegar la organización.' },
            { title: 'Administración', text: 'Coordinar personas y recursos.' },
            { title: 'Resultados', text: 'Con eficiencia y eficacia, en un entorno cambiante.' },
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Eficiencia',
              def: 'Usar bien los recursos. Mira los **medios**: tiempo, costo, desperdicio. Es “hacer bien las cosas”.',
            },
            {
              term: 'Eficacia',
              def: 'Alcanzar los objetivos. Mira los **fines**: ventas, clientes satisfechos, metas cumplidas. Es “hacer las cosas correctas”.',
            },
            {
              term: 'Adaptación',
              def: 'Responder al entorno: leer los cambios del mercado, la tecnología y la sociedad, y ajustarse a tiempo.',
            },
          ],
        },
        { t: 'widget', name: 'EfficiencyMatrix' },
        {
          t: 'callout',
          kind: 'clave',
          title: '¿Puede una organización ser eficiente y no ser eficaz?',
          text: 'Sí. Optimizar recursos persiguiendo el objetivo equivocado es eficiencia sin eficacia. Lograr el objetivo a cualquier costo es eficacia sin eficiencia. Una buena administración busca ambas al mismo tiempo.',
        },
        {
          t: 'callout',
          kind: 'nota',
          title: 'Abarrotes Tito o Jumbo',
          text: '¿Cuál de los dos no necesita administración? Ninguno. Desde un negocio familiar hasta una multinacional cambia la escala, no la necesidad de administrar.',
        },
      ],
    },
    {
      id: 'proceso',
      title: 'El proceso administrativo',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Las cuatro funciones forman un **ciclo continuo**: lo que muestra el control alimenta la siguiente planificación. Activa el diagnóstico para ver cómo está cada función en Andina Outdoor.',
        },
        { t: 'widget', name: 'ProcessCycle' },
        {
          t: 'qa',
          q: 'Pregunta para discutir: ¿cuál de estos pilares falla primero en una empresa?',
          a: 'No hay una respuesta única. En empresas que crecen rápido suele fallar primero **organizar**: el fundador sigue haciendo todo, no se definen roles ni se delega autoridad, y la estructura queda chica para el tamaño. Cuando eso pasa, el control también se debilita, porque nadie es responsable de medir cada resultado. Andina Outdoor es exactamente este caso.',
        },
      ],
    },
    {
      id: 'habilidades',
      title: 'Habilidades del administrador (Katz)',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Una **habilidad** es la capacidad de transformar el conocimiento en acción, de modo que resulte en el desempeño deseado. Robert L. Katz identifica tres tipos que todo administrador exitoso necesita.',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Técnicas',
              def: 'Uso de conocimientos especializados y su aplicación en el trabajo concreto: métodos, procesos, herramientas, manejo de objetos físicos.',
            },
            {
              term: 'Humanas',
              def: 'Facilidad de relación interpersonal y grupal: comunicar, motivar, coordinar, resolver conflictos.',
            },
            {
              term: 'Conceptuales',
              def: 'Ver la organización como un todo y trabajar con ideas y conceptos: entender cómo se relacionan las partes entre sí y con el entorno.',
            },
          ],
        },
        { t: 'widget', name: 'KatzLevels' },
        {
          t: 'callout',
          kind: 'examen',
          title: 'Regla para la prueba',
          text: 'A medida que se sube en la jerarquía pesan menos las habilidades técnicas y más las conceptuales. Las humanas son necesarias en todos los niveles.',
        },
      ],
    },
    {
      id: 'competencias',
      title: 'Competencias del administrador',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Una **competencia** es la cualidad de quien tiene habilidad para analizar una situación, resolver problemas y presentar soluciones creativas. Las competencias son el mayor patrimonio personal del administrador: su capital intelectual.',
        },
        {
          t: 'cols',
          cols: [
            {
              title: 'Conocimiento',
              sub: 'Saber',
              items: ['Know-how', 'Aprender a aprender', 'Aprender continuamente', 'Ampliar el conocimiento', 'Transmitir y compartir el conocimiento'],
            },
            {
              title: 'Habilidad',
              sub: 'Saber hacer',
              items: ['Aplicar el conocimiento', 'Visión global y sistémica', 'Resolver problemas', 'Saber hacer bien', 'Trabajar con los demás', 'Aportar soluciones'],
            },
            {
              title: 'Juicio',
              sub: 'Saber analizar',
              items: ['Evaluar la situación', 'Obtener datos e información', 'Tener espíritu crítico', 'Juzgar los hechos', 'Ponderar con equilibrio', 'Definir prioridades'],
            },
            {
              title: 'Actitud',
              sub: 'Saber hacer que las cosas sucedan',
              items: ['Actitud emprendedora', 'Innovación', 'Agente de cambio', 'Asumir riesgos', 'Enfoque en resultados', 'Autorrealización'],
            },
          ],
        },
        {
          t: 'callout',
          kind: 'andina',
          text: 'Camila tiene conocimiento y actitud de sobra: fundó la empresa, diseña e innova. Lo que se le está quedando corto es el **juicio** para definir prioridades. Revisar cada compra no es la mejor forma de usar su tiempo.',
        },
      ],
    },
    {
      id: 'papeles',
      title: 'Papeles del administrador (Mintzberg)',
      source: 'libro',
      blocks: [
        {
          t: 'p',
          text: 'Chiavenato complementa las habilidades con los diez papeles que Henry Mintzberg observó en directivos reales, agrupados en tres categorías.',
        },
        {
          t: 'table',
          head: ['Categoría', 'Papeles', 'Qué hace'],
          rows: [
            ['Interpersonales', 'Representación, liderazgo, enlace', 'Representa a la organización, dirige y motiva a su equipo, mantiene redes de contacto.'],
            ['Informacionales', 'Monitoreo, difusión, portavoz', 'Busca y recibe información, la distribuye dentro de la organización y la comunica hacia afuera.'],
            ['Decisorios', 'Emprendedor, manejo de perturbaciones, asignación de recursos, negociación', 'Inicia cambios, resuelve crisis, decide quién recibe qué recursos y negocia con terceros.'],
          ],
        },
        {
          t: 'callout',
          kind: 'libro',
          text: 'Esta sección viene del libro, no de las diapositivas. Revísala contra tu PDF de Chiavenato cuando lo subas.',
        },
      ],
    },
    {
      id: 'perspectivas',
      title: 'La administración y sus perspectivas',
      source: 'diapositivas',
      blocks: [
        {
          t: 'list',
          items: [
            'La tarea de la administración es transformar las organizaciones en entidades **exitosas, competitivas y sostenibles**.',
            'Las personas cooperan para alcanzar en conjunto objetivos que **no podrían lograr por sí solas**.',
            'De ahí surge la necesidad de una teoría que ofrezca a los directivos modelos y estrategias para resolver los problemas de sus empresas.',
          ],
        },
        { t: 'p', text: 'Por su complejidad, la administración es a la vez ciencia, tecnología y arte.' },
        {
          t: 'cols',
          cols: [
            { title: 'Ciencia', text: 'Análisis metódico y sistemático de los datos y las evidencias.' },
            { title: 'Tecnología', text: 'Aplicación práctica y metódica de los principios de las teorías científicas.' },
            { title: 'Arte', text: 'Visión, intuición y enfoque creativo e innovador.' },
          ],
        },
        {
          t: 'table',
          caption: 'Perspectivas históricas',
          head: ['Teoría', 'Autor', 'Foco'],
          rows: [
            ['Administración científica', 'Taylor', 'Optimización del trabajo individual'],
            ['Teoría clásica', 'Fayol', 'Principios generales de la organización'],
            ['Teoría de la burocracia', 'Weber', 'Estructuras organizacionales formales'],
            ['Relaciones humanas', 'Mayo', 'El factor humano en la administración'],
          ],
        },
        {
          t: 'p',
          text: 'Cada teoría aparece cuando surgen nuevos problemas empresariales que las anteriores no resolvían.',
        },
      ],
    },
    {
      id: 'tga',
      title: 'Las seis variables de la TGA',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'La Teoría General de la Administración estudia la organización a través de seis variables. Cada teoría puso el énfasis en una de ellas, pero las seis son **interdependientes**: si cambia una, las demás se ven afectadas.',
        },
        { t: 'widget', name: 'TGAVariables' },
      ],
    },
    {
      id: 'tendencias',
      title: 'Factores y megatendencias',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Factores que están redefiniendo la administración: economía, política, mercado laboral, problemas éticos, seguridad, tecnología y medio ambiente. Sobre las empresas actúa además una cadena de fuerzas:',
        },
        {
          t: 'flow',
          steps: [
            { title: 'Crecimiento' },
            { title: 'Competencia más aguda' },
            { title: 'Avances en tecnología' },
            { title: 'Globalización' },
            { title: 'Mayor visibilidad de las organizaciones' },
          ],
        },
        {
          t: 'table',
          caption: 'Megatendencias de la administración',
          head: ['Pasando de…', 'A un estado de…', 'Variación'],
          rows: [
            ['Sociedad industrial', 'Sociedad de la información', 'Innovación y cambio'],
            ['Tecnología simple', 'Tecnología compleja', 'Mayor eficiencia'],
            ['Economía nacional', 'Economía mundial', 'Globalización y competitividad'],
            ['Corto plazo', 'Largo plazo', 'Visión de negocio y futuro'],
            ['Democracia representativa', 'Democracia participativa', 'Pluralismo y participación'],
            ['Jerarquía', 'Comunicación lateral', 'Democratización y empoderamiento'],
            ['Opción dual o binaria', 'Opción múltiple', 'Visión sistémica y situacional'],
            ['Centralización', 'Descentralización', 'Incertidumbre, imposible prever'],
            ['Ayuda institucional', 'Autoayuda', 'Autonomía y servicios diferenciados'],
          ],
        },
        {
          t: 'callout',
          kind: 'andina',
          text: 'Andina vive varias megatendencias a la vez: pasó de economía nacional a mundial (exporta a Argentina y compite con productos importados), de sociedad industrial a la de la información (vende online y atiende por Instagram), y necesita pasar de la **centralización** a la **descentralización**.',
        },
        {
          t: 'p',
          text: 'Conclusión del capítulo: toda organización debe ser administrada para lograr sus objetivos con eficiencia y competitividad.',
        },
      ],
    },
  ],
}
