
import { useState } from 'react';

import Encabezado from './componentes/Encabezado';
import SeccionHero from './paginas/SeccionHero';
import SeccionFuncionalidades from './paginas/SeccionFuncionalidades';
import SeccionCasosUso from './paginas/SeccionCasosUso';
import SeccionTestimonios from './paginas/SeccionTestimonios';
import SeccionAcceso from './componentes/SeccionAcceso';
import SeccionCTA from './paginas/SeccionCTA';
import PiePagina from './componentes/piePagina';

import './index.css';

function App() {
  // Recuperar la sesión guardada en el navegador
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = sessionStorage.getItem('memoirs_usuario');

    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  // Se ejecuta cuando alguien inicia sesión
  function manejarLogin(datosUsuario) {
    setUsuario(datosUsuario);
  }

  return (
    <div className="app">
      <Encabezado />

      <main className="contenido-principal-app">

        {usuario ? (
          <section className="espacio-usuario">
  <div className="contenido-espacio-usuario">
    <span className="etiqueta-espacio">
      ✦ TU ESPACIO PERSONAL
    </span>

    <h2>
      ¡Bienvenido a MEMOIRS!
    </h2>

    <p>
      Nos alegra tenerte de vuelta,{' '}
      {usuario.nombre ||
        usuario.user_metadata?.nombre ||
        usuario.email ||
        'lector'}.
    </p>

    <p>
      Tu sesión está iniciada correctamente.
    </p>
  </div>
</section>
        ) : (
          <>
            <SeccionHero />
            <SeccionFuncionalidades />
            <SeccionCasosUso />
            <SeccionTestimonios />

            <SeccionAcceso onLogin={manejarLogin} />

            <SeccionCTA />
          </>
        )}

      </main>

      <PiePagina />
    </div>
  );
}

export default App;
