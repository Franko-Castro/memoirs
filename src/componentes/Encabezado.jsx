import './Encabezado.css';

function Encabezado() {
  return (
    <header className="encabezado-fijo">
      <div className="contenido-encabezado">
        {/* Logo */}
        <a href="#inicio" className="logo">
          <span className="logo-icono">✎</span>
          <span className="logo-texto">Memoirs</span>
          <span className="logo-badge">Nº 01</span>
        </a>

        {/* Navegación — los destinos corresponden a los id de cada sección */}
        <nav className="navegacion-principal" aria-label="Navegación principal">
          <a href="#inicio" className="nav-enlace activo">Inicio</a>
          <a href="#funciones" className="nav-enlace">Funciones</a>
          <a href="#casos" className="nav-enlace">Casos de Uso</a>
          <a href="#testimonios" className="nav-enlace">Testimonios</a>
          <a href="#cuaderno" className="nav-enlace">Cuaderno</a>
        </nav>

        {/* Acciones */}
        <div className="acciones-encabezado">
          <a href="#acceso" className="enlace-login">Iniciar Sesión</a>
          <a href="#acceso" className="boton-primario">
            <span className="material-icono">menu_book</span>
            Abrir Libreta
          </a>
          <a href="#acceso" className="avatar-perfil" aria-label="Ir al inicio de sesión">👤</a>
        </div>
      </div>
    </header>
  );
}

export default Encabezado;