import React from 'react';
import Categories from './Categories';
import Banner from '../../../components/public/banner/Banner';
import MainFacilities from '../../../components/public/mainFacilities/MainFacilities';



const Home = () => {

    return (
        <div >
            <Banner/>
            <MainFacilities/>
            <Categories />
        </div>
    );
};

export default Home;