import React, { useState } from "react";
import Menu from "./menu/Menu";
import "./Topbar.scss";

const Topbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    //Hnadling navbar on scroll
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <header
            className={
                visible ? "topbarContainer" : "topbarContainer navHidden"
            }
        >
            <nav className="topbar">
                {/* Logo container */}
                <div className="left">
                    <img
                        src="https://i.postimg.cc/7YXqWjK0/iso.png"
                        alt="Logo empresa Indicius"
                    />
                    <img
                        src="https://i.postimg.cc/Xq7zG196/Full-Logo.png"
                        alt="Logo empresa Indicius"
                        className="imgMobile"
                    />
                </div>
                {/* Menu container */}
                <div className="right">
                    <div
                        className={menuOpen ? "hamburger active" : "hamburger"}
                        onClick={() => {
                            setMenuOpen((prevState) => !prevState);
                        }}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line2"></span>
                    </div>
                    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>
            </nav>
        </header>
    );
};

export default Topbar;
