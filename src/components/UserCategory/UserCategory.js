import React, {useState, useEffect} from "react";
import './UserCategory.css';
import axios from "axios";

// let userCategorias = [
//     {
//         nombre: 'Alumno',
//         cantidad: 6
//     },
//     {
//         nombre: 'Profesor',
//         cantidad: 4
//     },
//     {
//         nombre: 'Editor',
//         cantidad: 1
//     },
//     {
//         nombre: 'Administrador',
//         cantidad: 2
//     }
// ]

function UserCategory (){
    const [userCategorias, setCategory] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/api/users/categorias')
        .then((data) => {
            setCategory(data.data.categorias)
        })
    }, [])

    return (
        <React.Fragment>
            <div className="userCategory-container">
                <ul className="categoria_barra">
                    {
                        userCategorias.length && userCategorias.map((category, i) => {
                            return(
                                <li className="userCategory_barra_individual" key={userCategorias + i}>
                                    <div>
                                        {userCategorias[i].nombre}
                                    </div>
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