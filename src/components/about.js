import React from 'react'

export default function AboutSection() {
    return (
        <section className="comonSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <h4 className="about-section-title" style={{ 
                                fontFamily: 'Montserrat', 
                                fontSize: "40px",
                                fontWeight: "900",
                                color: "#000000"
                                }} > 
                                THIS IS PRISLO </h4>
                            <div className="titleBars"></div>
                            <p style=
                                {{
                                    fontFamily: "Mosk",
                                    fontSize: "24px",
                                    lineHeight: "1.3em",
                                    color: "#000000"
                                }}>
                                Innovative and Creative, natural and handmade. Foucing on bringing a blend of African-English styles of bags for daily uses.
                                <br /><br />Designer, Prisca Nnko has created the brand locally for the world, For the purpose of sharing Love with the world.
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