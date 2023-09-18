import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../../../components/public/card/Card';
import { BiMenuAltLeft } from 'react-icons/bi';
import FilterSidebar from './FilterSidebar';


const ProductCategory = () => {
    const { meals } = useLoaderData()
    const category_name = useParams();
    const [filterSidebar, setFilterSidebar] = useState(false)
    console.log(filterSidebar)

    return (
        <div className='my-10 flex gap-2 md:gap-4 w-full md:w-11/12 mx-auto '>
            <div className='w-1/5 hidden md:block'>
                <div className=' bg-slate-50 border-[1px] py-3 pl-3 rounded-md'>
                    <h3 className='text-base font-bold pb-3 border-b-[1px]'>Availability</h3>
                    <div className='py-2'>
                        <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>In Stock</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Pre Order</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Up Coming </p></div>
                    </div>
                </div>
                <div className='mt-2 bg-slate-50 border-[1px] py-3 pl-3 rounded-md'>
                    <h3 className='text-base font-bold pb-3 border-b-[1px]'>Filter By Weight</h3>
                    <div className='py-2'>
                        <div className='flex gap-2 text-sm font-semibold py-2'><input type="checkbox" /><p>250 G</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'><input type="checkbox" /><p>500 G</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'><input type="checkbox" /><p>01 KG</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'><input type="checkbox" /><p>.5 KG</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'><input type="checkbox" /><p>02 KG</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'><input type="checkbox" /><p>05 KG</p></div>
                    </div>

                </div>
                <div className='mt-2 bg-slate-50 border-[1px] py-3 pl-3 rounded-md'>
                    <h3 className='text-base font-bold pb-3 border-b-[1px]'>Type</h3>
                    <div className='py-2'>
                        <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Trending</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Popular</p></div>
                        <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Top Selling</p></div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-4/5'>
                <div className='bg-slate-50 border-[1px] p-[10px] flex justify-between mb-5 rounded-md'>
                    <h2 className='hidden md:block text-base font-bold pl-2'>{category_name.id}</h2>
                    <div onClick={() => setFilterSidebar(true)} className='flex items-center gap-1 md:hidden px-2 rounded bg-slate-200 '>
                        <BiMenuAltLeft className=' h-6 w-6 font-bold' />
                        <p className='font-light text-sm text-black'>Filter</p>
                    </div>
                    <div className='flex'>
                        <div className='flex items-center pr-2'>
                            <label for="price-select" className='px-1 text-xs md:text-sm font-semibold opacity-80'>Short By: </label>
                            <select name="price" id="price-select" className='bg-slate-200 w-24 md:w-auto text-xs md:text-sm px-1 py-[6px] rounded'>
                                <option value="">Default</option>
                                <option value="">Price (Low - High)</option>
                                <option value="">Price (High - Low)</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4'>
                    {
                        meals.map((meal, index) =>
                            <Card key={index} data={meal} />
                        )
                    }
                </div>

            </div>
            <div className={`fixed top-14 z-40 duration-1000 ${filterSidebar ? 'translate-x-0' : 'translate-x-[100%]'} `}>
                <FilterSidebar setFilterSidebar={setFilterSidebar}/>
            </div>
        </div>
    );
};

export default ProductCategory;