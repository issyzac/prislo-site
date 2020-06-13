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
                                An innovative and eco-friendly designer brand. Focusing on bringing a blend of African-English fabric bags in a mix and style with love.
                                <br /><br />Tanzanian Designer Prisca Nnko has created a fashion local brand for everyone to experience. To unfold the love confection in African print for everything.....dresses, bags, shoes and even pencil cases (remember, everyone!).
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
                                        Our love for fabric, more specifically the African fabric has led us to that design 
                                        dimension where we think of putting it up on everything nice. We started with 
                                        dresses and trousers, then came bags (all sorts from safari bags to fanny packs), 
                                        then shoes, and accessories- wide range. We also customize fabric on any material upon customer request.
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