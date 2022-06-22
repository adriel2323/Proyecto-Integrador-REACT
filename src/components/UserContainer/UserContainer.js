import React from "react";
import UserCategory from "../UserCategory/UserCategory";
import LastUser from "../LastUser/LastUser";
import TotalUsers from "../usuarios/TotalUsers";
import UserListado from "../UserListado/UserListado";
import './UserContainer.css'


function UserContainer (){
    return (
        <React.Fragment>
            <div className="UserContainer">
                <div className="UserContainer-contenido">
                    <div className="UserBox-Titulos">
                        <h1 className="userTitulo">
                            Categorias
                        </h1>
                        <UserCategory/>
                    </div>
                    <div className="UserBox-Titulos">
                        <h1 className="userTitulo">
                            Último usuario registrado
                        </h1>
                        <LastUser/>
                    </div>
                </div>
                <div className="UserContainer-users">
                    <div className="UserBox-Titulos">
                        <h1 className="userTitulo">
                            Usuarios
                        </h1>
                        <TotalUsers/>
                        <div className="userContainer-lista">
                            <UserListado/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UserContainer;