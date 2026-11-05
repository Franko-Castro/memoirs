
const { createClient } = require('@supabase/supabase-js');

async function verificarSesion(solicitud, respuesta, siguiente) {
  try {
    const encabezado = solicitud.headers.authorization;

    if (!encabezado || !encabezado.startsWith('Bearer ')) {
      return respuesta.status(401).json({
        error: 'Debes iniciar sesión para realizar esta acción.'
      });
    }

    const token = encabezado.substring(7);

    // Crear un cliente para esta petición con el token del usuario
    const supabaseUsuario = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      }
    );

    // Verificar el token con Supabase Auth
    const { data, error } = await supabaseUsuario.auth.getUser(token);

    if (error || !data.user) {
      return respuesta.status(401).json({
        error: 'La sesión no es válida o ha expirado.'
      });
    }

    // Guardar el usuario y su cliente para las rutas siguientes
    solicitud.usuario = data.user;
    solicitud.supabase = supabaseUsuario;

    siguiente();
  } catch (error) {
    console.error('Error al verificar la sesión:', error.message);

    return respuesta.status(500).json({
      error: 'No se pudo verificar la sesión.'
    });
  }
}

module.exports = verificarSesion;
