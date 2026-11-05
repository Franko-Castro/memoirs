
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const rutas = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  }
);

// REGISTRO DE USUARIOS
rutas.post('/registro', async (solicitud, respuesta) => {
  try {
    const { nombre, correo, contrasena } = solicitud.body;

    if (
      typeof nombre !== 'string' ||
      !nombre.trim() ||
      typeof correo !== 'string' ||
      !correo.trim() ||
      typeof contrasena !== 'string' ||
      contrasena.length < 8
    ) {
      return respuesta.status(400).json({
        error: 'Ingresa tu nombre, un correo válido y una contraseña de al menos 8 caracteres.'
      });
    }

    const { data, error } = await supabase.auth.signUp({
      email: correo.trim(),
      password: contrasena,
      options: {
        data: {
          nombre: nombre.trim()
        }
      }
    });

    if (error) {
      return respuesta.status(400).json({
        error: error.message
      });
    }

    return respuesta.status(201).json({
      mensaje: data.session
        ? 'Registro completado correctamente.'
        : 'Cuenta creada. Revisa tu correo para confirmar el registro.',
      usuario: data.user
        ? {
            id: data.user.id,
            correo: data.user.email
          }
        : null,
      requiereConfirmacion: !data.session
    });
  } catch (error) {
    console.error('Error en el registro:', error.message);

    return respuesta.status(500).json({
      error: 'No se pudo completar el registro.'
    });
  }
});

// INICIO DE SESIÓN
rutas.post('/login', async (solicitud, respuesta) => {
  try {
    const { correo, contrasena } = solicitud.body;

    if (
      typeof correo !== 'string' ||
      !correo.trim() ||
      typeof contrasena !== 'string' ||
      !contrasena
    ) {
      return respuesta.status(400).json({
        error: 'Debes ingresar tu correo y contraseña.'
      });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: correo.trim(),
      password: contrasena
    });

    if (error) {
      return respuesta.status(401).json({
        error: 'No se pudo iniciar sesión. Verifica tus datos y la confirmación del correo.'
      });
    }

    return respuesta.json({
      mensaje: 'Inicio de sesión exitoso.',
      usuario: {
        id: data.user.id,
        correo: data.user.email
      },
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);

    return respuesta.status(500).json({
      error: 'Ocurrió un error al iniciar sesión.'
    });
  }
});

module.exports = rutas;
