
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const rutasNotas = require('./rutas/notas');
const supabase = require('./configuracion/supabase');
const rutasAutenticacion = require('./rutas/autenticacion');
const aplicacion = express();

aplicacion.use(cors());
aplicacion.use(express.json());

aplicacion.use('/api/notas', rutasNotas);
aplicacion.use('/api/autenticacion', rutasAutenticacion);

// Comprobar que el servidor funciona
aplicacion.get('/', (solicitud, respuesta) => {
  respuesta.json({
    proyecto: 'MEMOIRS',
    mensaje: 'Backend funcionando correctamente'
  });
});

// Comprobar la configuración de Supabase
aplicacion.get('/api/estado', (solicitud, respuesta) => {
  respuesta.json({
    servidor: 'activo',
    supabase: supabase ? 'cliente configurado' : 'no configurado'
  });
});

const puerto = process.env.PORT || 3000;

aplicacion.listen(puerto, () => {
  console.log(
    `Servidor MEMOIRS activo en http://localhost:${puerto}`
  );
});
