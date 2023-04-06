import React, { useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import Medium from "./icons/Medium";
import Dribbble from "./icons/Dribbble";
import Twitter from "./icons/Twitter";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <ul className={menuOpen ? "menuContainer active" : "menuContainer"}>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Work</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">Services</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#testimonials">About</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#testimonials">Culture</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a className="active" href="#contact">
                    Contact
                </a>
            </li>
            {/* Social media container, only mobile */}
            <ul className="socialMediaContainer">
                <li>
                    <a href="">
                        <Instagram />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Linkedin />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Dribbble />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Medium />
                    </a>
                </li>
            </ul>
        </ul>
    );
};

export default Menu;
