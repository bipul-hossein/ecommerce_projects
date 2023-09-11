import React from 'react';
import Banner from '../../../components/public/banner/Banner';
import LatestProducts from './LatestProducts';



const Home = () => {

    return (
        <div className='h-[1500px]'>
            <Banner />
            <LatestProducts />
        </div>
    );
};

export default Home;