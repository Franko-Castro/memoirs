import Encabezado from '../componentes/Encabezado';
import PiePagina from '../componentes/piePagina';
import './inicio.css';
import SeccionHero from './SeccionHero';

function Inicio() {
  return (
    <div className="pagina-inicio">
      <Encabezado />

      <main>
        {/* SECCIÓN PRINCIPAL (hero) */}
        <section className="seccion-principal">
          <div className="contenido-principal">
            <span className="etiqueta-retro">✦ Nuevo: guardado automático</span>
            
            <h1>
              Tus ideas, <span className="texto-manuscrito">escritas a mano</span>, siempre contigo
            </h1>
            
            <p className="descripcion-principal">
              Memoirs es tu cuaderno digital. Escribe notas, organízalas en 
              cuadernos y accede desde cualquier dispositivo. Sin complicaciones.
            </p>

            <div className="acciones-principales">
              <a href="#crear" className="boton-principal">Crear mi primer cuaderno</a>
              <a href="#caracteristicas" className="boton-secundario">Conocer más ↓</a>
            </div>

            <p className="nota-informativa">
              ✓ Gratis para empezar &nbsp;·&nbsp; ✓ Sin tarjeta &nbsp;·&nbsp; ✓ Exporta a PDF
            </p>
          </div>

          <div className="vista-cuaderno" aria-label="Vista previa de notas de ejemplo">
            <article className="hoja-cuaderno hoja-compras">
              <span className="etiqueta-hoja">Compras</span>
              <h2>Lista del súper</h2>
              <ul>
                <li>Manzanas</li>
                <li>Pan integral</li>
                <li>Café de olla</li>
                <li>Flores para mamá</li>
              </ul>
              <span className="texto-guardado">✓ Guardado hace 2 min</span>
            </article>

            <article className="hoja-cuaderno hoja-ideas">
              <span className="etiqueta-hoja">Ideas</span>
              <h2>Proyecto jardín</h2>
              <p>
                Sembrar albahaca cerca de la ventana para que el olor entre 
                en las mañanas. Comprar macetas de barro, no plástico.
              </p>
              <span className="texto-guardado">✓ Guardado ayer</span>
            </article>
          </div>
        </section>

        {/* SECCIÓN DE INTRODUCCIÓN */}
        <section className="seccion-introduccion" id="acerca">
          <span className="etiqueta-seccion">✦ Por qué Memoirs</span>
          <h2>Escribe como en papel, <br />con la magia digital</h2>
          <p>
            Combinamos la calidez de un cuaderno físico con la potencia de la nube. 
            <br />Tu creatividad no tiene límites, ni fronteras.
          </p>
        </section>

        {/* SECCIÓN DE CARACTERÍSTICAS */}
        <section className="seccion-caracteristicas" id="caracteristicas">
          <div className="tarjeta-caracteristica">
            <div className="icono-caracteristica">⚡</div>
            <h3>Guardado instantáneo</h3>
            <p>
              Cada palabra queda protegida en el momento que la escribes. 
              Olvídate de perder trabajo por accidentes.
            </p>
          </div>

          <div className="tarjeta-caracteristica">
            <div className="icono-caracteristica">🎨</div>
            <h3>Diseños flexibles</h3>
            <p>
              Páginas rayadas, punteadas o en blanco. Elige el formato 
              que mejor se adapte a tu estilo de escritura.
            </p>
          </div>

          <div className="tarjeta-caracteristica">
            <div className="icono-caracteristica">🔍</div>
            <h3>Búsqueda inteligente</h3>
            <p>
              Encuentra cualquier nota en segundos. Filtra por etiquetas, 
              fechas o palabras clave dentro del contenido.
            </p>
          </div>

          <div className="tarjeta-caracteristica">
            <div className="icono-caracteristica">📤</div>
            <h3>Exporta a PDF</h3>
            <p>
              Comparte tus cuadernos como archivos PDF elegantes, 
              listos para imprimir o enviar por correo.
            </p>
          </div>
        </section>

        {/* SECCIÓN DE LLAMADO A LA ACCIÓN */}
        <section className="seccion-llamado">
          <div className="contenido-llamado">
            <h2>¿Listo para empezar a escribir?</h2>
            <p>
              Únete a miles de escritores, estudiantes y soñadores 
              que ya organizan sus ideas con Memoirs.
            </p>
            <a href="#crear" className="boton-principal boton-grande">
              Crear cuenta gratuita
            </a>
            <span className="nota-llamado">Sin tarjeta de crédito · Cancela cuando quieras</span>
          </div>
        </section>
      </main>

      <PiePagina />
    </div>
  );
}

export default Inicio;