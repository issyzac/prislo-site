import React from 'react'

export default function AboutSection() {
    return (
        <section className="comonSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <h4 className="poppins"
                                style={{
                                    fontWeight: "900",
                                    fontSize: "24sp"
                                }} > THIS IS PRISLO </h4>
                            <div className="titleBars"></div>
                            <p style=
                                {{
                                    fontFamily: "'Chathura', sans-serif;",
                                    fontSize: "18px",
                                    lineHeight: "1.3em",
                                    fontWeight: "300"
                                }}>
                                An innovative and eco-friendly designer brand. Focusing on bringing a blend of African-English fabric bags in a mix and style with love.
                                <br /><br />Designer Prisca Nnko has created the Tanzanian localbrand for the world. To unfold the love confection in African print.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 aboutCall">
                        <div className="aboutMinimal">
                            <div className="row">
                                <div className="col-sm-6 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">
                                    <div className="aboutImg">
                                        <img src="images/home2/about1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="350ms">
                                    <div className="aboutDesc">
                                        <h4 className="poppins"> OUR STORY </h4>
                                        <p>
                                            The Love Boat soon will be making another run the love boat
                                            promises something for everyone one two three four five six
                                            seven eight Sclemeel schlemazel hasenfeffer incorporated the
                                            weather started getting rough the tiny ship was tossed if
                                            not for the courage of the fearless crew the minnow would
                                            be lost the minnow would be lost.
                                        </p>
                                        <a href="index2.html#" className="vol_btn">View Products<i className="flaticon-arrows-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}