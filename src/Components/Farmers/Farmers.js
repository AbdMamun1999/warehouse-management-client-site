import React from 'react';
import './Farmers.css'
import imgOne from '../../images/farmers/1.jpg'
import imgTwo from '../../images/farmers/2.jpg'
import imgThree from '../../images/farmers/3.jpg'


const Farmers = () => {
    return (
        <div>
            <h1 className='farmer-header'>Our Farmers</h1>
            <div className='farmers'>
                <div className='farmers-card'>
                    <div className='farmer-img'>
                        <img src={imgOne} alt="" />
                    </div>
                    <div className='descrption'>
                        <h3>George William</h3>
                        <h6>Arable Farmer</h6>
                        <p>Praising pain was born and I will give you a complete account of the system.</p>
                    </div>
                </div>
                <div className='farmers-card'>
                    <div className='farmer-img'>
                        <img src={imgTwo} alt="" />
                    </div>
                    <div className='descrption'>
                        <h3>Vijay William</h3>
                        <h6>Arable Farmer</h6>
                        <p>Praising pain was born and I will give you a complete account of the system.</p>
                    </div>
                </div>
                <div className='farmers-card'>
                    <div className='farmer-img'>
                        <img src={imgThree} alt="" />
                    </div>
                    <div className='descrption'>
                        <h3>Rebecca Garzany</h3>
                        <h6>Arable Farmer</h6>
                        <p>Praising pain was born and I will give you a complete account of the system.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Farmers;