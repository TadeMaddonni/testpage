import React from "react";
import "./Footer.scss";
import Instagram from "./menu/icons/Instagram";
import Twitter from "./menu/icons/Twitter";
import Medium from "./menu/icons/Medium";
import Dribbble from "./menu/icons/Dribbble";
import Linkedin from "./menu/icons/Linkedin";
import Twitch from "./menu/icons/Twitch";
import Youtube from "./menu/icons/Youtube";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                {/* Footer part 1 */}
                <div className="footerPartOne">
                    <div className="top">
                        <p>From Argentina to the world. </p>
                        <span>contact@indicius.com</span>
                    </div>
                    <div className="bottom">
                        <span>@ Indicius 2023</span>
                    </div>
                </div>

                {/* Footer part 2 */}
                <div className="footerPartTwo">
                    <div className="top">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Work</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Culture</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <form action="">
                            <label htmlFor="newsletter">
                                Indi updates every month. No spam.
                            </label>
                            <div className="inputContainer">
                                <input
                                    name="newsletter"
                                    type="email"
                                    placeholder="Suscribe to our newsletter"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.275t-.713-.3Z"
                                    />
                                </svg>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer part 3 */}
                <div className="footerPartThree">
                    <ul>
                        <li>
                            <a href="">
                                <Instagram />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Twitter />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Medium />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Dribbble />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Linkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Twitch />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Youtube />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
