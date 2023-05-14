import React from 'react';
import './CategorySection.css'
import jeans from '../../Assets/Images/CategoriesPic/denims.jpg'
import tShirts from '../../Assets/Images/CategoriesPic/isolated-black-t-shirt-model-front-view.jpg'
import shirts from '../../Assets/Images/CategoriesPic/Jean-Cafe-Maroon-100-Cotton-SDL060281791-1-b9a4b.jpg'
import bag from '../../Assets/Images/CategoriesPic/81zjIWI-rdL._AC_SL1500_.jpg'
import watch from '../../Assets/Images/CategoriesPic/CURREN-8329-Watches-price-i.jpg'
import shoe from '../../Assets/Images/CategoriesPic/istockphoto-172417586-612x612.jpg'
import sneaker from '../../Assets/Images/CategoriesPic/2065446-Clone-The-12-Best-Running-Shoes-for-Wide-Feet-in-2022-732x549-Feature-1.png'
import hat from '../../Assets/Images/CategoriesPic/Geneva__91946.jpg'
const CategorySection = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-10 mt-10'>All The Categories</h1>
            <div class="container mx-auto mb-10">
                <div class="item1">
                    <img className='w-full h-full' src={shirts} alt="" />
                </div>
                <div class="item2">
                    <img className='w-full h-full' src={tShirts} alt="" />
                </div>
                <div class="item3">
                    <img className='h-full w-full' src={jeans} alt="" />
                </div>
                <div class="item4">
                    <img className='h-full w-full' src={bag} alt="" />
                </div>
                <div class="item5">
                    <img className='h-full w-full' src={shoe} alt="" />
                </div>
                <div class="item6">
                    <img className='h-full w-full' src={watch} alt="" />
                </div>
                <div class=" item7">
                    <img className='h-full w-full' src={sneaker} alt="" />
                </div>
                <div class="item8">
                    <img className='h-full w-full' src={hat} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CategorySection;