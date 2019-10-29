import React, { Component } from 'react'

class Banner extends Component {

    render() {
        return (
            <section className="banner_01">
                <div className="revSlider">
                    <ul>
                        <li data-transition="boxfade" data-slotamount="7" data-masterspeed="1000" >
                            <div className="tp-caption sfb"
                                data-x="left"
                                data-y="top"
                                data-hoffset="0"
                                data-voffset="-80"
                                data-speed="1000"
                                data-start="800"
                                data-easing="easeInOutCirc">
                                <div className="sliderImgs">
                                    <img src="images/slider/sl1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tp-caption sfb"
                                data-x="right"
                                data-y="center"
                                data-hoffset="0"
                                data-voffset="0"
                                data-speed="1000"
                                data-start="800"
                                data-easing="easeInQuad">
                                <h1 className="sl_h raleway">FEEL THE TRENDY FASHION</h1>
                            </div>
                            <div className="tp-caption fade"
                                data-x="right"
                                data-y="center"
                                data-hoffset="0"
                                data-voffset="65"
                                data-speed="1000"
                                data-start="800"
                                data-easing="easeInQuint">
                                <h6 className="sl_p poppins">Get FLAT 30% Off For All New Arrivals</h6>
                            </div>
                            <div className="tp-caption sfb"
                                data-x="right"
                                data-y="center"
                                data-hoffset="0"
                                data-voffset="145"
                                data-speed="1000"
                                data-start="800"
                                data-easing="easeOutBounce">
                                <div className="slbutons">
                                    <a href="index.html#" className="vol_btn poppins">Shop Now<i className="flaticon-arrows-3"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner