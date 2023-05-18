import React from 'react';
import './CategorySection.css'
const CategorySection = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-10 mt-10'>All The Categories</h1>
            {/* <div class="container mx-auto mb-10">
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
            </div> */}
            <div class="grid first-grid gap-4 my-16 mx-auto w-[1000px] h-[1000px]">
                <div class="second-grid gap-4">
                    <div class="third-grid gap-4" >
                        <div class="img-1 ">
                            {/* <div className="flex justify-center items-end h-full">
                                <div className='hoverDiv'>
                                    <div className='hoverEffect w-36 p-3 bg-gray-500 text-white  font-bold text-center mb-10 rounded-xl'>
                                        <p>Shirts</p>
                                        <p>3 Products</p>
                                    </div>
                                    <button className='button'>Shop</button>
                                </div>
                            </div> */}
                        </div>
                        <div class="img-4 ">
                    
                        </div>
                    </div>
                    <div class="fourth-grid gap-4">
                        <div class="fifth-grid gap-4">
                            <div class="img-2">

                            </div>
                            <div class="img-3 ">

                            </div>
                        </div>
                        <div class="img-5 ">

                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <div class="img-6 "></div>
                    <div class="img-7 "></div>
                    <div class="img-8 "></div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;