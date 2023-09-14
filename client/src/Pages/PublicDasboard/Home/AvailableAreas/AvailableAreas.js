import React from 'react';

const AvailableAreas = () => {
    return (
           <div className="relative w-full h-[250px] mb-8 md:h-[350px]">
            <img className='h-full' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-333/Default/stores/chaldal/components/landingPage2/LandingPage/images/city-background.png " alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h2 className='text-xl md:text-2x mb-4'>Currently Delivering in</h2>
                <p className='w-1/2 mx-auto p-2 bg-primary text-white rounded-3xl'>jashore</p>

            </div>
        </div>
    );
};

export default AvailableAreas;