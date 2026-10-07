// Casos de ayudantía (Fernanda Brito): Ecológica Verde (Cap. 1) e Industrias ElectroSur (Cap. 8).

export default {
  id: 'practica',
  kicker: 'Ayudantía',
  title: 'Casos de práctica',
  meta: 'Ecológica Verde (cap. 1) e Industrias ElectroSur (cap. 8)',
  intro: 'Dos casos tipo prueba con respuestas guía. Intenta responder cada pregunta antes de abrir la respuesta.',
  sections: [
    {
      id: 'ecologica',
      title: 'Ecológica Verde',
      source: 'caso',
      blocks: [
        {
          t: 'p',
          text: 'Empresa de productos orgánicos con cinco años de crecimiento acelerado e insatisfacción creciente en producción. La directora general, Laura Méndez, que conoce a fondo los procesos, reúne a sus gerentes, propone equipos multidisciplinarios, organiza talleres, hace seguimiento semanal, valora las propuestas de los equipos y mantiene a todos informados con boletines. El clima mejora y sube la productividad.',
        },
        {
          t: 'qa',
          q: '1. ¿Dónde se ve que Laura cumple las funciones administrativas? Argumenta con la TGA.',
          a: [
            {
              t: 'defs',
              items: [
                { term: 'Planificar', def: 'Comparte datos sobre moral y productividad y delinea un plan con una visión clara que aborda las preocupaciones actuales y promueve la innovación.' },
                { term: 'Organizar', def: 'Crea equipos multidisciplinarios por proyecto y asigna a cada gerente la responsabilidad de guiar a su equipo alineado con la visión.' },
                { term: 'Dirigir', def: 'Alienta a los gerentes a opinar, crea un ambiente de confianza, organiza talleres y valora la iniciativa del grupo de producción.' },
                { term: 'Controlar', def: 'Reuniones semanales para revisar avances y dificultades, con ajustes rápidos a la estrategia.' },
              ],
            },
            {
              t: 'p',
              text: 'Desde la TGA, interviene varias variables a la vez: **personas** (clima, motivación), **estructura** (equipos multidisciplinarios) y **tareas** (optimización de un proceso). Logra eficiencia y eficacia: mejor uso de recursos y aumento de la productividad.',
            },
          ],
        },
        {
          t: 'qa',
          q: '2. ¿En qué momentos aplica Laura las habilidades administrativas?',
          a: [
            {
              t: 'defs',
              items: [
                { term: 'Técnicas', def: 'Comprende a fondo los procesos de producción y distribución de productos orgánicos.' },
                { term: 'Humanas', def: 'Escucha a los gerentes, crea confianza, hace que cada uno se sienta valorado y forma en resolución de conflictos.' },
                { term: 'Conceptuales', def: 'Ve la empresa como un todo: tiene una visión clara, alinea los objetivos de cada equipo con la visión general y conecta moral con productividad.' },
              ],
            },
          ],
        },
        {
          t: 'qa',
          q: '3. ¿Qué competencias gerenciales se evidencian?',
          a: [
            {
              t: 'defs',
              items: [
                { term: 'Conocimiento (saber)', def: 'Domina los procesos y transmite el conocimiento mediante talleres.' },
                { term: 'Habilidad (saber hacer)', def: 'Resuelve problemas, trabaja con los demás y tiene visión global.' },
                { term: 'Juicio (saber analizar)', def: 'Evalúa las situaciones con datos, toma decisiones informadas y evalúa con cuidado la propuesta de producción antes de implementarla.' },
                { term: 'Actitud (hacer que las cosas sucedan)', def: 'Promueve la innovación, actúa como agente de cambio y se enfoca en resultados.' },
              ],
            },
          ],
        },
        {
          t: 'qa',
          q: '4. ¿De qué manera Laura actúa como agente de cambio y qué impacto tiene?',
          a: 'Laura impulsa una cultura de innovación, empodera a los equipos y comunica el cambio de forma constante, lo que reduce la ansiedad y fortalece el sentido de pertenencia. Encaja con las megatendencias: de la **jerarquía a la comunicación lateral** y de la representación a la **participación y el empoderamiento**. El impacto es un clima más comprometido, ideas que nacen desde producción, mayor productividad y bases para un crecimiento sostenible.',
        },
      ],
    },
    {
      id: 'electrosur',
      title: 'Industrias ElectroSur',
      source: 'caso',
      blocks: [
        {
          t: 'p',
          text: 'Fabricante de electrodomésticos cuyos departamentos trabajaron una década casi sin coordinarse. Ante importadores con precios más bajos, nuevas regulaciones de reciclaje y cambio tecnológico acelerado, el gerente general, Mauricio Fuentes, rediseña los flujos de la empresa, instala canales de retroalimentación, renueva la planta y a la vez invierte en las relaciones humanas. Tras meses turbulentos y varias reorganizaciones, el desempeño conjunto supera al de las áreas por separado.',
        },
        {
          t: 'qa',
          q: '5. Identifica los cinco parámetros del sistema en ElectroSur.',
          a: [
            { t: 'widget', name: 'OpenSystem', props: { example: 'electrosur' } },
            {
              t: 'defs',
              items: [
                { term: 'Entradas', def: 'Materias primas, información de mercado y capital que la empresa importa.' },
                { term: 'Procesamiento', def: 'El proceso productivo que las transforma en electrodomésticos.' },
                { term: 'Salidas', def: 'Electrodomésticos terminados que se exportan al mercado.' },
                { term: 'Retroalimentación', def: 'Encuestas de satisfacción, reportes de devoluciones y reuniones mensuales con proveedores, para corregir la calidad y anticipar regulaciones.' },
                { term: 'Ambiente', def: 'Competidores importadores con precios bajos, regulaciones medioambientales sobre reciclaje y aceleración del cambio tecnológico.' },
              ],
            },
          ],
        },
        {
          t: 'qa',
          q: '6. ¿Cómo se ven la entropía negativa y la homeostasis dinámica (Katz y Kahn)?',
          a: [
            {
              t: 'p',
              text: '**Entropía negativa.** Para evitar que la empresa se estanque o “se agote”, Mauricio instala canales permanentes de retroalimentación: importa información del ambiente (clientes, devoluciones, proveedores) y la usa para renovarse. La renovación de maquinaria y software también es energía nueva que entra al sistema.',
            },
            {
              t: 'p',
              text: '**Homeostasis dinámica o estado firme.** La empresa cambia mucho (reorganiza su jerarquía varias veces, elimina una gerencia, crea equipos transversales) y aun así absorbe esas perturbaciones sin perder su capacidad de operar ni su identidad. Mantiene el equilibrio cambiando.',
            },
          ],
        },
        {
          t: 'qa',
          q: '7. Según el modelo sociotécnico de Tavistock, ¿cómo se manifiestan los subsistemas técnico y social, y cómo se relacionan?',
          a: [
            {
              t: 'defs',
              items: [
                { term: 'Subsistema técnico', def: 'Renovación de maquinaria, software de programación de producción y rediseño del layout para reducir tiempos muertos.' },
                { term: 'Subsistema social', def: 'Capacitación de supervisores en manejo de conflictos, rotación de tareas y horarios flexibles.' },
                { term: 'Interdependencia', def: 'Mauricio entiende que la actualización tecnológica sola no bastaba si el personal no se sentía parte del cambio. Intervenir ambos a la vez explica el desempeño superior.' },
              ],
            },
          ],
        },
        {
          t: 'qa',
          q: '8. ¿Cómo evidenció ElectroSur el comportamiento probabilístico, la morfogénesis, la resiliencia y la sinergia?',
          a: [
            {
              t: 'defs',
              items: [
                { term: 'Comportamiento probabilístico', def: 'Los primeros meses fueron turbulentos y hubo que reorganizar más de una vez: los resultados no eran predecibles.' },
                { term: 'Morfogénesis', def: 'La empresa modificó su propia estructura: eliminó una gerencia intermedia y creó equipos transversales.' },
                { term: 'Resiliencia', def: 'Absorbió las perturbaciones y la resistencia de algunos colaboradores sin perder su capacidad de operar ni su identidad.' },
                { term: 'Sinergia', def: 'La coordinación entre producción, marketing, finanzas y recursos humanos generó un valor que ningún departamento lograba por separado.' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
