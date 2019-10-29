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
                                    <img alt="Volta" src="images/logo.png" />
                                </a>
                            </div>
                            <div className="mobileMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul>
                                <li className="has-menu-items"><a href="index.html#">Home</a>
                                    <ul className="sub-menu">
                                        <li className="subMentTitle">HOMEPAGES</li>
                                        <li><a href="index.html">HOMEPAGE 1</a></li>
                                        <li><a href="index2.html">HOMEPAGE 2</a></li>
                                        <li><a href="index3.html">HOMEPAGE 3</a></li>
                                    </ul>
                                </li>
                                <li className="has-menu-items"><a href="index.html#">shop</a>
                                    <ul className="sub-menu">
                                        <li className="subMentTitle">SHOPPAGES</li>
                                        <li><a href="shop_01.html">shop style one</a></li>
                                        <li><a href="shop_02.html">shop style two</a></li>
                                        <li><a href="shop_03.html">shop style three</a></li>
                                        <li><a href="shop_04.html">shop style four</a></li>
                                        <li><a href="shop_single.html">Shop Single Page</a></li>
                                        <li><a href="checkout.html">checkout Page</a></li>
                                        <li><a href="cart.html">Cart page</a></li>
                                    </ul>
                                </li>
                                <li className="has-menu-items"><a href="index.html#">PAGES</a>
                                    <ul className="sub-menu">
                                        <li className="subMentTitle">PAGES</li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="checkout.html">checkout</a></li>
                                        <li><a href="contact_us.html">Contact</a></li>
                                    </ul>
                                </li>
                                <li className="has-menu-items"><a href="index.html#">Blog</a>
                                    <ul className="sub-menu">
                                        <li className="subMentTitle">BLOGPAGES</li>
                                        <li><a href="blog_01.html">Blog style one</a></li>
                                        <li><a href="blog_02.html">Blog style two</a></li>
                                        <li><a href="single_blog.html">Single Blog</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact_us.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header