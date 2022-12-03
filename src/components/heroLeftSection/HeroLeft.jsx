import React from "react";
import "./heroLeft.css";
import banner from "../../assets/images/image-web-3-desktop.jpg";
const HeroLeft = () => {
        return (
                <div className="heroLeft">
                        <div className="banner-img">
                                <img src={banner} alt="" />
                        </div>
                        <div className="heroBottom">
                           <div className="bottom-left"><h1>The Bright <br /> Future of <br /> Web 3.0?</h1></div>
                           <div className="bottom-right">
                              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                              <button className="button cursor">Read more</button>
                           </div>
                        </div>
                </div>
        );
};

export default HeroLeft;
