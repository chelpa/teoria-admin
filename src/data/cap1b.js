// Chiavenato, Capítulo 1, Parte II: Orígenes de la administración y Administración Científica.

export default {
  id: 'cap1b',
  kicker: 'Chiavenato, capítulo 1, parte II',
  title: 'Orígenes y Administración Científica',
  meta: 'Sesión 3, 28 de septiembre',
  intro:
    'De las pirámides a la fábrica: por qué la eficiencia se volvió un problema de administración, y cómo Taylor, los Gilbreth, Emerson y Ford intentaron resolverlo.',
  sections: [
    {
      id: 'origenes',
      title: 'La administración es más antigua que la empresa',
      source: 'diapositivas',
      blocks: [
        {
          t: 'cols',
          cols: [
            { title: 'Egipto', text: 'Las grandes obras exigían planificación y coordinación.' },
            { title: 'Mesopotamia', text: 'Registros, comercio y organización del trabajo.' },
            { title: 'Hoy', text: 'La escala cambia; la necesidad de coordinar permanece.' },
          ],
        },
        {
          t: 'callout',
          kind: 'clave',
          text: 'Administrar surge cuando el trabajo colectivo necesita coordinación para alcanzar un objetivo.',
        },
      ],
    },
    {
      id: 'revolucion',
      title: 'La Revolución Industrial cambia el problema',
      source: 'diapositivas',
      blocks: [
        {
          t: 'flow',
          steps: [
            { title: 'Antes', text: 'Talleres pequeños y trabajo artesanal.' },
            { title: 'Cambio', text: 'Máquinas, fábricas y especialización.' },
            { title: 'Nuevo desafío', text: 'Miles de tareas, personas y recursos.' },
            { title: 'Respuesta', text: 'Métodos de gestión y control.' },
          ],
        },
        {
          t: 'p',
          text: 'Con la fábrica, la eficiencia deja de ser intuitiva y se convierte en un problema de administración.',
        },
        {
          t: 'callout',
          kind: 'andina',
          text: 'Andina repite esta historia en pequeño: en 2015 Camila diseñaba, compraba las telas y cosía los prototipos; en 2026 hay 90 personas. Lo que funcionaba de forma intuitiva en el taller ya no alcanza.',
        },
      ],
    },
    {
      id: 'taylor',
      title: 'Taylor: administrar observando y midiendo',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Frederick W. Taylor busca reemplazar la improvisación por métodos sistemáticos de trabajo. Su objetivo: **elevar la productividad, reducir los costos unitarios y crear cooperación** entre administración y trabajadores.',
        },
        {
          t: 'cols',
          cols: [
            { title: 'Observar', text: 'Estudiar cómo se realiza la tarea.' },
            { title: 'Medir', text: 'Tiempos, movimientos y resultados.' },
            { title: 'Estandarizar', text: 'Definir el mejor método conocido.' },
            { title: 'Capacitar', text: 'Seleccionar y preparar al trabajador.' },
          ],
        },
      ],
    },
    {
      id: 'ort',
      title: 'Organización Racional del Trabajo (ORT)',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'La ORT pasa del “cada uno a su manera” a un método de trabajo. Organiza la tarea para eliminar desperdicios y elevar el rendimiento; es la administración científica tratada como ciencia. Sus cinco componentes:',
        },
        {
          t: 'list',
          items: [
            'Estudio de **tiempos y movimientos**',
            '**División** del trabajo y **especialización**',
            '**Diseño de puestos** y tareas',
            '**Estándares** de producción',
            '**Selección** científica y **capacitación**',
          ],
        },
        {
          t: 'callout',
          kind: 'clave',
          title: 'Resultado buscado',
          text: 'Menos movimientos inútiles, menor variabilidad y mayor productividad.',
        },
        {
          t: 'list',
          title: 'Ventajas de estandarizar los métodos de trabajo',
          ordered: true,
          items: [
            'Elimina el desperdicio de esfuerzo humano y los movimientos inútiles.',
            'Racionaliza la selección de los obreros y su adaptación al trabajo.',
            'Facilita la capacitación y aumenta la eficiencia y el rendimiento mediante la especialización.',
            'Distribuye el trabajo de forma uniforme, sin falta ni exceso de labores.',
            'Define métodos y establece normas para ejecutar el trabajo.',
            'Da una base uniforme para fijar salarios equitativos e incentivos de producción.',
          ],
        },
      ],
    },
    {
      id: 'gilbreth',
      title: 'Frank y Lillian Gilbreth: movimientos y fatiga',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'El foco se desplaza al detalle de cómo se ejecuta físicamente una tarea.',
        },
        {
          t: 'flow',
          steps: [
            { title: 'Movimiento', text: 'Eliminar movimientos inútiles.' },
            { title: 'Secuencia', text: 'Ordenar los movimientos útiles.' },
            { title: 'Fatiga', text: 'Reducir el esfuerzo innecesario.' },
            { title: 'Productividad', text: 'Menos desperdicio e incentivos salariales.' },
          ],
        },
        { t: 'p', text: 'La eficiencia también depende de cómo está diseñado el trabajo.' },
      ],
    },
    {
      id: 'incentivos',
      title: 'Homo economicus e incentivos',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'La Administración Científica suponía que el trabajador responde principalmente a recompensas salariales, económicas y materiales: el **homo economicus**. Por eso el pago se ligaba a la producción.',
        },
        { t: 'widget', name: 'IncentiveChart' },
        {
          t: 'defs',
          items: [
            { term: 'Incentivos', def: 'Pago ligado a la producción.' },
            { term: 'Ambiente', def: 'Iluminación, ventilación y comodidad en el puesto.' },
            { term: 'Layout', def: 'Disposición de máquinas y equipos para mejorar el flujo.' },
          ],
        },
        {
          t: 'qa',
          q: '¿El dinero explica por sí solo la motivación?',
          a: 'No, y esa es la gran crítica a la idea del homo economicus. Los experimentos de Hawthorne, dirigidos por Elton Mayo, mostraron que el reconocimiento, el grupo y las relaciones influyen tanto o más que el salario. De ahí nace la Teoría de las Relaciones Humanas, que ve al trabajador como **homo social**.',
        },
      ],
    },
    {
      id: 'supervision',
      title: 'Estandarización y supervisión funcional',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'Taylor propuso que cada obrero respondiera a **varios supervisores especializados**, cada uno en su área: producción, mantenimiento y calidad. Es lo opuesto a la unidad de mando de Fayol, donde cada persona tiene un solo jefe.',
        },
        { t: 'widget', name: 'FunctionalSupervision' },
      ],
    },
    {
      id: 'principios',
      title: 'Principios de la Administración Científica',
      source: 'diapositivas',
      blocks: [
        { t: 'h3', text: 'Taylor' },
        {
          t: 'defs',
          items: [
            { term: 'Planeación', def: 'Reemplazar la improvisación por métodos basados en el estudio científico de la tarea.' },
            { term: 'Preparación', def: 'Seleccionar y entrenar a los trabajadores según sus aptitudes, y preparar máquinas y equipos.' },
            { term: 'Control', def: 'Verificar que el trabajo se haga según las normas y el plan.' },
            { term: 'Ejecución', def: 'Distribuir atribuciones y responsabilidades para que el trabajo se ejecute con disciplina.' },
          ],
        },
        { t: 'h3', text: 'Emerson: principios de eficiencia' },
        {
          t: 'list',
          columns: true,
          items: [
            'Plan bien definido',
            'Establecer el sentido común',
            'Orientación y supervisión competentes',
            'Mantener la disciplina',
            'Honestidad y justicia social en el trabajo',
            'Registros precisos y adecuados',
            'Remuneración proporcional al trabajo',
            'Normas estandarizadas para las condiciones de trabajo',
            'Normas estandarizadas para el trabajo en sí',
            'Normas estandarizadas para las operaciones',
            'Instrucciones precisas',
            'Incentivos que fomenten rendimiento y eficiencia',
          ],
        },
        { t: 'h3', text: 'Henry Ford: de la eficiencia de la tarea a la producción en masa' },
        {
          t: 'cols',
          cols: [
            { title: 'Intensificación', text: 'Reducir el tiempo de producción.' },
            { title: 'Economía', text: 'Reducir inventarios y capital inmovilizado.' },
            { title: 'Productividad', text: 'Aumentar la capacidad mediante la especialización.' },
          ],
        },
        {
          t: 'flow',
          steps: [{ title: 'Estandarización' }, { title: 'Flujo' }, { title: 'Volumen' }, { title: 'Menor costo unitario' }],
        },
      ],
    },
    {
      id: 'excepcion',
      title: 'El principio de excepción',
      source: 'diapositivas',
      blocks: [
        {
          t: 'p',
          text: 'El administrador no debe revisarlo todo. Se fija un estándar y solo llegan a su escritorio las **excepciones**: los resultados que se alejan mucho de lo normal, para bien o para mal. Lo rutinario se resuelve en los niveles de abajo.',
        },
        { t: 'widget', name: 'ExceptionChart' },
        {
          t: 'callout',
          kind: 'andina',
          text: 'Camila hace lo contrario: revisa cada compra grande, aprueba cada diseño y contrata personalmente. Aplicar el principio de excepción le devolvería tiempo para mirar el ambiente.',
        },
      ],
    },
    {
      id: 'critica',
      title: 'Apreciación crítica',
      source: 'diapositivas',
      blocks: [
        {
          t: 'defs',
          items: [
            { term: 'Mecanicismo', def: 'Ve la organización como una máquina y al trabajador como una pieza de ella.' },
            { term: 'Superespecialización del obrero', def: 'Tareas tan simples y repetitivas que el trabajo se vuelve monótono y pierde sentido.' },
            { term: 'Visión microscópica del ser humano', def: 'Reduce a la persona al homo economicus, motivado solo por dinero.' },
            { term: 'Ausencia de comprobación científica', def: 'Se llamó científica, pero tuvo poca investigación experimental que respaldara sus afirmaciones.' },
            { term: 'Enfoque incompleto', def: 'Mira solo la organización formal e ignora la informal: grupos, relaciones, cultura.' },
            { term: 'Limitación del campo de aplicación', def: 'Se concentra en la fábrica y la producción, no en la empresa completa.' },
            { term: 'Enfoque prescriptivo y normativo', def: 'Dice cómo deberían hacerse las cosas, como una receta, más que explicar lo que ocurre.' },
            { term: 'Enfoque de sistema cerrado', def: 'Estudia la organización hacia adentro e ignora el ambiente.' },
            { term: 'Pioneros de la administración', def: 'Pese a sus límites, fue el primer intento serio de una teoría de la administración: el inicio de la TGA.' },
          ],
        },
        {
          t: 'callout',
          kind: 'clave',
          title: 'Puente al capítulo 8',
          text: 'La crítica de sistema cerrado conecta directo con la teoría de sistemas: una organización que solo se mira hacia adentro no ve el mercado. La producción de Andina, rápida y sin desperdicio pero fabricando lo que no se vende, es Taylor sin ambiente.',
        },
      ],
    },
    {
      id: 'resumen',
      title: 'Resumen de aportes',
      source: 'diapositivas',
      blocks: [
        {
          t: 'table',
          head: ['Autor', 'Aporte clave'],
          rows: [
            ['Taylor', 'Eliminación del desperdicio, la administración como ciencia, ORT, división del trabajo, tiempos y movimientos, método de trabajo, selección y capacitación, estandarización, supervisión funcional.'],
            ['Gilbreth', 'Movimientos elementales, racionalización del trabajo, estudio de la fatiga, especialización e incentivos salariales.'],
            ['Emerson', 'Principios de eficiencia.'],
            ['Ford', 'Producción en masa: intensificación, economía y productividad.'],
          ],
        },
        {
          t: 'p',
          text: 'Con estos aportes comienza la TGA: el primer enfoque integrado, la lucha contra el desperdicio y la búsqueda de la eficiencia.',
        },
      ],
    },
  ],
}
