import React from 'react';
import Slider from './../../Components/Slider/Slider';
import SubscribeSection from '../../Components/SubscribeSection/SubscribeSection';
import CategorySection from './../../Components/CategorySection/CategorySection';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <CategorySection></CategorySection>
           <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;