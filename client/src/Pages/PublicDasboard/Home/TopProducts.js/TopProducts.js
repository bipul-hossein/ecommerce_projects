import React from 'react';
import CardSecondary from '../../../../components/public/card/CardSecondary';

const TopProducts = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <div>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 md:mb-7'>Top Products</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2'>
                <CardSecondary />
            </div>
        </section>
    );
};

export default TopProducts;