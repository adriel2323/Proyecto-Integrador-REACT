import React from "react";
import PrecioCompra from "../DetallePequeño/PrecioCompra/PrecioCompra";

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
                    <img></img>
                    <h3>
                        Descripcion del curso
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <PrecioCompra/>
                </div>
            </div>
        </div>
    );
}

export default Curso;