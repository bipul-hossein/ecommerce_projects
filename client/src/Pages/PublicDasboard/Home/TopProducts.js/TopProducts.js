import React from 'react';
import CardSecondary from '../../../../components/public/card/CardSecondary';

const TopProducts = () => {

    return (
        <section className='md:w-11/12 mx-auto px-2 my-16'>
            <div>
                <h3 className='text-base md:text-xl my-5 font-bold'>Top Products</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4'>
                <CardSecondary />
            </div>
        </section>
    );
};

export default TopProducts;