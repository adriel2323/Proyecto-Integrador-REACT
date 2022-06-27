import React from "react";
import DetallePequenio from "../DetallePequeño/DetallePequenio";
import './UltimoProducto.css'


function UltimoProducto (){

    return (
        <div className="Ultimo-contenedor">
            <div className="Ultimo-boxTitulo">
                <h1 className="Ultimo-titulo">Ultimo Curso añadido</h1>
            </div>
            <DetallePequenio/>
        </div>
    );
}

export default UltimoProducto;