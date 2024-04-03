import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import "./navbar.css";

const Navbar = (props) => {
    return (
        <>
            <div className="navbarcontainer">
                <span className="title">{props.title}</span>
            </div>
        </>
    )
}

export default Navbar;