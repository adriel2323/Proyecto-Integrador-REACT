import React,{useState,useEffect} from "react";
import "./MiniDetalleListado.css"
import axios from 'axios'

function MiniDetalleListado (){
    const [cursos,setCursos] = useState([])

    useEffect(()=> {
      axios.get('http://localhost:3001/api/products')
      .then((data) => {
            setCursos(data.data.cursos)
         })
    },[])

    return (
            <div className="MDL-MaxBox">
                {
                  cursos.length && cursos.map((curso)=>{
                    return(
                      <div className="MDL-contenedor">
                                <div className="MDL-foto">
                                    <img className="MDL-imagen" src={ curso.imagen_principal } alt="imagen curso"></img>
                                 </div>
                                 <div className="MDL-contenedor-info">
                                     <h1 className="MDL-titulo">
                                         {curso.titulo}
                                     </h1>
                                     <p className="MDL-parrafo">
                                        {curso.descripcion_corta}
                                     </p>
                                 </div>
                             </div>
                    )
                  }) 
                }
            </div>
    );
}

export default MiniDetalleListado;