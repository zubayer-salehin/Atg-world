import React from 'react';
import "./Banner.css";
import bannerImage from "../../../images/Banner-Image/Banner-Image.jpg"


const Banner = () => {
    return (
        <div className='position-relative'>
            <img className='bannerImage' src={bannerImage} alt="" />
            <div className='banner-text'>
                <h3 className='banner-title'>Computer Engineering</h3>
                <p className='banner-desc'>142,746 Computer Engineer Follow this</p>
            </div>
        </div>
    );
};

export default Banner;