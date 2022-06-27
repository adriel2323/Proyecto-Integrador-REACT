import React,{useState,useEffect} from "react";
import './TotalProductos.css'
import axios from 'axios'

function TotalProductos (){
    const [totalCursos,setTotalCursos] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/api/products')
        .then((data) => {
            setTotalCursos(data.data.cursos)
           })
      },[])

    return (
        <div className="TP-contenedor">
            <div className="TP-ConteinTitulos">
            <h1 className="TP-titulo">
                Total de
            </h1>
            <h1 className="TP-titulo">
                cursos
            </h1>
            </div>
            <div className="TP-Cont_numero">
                <h2 className="TP-Numero">
                    { totalCursos.length}
                    
                </h2>
            </div>
        </div>
    );
}

export default TotalProductos;