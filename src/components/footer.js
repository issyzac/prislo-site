import React from 'react';

export default function Footer() {
    return (
        <footer className="footer2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <aside className="widget">
                            <div className="textwidget">
                                <h1> Prislo </h1>
                                <div className="footerDesc">
                                    Innovative and Creative, natural and handmade. Foucing on
                                    bringing a blend of African-English styles of bags for daily uses.
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-4 col-sm-6 paddLeft11">
                        <aside className="widget">
                            <h3 className="widgetTitle">Informations</h3>
                            <ul>
                                <li><a href="index2.html#"> Contact Us </a></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="clearfix hidden-lg hidden-md hidden-xs"></div>
                    <div className="col-lg-4 col-sm-6 noPaddingLeft">
                        <aside className="widget">
                            <h3 className="widgetTitle">Follow Us</h3>
                            <div className="footerSocials2">
                                <a href="index2.html#"><i className="fa fa-facebook"></i></a><a href="index2.html#"><i className="fa fa-twitter"></i>
                                </a><a href="index2.html#"><i className="fa fa-google-plus"></i></a><a href="index2.html#"><i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </footer>
    )
}