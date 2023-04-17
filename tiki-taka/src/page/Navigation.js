import React from "react"; 
import { Link } from "react-router-dom"
import "./Navigation.scss"

function Navigation () {

    return (
        <div id="gnb">
            <Link to="/login">
                <div id="gnb-block">LOGIN</div>
            </Link>
            <Link to="/">
                <div id="gnb-block">HOME</div>
            </Link>
            <Link to="/chat">
                <div id="gnb-block">CHAT</div>
            </Link>
        </div>
    )
}

export default Navigation;