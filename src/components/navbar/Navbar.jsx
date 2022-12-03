import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import { menuItems } from "../../libs/menuItems";
const Navbar = () => {
        return (
                <nav className="navbar-container">
                        <div className="navbar-wrapper"><div><img src={logo} alt="logo" className="logo" /></div>
                        <div className="navRight">
                                <img src={menu} alt="menu" className="menu" />
                                <ul className="menuItems">
                                        {menuItems.map((item, index) => (
                                                <li key={index}>{item.name}</li>
                                        ))}
                                </ul>
                        </div></div>
                </nav>
        );
};

export default Navbar;
