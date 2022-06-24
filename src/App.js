import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import UserContainer from './components/UserContainer/UserContainer';
import GeneralProductos from './components/GeneralProductos/GeneralProductos';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css'
import { Component } from 'react';
// import {  Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <main className='main-contenedores'>
        <GeneralProductos/>
        <UserContainer/>
      </main>
      <Footer />
    </div>
  );
}

export default App;


