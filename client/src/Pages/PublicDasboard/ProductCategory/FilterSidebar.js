import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';


const FilterSidebar = ({setFilterSidebar}) => {

    return (
        <div className='w-full h-screen bg-white '>
        <div onClick={() => setFilterSidebar(false)} className='pt-2 mr-2 p-1 flex justify-end '> <AiOutlineClose className='text-right w-6 h-6 bg-slate-200' /></div>
            <h2 className='pt-10 pl-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, deserunt, debitis fuga, natus odit quidem repudiandae voluptatum sint rem quis expedita laborum temporibus officiis omnis praesentium tenetur ex saepe eos. </h2>
        </div>
    );
};

export default FilterSidebar;

