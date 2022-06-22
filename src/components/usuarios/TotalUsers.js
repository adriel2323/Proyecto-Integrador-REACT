import React from "react";
import './TotalUsers.css'

let users = [
    {
        "nombre": "Adriel",
        "apellidos": "Colombo",
        "email": "adrielcolombo23@gmail.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Arvin",
        "apellidos": "Bizley",
        "email": "abizley1@tamu.edu",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Riki",
        "apellidos": "Dow",
        "email": "rdow2@deviantart.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Alli",
        "apellidos": "Howey",
        "email": "ahowey3@issuu.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Maribel",
        "apellidos": "Baggally",
        "email": "mbaggally4@nationalgeographic.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Morna",
        "apellidos": "Gumley",
        "email": "mgumley5@feedburner.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Cyndie",
        "apellidos": "Synnott",
        "email": "csynnott6@cafepress.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Eada",
        "apellidos": "Stiegers",
        "email": "estiegers7@cnbc.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Lucais",
        "apellidos": "Wittering",
        "email": "lwittering8@fda.gov",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Arlette",
        "apellidos": "Cantillon",
        "email": "acantillon9@digg.com",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre": "Norris",
        "apellidos": "Aldin",
        "email": "naldin0@icio.us",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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

function TotalUsers (){
    return (
        <React.Fragment>
        <div className="TU-contenedor">
            <div className="TU-ConteinTitulos">
            <h1 className="TU-titulo">
                Total de
            </h1>
            <h1 className="TU-titulo">
                usuarios
            </h1>
            </div>
            <div className="TU-Cont_numero">
                <h2 className="TU-Numero">
                    {users.length}
                </h2>
            </div>
        </div>
        </React.Fragment>
    );
}

export default TotalUsers;