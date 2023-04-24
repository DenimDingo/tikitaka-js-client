import React from "react"; 
import { Link } from "react-router-dom"
import "./Sidebar.scss"

function SideBar () {

    return (
        <div id="side">
            <Link to="/">
                <div id="void-block">void</div>
            </Link>
            <Link to="/chat">
                <div id="void-block">void</div>
            </Link>
            <Link to="/void">
                <div id="void-block">void</div>
            </Link>
            <Link to="/void">
                <div id="void-block">void</div>
            </Link>
        </div>
    )
}

export default SideBar;