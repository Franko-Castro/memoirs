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
  return (
    <div className="app">
      <Encabezado />
      <main className="contenido-principal-app">
        <SeccionHero />
        <SeccionFuncionalidades />
        <SeccionCasosUso />
        <SeccionTestimonios />
        <SeccionAcceso />
        <SeccionCTA />
      </main>
      <PiePagina />
    </div>
  );
}

export default App;
