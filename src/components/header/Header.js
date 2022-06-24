import React from "react";
import './header.css'
import logo from  './lgo_simple.svg'
import iconoListar from "./iconos/bxs-collection.svg"
import iconoUltimo from "./iconos/bolsa-de-la-compra.svg"
import iconoUsuario from "./iconos/bxs-user-circle-shape.svg"

function Header (){
    return (
        <div className="header">
            <div className="header_complet-nav">
                <div className="logo-lg">
                    <img src={logo} className='lgo-simple' />
                </div>
                <div className="contein-user-nav">
                    <ul className="user-nav">
                        <li className="header-bottom">
                            <a href="productos">
                                <img src={ iconoListar }></img>
                            </a>
                        </li>
                        <li className="header-bottom">
                            <a href="/usuarios">
                                <img src={ iconoUsuario }></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;