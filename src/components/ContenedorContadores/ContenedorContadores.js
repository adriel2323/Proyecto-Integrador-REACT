import React from "react";
import Categorias from "../categorias/Categorias";
import TotalProductos from "../productos/TotalProductos";
import './ContenedorContadores.css'



function ContenedorContadores (){
    return (
        <div className="ContenedorContadores">
            <div className="ContenedorContadores-categorias">
                <h1>
                    categorias
                </h1>
                <Categorias/>
            </div>
            <div className="ContenedorContadores-cursos">
                <h1>
                    Cursos
                </h1>
                <TotalProductos/>
            </div>
            
        </div>
    );
}

export default ContenedorContadores;