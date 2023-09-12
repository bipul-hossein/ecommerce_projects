import React from 'react';
import CardSecondary from '../../../../components/public/card/CardSecondary';

const TopProducts = () => {
    return (
        <section className='w-11/12 md:mx-auto px-2 my-16'>
            <div>
                <h3 className='text-xl my-5 font-bold'>Top Products</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
                <CardSecondary />
            </div>
        </section>
    );
};

export default TopProducts;