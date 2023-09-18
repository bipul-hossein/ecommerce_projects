import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardSecondary from '../../../components/public/card/CardSecondary';
import Card from '../../../components/public/card/Card';


const ProductCategory = () => {
    const { meals } = useLoaderData()
    const category_name = useParams();


    return (
        <div className='my-10 w-11/12 mx-auto '>
            <div className='py-3 flex'>
                <h2 className='text-base md:text-xl mb-5'>{category_name.id}</h2>
                <div className='flex'>
                    <span className='flex'>
                        <p>show</p>
                        <p>20</p>
                    </span>
                    <span className='flex'>
                        <p>Sort By</p>
                        <p>Default</p>
                    </span>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-5'>
                {
                    meals.map((meal, index) =>
                        <Card key={index} data={meal}  />
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategory;