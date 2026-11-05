import { useState } from 'react';
import './SeccionHero.css';

function SeccionHero() {
  const [actividadesCompletadas, setActividadesCompletadas] = useState([
    true,
    true,
    false,
    false,
    false,
    false,
  ]);

  const actividades = [
    'Leche de avena sin endulzante',
    'Café en grano tostado suave',
    'Frutas rojas (arándanos & cerezas)',
    'Queso feta artesanal',
    'Pan madre recién horneado',
    'Hierbas de albahaca para pesto',
  ];

  return (
    <section className="seccion-hero" id="inicio">
      {/* Elementos decorativos de fondo */}
      <div className="deco-rosa"></div>
      <div className="deco-lavanda"></div>
      <div className="deco-amarillo"></div>

      <div className="contenido-hero">
        {/* Columna izquierda: Texto */}
        <div className="columna-texto">
          <div className="etiqueta-washi">
            <span className="material-icono">draw</span>
            <span>Edición <em className="texto-manuscrito">Papelería Analógica</em> Nº 01</span>
          </div>

          <h1 className="titulo-hero">
            Tus ideas, compras y{' '}
            <em className="texto-manuscrito texto-primario">recuerdos</em>{' '}
            en una libreta con{' '}
            <span className="texto-subrayado-ondulado">alma retro</span>.
          </h1>

          <p className="descripcion-hero">
            La intimidad táctil del papel japonés milimetrado, unida a la 
            velocidad de la sincronización en la nube con Supabase y 
            recordatorios automáticos.
          </p>

          <div className="acciones-hero">
            <a href="#quick-access" className="boton-primario-grande">
              <span className="material-icono">menu_book</span>
              <span>Abrir mi libreta gratis</span>
              <span className="material-icono">arrow_forward</span>
            </a>
            <a href="#demo" className="boton-secundario">
              <span className="material-icono">play_circle</span>
              <span>Ver cuadernos de ejemplo</span>
            </a>
          </div>

          <div className="especificaciones">
            <span className="spec-item">
              <span className="punto-color punto-secundario"></span>
              Papel 120 gsm
            </span>
            <span className="spec-item">
              <span className="punto-color punto-primario"></span>
              React + Supabase
            </span>
            <span className="spec-item">
              <span className="punto-color punto-terciario"></span>
              Cifrado Cero Fugas
            </span>
          </div>
        </div>

        {/* Columna derecha: Cuaderno */}
        <div className="columna-cuaderno" id="demo">
          {/* Cintas washi decorativas */}
          <div className="washi-tape washi-superior">⭐ 14 de Octubre</div>
          <div className="washi-tape washi-inferior">✦ Taller Creativo</div>

          <div className="cuaderno-abierto">
            {/* Espiral metálica */}
            <div className="espiral-metálica">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="anillo-espiral">
                  <div className="anillo-interior"></div>
                </div>
              ))}
            </div>

            {/* Página izquierda: Lista de compras */}
            <div className="pagina pagina-izquierda pagina-rayada">
              <div className="pagina-cabecera">
                <span className="etiqueta-seccion">♥ to-do: mercado</span>
                <span className="fecha-pagina">14 / 10</span>
              </div>

              <div className="lista-verificacion">
                {actividades.map((actividad, indice) => (
                  <label
                    className={`item-verificacion ${actividadesCompletadas[indice] ? 'completado' : ''}`}
                    key={actividad}
                  >
                    <input
                      type="checkbox"
                      checked={actividadesCompletadas[indice]}
                      onChange={() => {
                        setActividadesCompletadas((estadoActual) =>
                          estadoActual.map((completada, posicion) =>
                            posicion === indice ? !completada : completada,
                          ),
                        );
                      }}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="texto-item">{actividad}</span>
                  </label>
                ))}
              </div>

              <div className="pagina-pie">
                <span>Hojas Pautadas Nº 24</span>
                <span className="estado-guardado">
                  <span className="material-icono">sync</span>
                  Guardado
                </span>
              </div>
            </div>

            {/* Página derecha: Notas de entrevista */}
            <div className="pagina pagina-derecha pagina-punteada">
              <div className="pagina-cabecera">
                <span className="seccion-etiqueta">sección 02 • notas</span>
                <span className="emoji-decorativo">🍒</span>
              </div>

              <div className="titulo-nota">Ideas de Entrevistas</div>

              <p className="texto-nota">
                <span className="resaltado-texto">Enfoque central:</span>{' '}
                Cómo el ritual de anotar a mano estimula la retención 
                cognitiva y reduce el estrés laboral.
              </p>

              <div className="tarjeta-entrevista">
                <span className="numero-entrevista texto-primario">1. Dra. Valentina Soto</span>
                <span className="descripcion-entrevista">
                  Neuropsicología de la memoria táctil y el tacto sobre el papel.
                </span>
              </div>

              <div className="tarjeta-entrevista">
                <span className="numero-entrevista texto-terciario">2. Mateo Arriaga</span>
                <span className="descripcion-entrevista">
                  Encuadernación japonesa y papelería sostenible contemporánea.
                </span>
              </div>

              <div className="pagina-pie">
                <span className="paleta-color">
                  <span className="material-icono">palette</span>
                  Paleta Tinta Cereza
                </span>
                <span>Página 15 / 120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionHero;