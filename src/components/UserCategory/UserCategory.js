import React from "react";
import './UserCategory.css'

let userCategorias = [
    {
        nombre: 'Alumno',
        cantidad: 6
    },
    {
        nombre: 'Profesor',
        cantidad: 4
    },
    {
        nombre: 'Editor',
        cantidad: 1
    },
    {
        nombre: 'Administrador',
        cantidad: 2
    }
]

function UserCategory (){
    return (
        <React.Fragment>
            <div className="userCategory-container">
                <ul className="categoria_barra">
                    {
                        userCategorias.map((category, i) => {
                            return(
                                <li className="categoria_barra_individual" key={userCategorias + i}>
                                    <div>
                                        {userCategorias[i].nombre}
                                    </div>
                                    <h3 className="categoria_barra_individual_numero">
                                        ({userCategorias[i].cantidad})
                                    </h3>
                                </li>
                            )
                        })
                    }
                </ul> 
            </div>
        </React.Fragment>
    );
}

export default UserCategory;