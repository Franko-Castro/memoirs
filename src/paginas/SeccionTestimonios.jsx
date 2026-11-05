import './seccionesBase.css';
import './SeccionTestimonios.css';

const TESTIMONIOS = [
  {
    cita: 'Dejé de perder mis libretas. Empecé una en el celular y la terminé en la compu sin pensarlo.',
    nombre: 'Valentina Soto',
    rol: 'Diseñadora editorial',
    fecha: 'Ficha 01 · 12/04',
    rotacion: '-1.5deg',
    fondo: 'rosa',
  },
  {
    cita: 'La exportación a PDF me salvó el entregable: mandé las minutas sin reimprimir nada.',
    nombre: 'Mateo Arriaga',
    rol: 'Coordinador de proyectos',
    fecha: 'Ficha 02 · 28/07',
    rotacion: '1.2deg',
    fondo: 'lavanda',
  },
  {
    cita: 'Escribo a mano desde la secundaria. Es la primera app que no me obliga a cambiar de hábito.',
    nombre: 'Camila Rivas',
    rol: 'Estudiante de psicología',
    fecha: 'Ficha 03 · 05/10',
    rotacion: '-0.8deg',
    fondo: 'ambar',
  },
];

function SeccionTestimonios() {
  return (
    <section className="seccion-testimonios" id="testimonios">
      <div className="contenedor-testimonios">
        <div className="cabecera-seccion">
          <span className="etiqueta-cabecera">
            <span className="material-icono">format_quote</span>
            Testimonios
          </span>
          <h2 className="titulo-seccion">
            Lo que dicen quienes
            <br />
            <em className="texto-manuscrito texto-primario">ya escriben con nosotros.</em>
          </h2>
        </div>

        <div className="rejilla-testimonios">
          {TESTIMONIOS.map((t) => (
            <figure
              className={`ficha-testimonio fondo-${t.fondo}`}
              key={t.nombre}
              style={{ '--rotacion': t.rotacion }}
            >
              <span className="cinta-ficha" aria-hidden="true" />

              <div className="estrellas" aria-label="Cinco de cinco estrellas">
                <span className="material-icono">star</span>
                <span className="material-icono">star</span>
                <span className="material-icono">star</span>
                <span className="material-icono">star</span>
                <span className="material-icono">star</span>
              </div>

              <blockquote className="cita-testimonio">“{t.cita}”</blockquote>

              <figcaption className="firma-testimonio">
                <span className="nombre-testimonio">{t.nombre}</span>
                <span className="rol-testimonio">{t.rol}</span>
                <span className="fecha-testimonio">{t.fecha}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeccionTestimonios;
