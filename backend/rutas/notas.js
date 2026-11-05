
const express = require('express');
const verificarSesion = require('../middlewares/verificarSesion');

const rutas = express.Router();

// Todas las rutas requieren una sesión válida
rutas.use(verificarSesion);

// GET: consultar las notas del usuario
rutas.get('/', async (solicitud, respuesta) => {
  try {
    const { data, error } = await solicitud.supabase
      .from('notas')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return respuesta.status(400).json({ error: error.message });
    }

    return respuesta.json(data);
  } catch (error) {
    return respuesta.status(500).json({
      error: 'No se pudieron consultar las notas.'
    });
  }
});

// POST: crear una nota
rutas.post('/', async (solicitud, respuesta) => {
  try {
    const { titulo, subtitulo, contenido, categoria } = solicitud.body;

    if (typeof titulo !== 'string' || !titulo.trim()) {
      return respuesta.status(400).json({
        error: 'El título es obligatorio.'
      });
    }

    const nuevaNota = {
      titulo: titulo.trim(),
      subtitulo: subtitulo ?? null,
      contenido: contenido ?? '',
      usuario_id: solicitud.usuario.id
    };

    if (categoria !== undefined) {
      nuevaNota.categoria = categoria;
    }

    const { data, error } = await solicitud.supabase
      .from('notas')
      .insert(nuevaNota)
      .select()
      .single();

    if (error) {
      return respuesta.status(400).json({ error: error.message });
    }

    return respuesta.status(201).json(data);
  } catch (error) {
    return respuesta.status(500).json({
      error: 'No se pudo crear la nota.'
    });
  }
});

// PUT: actualizar una nota propia
rutas.put('/:id', async (solicitud, respuesta) => {
  try {
    const { titulo, subtitulo, contenido, categoria } = solicitud.body;
    const cambios = {};

    if (titulo !== undefined) {
      if (typeof titulo !== 'string' || !titulo.trim()) {
        return respuesta.status(400).json({
          error: 'El título no puede estar vacío.'
        });
      }

      cambios.titulo = titulo.trim();
    }

    if (subtitulo !== undefined) cambios.subtitulo = subtitulo;
    if (contenido !== undefined) cambios.contenido = contenido;
    if (categoria !== undefined) cambios.categoria = categoria;

    if (Object.keys(cambios).length === 0) {
      return respuesta.status(400).json({
        error: 'Debes enviar al menos un campo para actualizar.'
      });
    }

    const { data, error } = await solicitud.supabase
      .from('notas')
      .update(cambios)
      .eq('id', solicitud.params.id)
      .eq('usuario_id', solicitud.usuario.id)
      .select()
      .maybeSingle();

    if (error) {
      return respuesta.status(400).json({ error: error.message });
    }

    if (!data) {
      return respuesta.status(404).json({
        error: 'La nota no existe o no tienes permiso para modificarla.'
      });
    }

    return respuesta.json(data);
  } catch (error) {
    return respuesta.status(500).json({
      error: 'No se pudo actualizar la nota.'
    });
  }
});

// DELETE: eliminar una nota propia
rutas.delete('/:id', async (solicitud, respuesta) => {
  try {
    const { data, error } = await solicitud.supabase
      .from('notas')
      .delete()
      .eq('id', solicitud.params.id)
      .eq('usuario_id', solicitud.usuario.id)
      .select('id')
      .maybeSingle();

    if (error) {
      return respuesta.status(400).json({ error: error.message });
    }

    if (!data) {
      return respuesta.status(404).json({
        error: 'La nota no existe o no tienes permiso para eliminarla.'
      });
    }

    return respuesta.json({
      mensaje: 'Nota eliminada correctamente.'
    });
  } catch (error) {
    return respuesta.status(500).json({
      error: 'No se pudo eliminar la nota.'
    });
  }
});

module.exports = rutas;
