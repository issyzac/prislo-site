import React, { Component } from 'react'
import { RevSlider, Slide, Caption } from 'react-rev-slider'

class Banner extends Component {

    config = {
        delay: 9000,
        startwidth: 1170,
        startheight: 500,
        hideThumbs: 10,
        fullWidth: "on",
        forceFullWidth: "on",
        fullScreenAlignForce: "off",
        navigationType: "bullet",
        navigationArrows: "on",
        navigationStyle: "round",
        touchenabled: "on",
        onHoverStop: "on",
        navOffsetHorizontal: 0,
        navOffsetVertical: 20,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "on",
        navigationVOffset: 35
    };

    render() {
        return (
            <section className="banner2">
                <div className="revSlider">
                    <RevSlider config={this.config}>
                        <Slide
                            src={process.env.PUBLIC_URL + '/images/slider/banner_two.jpg'}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}>
                            <Caption
                                class="tp-caption skewfromrightshort fadeout"
                                data-x="center"
                                data-y="center"
                                data-voffset="-55"
                                data-speed="1000"
                                data-start="800"
                                data-easing="easeInQuad"
                            >
                                <h6 className="sl2_h6 playfair">The Fashion Peak</h6>
                            </Caption>
                            <Caption
                                class="tp-caption skewfromrightshort fadeout"
                                data-x="center"
                                data-y="center"
                                data-speed="1000"
                                data-start="800"
                                data-easing="Power4.easeOut"
                            >
                                <h1 className="sl_h raleway">FEEL THE TRENDY FASHION</h1>
                            </Caption>
                            <Caption
                                class="tp-caption skewfromrightshort fadeout"
                                data-x="center"
                                data-y="center"
                                data-voffset="86"
                                data-speed="1000"
                                data-start="800"
                                data-easing="easeInQuad"
                            >
                                <div className="slbutons">
                                    <a href="index2.html#" className="vol_btn poppins">VIEW COLLECTION<i className="flaticon-arrows-3"></i></a>
                                </div>
                            </Caption>
                        </Slide>
                    </RevSlider>
                </div>
            </section>
        )
    }
}

export default Banner