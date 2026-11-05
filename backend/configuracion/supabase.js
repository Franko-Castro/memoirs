
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Verificar que existan las variables necesarias
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Faltan SUPABASE_URL o SUPABASE_ANON_KEY en el archivo .env'
  );
}

// Crear el cliente de Supabase
const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

module.exports = supabase;
