
import Header from './components/header/Header';
import ListaProductos from './components/listado/ListaProductos';
import Footer from './components/footer/Footer';
import UltimoProducto from './components/UltimoProducto/UltimoProducto';
import ContenedorContadores from './components/ContenedorContadores/ContenedorContadores';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='main-contenedores'>
        <ContenedorContadores/>
        <div>
          <UltimoProducto/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
