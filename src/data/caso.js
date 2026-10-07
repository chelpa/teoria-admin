// Caso de estudio Unidad I: Andina Outdoor. Respuestas guía para el análisis grupal.

export default {
  id: 'caso',
  kicker: 'Caso de estudio, Unidad I',
  title: 'Andina Outdoor: crecer sin perder el rumbo',
  meta: 'Análisis grupal de 3 a 4 integrantes',
  intro:
    'Respuestas guía para las preguntas del análisis grupal. Cada respuesta se justifica con conceptos de la unidad, como pide la pauta. Úsenlas para discutir y armar su propia versión: en la exposición les van a preguntar.',
  sections: [
    {
      id: 'empresa',
      title: 'La empresa en una página',
      source: 'caso',
      blocks: [
        {
          t: 'table',
          head: ['', ''],
          headless: true,
          rows: [
            ['Fundación', '2015, en Puerto Varas, por Camila Rivas, ingeniera y montañista.'],
            ['Productos', 'Mochilas, carpas y ropa outdoor resistentes al clima del sur de Chile.'],
            ['Personas', '3 empleados en 2016; 90 trabajadores en 2026.'],
            ['Canales', '4 tiendas propias (Puerto Varas, Temuco, Santiago, Concepción), venta online a todo Chile, distribuidores y exportación incipiente a Argentina.'],
            ['Operación', 'Compra telas técnicas (algunas importadas), cierres e hilos, y fabrica en su taller de Puerto Varas.'],
            ['Lo que valoran los clientes', 'La durabilidad: “una mochila Andina te dura 10 años”.'],
          ],
        },
        {
          t: 'table',
          caption: 'Síntomas y el concepto que los explica',
          head: ['Síntoma', 'Concepto', 'Cap.'],
          rows: [
            ['Camila aprueba cada diseño, revisa cada compra grande y contrata personalmente. Está agotada y las decisiones se atrasan.', 'Centralización; falla en organizar; principio de excepción', '1'],
            ['Producción trabaja rápido y con poco desperdicio, pero fabrica una carpa que casi nadie compra mientras el modelo que sí se vende se agota.', 'Eficiencia sin eficacia; retroalimentación cortada', '1 y 8'],
            ['Marketing promete fechas que producción no puede cumplir; las áreas casi no se hablan.', 'Falta de sinergia; interdependencia de las partes', '8'],
            ['Una cadena de retail lanza una línea más barata e importada; clientes jóvenes se van.', 'Ambiente (competencia); entropía', '8'],
            ['Nuevas telas recicladas y tendencia sustentable que Andina no aprovecha.', 'Entropía negativa; oportunidad', '8 y U. II'],
            ['Marco, excelente técnico, tiene conflictos constantes como jefe de 30 personas.', 'Habilidades de Katz', '1'],
            ['“Está viva pero se le está desordenando en las manos.”', 'Entropía: desorden creciente', '8'],
          ],
        },
      ],
    },
    {
      id: 'a',
      title: 'A. La organización y el administrador',
      source: 'caso',
      blocks: [
        {
          t: 'answer',
          label: 'A1',
          q: '¿Cuáles de las cuatro funciones administrativas está descuidando Camila?',
          concepts: ['Proceso administrativo', 'Organizar', 'Controlar', 'Centralización'],
          body: [
            {
              t: 'p',
              text: 'Camila está ocupada todo el día, pero en tareas operativas: aprobar diseños, revisar compras, contratar. Las funciones administrativas propiamente tales quedan sin hacer. Las más descuidadas son **organizar** y **controlar**.',
            },
            {
              t: 'defs',
              items: [
                {
                  term: 'Organizar (la más grave)',
                  def: 'Organizar es asignar recursos, roles y responsabilidades. Con 90 personas, Camila sigue concentrando la autoridad: no delega ni define quién decide qué. El resultado es el cuello de botella que ella misma describe: está agotada y las decisiones se atrasan.',
                },
                {
                  term: 'Controlar',
                  def: 'Controlar es medir resultados y corregir desviaciones. Nadie compara lo que se produce con lo que se vende: se fabrican carpas que no salen y se agota el modelo que sí se vende. La desviación existe, pero nadie la corrige.',
                },
                {
                  term: 'Planificar (débil)',
                  def: 'No hay prioridades comunes. Marketing promete fechas por su cuenta, y la empresa no ha definido cómo responder al competidor barato ni a la tendencia sustentable.',
                },
                {
                  term: 'Dirigir (débil)',
                  def: 'Dirigir incluye coordinar y comunicar. Marketing y producción casi no se hablan, y Marco no logra liderar a su equipo.',
                },
              ],
            },
            { t: 'widget', name: 'ProcessCycle', props: { initialAndina: true } },
            {
              t: 'callout',
              kind: 'clave',
              title: 'Idea para defender',
              text: 'Camila no está ausente: está en el nivel equivocado. Hace trabajo del nivel operacional cuando su cargo es del nivel institucional.',
            },
          ],
        },
        {
          t: 'answer',
          label: 'A2',
          q: 'Marco: gran técnico, mal jefe. ¿Qué habilidad le sobra y cuál le falta para su nuevo nivel?',
          concepts: ['Modelo de Katz', 'Niveles organizacionales', 'Competencias'],
          body: [
            {
              t: 'p',
              text: 'Según Katz, el administrador necesita habilidades técnicas, humanas y conceptuales, y el peso de cada una cambia según el nivel jerárquico.',
            },
            {
              t: 'defs',
              items: [
                {
                  term: 'Le sobra: habilidad técnica',
                  def: 'Es excelente cosiendo y optimizando cortes. Esa habilidad pesa mucho en el nivel operacional, donde estaba antes del ascenso.',
                },
                {
                  term: 'Le falta: habilidad humana',
                  def: 'Como jefe de 30 personas pasó al nivel intermedio, donde importa relacionarse, comunicar, motivar y manejar conflictos. Él mismo lo reconoce: sabe hacer el producto, pero no sabe manejar gente.',
                },
                {
                  term: 'También le falta: habilidad conceptual',
                  def: 'Producir con poco desperdicio una carpa que no se vende muestra que no mira el todo. Producción es una parte del sistema y debe responder a lo que vende la empresa.',
                },
              ],
            },
            { t: 'widget', name: 'KatzLevels', props: { initial: 'intermedio' } },
            {
              t: 'callout',
              kind: 'nota',
              title: 'Ojo con la palabra “sobra”',
              text: 'La habilidad técnica no es un defecto. El problema es que Marco sigue usando la habilidad que lo hizo bueno en su cargo anterior y no ha desarrollado la que exige el nuevo.',
            },
          ],
        },
        {
          t: 'answer',
          label: 'A3',
          q: 'La carpa que nadie compra: ¿problema de eficiencia o de eficacia?',
          concepts: ['Eficiencia', 'Eficacia'],
          body: [
            {
              t: 'p',
              text: 'Es un problema de **eficacia**. Producción es eficiente: trabaja rapidísimo y desperdicia poca tela, es decir, usa bien los recursos. Pero no es eficaz, porque el objetivo no es fabricar carpas, sino venderlas y dejar a los clientes satisfechos. Hoy se fabrica muy bien lo que nadie compra, y el modelo que sí se vende se agota.',
            },
            {
              t: 'table',
              head: ['', 'Eficiencia', 'Eficacia'],
              rows: [
                ['Pregunta', '¿Usamos bien los recursos?', '¿Logramos el objetivo?'],
                ['Qué mira', 'Los medios: tiempo, tela, costo', 'Los fines: ventas, clientes'],
                ['Andina hoy', 'Alta: rápido y con poco desperdicio', 'Baja: carpas sin vender y clientes molestos'],
              ],
            },
            { t: 'widget', name: 'EfficiencyMatrix', props: { initial: 'eficiente' } },
            {
              t: 'callout',
              kind: 'examen',
              title: 'Frase para la prueba',
              text: 'Eficiencia es hacer bien las cosas; eficacia es hacer las cosas correctas. Producción hace muy bien la cosa equivocada.',
            },
          ],
        },
      ],
    },
    {
      id: 'b',
      title: 'B. La organización como sistema abierto',
      source: 'caso',
      blocks: [
        {
          t: 'answer',
          label: 'B1',
          q: 'Dibujen a Andina Outdoor como un sistema abierto con sus cinco parámetros.',
          concepts: ['Sistema abierto', 'Entradas', 'Procesamiento', 'Salidas', 'Retroalimentación', 'Ambiente'],
          body: [
            { t: 'widget', name: 'OpenSystem', props: { example: 'andina' } },
            {
              t: 'defs',
              items: [
                { term: 'Entradas', def: 'Telas técnicas (algunas importadas), cierres, hilos, 90 trabajadores, capital e información: pedidos, mensajes de Instagram y opiniones de clientes.' },
                { term: 'Procesamiento', def: 'Diseño, corte y confección en el taller de Puerto Varas: transforma insumos en mochilas, carpas y ropa outdoor.' },
                { term: 'Salidas', def: 'Productos vendidos en 4 tiendas, online, a distribuidores y a Argentina. También reputación (“te dura 10 años”) y residuos de tela.' },
                { term: 'Retroalimentación', def: 'Ventas por modelo, modelos agotados, clientes molestos, fechas incumplidas. La información existe, pero no vuelve a producción.' },
                { term: 'Ambiente', def: 'Clientes que valoran la durabilidad, la cadena de retail con línea barata, proveedores de telas recicladas, la tendencia de consumo sustentable, el mercado argentino y el clima del sur.' },
              ],
            },
            {
              t: 'callout',
              kind: 'nota',
              title: 'Para el dibujo',
              text: 'Pongan la retroalimentación como una flecha que vuelve de las salidas a las entradas, y márquenla cortada. Ese corte explica la carpa sin vender y las fechas incumplidas.',
            },
          ],
        },
        {
          t: 'answer',
          label: 'B2',
          q: 'El desencuentro entre marketing y producción muestra que falta un concepto sistémico. ¿Cuál?',
          concepts: ['Sinergia', 'Interdependencia de las partes', 'Subsistemas (Schein)'],
          body: [
            {
              t: 'p',
              text: 'Falta **sinergia**: cuando las partes de un sistema colaboran, el resultado del todo es mayor que la suma de las partes (2 + 2 = 5). En Andina pasa lo contrario. Marketing vende fechas que producción no puede cumplir, y el resultado conjunto es peor que si cada área trabajara bien por separado: clientes molestos y reputación dañada.',
            },
            {
              t: 'p',
              text: 'Detrás está la **interdependencia de las partes**. Según Schein, los subsistemas son mutuamente dependientes: lo que promete marketing condiciona lo que debe hacer producción, aunque hoy actúen como si fueran independientes.',
            },
            { t: 'widget', name: 'Synergy' },
          ],
        },
        {
          t: 'answer',
          label: 'B3',
          q: 'El retail barato y la tendencia sustentable son señales del ambiente. ¿Qué le pasa a una organización que las ignora?',
          concepts: ['Entropía', 'Entropía negativa', 'Sistema cerrado', 'Homeostasis dinámica'],
          body: [
            {
              t: 'p',
              text: 'Según Katz y Kahn, todo sistema tiende a la **entropía**: a desgastarse, desordenarse y finalmente morir. Una organización que ignora las señales de su ambiente se comporta como un **sistema cerrado** y queda expuesta a esa tendencia: sigue produciendo lo de siempre mientras el mercado se mueve. En Andina ya se ven los síntomas: clientes jóvenes que se van al producto barato y una empresa que, en palabras de Camila, se le está desordenando en las manos.',
            },
            {
              t: 'p',
              text: 'Para sobrevivir, un sistema abierto genera **entropía negativa (negentropía)**: importa del ambiente más energía e información de la que gasta, y con eso se renueva. Para Andina significa leer las señales y responder:',
            },
            {
              t: 'list',
              items: [
                'La tendencia sustentable y las telas recicladas son información y energía nuevas: una línea con telas recicladas renovaría la oferta.',
                'Frente al retail barato no conviene competir por precio, sino reforzar lo que el ambiente ya valora de Andina: la durabilidad.',
                'Mantener la **homeostasis dinámica**: cambiar lo necesario para conservar su identidad de marca resistente.',
              ],
            },
            { t: 'widget', name: 'EntropyMeter' },
          ],
        },
      ],
    },
    {
      id: 'c',
      title: 'C. Tres acciones concretas para Camila',
      source: 'caso',
      blocks: [
        {
          t: 'p',
          text: 'La pauta pide que cada acción se apoye en un concepto de la unidad. Estas tres atacan los tres problemas de fondo: la centralización, la desconexión entre áreas y el liderazgo de las jefaturas.',
        },
        {
          t: 'answer',
          label: 'Acción 1',
          q: 'Delegar y descentralizar las decisiones',
          concepts: ['Organizar', 'Descentralización', 'Principio de excepción', 'Habilidades conceptuales'],
          body: [
            {
              t: 'p',
              text: '**Qué hacer.** Nombrar responsables con autoridad real para diseño, compras y contratación, con límites claros (por ejemplo, un monto máximo de compra). Camila solo revisa las excepciones: compras sobre ese monto, diseños que cambian la línea y cargos de jefatura.',
            },
            {
              t: 'p',
              text: '**Por qué.** Es la función de organizar: asignar recursos, roles y responsabilidades. Aplica el principio de excepción de Taylor, sigue la megatendencia de la centralización a la descentralización y libera a Camila para el nivel institucional, donde pesan las habilidades conceptuales.',
            },
          ],
        },
        {
          t: 'answer',
          label: 'Acción 2',
          q: 'Conectar marketing, producción y ventas con un ciclo de retroalimentación',
          concepts: ['Retroalimentación', 'Controlar', 'Sinergia', 'Eficacia'],
          body: [
            {
              t: 'p',
              text: '**Qué hacer.** Una reunión semanal entre marketing, producción y ventas con los datos de venta y stock por modelo. Producción planifica según lo que se vende, y marketing solo promete fechas validadas por producción.',
            },
            {
              t: 'p',
              text: '**Por qué.** Restablece la retroalimentación del sistema, permite controlar (medir y corregir), genera sinergia entre subsistemas y convierte la eficiencia de producción en eficacia.',
            },
          ],
        },
        {
          t: 'answer',
          label: 'Acción 3',
          q: 'Desarrollar las habilidades humanas de las jefaturas',
          concepts: ['Habilidades humanas (Katz)', 'Subsistema social (Tavistock)'],
          body: [
            {
              t: 'p',
              text: '**Qué hacer.** Capacitar a Marco en liderazgo y manejo de conflictos, con el acompañamiento de un mentor. Si después de un plazo no funciona, ofrecerle un rol técnico de alto valor, como jefe de desarrollo de producto, y buscar para producción una jefatura con experiencia en personas.',
            },
            {
              t: 'p',
              text: '**Por qué.** En el nivel intermedio pesan las habilidades humanas (Katz). En el modelo de Tavistock, el subsistema social es el que convierte la eficiencia potencial del taller en eficiencia real.',
            },
          ],
        },
        {
          t: 'callout',
          kind: 'nota',
          title: 'Sobre la nota “contratar gente capacitada”',
          text: 'Sirve si precisan qué capacidad. Marco ya es capaz técnicamente. Lo que falta son jefaturas con **habilidades humanas**, y eso se puede contratar o formar.',
        },
        {
          t: 'callout',
          kind: 'andina',
          title: 'Si les piden una cuarta acción',
          text: 'Lanzar una línea con telas recicladas, comunicada desde la durabilidad. Se apoya en la entropía negativa (importar información del ambiente para renovarse) y cumple los tres elementos de una oportunidad de Muñoz: solución, deseabilidad del mercado y lógica de negocio.',
        },
      ],
    },
    {
      id: 'cierre',
      title: 'Actividad de cierre: exposición de dos minutos',
      source: 'caso',
      blocks: [
        {
          t: 'p',
          text: 'Acción sugerida: **delegar y descentralizar** (acción 1). Es la más importante porque destraba las otras dos: mientras Camila decida todo, no tiene tiempo para coordinar áreas ni para mirar el ambiente.',
        },
        {
          t: 'flow',
          vertical: true,
          steps: [
            { title: '0:00 a 0:20, el problema', text: 'Andina creció de 3 a 90 personas, pero Camila sigue decidiendo todo. Está agotada y las decisiones se atrasan.' },
            { title: '0:20 a 1:00, la acción', text: 'Proponemos delegar: responsables con autoridad en diseño, compras y contratación, con límites claros. Camila solo revisa las excepciones.' },
            { title: '1:00 a 1:40, el concepto', text: 'Se apoya en la función de organizar (asignar recursos, roles y responsabilidades) y en el principio de excepción de Taylor. Además sigue la megatendencia de la centralización a la descentralización.' },
            { title: '1:40 a 2:00, el cierre', text: 'Con su tiempo liberado, Camila puede subir al nivel donde pesan las habilidades conceptuales: ver la empresa como un todo y responder al ambiente.' },
          ],
        },
      ],
    },
  ],
}
