import "./Header.css";
import "./HeaderIcons.css"

import ResponsiveMenu from "react-responsive-navbar";
import { Close } from "styled-icons/material/Close";
import { Menu } from "styled-icons/material/Menu";

function Header(props) {
    return (
        <div className="headerContainer">
            <header className="header">
                <div className="wrap">
                    <header className="logo">
                        <h1 className="logo-title">
                            <a href="#" className="logo-link">
                                mava
                            </a>
                        </h1>
                    </header>
                    <nav className="menu">
                        <ResponsiveMenu
                            menuOpenButton={
                                <div className="menu hamburger-menu menu-btn">
                                    <Menu size={32}  open/>
                                </div>
                            }
                            menuCloseButton={
                                <div className="menu hamburger-menu menu-btn">
                                    <Close size={32} />
                                </div>
                            }
                            changeMenuOn="900px"
                            menu={
                                <ul className="menu-list">
                                    <li className="menu-item is-active menu-item--play">
                                        <a href="#" className="menu-link">
                                            Ana Sayfa
                                        </a>
                                    </li>
                                    <li className="menu-item is-active menu-item--play">
                                        <a href="#" className="menu-link">
                                            Ürünlerimiz
                                        </a>
                                    </li>
                                    <li className="menu-item is-active menu-item--play">
                                        <a href="#" className="menu-link">
                                            Referanslarımız
                                        </a>
                                    </li>
                                    <li className="menu-item is-active menu-item--play">
                                        <a href="#" className="menu-link">
                                            Kurumsal Kurumsal
                                        </a>
                                    </li>
                                    <li className="menu-item is-active menu-item--play">
                                        <a href="#" className="menu-link">
                                            Kurumsal
                                        </a>
                                    </li>
                                </ul>

                            }
                        />
                    </nav>

                </div>
            </header>
        </div>
    );
}

export default Header;
