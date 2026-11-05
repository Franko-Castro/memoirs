import './seccionesBase.css';
import './SeccionCTA.css';

function SeccionCTA() {
  return (
    <section className="seccion-cta" id="cuaderno">
      <div className="contenedor-cta">
        <div className="tarjeta-cta">
          {/* Cintas washi en las esquinas */}
          <span className="washi-cta washi-izq" aria-hidden="true" />
          <span className="washi-cta washi-der" aria-hidden="true" />

          <span className="etiqueta-cabecera">
            <span className="material-icono">edit</span>
            Última página
          </span>

          <h2 className="titulo-cta">
            ¿Lista para abrir
            <br />
            <em className="texto-manuscrito texto-primario">tu primera libreta?</em>
          </h2>

          <p className="descripcion-cta">
            Créala en menos de un minuto. Sin tarjeta, sin rastreadores y con
            tu primer cuaderno gratis para siempre.
          </p>

          <div className="acciones-cta">
            <a href="#acceso" className="boton-cta-primario">
              <span className="material-icono">menu_book</span>
              <span>Crear mi libreta gratuita</span>
              <span className="material-icono">arrow_forward</span>
            </a>
            <a href="#demo" className="boton-cta-secundario">
              <span className="material-icono">visibility</span>
              <span>Ver un cuaderno de ejemplo</span>
            </a>
          </div>

          <ul className="detalles-cta">
            <li>
              <span className="material-icono">check_circle</span>
              Gratis para empezar
            </li>
            <li>
              <span className="material-icono">check_circle</span>
              Sin tarjeta de crédito
            </li>
            <li>
              <span className="material-icono">check_circle</span>
              Cancela cuando quieras
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SeccionCTA;
