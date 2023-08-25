import React from 'react';
import useCategoryData from '../../../hooks/useCategoryData';

const Card = () => {
    const [categoryData] = useCategoryData()
    return (
        <>
            {
                categoryData.map((data) => <>
                    <div key={data._id} className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={data?.image} alt="Shoes" className='h-44 w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data?.productName}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>

                </>)
            }
        </>
    );
};

export default Card;