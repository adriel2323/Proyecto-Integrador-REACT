import React,{useState,useEffect} from "react";
import "./DetallePequenio.css"
import axios from 'axios'

function DetallePequenio (){
    return (
        
        <div>
            <div className="DP-contenedor">
                <div className="DP-foto">
                    <img className="DP-imagen" src="imagen"></img>
                 </div>
                <div className="DP-contenedor-info">
                    <h1 className="DP-titulo">
                        "algo"
                    </h1>
                    <h3>
                        <b>Descripcion</b>
                    </h3>
                    <p>
                        descripcion
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetallePequenio;