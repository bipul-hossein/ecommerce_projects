import React from 'react';
import Card from '../../../../components/public/card/Card';
import CardSecondary from '../../../../components/public/card/CardSecondary';

const TopProducts = () => {
    return (
        <section>
            <div>
                <h3>Top Products</h3>
            </div>
            <div className='grid grid-cols-4'>
                <CardSecondary />
            </div>
        </section>
    );
};

export default TopProducts;