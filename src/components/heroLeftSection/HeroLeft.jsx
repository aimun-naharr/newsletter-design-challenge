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
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis amet saepe quia quae est veritatis, hic dolore ducimus, totam veniam esse! Ipsa harum qui exercitationem quos, ab eius doloribus placeat! </p>
                              <button className="button cursor">Read more</button>
                           </div>
                        </div>
                </div>
        );
};

export default HeroLeft;
