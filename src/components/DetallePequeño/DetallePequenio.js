import React,{useState,useEffect} from "react";
import "./DetallePequenio.css"
import axios from 'axios'

function DetallePequenio (){
    const [ultimoCurso,setUltimoCurso] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/api/products')
        .then((data) => {
            setUltimoCurso(data.data.cursos[data.data.cursos.length - 1])
           })
      },[])

    return (
        
        <div>
            <div className="DP-contenedor">
                <div className="DP-foto">
                    <img className="DP-imagen" src={"."+ultimoCurso.imagen}></img>
                 </div>
                <div className="DP-contenedor-info">
                    <h1 className="DP-titulo">
                        { ultimoCurso.titulo }
                    </h1>
                    <h3>
                        <b>Descripcion</b>
                    </h3>
                    <p>
                        {ultimoCurso.descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetallePequenio;