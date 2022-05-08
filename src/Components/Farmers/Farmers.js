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
                        <h6>Apple's Farmer</h6>
                        <p>George William was born in 1982.He is a good farmer. He has been producing apples for a long time. He has been working with us for 20 years</p>
                    </div>
                </div>
                <div className='farmers-card'>
                    <div className='farmer-img'>
                        <img src={imgTwo} alt="" />
                    </div>
                    <div className='descrption'>
                        <h3>Vijay William</h3>
                        <h6>Pomegranate's farmer</h6>
                        <p>Vijay Willian was born in 1985.He is a good farmer. He has been producing Pomegranate for a long time. He has been working with us for 18 years</p>
                    </div>
                </div>
                <div className='farmers-card'>
                    <div className='farmer-img'>
                        <img src={imgThree} alt="" />
                    </div>
                    <div className='descrption'>
                        <h3>Rebecca Garzany</h3>
                        <h6>Pumpkin's farmer</h6>
                        <p>Vijay Willian was born in 1975.He is a good farmer. He has been producing Pumpkin for a long time. He has been working with us for 26 years</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Farmers;