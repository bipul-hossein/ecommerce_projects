import React from 'react';
import Card from '../../../components/public/card/Card';
import useTamporaryFakeData from '../../../hooks/useTamporaryFakeData';

const RelatedProducts = () => {
<<<<<<< HEAD
    const [tamporaryFakeData] = useTamporaryFakeData()
    console.log(tamporaryFakeData)
=======
  const [tamporaryFakeData] = useTamporaryFakeData()
>>>>>>> development

    return (
        <div className="my-10">
            <h2 className="text-base md:text-xl border-b pb-2 font-bold my-2">Related products</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {
                    tamporaryFakeData?.slice(0, 4)?.map((data, i) => (
                        <Card key={i} id={data.idMeal} title={data.strMeal} image={data.strMealThumb} />
                    ))
                }
            </div>
        </div>
    );
};

export default RelatedProducts;