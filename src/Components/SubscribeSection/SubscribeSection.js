import React from 'react';
import img from '../../Assets/Images/201420241-wow-sale-and-happy-man-with-shopping-bag-in-studio-excited-for-discount-or-purchase-on-white.png'
const SubscribeSection = () => {
    return (
        <div className='lg:flex justify-around bg-green-100'>
            <div className='flex justify-center items-center'>
                <div className='lg:ml-10'>
                    <h1 className='text-4xl font-bold mb-4'>Stay Home & get your daily <br /> needs from our shop</h1>
                    <p className='mb-6'>Start you'r Daily shopping with <span className='text-green-700 font-bold'>Exclusive Wear</span></p>
                    <input className='p-4 text-sm rounded-md' type="text" placeholder='your email address' name="" id="" />

                    <button className='btn  btn-success text-white'>Subscribe</button>
                </div>
            </div>
            <div className=''>
                <img src={img} alt="" />

            </div>
        </div>
    );
};

export default SubscribeSection;