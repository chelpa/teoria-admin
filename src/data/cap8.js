// Chiavenato, Capítulo 8: Teoría General de Sistemas (TGS).

export default {
  id: 'cap8',
  kicker: 'Chiavenato, capítulo 8',
  title: 'Teoría General de Sistemas',
  meta: 'Sesión 4, 30 de septiembre',
  intro:
    'La organización vista como un sistema abierto que vive de su intercambio con el ambiente. De aquí salen sinergia, entropía, homeostasis y el modelo sociotécnico.',
  sections: [
    {
      id: 'sistema',
      title: '¿Qué es un sistema?',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Un sistema es un **conjunto de elementos relacionados entre sí** que, coordinadamente, contribuyen a un fin u objetivo común. Tiene una frontera que separa lo interno de lo externo, y sus partes interactúan entre ellas. Ludwig von Bertalanffy es el padre de la Teoría General de Sistemas (TGS).',
        },
        { t: 'widget', name: 'Synergy' },
        {
          t: 'p',
          text: 'Todo sistema existe dentro de otro mayor (**suprasistema**) y está formado por sistemas menores (**subsistemas**).',
        },
        { t: 'widget', name: 'SystemLevels' },
      ],
    },
    {
      id: 'caracteristicas',
      title: 'Características y tipos de sistemas',
      source: 'diapositivas',
      blocks: [
        {
          t: 'list',
          ordered: true,
          items: [
            '**Existen dentro de sistemas**: suprasistema, sistema y subsistema.',
            '**Son abiertos**: intercambian energía e información con su entorno.',
            '**Sus funciones dependen de su estructura.**',
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Sistemas rígidos', def: 'Funcionan de forma lógica y predecible (modelo científico, lógico, matemático).' },
            { term: 'Sistemas flexibles', def: 'Cambian con el entorno, como los seres vivos.' },
            { term: 'Macroambiente', def: 'Factores globales que afectan a todas las organizaciones: economía, política, tecnología, cultura.' },
            { term: 'Microambiente', def: 'Fuerzas cercanas y específicas de cada organización: clientes, competidores, proveedores, decisiones internas.' },
          ],
        },
        {
          t: 'cols',
          cols: [
            {
              title: 'Según su constitución',
              items: ['**Físicos**: maquinarias, equipos, cosas reales.', '**Abstractos o conceptuales**: planes, conceptos, filosofías, hipótesis.'],
            },
            {
              title: 'Según su naturaleza',
              items: ['**Cerrados**: no presentan intercambio con el medio.', '**Abiertos**: interactúan con el medio a través de entradas y salidas.'],
            },
          ],
        },
      ],
    },
    {
      id: 'parametros',
      title: 'Los cinco parámetros',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Todo sistema se describe con cinco parámetros. Selecciona cada uno para ver su definición y cómo se ve en un caso real.',
        },
        { t: 'widget', name: 'OpenSystem', props: { selector: true } },
        {
          t: 'defs',
          items: [
            { term: 'Entrada (input)', def: 'Lo que el sistema importa del ambiente: materiales, energía, información, personas, capital.' },
            { term: 'Procesamiento', def: 'El proceso que transforma las entradas en salidas.' },
            { term: 'Salida (output)', def: 'El resultado que el sistema exporta al ambiente: productos, servicios, información.' },
            { term: 'Retroalimentación (feedback)', def: 'Información sobre las salidas que vuelve al sistema para compararla con el objetivo y corregir.' },
            { term: 'Ambiente', def: 'El medio que rodea al sistema, del que recibe entradas y al que entrega salidas.' },
          ],
        },
        {
          t: 'callout',
          kind: 'clave',
          title: 'Sistema de control (Bertoglio)',
          text: 'Un sistema de control define qué **variables** se quieren controlar y usa la **retroalimentación** para comunicar el estado de esas variables.',
        },
      ],
    },
    {
      id: 'abierto',
      title: 'El sistema abierto',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Un sistema abierto intercambia transacciones con el ambiente y se mantiene en el mismo estado (autorregulación) aunque la materia y la energía que lo forman se renuevan continuamente. Ese equilibrio en movimiento es la **homeostasis** o equilibrio dinámico. El cuerpo humano es el ejemplo clásico.',
        },
        {
          t: 'table',
          head: ['', 'Sistema abierto', 'Sistema cerrado'],
          rows: [
            ['Ambiente', 'Interacción constante en ambas direcciones; es influido por él', 'No intercambia con el medio'],
            ['Cambio', 'Puede crecer, cambiar y adaptarse', 'Tiende a quedarse igual hasta desgastarse'],
            ['Competencia', 'Puede competir con otros sistemas', 'No compite'],
          ],
        },
      ],
    },
    {
      id: 'org-abierta',
      title: 'La organización como sistema abierto',
      source: 'diapositivas',
      blocks: [
        {
          t: 'defs',
          items: [
            { term: 'Comportamiento probabilístico', def: 'Las organizaciones son sistemas sociales: no se puede predecir con certeza cómo reaccionarán las personas ni el ambiente.' },
            { term: 'Parte de una sociedad mayor', def: 'Están dentro de un sistema mayor y formadas por partes menores.' },
            { term: 'Interdependencia de las partes', def: 'Un cambio en una parte afecta a las demás.' },
            { term: 'Homeostasis o estado firme', def: 'Tiende al equilibrio mediante unidireccionalidad (mismo fin), progreso hacia el objetivo, homeostasis y adaptabilidad.' },
            { term: 'Fronteras o límites', def: 'Definen qué está dentro y qué está fuera del sistema.' },
            { term: 'Morfogénesis', def: 'La organización puede modificar su propia estructura: compara sus resultados con lo deseado y se corrige (proceso cibernético).' },
            { term: 'Resiliencia', def: 'Capacidad de superar perturbaciones externas sin perder su identidad.' },
          ],
        },
      ],
    },
    {
      id: 'schein',
      title: 'Modelo de Schein',
      source: 'diapositivas',
      blocks: [
        {
          t: 'list',
          items: [
            'La organización es un sistema abierto.',
            'Es un sistema con objetivos y funciones múltiples.',
            'Es un conjunto de subsistemas en interacción dinámica.',
            'Los subsistemas son **mutuamente dependientes**: sus cambios se afectan entre sí y afectan al medio.',
            'La organización existe en un ambiente dinámico.',
            'Los múltiples eslabones entre organización y ambiente hacen difícil definir sus fronteras.',
          ],
        },
      ],
    },
    {
      id: 'katz-kahn',
      title: 'Modelo de Katz y Kahn',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Daniel Katz y Robert Kahn aplicaron la teoría de sistemas a la teoría administrativa. Es el modelo más preguntado en prueba: de aquí salen entropía negativa y homeostasis dinámica.',
        },
        {
          t: 'defs',
          items: [
            { term: 'Importación (entradas)', def: 'La organización recibe insumos del ambiente.' },
            { term: 'Transformación', def: 'Convierte esos insumos en productos o servicios.' },
            { term: 'Exportación (salidas)', def: 'Coloca los resultados en el ambiente.' },
            { term: 'Ciclos de eventos que se repiten', def: 'Las salidas generan nuevas entradas: se vende, entra dinero, se compran insumos y el ciclo vuelve a empezar.' },
            {
              term: 'Entropía negativa',
              def: 'Todo sistema tiende a la **entropía**: desgaste, desorden y muerte. Para sobrevivir, la organización importa más energía e información de la que consume y así se reabastece.',
            },
            {
              term: 'Información como insumo, retroalimentación negativa y codificación',
              def: 'La organización recibe información del ambiente; la retroalimentación negativa le permite corregir desviaciones, y la codificación filtra qué información es relevante.',
            },
            { term: 'Estado firme y homeostasis dinámica', def: 'Mantiene el equilibrio cambiando: crece y se adapta para conservar su carácter.' },
            { term: 'Diferenciación', def: 'Con el tiempo las funciones se multiplican y se especializan.' },
            { term: 'Equifinalidad', def: 'Se puede llegar al mismo resultado final partiendo de condiciones distintas y por caminos distintos.' },
            { term: 'Límites o fronteras', def: 'Barreras entre el sistema y el ambiente que regulan los intercambios.' },
          ],
        },
        { t: 'widget', name: 'EntropyMeter' },
        {
          t: 'list',
          title: 'Características de primer orden (las organizaciones como sistemas sociales)',
          items: [
            'No tienen limitaciones de amplitud.',
            'Necesitan entradas de mantenimiento y de producción.',
            'Son planeadas, inventadas por el ser humano e imperfectas.',
            'Presentan mayor variabilidad que los sistemas biológicos.',
            'Sus principales componentes son las funciones, las normas y los valores.',
            'Constituyen un sistema formalizado de funciones.',
            'Inclusión parcial: cada persona participa en la organización solo con una parte de su vida.',
            'La organización se define en función de su medio ambiente.',
          ],
        },
        {
          t: 'p',
          text: 'El modelo abarca además la cultura y el clima organizacional, la dinámica de sistemas, la eficiencia organizacional y la organización como un sistema de funciones (papeles).',
        },
      ],
    },
    {
      id: 'tavistock',
      title: 'Modelo sociotécnico de Tavistock',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Un grupo de psicólogos del Instituto Tavistock plantea que la organización, además de un sistema abierto, es un **sistema sociotécnico** formado por subsistemas que deben funcionar juntos.',
        },
        {
          t: 'cols',
          cols: [
            { title: 'Subsistema técnico', text: 'Tareas, instalaciones, máquinas, tecnología y layout. Determina la eficiencia potencial.' },
            { title: 'Subsistema social', text: 'Personas, relaciones, cultura y motivación. Convierte la eficiencia potencial en eficiencia real.' },
            { title: 'Subsistema gerencial', text: 'Coordina ambos y los conecta con el ambiente.' },
          ],
        },
        {
          t: 'flow',
          steps: [
            { title: 'Importación', text: 'Adquisición de materias primas.' },
            { title: 'Conversión', text: 'Transformación en productos o servicios.' },
            { title: 'Exportación', text: 'Colocación de los resultados.' },
          ],
        },
        {
          t: 'callout',
          kind: 'andina',
          text: 'En Andina el subsistema técnico funciona: cortes optimizados, poco desperdicio. El que falla es el social: Marco no sabe manejar a su equipo. Por eso la eficiencia potencial del taller no se convierte en resultados.',
        },
      ],
    },
    {
      id: 'critica',
      title: 'Apreciación crítica de la teoría de sistemas',
      source: 'libro',
      blocks: [
        {
          t: 'defs',
          items: [
            { term: 'Sistema abierto frente a sistema cerrado', def: 'La TGS muestra que los enfoques anteriores, como Taylor y Fayol, trataban a la organización como sistema cerrado.' },
            { term: 'Carácter integrador y abstracto', def: 'Sirve para integrar a las demás teorías, pero es difícil de aplicar en concreto.' },
            { term: 'Efecto sinérgico', def: 'Cuando sus partes colaboran, la organización produce más que la suma de ellas.' },
            { term: 'El hombre funcional', def: 'La persona actúa según los papeles que desempeña dentro del sistema.' },
          ],
        },
        {
          t: 'callout',
          kind: 'libro',
          text: 'Esta sección resume la apreciación crítica del libro. Confírmala con tu PDF de Chiavenato: la pregunta 8 de la ayudantía usa la sinergia de este apartado.',
        },
      ],
    },
  ],
}
