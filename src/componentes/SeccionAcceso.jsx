
import { useState } from 'react';
import './SeccionAcceso.css';

function SeccionAcceso({ onLogin }) {
  const [tabActivo, setTabActivo] = useState('login');

  // Datos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Estados de respuesta
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  // Limpiar el formulario al cambiar de pestaña
  function cambiarTab(tab) {
    setTabActivo(tab);
    setNombre('');
    setCorreo('');
    setContrasena('');
    setMensaje('');
    setTipoMensaje('');
  }

  // Enviar información al backend
  async function manejarAutenticacion(evento) {
    evento.preventDefault();

    setMensaje('');
    setTipoMensaje('');

    if (tabActivo === 'registro' && !nombre.trim()) {
      setMensaje('Por favor, escribe tu nombre.');
      setTipoMensaje('error');
      return;
    }

    if (contrasena.length < 8) {
      setMensaje('La contraseña debe tener al menos 8 caracteres.');
      setTipoMensaje('error');
      return;
    }

    setCargando(true);

    try {
      const endpoint = tabActivo === 'login'
        ? 'login'
        : 'registro';

      const datos = {
        correo: correo.trim(),
        contrasena
      };

      if (tabActivo === 'registro') {
        datos.nombre = nombre.trim();
      }

      const respuesta = await fetch(
        `http://localhost:3000/api/autenticacion/${endpoint}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
        }
      );

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(resultado.error || 'Ocurrió un error.');
      }

      if (tabActivo === 'registro') {
        setMensaje(resultado.mensaje);
        setTipoMensaje('exito');

        setNombre('');
        setCorreo('');
        setContrasena('');
      } else {
        // Guardar los datos de sesión para las siguientes peticiones
        sessionStorage.setItem(
          'memoirs_access_token',
          resultado.access_token
        );

        sessionStorage.setItem(
          'memoirs_refresh_token',
          resultado.refresh_token
        );

       // Avisar a App.jsx que el usuario inició sesión
if (onLogin) {
  onLogin(resultado.usuario);
}

        setMensaje('¡Bienvenido a MEMOIRS! Has iniciado sesión correctamente.');
        setTipoMensaje('exito');

        setContrasena('');
      }

    } catch (error) {
      console.error('Error de autenticación:', error);

      setMensaje(
        error.message === 'Failed to fetch'
          ? 'No se pudo conectar con el servidor. Comprueba que el backend esté funcionando.'
          : error.message
      );

      setTipoMensaje('error');

    } finally {
      setCargando(false);
    }
  }

  return (
    <section className="seccion-acceso" id="acceso">
      <div className="contenedor-acceso">

        <div className="cinta-marcador">
          <span className="material-icono">bookmark</span>
        </div>

        <div className="contenido-acceso">

          {/* Texto izquierdo */}
          <div className="columna-texto-acceso">
            <span className="etiqueta-seccion-acceso">
              Ficha de Membresía
            </span>

            <h2 className="titulo-acceso">
              Tu libreta te espera exactamente donde la dejaste.
            </h2>

            <p className="descripcion-acceso">
              Inicia sesión para sincronizar notas de mercado,
              cuadernos de estudio y bocetos en tus dispositivos
              Apple, Android y PC sin fricción.
            </p>

            <div className="lista-beneficios">
              <div className="beneficio-item">
                <span className="icono-beneficio bg-secundario">
                  <span className="material-icono">cloud_done</span>
                </span>

                <span className="texto-beneficio">
                  Respaldado al instante en la infraestructura global de Supabase.
                </span>
              </div>

              <div className="beneficio-item">
                <span className="icono-beneficio bg-primario">
                  <span className="material-icono">offline_pin</span>
                </span>

                <span className="texto-beneficio">
                  Modo 100% sin conexión: escribe sin internet y sincroniza después.
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta de biblioteca */}
          <div className="columna-tarjeta">
            <div className="tarjeta-biblioteca">

              <div className="washi-tarjeta">
                ✦ TARJETA Nº 842-B
              </div>

              {/* Cabecera */}
              <div className="cabecera-tarjeta">
                <div>
                  <span className="archivo-etiqueta">
                    ARCHIVO GENERAL DE CUADERNOS
                  </span>

                  <div className="titulo-tarjeta">
                    <span>Ficha de Lector</span>
                    <span className="subtitulo-tarjeta">
                      (Ex-Libris)
                    </span>
                  </div>
                </div>

                <div className="sello-vintage">
                  <div>REGISTRO MEMORY</div>
                  <div className="sello-subtitulo">
                    TALLER ARTESANAL
                  </div>
                </div>
              </div>

              {/* Pestañas */}
              <div className="tabs-autenticacion">
                <button
                  type="button"
                  className={`tab-btn ${tabActivo === 'login' ? 'activo' : ''}`}
                  onClick={() => cambiarTab('login')}
                >
                  <span className="material-icono">stylus</span>
                  Iniciar Sesión
                </button>

                <button
                  type="button"
                  className={`tab-btn ${tabActivo === 'registro' ? 'activo' : ''}`}
                  onClick={() => cambiarTab('registro')}
                >
                  <span className="material-icono">edit_note</span>
                  Crear Cuenta Nueva
                </button>
              </div>

              {/* Formulario */}
              <form
                className="formulario-tarjeta"
                onSubmit={manejarAutenticacion}
              >

                {/* Nombre: solo aparece al registrarse */}
                {tabActivo === 'registro' && (
                  <div className="campo-formulario">
                    <div className="campo-cabecera">
                      <label
                        className="campo-etiqueta"
                        htmlFor="nombre-usuario"
                      >
                        <span className="material-icono">person</span>
                        Nombre del lector
                      </label>

                      <span className="campo-columna">
                        COLUMNA 00
                      </span>
                    </div>

                    <input
                      id="nombre-usuario"
                      type="text"
                      placeholder="Tu nombre"
                      className="campo-input"
                      value={nombre}
                      onChange={(evento) => setNombre(evento.target.value)}
                      autoComplete="name"
                      required
                    />
                  </div>
                )}

                {/* Correo */}
                <div className="campo-formulario">
                  <div className="campo-cabecera">
                    <label
                      className="campo-etiqueta"
                      htmlFor="correo-usuario"
                    >
                      <span className="material-icono">mail</span>
                      Correo Electrónico del Lector
                    </label>

                    <span className="campo-columna">
                      COLUMNA 01
                    </span>
                  </div>

                  <input
                    id="correo-usuario"
                    type="email"
                    placeholder="maria.cuadernos@ejemplo.com"
                    className="campo-input"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Contraseña */}
                <div className="campo-formulario">
                  <div className="campo-cabecera">
                    <label
                      className="campo-etiqueta"
                      htmlFor="contrasena-usuario"
                    >
                      <span className="material-icono">lock</span>
                      Contraseña Secreta
                    </label>

                    {tabActivo === 'login' && (
                      <a href="#recuperar" className="enlace-recuperar">
                        <span className="material-icono">help</span>
                        ¿Olvidaste tu clave?
                      </a>
                    )}
                  </div>

                  <input
                    id="contrasena-usuario"
                    type="password"
                    placeholder="••••••••••••"
                    className="campo-input"
                    value={contrasena}
                    onChange={(evento) => setContrasena(evento.target.value)}
                    autoComplete={
                      tabActivo === 'login'
                        ? 'current-password'
                        : 'new-password'
                    }
                    minLength={8}
                    required
                  />
                </div>

                {/* Mensajes */}
                {mensaje && (
                  <div
                    className={`mensaje-autenticacion ${tipoMensaje}`}
                    role="status"
                    aria-live="polite"
                  >
                    {mensaje}
                  </div>
                )}

                {/* Botones */}
                <div className="acciones-formulario">
                  <button
                    type="submit"
                    className="boton-enviar"
                    disabled={cargando}
                  >
                    <span className="material-icono">
                      {cargando ? 'hourglass_empty' : 'draw'}
                    </span>

                    <span>
                      {cargando
                        ? 'Procesando...'
                        : tabActivo === 'login'
                          ? 'Entrar a mi libreta'
                          : 'Crear mi libreta artesanal'}
                    </span>
                  </button>

                  <button
                    type="button"
                    className="boton-google"
                    disabled
                    title="Próximamente"
                  >
                    <span className="material-icono">key</span>
                    <span>Google (próximamente)</span>
                  </button>
                </div>

                {/* Pie */}
                <div className="pie-tarjeta">
                  <span className="pie-item">
                    <span className="punto-seguridad"></span>
                    Cifrado TLS 1.3 con Supabase RLS
                  </span>

                  <span className="pie-item">
                    <span className="material-icono">verified_user</span>
                    Sin rastreadores ni anuncios invasivos
                  </span>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionAcceso;
