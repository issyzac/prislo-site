import React from 'react'

function Header() {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="mainMenu poppins">
                            <div className="logofixedHeader text-center">
                                <a href="index.html">
                                    <h2 style={{ fontFamily: "'Amita', cursive" }} > Prislo </h2>
                                </a>
                            </div>
                            <div className="mobileMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul>
                                <li className="has-menu-items"><a href="#">Home</a></li>
                                <li className="has-menu-items"><a href="#">shop</a></li>
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