import React from "react";
import Logo from './lgo_simple.svg'
import face from './iconos/redes-facebook-circle.svg'
import youTube from './iconos/redes-youtube.svg'
import twiter from './iconos/redes-twitter.svg'
import instagram from './iconos/redes-instagram-alt.svg'
import './footer.css'

function Footer (){
    return (
        <div className="FT-contenedor">
            <div className="FT-logo">
                <img src={Logo}></img>
            </div>
            <ul className="FT-listaLogos">
                    <li className="FT-logos-ind">
                        <img src={ face } alt="" ></img>
                    </li >
                    <li className="FT-logos-ind">
                        <img src={ youTube } alt=""></img>
                    </li>
                    <li className="FT-logos-ind">
                        <img src={ twiter } alt=""></img>
                    </li>
                    <li className="FT-logos-ind">
                        <img src={ instagram } alt=""></img>
                    </li>
                </ul>
        </div>
    );
}

export default Footer;