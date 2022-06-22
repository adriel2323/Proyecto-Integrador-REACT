import React from "react";
import PrecioCompra from "../DetallePequeño/PrecioCompra/PrecioCompra";
import ImagenCurso from './imagenes/scrum.jpg'
import cursos  from './cursosDataBase.json'
import "./DetallePequenio.css"

function DetallePequenio (props){
    return (
        <div>
            <div>
                <div className="DP-contenedor">
                    <div className="DP-foto">
                        <img className="DP-imagen" src={ props.imagen }></img>
                    </div>
                    <div className="DP-contenedor-info">
                        <h1 className="DP-titulo">
                            {props.titulo}
                        </h1>
                        <h3>
                            <b>Descripcion</b>
                        </h3>
                        <p>
                            {props.descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetallePequenio;