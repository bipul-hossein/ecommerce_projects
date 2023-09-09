import React from 'react';
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
    return (
        <div className='fixed top-0 z-10 w-[85%] ml-[7.5%] h-[55px] items-center '>
            <GoSearch className='absolute top-[17px] left-[11px]'/>
            <input
                type="text"
                className="w-full h-full border-[1px] pl-8 bg-[#f7f7f7] rounded-l-md rounded-r-md focus:border-red-500 focus:border outline-none border-solid"
                placeholder="Search your products from here"
            />
        </div>
    );
};

export default SearchBar;