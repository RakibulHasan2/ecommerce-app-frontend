import React from 'react';
import './CategorySection.css'
const CategorySection = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-10 mt-10'>All The Categories</h1>
            <div class="container mx-auto mb-10">
                <div className='shirt'>
                    <div className="flex justify-center items-end h-full">
                        <div className='hoverDiv'>
                            <div className='hoverEffect w-36 p-3 bg-gray-500 text-white  font-bold text-center mb-10 rounded-xl'>
                                <p>Shirts</p>
                                <p>3 Products</p>
                            </div>
                            <button className='button'>Shop</button>
                        </div>
                    </div>
                </div>
                <div className="t-shirts">

                </div>
                <div class="jeans">

                </div>
                <div class="bag">


                </div>
                <div class="shoe">

                </div>
                <div class="watch">


                </div>
                <div class="sneaker">


                </div>
                <div class="hat">


                </div>
            </div>
        </div>
    );
};

export default CategorySection;