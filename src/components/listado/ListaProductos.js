import React from "react";
import DetallePequenio from "../DetallePequeño/DetallePequenio";
import Categorias from "../categorias/Categorias";

function ListaProductos (){
    return (
        <div>
            <div>
                <h2>
                    Categorias
                </h2>
                <Categorias/>
            </div>
            <div>
                <DetallePequenio/> 
            </div>
        </div>
    );
}

export default ListaProductos;