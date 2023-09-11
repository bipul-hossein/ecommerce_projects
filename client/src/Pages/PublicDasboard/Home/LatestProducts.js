import React from 'react';
import Card from '../../../components/public/card/Card';
import product_icon from '../../../Images/product_icon.jpeg';


const LatestProducts = () => {
    return (
        <div style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }} className=' w-11/12 mx-auto mt-0 py-3 rounded-md'>
            <div className='md:flex p-3'>
                <div className='pt-5 mb-6 md:mb-0 md:w-1/5 text-center'>
                    <div className='rounded-full flex justify-center'>
                        <img className='' src={product_icon} alt="" />
                    </div>
                    <h2 className='text-base md:text-xl font-semibold text-center'>Latest Products</h2>
                    <p className='text-sm mt-3 md:mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className='grid mt-4 gap-2 md:w-4/5 md:gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;