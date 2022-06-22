import React from "react";
import './UserListado.css'

let users = [
    {
        nombre: 'Adriel',
        apellidos: 'Colombo',
        email: 'adrielcolombo23@gmail.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Arvin',
        apellidos: 'Bizley',
        email: 'abizley1@tamu.edu',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Riki',
        apellidos: 'Dow',
        email: 'rdow2@deviantart.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Alli',
        apellidos: 'Howey',
        email: 'ahowey3@issuu.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Maribel',
        apellidos: 'Baggally',
        email: 'mbaggally4@nationalgeographic.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Morna',
        apellidos: 'Gumley',
        email: 'mgumley5@feedburner.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Cyndie',
        apellidos: 'Synnott',
        email: 'csynnott6@cafepress.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Eada',
        apellidos: 'Stiegers',
        email: 'estiegers7@cnbc.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Lucais',
        apellidos: 'Wittering',
        email: 'lwittering8@fda.gov',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Arlette',
        apellidos: 'Cantillon',
        email: 'acantillon9@digg.com',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Norris',
        apellidos: 'Aldin',
        email: 'naldin0@icio.us',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Paulina',
        apellidos: 'Monjes',
        email: 'paulimonjes@gmail.com',
        descripcion: 'Me llamo paulina y me gustan los sanguchitos de miga',
        imagen: './imagenes/users/userDefault.jpg'
    },
    {
        nombre: 'Ramiro',
        apellidos: 'Monjes',
        email: 'rmonjes@frsn.utn.edu.ar',
        descripcion: 'Hola',
        imagen: './imagenes/users/user-1655569065023.jpg'    
    }
]

function UserListado() {
    return(
        <React.Fragment>
            <ul className="userList-box">
                {
                    users.map((user, i) => {
                        return(
                            <li className="userList-container" key={users + i}>
                                <div className="userList-foto">
                                    <img className="userList-imagen" src={ user.imagen } alt="foto de perfil"></img>
                                </div>
                                <div className="userList-info">
                                    <h2 className="userList-name">
                                        {user.nombre +" "+ user.apellidos}
                                    </h2>
                                    <p className="userList-parrafo">
                                        {user.email}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    );
}

export default UserListado