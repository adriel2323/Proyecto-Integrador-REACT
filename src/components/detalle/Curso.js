import React from "react";
import PrecioCompra from "../DetallePequeño/PrecioCompra/PrecioCompra";
import ImagenCurso from './imagenes/scrum.jpg'
import cursos  from './cursosDataBase.json'
let descripcion = cursos[0].descripcion_corta
let precio = cursos[0].precio

function Curso (){
    return (
        <div>
            <div>
                 
            </div>
            <div>
                <h1>
                    titulo del curso
                </h1>
                <div>
                    <div>
                    <img src={ ImagenCurso }></img>
                    </div>
                    <h3>
                        Descripcion
                    </h3>
                    <p>
                    {descripcion}
                    </p>
                    <PrecioCompra/>
                </div>
            </div>
        </div>
    );
}

export default Curso;