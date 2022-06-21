import React from "react";
import './TotalProductos.css'

function TotalProductos (){
    return (
        <div className="TP-contenedor">
            <div className="TP-ConteinTitulos">
            <h1 className="TP-titulo">
                Total de
            </h1>
            <h1 className="TP-titulo">
                cursos
            </h1>
            </div>
            <div className="TP-Cont_numero">
                <h2 className="TP-Numero">
                    20
                </h2>
            </div>
        </div>
    );
}

export default TotalProductos;