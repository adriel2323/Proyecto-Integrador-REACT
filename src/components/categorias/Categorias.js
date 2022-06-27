import React,{useState,useEffect} from "react";
import './categorias.css'
import axios from 'axios'

function Categorias (){
    const [categorias,setCategorias] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/api/products/categorias')
        .then((data) => {
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