import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import UltimoProducto from './components/UltimoProducto/UltimoProducto';
import ContenedorContadores from './components/ContenedorContadores/ContenedorContadores';
import MiniDetalleListado from './components/MiniDetalleListado/MiniDetalleListado';
import './App.css'



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='main-contenedores'>
        <ContenedorContadores/>
        <div className='App-contenedor-lista-ultimo'>
            <div className='App-contenedor-ultimo'>
              <UltimoProducto/>
            </div>
            <div className='App-contenedor-lista'>
              <MiniDetalleListado/>
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
