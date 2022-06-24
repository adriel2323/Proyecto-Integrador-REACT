import React,{useState,useEffect} from "react";
import './categorias.css'


let categorias = [
    {
        titulo: "Habilidades Blandas",
        cantidadCursos: 1
    },
    {
        titulo: "Liderazgo",
        cantidadCursos: 3
    },
    {
        titulo: "Multimedia",
        cantidadCursos: 2
    },
    {
        titulo: "Alimentos",
        cantidadCursos: 1
    },
    {
        titulo: "Manualidades",
        cantidadCursos: 4
    }
]

function Categorias (){
    // const [categorias,setCategorias]= useState([])

    // fetch('http://localhost:3001/api/categorias')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCategorias(data)
    //   })


    return (
        <div>
            <ul className="categoria_barra">
                {
                    categorias.map((categoria,i) => {
                        return (
                            <li className="categoria_barra_individual" >
                                <div >
                                    {categorias[i].titulo}
                                </div>
                                <h3 className="categoria_barra_individual_numero">
                                    ({categorias[i].cantidadCursos})
                                </h3>
                            </li>
                        )
                    })
                }
            </ul> 
        </div>
    );
}

export default Categorias;