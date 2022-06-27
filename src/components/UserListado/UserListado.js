import React, {useState, useEffect} from "react";
import './UserListado.css';
import axios from "axios";

function UserListado() {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/api/users')
        .then((data) => {
            setUsers(data.data.users)
        })
    }, [])

    return(
        <React.Fragment>
            <ul className="userList-box">
                {
                    users.length && users.map((user, i) => {
                        return(
                            <li className="userList-container" key={user + i}>
                                <div className="userList-foto">
                                    <img className="userList-imagen" src={ "./imagenes/users/" + users[i].imagen } alt="foto de perfil"></img>
                                </div>
                                <div className="userList-info">
                                    <h2 className="userList-name">
                                        {users[i].nombre +" "+ users[i].apellido}
                                    </h2>
                                    <p className="userList-parrafo">
                                        {users[i].email}
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