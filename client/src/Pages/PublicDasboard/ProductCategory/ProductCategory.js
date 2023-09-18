import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../../../components/public/card/Card';


const ProductCategory = () => {
    const { meals } = useLoaderData()
    const category_name = useParams();

    return (
        <div className='my-10 w-11/12 mx-auto '>
            <h2 className='text-base md:text-xl mb-5'>{category_name.id}</h2>

            <div className='grid grid-cols-2 md:grid-cols-5'>
                {
                    meals.map((meal, index) =>
                        <Card key={index} id={meal.idMeal} title={meal.strMeal} image={meal.strMealThumb}  />
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategory;