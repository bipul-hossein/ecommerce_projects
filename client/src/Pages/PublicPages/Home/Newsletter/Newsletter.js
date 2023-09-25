import React from 'react';
import newsLetterBg from '../../../../Images/subscribe_bg.png';

const Newsletter = () => {
    return (
        <div className='my-10 text-white relative'>
            <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <p className="font-semibold text-xs md:text-sm">NEW CUSTOMER DISCOUNT</p>
            <h2 className="text-lg md:text-2xl font-bold my-4">Join our newsletter and get $20 <br className='hidden md:block' /> discount for your first order</h2>
            <div className='flex flex-col md:block gap-3 justify-center'>
            <input type="text" name="" id="" placeholder='Your Email' className='py-2 px-4 focus:outline bg-white rounded-sm md:rounded-l-sm outline-1 outline-primary text-black'/>
            <button className='p-2 rounded-md md:rounded-sm bg-primary w-1/2 md:w-auto mx-auto text-white font-bold'>Subscribe</button>
            </div>
            </div>
            <img className='h-[300px]' src={newsLetterBg} alt="" />
        </div>
    );
};

export default Newsletter;