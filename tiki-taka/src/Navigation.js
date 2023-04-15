import React from "react"; 
import { Link } from "react-router-dom"

function Navigation () {

    return (
        <div >
            <Link to="/login">LOGIN</Link>
            <Link to="/">HOME</Link>
            <Link to="/chat">CHAT</Link>
        </div>
    )
}

export default Navigation;