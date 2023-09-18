import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../../../components/public/card/Card';


const ProductCategory = () => {
    const { meals } = useLoaderData()
    const category_name = useParams();


    return (
        <div className='my-10 flex gap-2 md:gap-4 w-11/12 mx-auto '>
            <div className='w-1/5 bg-slate-50 border-[1px] py-3 pl-3 rounded-md'>
                <h3 className='text-base font-bold pb-3 border-b-[1px]'>Availability</h3>
                <div className='py-2'>
                    <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>In Stock</p></div>
                    <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Pre Order</p></div>
                    <div className='flex gap-2 text-sm font-semibold py-2'>   <input type="checkbox" /><p>Up Coming </p></div>
                </div>
            </div>
            <div className='w-4/5'>
                <div className='bg-slate-50 border-[1px] py-3 flex justify-between mb-5 rounded-md'>
                    <h2 className='text-base font-bold pl-2'>{category_name.id}</h2>
                    <div className='flex'>
                        <div className='flex gap-1 pr-2'>
                            <p>Sort By:</p>
                            <p className='bg-slate-300 px-2'>Default</p>
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
        </div>
    );
};

export default ProductCategory;