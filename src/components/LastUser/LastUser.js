import React from "react";
import fotoUser from './images/user-1655569065023.jpg'
import './lastUser.css';
let usuarios = [
    {
        "nombre": "Adriel",
        "apellidos": "Colombo",
        "email": "adrielcolombo23@gmail.com",
        "descripcion": null
    },
    {
        "nombre": "Arvin",
        "apellidos": "Bizley",
        "email": "abizley1@tamu.edu",
        "descripcion": null
    },
    {
        "nombre": "Riki",
        "apellidos": "Dow",
        "email": "rdow2@deviantart.com",
        "descripcion": null
    },
    {
        "nombre": "Alli",
        "apellidos": "Howey",
        "email": "ahowey3@issuu.com",
        "descripcion": null
    },
    {
        "nombre": "Maribel",
        "apellidos": "Baggally",
        "email": "mbaggally4@nationalgeographic.com",
        "descripcion": null
    },
    {
        "nombre": "Morna",
        "apellidos": "Gumley",
        "email": "mgumley5@feedburner.com",
        "descripcion": null
    },
    {
        "nombre": "Cyndie",
        "apellidos": "Synnott",
        "email": "csynnott6@cafepress.com",
        "descripcion": null
    },
    {
        "nombre": "Eada",
        "apellidos": "Stiegers",
        "email": "estiegers7@cnbc.com",
        "descripcion": null
    },
    {
        "nombre": "Lucais",
        "apellidos": "Wittering",
        "email": "lwittering8@fda.gov",
        "descripcion": null
    },
    {
        "nombre": "Arlette",
        "apellidos": "Cantillon",
        "email": "acantillon9@digg.com",
        "descripcion": null
    },
    {
        "nombre": "Norris",
        "apellidos": "Aldin",
        "email": "naldin0@icio.us",
        "descripcion": null
    },
    {
        "nombre": "Paulina",
        "apellidos": "Monjes",
        "email": "paulimonjes@gmail.com",
        "descripcion": "Me llamo paulina y me gustan los sanguchitos de miga"
    },
    {
        "nombre": "Ramiro",
        "apellidos": "Monjes",
        "email": "rmonjes@frsn.utn.edu.ar",
        "descripcion": "Hola"
    }
]
let ultimoUser = usuarios[usuarios.length -1]

function LastUser (){
    return (
        <React.Fragment>
            <div className="lastUser-container">
                <div className="UserFoto">
                    <img className="LastUser-imagen" src={ fotoUser } alt=""></img>
                </div>
                <div className="lastUserInfo-container">
                    <h2 className="userName">{ ultimoUser.nombre +" "+ ultimoUser.apellidos }</h2>
                    <h3 className="lastUserMail">{ ultimoUser.email }</h3>
                    <h4 className="lastUserInfo">{ ultimoUser.descripcion }</h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LastUser;