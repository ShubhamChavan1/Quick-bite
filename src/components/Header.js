import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [state, setSTATE] = useState("Log In")



    const handleOnClick = () => {
        state === "Log In" ? setSTATE("LOG OUT") : setSTATE("Log In")
    }

    return (
        <nav className="header" style={{ backgroundColor: "#f0f0f0" }}>
            <div className="logo">
                <img className="logo-img" src={LOGO_URL} alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact us</Link></li>
                    <li>cart</li>
                    <button className="btn-login" onClick={handleOnClick}>{state}</button>
                </ul>
            </div>
        </nav>
    );
}

export default Header;