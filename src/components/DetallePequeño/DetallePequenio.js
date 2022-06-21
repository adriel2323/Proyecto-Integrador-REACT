import React from "react";
import PrecioCompra from "../DetallePequeño/PrecioCompra/PrecioCompra";
import ImagenCurso from './imagenes/scrum.jpg'
import cursos  from './cursosDataBase.json'
import "./DetallePequenio.css"
let descripcion = cursos[0].descripcion_corta
let precio = cursos[0].precio


function DetallePequenio (){
    return (
        <div>
            <div>
                <div className="DP-contenedor">
                    <div className="DP-foto">
                        <img className="DP-imagen" src={ ImagenCurso }></img>
                    </div>
                    <div className="DP-contenedor-info">
                        <h1 className="DP-titulo">
                            titulo del curso
                        </h1>
                        <h3>
                            <b>Descripcion</b>
                        </h3>
                        <p>
                            {descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetallePequenio;