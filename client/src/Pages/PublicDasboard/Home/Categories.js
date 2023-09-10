import React from 'react';
import Card from '../../../components/public/card/Card';

const Categories = () => {
    return (
        <div className='w-11/12 mx-auto mt-0'>
            <h2 className='text-2xl md:text-4xl font-semibold text-center pt-5 md:pt-14'>Our All Products</h2>
            <div className='grid mt-4 gap-2 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <Card />
            </div>
        </div>
    );
};

export default Categories;