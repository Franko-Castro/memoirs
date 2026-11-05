import './seccionesBase.css';
import './SeccionFuncionalidades.css';

const FUNCIONALIDADES = [
  {
    icono: 'edit_note',
    titulo: 'Escritura a mano libre',
    texto: 'Rayado, punteado o en blanco. Cambia el formato de la página sin perder lo que ya escribiste.',
    color: 'secundario',
  },
  {
    icono: 'cloud_sync',
    titulo: 'Sincronización en la nube',
    texto: 'Cada cambio viaja a Supabase al instante. Empieza en el celular, sigue en la laptop.',
    color: 'primario',
  },
  {
    icono: 'wifi_off',
    titulo: 'Funciona sin internet',
    texto: 'Escribe en el metro, en el campo, donde sea. Todo se sincroniza cuando vuelves a tener señal.',
    color: 'terciario',
  },
  {
    icono: 'search',
    titulo: 'Búsqueda dentro de tus notas',
    texto: 'Encuentra esa frase que recordabas haber escrito, aunque hayan pasado tres cuadernos.',
    color: 'primario',
  },
  {
    icono: 'picture_as_pdf',
    titulo: 'Exporta a PDF',
    texto: 'Convierte cualquier cuaderno en un documento listo para imprimir o mandar por correo.',
    color: 'secundario',
  },
  {
    icono: 'history',
    titulo: 'Historial de versiones',
    texto: 'Si borraste algo por error, puedes recuperarlo. Cada guardado queda archivado.',
    color: 'terciario',
  },
];

function SeccionFuncionalidades() {
  return (
    <section className="seccion-funcionalidades" id="funciones">
      <div className="contenedor-funcionalidades">
        {/* Cabecera de la sección */}
        <div className="cabecera-seccion">
          <span className="etiqueta-cabecera">
            <span className="material-icono">format_list_bulleted</span>
            Índice general
          </span>
          <h2 className="titulo-seccion">
            Todo lo que hace una libreta,
            <br />
            <em className="texto-manuscrito texto-primario">más lo que no puede hacer el papel.</em>
          </h2>
          <p className="descripcion-seccion">
            Seis funciones esenciales, sin menús infinitos ni configuraciones raras.
            Abre, escribe, y deja que el resto ocurra solo.
          </p>
        </div>

        {/* Rejilla de tarjetas */}
        <div className="rejilla-funcionalidades">
          {FUNCIONALIDADES.map((item, i) => (
            <article className="tarjeta-funcionalidad" key={item.titulo}>
              <span className="folio-tarjeta">
                {String(i + 1).padStart(2, '0')} / {String(FUNCIONALIDADES.length).padStart(2, '0')}
              </span>
              <span className={`icono-funcionalidad tono-${item.color}`}>
                <span className="material-icono">{item.icono}</span>
              </span>
              <h3 className="titulo-funcionalidad">{item.titulo}</h3>
              <p className="texto-funcionalidad">{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeccionFuncionalidades;
