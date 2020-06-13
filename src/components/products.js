import React from 'react';

export default function Products() {
    return (
        <section className="comonSection noPaddingTop newArrivals">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <h2>New Arrivals</h2>
                            <div className="titleBars"></div>
                            <p>
                            Double-sided Tote Bags and Make-up Bags. Big and Beautiful. Please be sure to follow our IG for daily updates
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">
                        <div className="singleProduct01 style_two text-center">
                            {/* <div className="labelsPro poppins newPro">New</div>
                            <div className="labelsPro poppins salePro">Sale</div> */}
                            <div className="productThumb01">
                                <img src="images/home2/product1.jpg" alt="" />
                                <div className="productHover01">
                                <p className="vol_btn vol_btn_bg">
                                        Available
                                    </p>
                                </div>
                            </div>
                            <div className="productDesc01">
                                <h5><a href="shop_single.html" className="poppins">Dawson Backpack</a></h5>
                                <p className="cats"><a href="shop_single.html">Accessories</a></p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="350ms">
                        <div className="singleProduct01 style_two text-center">
                            <div className="productThumb01">
                                <img src="images/home2/product2.jpg" alt="" />
                                <div className="productHover01">
                                <p className="vol_btn vol_btn_bg">
                                        Available
                                    </p>
                                </div>
                            </div>
                            <div className="productDesc01">
                                <h5><a href="shop_single.html" className="poppins">Vila Printed Tie Neck Dress</a></h5>
                                <p className="cats"><a href="shop_single.html">fashion</a></p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="400ms">
                        <div className="singleProduct01 style_two text-center">
                            {/* <div className="labelsPro poppins newPro">New</div>
                            <div className="labelsPro poppins salePro">Sale</div> */}
                            <div className="productThumb01">
                                <img src="images/home2/product3.jpg" alt="" />
                                <div className="productHover01">
                                    <p className="vol_btn vol_btn_bg">
                                        Available
                                    </p>
                                </div>
                            </div>
                            <div className="productDesc01">
                                <h5><a href="shop_single.html" className="poppins">Fitch Woven Saddle Bag</a></h5>
                                <p className="cats"><a href="shop_single.html">Accessories</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}