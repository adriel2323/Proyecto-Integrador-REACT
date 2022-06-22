import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import UserContainer from './components/UserContainer/UserContainer';
import GeneralProductos from './components/GeneralProductos/GeneralProductos';
import './App.css'
// import {  Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='main-contenedores'>
        <GeneralProductos /> 
        <UserContainer/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
