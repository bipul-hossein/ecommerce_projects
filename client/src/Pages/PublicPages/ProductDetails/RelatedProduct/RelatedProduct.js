import React from 'react';
import Card from '../../../../components/public/card/Card';
import useProductsData from '../../../../hooks/useProductsData';

const RelatedProduct = () => {
    const [products] = useProductsData();
    return (
        <div className="my-10">
          <h2 className="text-base md:text-xl border-b pb-2 font-bold my-2">Related products</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {
              products?.slice(0, 4)?.map(data => (
                <Card key={data?.idMeal} data={data}/>
                ))
            }
            </div>
      </div>
    );
};

export default RelatedProduct;