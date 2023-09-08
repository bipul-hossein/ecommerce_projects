import React from 'react';
import MobileView from './MobileView';


const Navbar = () => {


    return (
        <>
            <div className="fixed bottom-0 z-10 w-full md:hidden">
                <MobileView/>
            </div>
        </>
    );
};

export default Navbar;