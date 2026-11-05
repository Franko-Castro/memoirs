
const URL_BACKEND = 'http://localhost:3000/api/notas';

// Obtener el token de la sesión iniciada
function obtenerToken() {
    const token = sessionStorage.getItem('memoirs_access_token');

    if (!token) {
        throw new Error('Debes iniciar sesión para continuar.');
    }

    return token;
}

// Configurar las solicitudes al backend
async function solicitarBackend(url, opciones = {}) {
    const token = obtenerToken();

    const respuesta = await fetch(url, {
        ...opciones,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...opciones.headers
        }
    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {
        throw new Error(datos.error || 'No se pudo completar la solicitud.');
    }

    return datos;
}

// Consultar las notas del usuario
export async function obtenerNotas() {
    return await solicitarBackend(URL_BACKEND);
}

// Crear una nota
export async function crearNota(nota) {
    return await solicitarBackend(URL_BACKEND, {
        method: 'POST',
        body: JSON.stringify(nota)
    });
}

// Actualizar una nota
export async function actualizarNota(id, cambios) {
    return await solicitarBackend(`${URL_BACKEND}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(cambios)
    });
}

// Eliminar una nota
export async function eliminarNota(id) {
    return await solicitarBackend(`${URL_BACKEND}/${id}`, {
        method: 'DELETE'
    });
}
