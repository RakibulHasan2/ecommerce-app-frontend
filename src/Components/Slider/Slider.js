import React from 'react';
import sliderImg1 from '../../Assets/Images/21-03-19-Fashion-ecommerce.jpg'
import sliderImg2 from '../../Assets/Images/output 3.png'
import sliderImg3 from '../../Assets/Images/banner_1683993645610.png'
const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={sliderImg1} alt="" className="w-full" style={{ height: "620px" }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sliderImg3} style={{ height: "620px" }} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-0 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-20 top-1/2 mt-12">
                        <div className=' text-white text-end mt-4'>
                            <p className='text-4xl font-bold '>Hurry Up !!!</p> <br />
                            <p className='text-5xl font-bold leading-snug'>get <span className='text-6xl text-red-800'>50%</span> off <br /> on  exclusive products</p>
                            <button className='btn btn-accent mt-10 text-white'>Shop Now</button>
                        </div>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={sliderImg2} style={{ height: "620px" }} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;