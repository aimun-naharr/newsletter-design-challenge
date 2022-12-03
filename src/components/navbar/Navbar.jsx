import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-menu-close.svg"
import { menuItems } from "../../libs/menuItems";
import { useState } from "react";
const Navbar = () => {
        const [open, setOpen]=useState(false)
        console.log(open)
        return (
                <nav className="navbar-container">
                        <div className="navbar-wrapper"><div><img src={logo} alt="logo" className="logo" /></div>
                        <div className="navRight">
                                <img src={menu} alt="menu" className="menu cursor" onClick={() => setOpen((prev) => !prev)} />
                                <ul className={open? "menuItems active": 'menuItems'}>
                                        <li><img src={close} alt=""  className=""/></li>
                                        {menuItems.map((item, index) => (
                                                <li  key={index}>{item.name}</li>
                                        ))}
                                </ul>
                        </div></div>
                </nav>
        );
};

export default Navbar;
