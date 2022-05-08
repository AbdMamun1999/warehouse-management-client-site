import React from 'react';
import banner from '../../images/banner/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${banner})` }}>
            <div>
                <small>Special Discount On Sales</small>
                <h1>We Supply Highly Quality</h1>
                <div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;