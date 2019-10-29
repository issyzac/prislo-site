import React from 'react';

function TopHeader() {
    return (
        <section className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-5">
                        <div className="topMenusHolder">
                            <ul className="topMenus clearfix poppins">
                                <li><a href="index.html#"><i className="frontIcon icon-Exit"></i>Register</a></li>
                                <li><a href="index.html#" data-toggle="collapse" data-target="#accountTogg">My Account <i className="fa fa-angle-down"></i></a>
                                    <ul className="sub-menu collapse" id="accountTogg">
                                        <li><a href="index.html#">My wishlis</a></li>
                                        <li><a href="index.html#">My cart</a></li>
                                        <li><a href="index.html#">sing in</a></li>
                                    </ul>
                                </li>
                                <li><a href="index.html#"><i className="frontIcon icon-ShoppingCart"></i>5 Items</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-2">
                        <div className="logo text-center">
                            <a href="index.html"><img src="images/logo.png" alt="Volta" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-5">
                        <div className="topLanguangeSearch clearfix">
                            <form method="post">
                                <input type="text" name="s" id="s" placeholder="Search" />
                            </form>
                            <div className="langMenu">
                                <a href="index.html#" data-toggle="collapse" data-target="#langTogg">EN <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu collapse" id="langTogg">
                                    <li><a href="index.html#">BANGLA</a></li>
                                    <li><a href="index.html#">CHINA</a></li>
                                    <li><a href="index.html#">ENGlISH</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopHeader;