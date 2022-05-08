import React from 'react';
import './WhyToChooseUs.css'
import icon1 from '../../images/icon/icon1.png'
import icon2 from '../../images/icon/icon2.png'
import icon3 from '../../images/icon/icon3.png'
import icon4 from '../../images/icon/icon4.png'

const WhyToChooseUs = () => {
    return (
        <div className='why-to-choose-us'>
            <div className='why-to-choose-top'>
                <h1 className='farmer-header'>WHY TO CHOOSE US</h1>
                <p className='why-header-para'>There are a number of reasons to do business with Consumer Fresh Produce. We provide the freshest, highest quality fruit and vegetables for your business.</p>
            </div>
            <div className="why-to-choose-bottom">
                <div className='why-to-choose-bottom-wrapper'>
                    <div className='why-img'>
                        <img src={icon1} alt="" />
                    </div>
                    <div>
                        <h3>
                            100% Organic Products
                        </h3>
                        <p>
                        Organic products reduce public health risks to farm workers, their families, and consumers by minimizing their exposure to toxic and persistent chemicals on the farm and in food, the soil in which they work and play, the air they breathe, and the water they drink. Children are especially vulnerable to pesticides.
                        </p>
                    </div>
                </div>
                <div className='why-to-choose-bottom-wrapper'>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div>
                        <h3>
                            Any Time, Anywhere Delivery
                        </h3>
                        <p>
                        Anytime, Anyplace, Anywhere: the new last-mile delivery. We are continuously customizing our offers. Delivering from the store to anywhere within 1 hour.
                        </p>
                    </div>
                </div>
                <div className='why-to-choose-bottom-wrapper'>
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <div>
                        <h3>
                            Keeps Your Family Healthy
                        </h3>
                        <p>
                        Fruit and vegetables should be an important part of your daily diet. They are naturally good and contain vitamins and minerals that can help to keep you healthy. They can also help protect against some diseases.
                        </p>
                    </div>
                </div>
                <div className='why-to-choose-bottom-wrapper'>
                    <div>
                        <img src={icon4} alt="" />
                    </div>
                    <div>
                        <h3>
                            Clean, Fresh and Safety
                        </h3>
                        <p>
                            Fresh fruits and vegetables are
                            an important part of a healthful diet. They provide vitamins,
                            minerals and fiber to help keep
                            your body healthy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyToChooseUs;