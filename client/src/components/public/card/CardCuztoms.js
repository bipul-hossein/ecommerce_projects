import React, { useContext } from 'react';
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
                categoryData.map((product) =>
                    <>
                        <div key={product._id} class="product-card">
                            <div class="badge"><span className='text-red-500 text-xl'><AiFillFire /></span> Hot</div>
                            <div class="product-tumb">
                                <img src={product?.image} alt="" />
                            </div>
                            <div class="product-details">
                                <span class="product-catagory">Women,bag</span>
                                <h4><Link href="">{product?.productName}</Link></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div class="product-bottom-details">
                                    <div class="product-price"><small>৳96.00</small>৳96230.99</div>
                                    <div class="product-links">
                                        <a href=""><i class="fa fa-heart"></i></a>
                                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <button className="btn btn-success w-full btn-outline btn-sm">Shop Now</button>
                                </div>

                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default CardCuztoms;