import React, {useState, useEffect} from "react";
import './lastUser.css';
import axios from 'axios';

function LastUser (){
    const [lastUsers, setLastUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/api/users')
        .then((data) => {
            setLastUsers(data.data.users[data.data.users.length -1])
            
            
        })
    }, [])

    return (
        <React.Fragment>
            <div className="lastUser-container">
                <div className="UserFoto">
                    <img className="LastUser-imagen" src={ "./imagenes/users/" + lastUsers.imagen } alt=""></img>
                </div>
                <div className="lastUserInfo-container">
                    <h2 className="userName">{ lastUsers.nombre +" "+ lastUsers.apellido }</h2>
                    <h3 className="lastUserMail">{lastUsers.email}</h3>
                    <h4 className="lastUserInfo">{ lastUsers.descripcion }</h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LastUser;