import './seccionesBase.css';
import './SeccionCasosUso.css';

const CASOS = [
  {
    numero: '01',
    icono: 'school',
    titulo: 'Estudiantes',
    etiqueta: 'Apuntes de clase',
    texto:
      'Un cuaderno por materia. Escribe en el aula con la tableta, revisa en el bus y busca esa fórmula tres semanas después.',
  },
  {
    numero: '02',
    icono: 'work',
    titulo: 'Profesionales',
    etiqueta: 'Minutas y acuerdos',
    texto:
      'Registra lo que se decidió en la reunión, comparte la página como PDF y deja de perder el libretito de notas.',
  },
  {
    numero: '03',
    icono: 'favorite',
    titulo: 'Vida diaria',
    etiqueta: 'Listas y recuerdos',
    texto:
      'El mercado, la receta de la abuela, la idea que llegó mientras lavabas los trastes. Todo en el mismo lugar.',
  },
];

function SeccionCasosUso() {
  return (
    <section className="seccion-casos" id="casos">
      <div className="contenedor-casos">
        <div className="cabecera-seccion">
          <span className="etiqueta-cabecera">
            <span className="material-icono">bookmark</span>
            Casos de uso
          </span>
          <h2 className="titulo-seccion">
            Tres formas distintas de
            <br />
            <em className="texto-manuscrito texto-primario">usar la misma libreta.</em>
          </h2>
          <p className="descripcion-seccion">
            No importa si escribes para aprobar un examen, para no olvidar un acuerdo
            o para la lista del súper: el formato es el mismo, cambia el contenido.
          </p>
        </div>

        <div className="lista-casos">
          {CASOS.map((caso) => (
            <article className="tarjeta-caso" key={caso.numero}>
              <span className="numero-caso">{caso.numero}</span>

              <div className="cuerpo-caso">
                <div className="titulo-caso">
                  <span className="material-icono icono-caso">{caso.icono}</span>
                  <h3>{caso.titulo}</h3>
                </div>
                <p className="texto-caso">{caso.texto}</p>
              </div>

              <span className="etiqueta-caso">{caso.etiqueta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeccionCasosUso;
