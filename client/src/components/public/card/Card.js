import React from 'react';
import useCategoryData from '../../../hooks/useCategoryData';
import './Card.css';

const Card = () => {
    const [categoryData] = useCategoryData()
    console.log(categoryData)
    return (
        <>
            {
                categoryData.map((data) => <>
                    <div key={data._id} className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={data?.image} alt="Shoes" className='h-44 w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data?.productName}
                                <div className="badge badge-secondary">New</div>
                            </h2>
                            <p></p>
                            <div className="card-actions justify-start">
                                <div className="text-3xl price_original">৳535</div>
                                <div className="price_offer">৳354</div>
                            </div>
                            <button className="btn btn-success btn-outline btn-sm">Shop Now</button>
                        </div>
                    </div>

                </>)
            }
        </>
    );
};

export default Card;