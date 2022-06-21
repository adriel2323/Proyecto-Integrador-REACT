import React from "react";
import './categorias.css'

function Categorias (){
    return (
        <div>
            <ul className="categoria_barra">
                <li className="categoria_barra_individual">
                    Categoria 1
                </li>
                <li className="categoria_barra_individual">
                    Categoria 2
                </li>
                <li className="categoria_barra_individual">
                    Categoria 3
                </li>
                <li className="categoria_barra_individual">
                    Categoria 4
                </li>
                <li className="categoria_barra_individual">
                    Categoria 5
                </li>
                <li className="categoria_barra_individual">
                    Categoria 6
                </li>
            </ul> 
        </div>
    );
}

export default Categorias;