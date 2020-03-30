import React from 'react'
import PrisloLogo from '../logo.svg'
import Icon from '../components/Icon'

function Header() {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="mainMenu poppins">
                            <div className="logofixedHeader text-center">
                                <a href="index.html">
                                    <img width={70} src={PrisloLogo} alt="Prislo logo"/>
                                </a>
                            </div>
                            <div className="mobileMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul>
                                <li className="has-menu-items"><a href="#">Home</a></li>
                                <li className="has-menu-items"><a href="#">Catalogue</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header