import React from "react";
import Categorias from "../categorias/Categorias";
import TotalProductos from "../productos/TotalProductos";
import './ContenedorContadores.css'



function ContenedorContadores (){
    return (
        <div className="ContenedorContadores">
            <div className="ContenedorContadores-categorias">
                <div className="ContenedorContenedores-boxTitulos">
                    <h1>
                        Categorias
                    </h1>
                </div>
                <Categorias/>
            </div>
            <div className="ContenedorContadores-cursos">
                <div className="ContenedorContenedores-boxTitulos">
                    <h1>
                        Cursos
                    </h1>
                </div>
                <TotalProductos/>
            </div>
            
        </div>
    );
}

export default ContenedorContadores;