import React from 'react';
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
    return (
        <div className='w-[85%] ml-[7.5%] h-[50px] items-center '>
            <GoSearch className='absolute top-[27px] left-[10%] font-bold w-5 h-5'/>
            <input
                type="text"
                className="w-full h-full border-[1px] pl-[10%] pr-2 bg-[#f7f7f7] rounded-l-md rounded-r-md focus:border-red-500 focus:border outline-none border-solid"
                placeholder="Search your products from here"
            />
        </div>
    );
};

export default SearchBar;