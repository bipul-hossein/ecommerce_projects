import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFire } from "react-icons/ai";
import './Card.css'
import useCategoryData from '../../../hooks/useCategoryData';

const CardCuztoms = () => {
    const [categoryData] = useCategoryData()
    //console.log(categoryData)
    return (
        <>
            {
                categoryData.map((product, i) =>
                    <div key={i}>
                        <div className="product-card">
                            <div className="badge"><span className='text-red-500 text-xl'><AiFillFire /></span> Hot</div>
                            <div className="product-tumb">
                                <img src={product?.image} alt="" />
                            </div>
                            <div className="product-details">
                                <span className="product-catagory">Women,bag</span>
                                <h4><Link href="">{product?.productName}</Link></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div className="product-bottom-details">
                                    <div className="product-price"><small>৳96.00</small>৳96230.99</div>
                                    <div className="product-links">
                                        <a href="/"><i className="fa fa-heart"></i></a>
                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <button className="btn btn-success w-full btn-outline btn-sm">Shop Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CardCuztoms;