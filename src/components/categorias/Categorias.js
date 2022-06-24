import React,{useState,useEffect} from "react";
import './categorias.css'
import axios from 'axios'


// let categorias = [
//     {
//         titulo: "Habilidades Blandas",
//         cantidadCursos: 1
//     },
//     {
//         titulo: "Liderazgo",
//         cantidadCursos: 3
//     },
//     {
//         titulo: "Multimedia",
//         cantidadCursos: 2
//     },
//     {
//         titulo: "Alimentos",
//         cantidadCursos: 1
//     },
//     {
//         titulo: "Manualidades",
//         cantidadCursos: 4
//     }
// ]


function Categorias (){
    const [categorias,setCategorias] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/api/products/categorias')
        .then((data) => {
            console.log(data);
              setCategorias(data.data.Categorias)
           })
      },[])

    return (
        <div>
            <ul className="categoria_barra">
                {
                    categorias.length && categorias.map((categoria) => {
                        return (
                            <li className="categoria_barra_individual" >
                                <div >
                                    {categoria.nombre}
                                </div>
                                {/* <h3 className="categoria_barra_individual_numero">
                                    ({categoria[i].cantidadCursos})
                                </h3> */}
                            </li>
                        )
                    })
                }
            </ul> 
        </div>
    );
}

export default Categorias;