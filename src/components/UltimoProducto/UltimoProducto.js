import React from "react";
import Curso from "../detalle/Curso";
import './UltimoProducto.css'

function UltimoProducto (){
    return (
        <div className="Ultimo-contenedor">
            <div className="Ultimo-boxTitulo">
                <h1 className="Ultimo-titulo">Ultimo Curso añadido</h1>
            </div>
            <Curso/>
        </div>
    );
}

export default UltimoProducto;