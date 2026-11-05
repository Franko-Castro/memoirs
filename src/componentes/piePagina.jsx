import './piePagina.css';

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="contenido-pie">
        {/* Columna 1: Logo y descripción */}
        <div className="columna-pie">
          <a href="/" className="logotipo-pie">
            <span className="icono-pie">✎</span>
            <span>Memoirs</span>
          </a>
          <p className="descripcion-pie">
            Tu cuaderno digital para capturar ideas, listas y momentos 
            importantes. Simple, rápido y siempre contigo.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="columna-pie">
          <h3 className="titulo-pie">Producto</h3>
          <ul className="lista-pie">
            <li><a href="#funciones">Características</a></li>
            <li><a href="#plantillas">Plantillas</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#novedades">Novedades</a></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div className="columna-pie">
          <h3 className="titulo-pie">Soporte</h3>
          <ul className="lista-pie">
            <li><a href="#ayuda">Centro de ayuda</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#privacidad">Privacidad</a></li>
            <li><a href="#terminos">Términos</a></li>
          </ul>
        </div>

        {/* Columna 4: Comunidad */}
        <div className="columna-pie">
          <h3 className="titulo-pie">Comunidad</h3>
          <ul className="lista-pie">
            <li><a href="#blog">Blog</a></li>
            <li><a href="#twitter">Twitter / X</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#github">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="linea-pie">
        <p>© 2026 Memoirs. Hecho con ♥ para escritores digitales.</p>
      </div>
    </footer>
  );
}

export default PiePagina;