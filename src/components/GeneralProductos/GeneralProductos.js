import React from "react";
import ContenedorContadores from "../ContenedorContadores/ContenedorContadores";
import UltimoProducto from "../UltimoProducto/UltimoProducto";
import MiniDetalleListado from "../MiniDetalleListado/MiniDetalleListado";


function GeneralProductos (){
    return (
        <div>
            <ContenedorContadores/>
            <div className='App-contenedor-lista-ultimo'>
                <div className='App-contenedor-ultimo'>
                  <UltimoProducto/>
                </div>
                <div className='App-contenedor-lista'>
                     <MiniDetalleListado/>
                </div>
            </div>
        </div>
    );
}

export default GeneralProductos;