import React from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingsReviews = () => {
    return (
        <div >
            <h3 className="text-base font-bold my-3">Rating & Reviews</h3>
            <div className=" flex flex-col md:flex-row gap-4 md:gap-20 max-w-2xl">
                <div>
                    <h1 className="text-3xl font-semibold">
                        4.5
                        <span className="text-xl font-semibold text-gray-500">/5</span>
                    </h1>
                    <div className="flex my-2">
                        <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                        <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                        <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                        <FaStar className="w-7 h-7 text-yellow-400 mr-1" />
                        <FaStarHalfAlt className="w-7 h-7 text-yellow-400 mr-1" />
                    </div>
                    <p className="text-sm mt-2 text-gray-600">41 Ratings</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-[2px]">
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                        </div>
                        <div className="w-[150px] h-3 bg-secondary">
                            <p className="w-[80%] h-3 bg-yellow-400"></p>
                        </div>
                        <p className="text-xs">24</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-[2px]">
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                        </div>
                        <div className="w-[150px] h-3 bg-secondary">
                            <p className="w-[40%] h-3 bg-yellow-400"></p>
                        </div>
                        <p className="text-xs">12</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-[2px]">
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                        </div>
                        <div className="w-[150px] h-3 bg-secondary">
                            <p className="w-[13%] h-3 bg-yellow-400"></p>
                        </div>
                        <p className="text-xs">4</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-[2px]">
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                        </div>
                        <div className="w-[150px] h-3 bg-secondary">
                            <p className="w-[5%] h-3 bg-yellow-400"></p>
                        </div>
                        <p className="text-xs">1</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-[2px]">
                            <FaStar className="text-yellow-400 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                            <FaStar className="text-gray-300 w-4 h-4" />
                        </div>
                        <div className="w-[150px] h-3 bg-secondary">
                            <p className="w-[0%] h-3 bg-yellow-400"></p>
                        </div>
                        <p className="text-xs">0</p>
                    </div>
                </div>
            </div>
            <div className="my-8 max-w-4xl">
                <p className="mb-3 max-w-300px text-sm bg-gray-100 p-2">Customer Reviews</p>
                <div className="p-2 flex flex-col gap-4">
                    <div>
                        <div className="flex justify-between">
                            <p className="text-sm font-bold">Jubayer Ahmed</p>
                            <p className="text-xs text-gray-500">16 Sep 2023</p>
                        </div>
                        <div className="flex gap-[2px] items-center my-1">
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo nobis error reiciendis nam ab, fugiat quasi enim nulla velit, odio, aliquam placeat nihil</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-sm font-bold">Bipul Hossain</p>
                            <p className="text-xs text-gray-500">16 Sep 2023</p>
                        </div>

                        <div className="flex gap-[2px] items-center my-1">
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-gray-300 w-3 h-3" />
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-sm font-bold">Md Abdullah</p>
                            <p className="text-xs text-gray-500">16 Sep 2023</p>
                        </div>

                        <div className="flex gap-[2px] items-center my-1">
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-yellow-400 w-3 h-3" />
                            <FaStar className="text-gray-300 w-3 h-3" />
                            <FaStar className="text-gray-300 w-3 h-3" />
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo nobis error reiciendis nam ab, fugiat quasi enim nulla velit, odio, aliquam placeat nihil um, dolor sit amet consectetur adipisicing elit. At quo nobis error reiciendis nam ab, fugiat quasi enim nulla velit, odio, aliquam placeat nihil</p>
                    </div>
                </div>
                <div className="flex gap-1 justify-end items-center mt-4">
                    <span className="w-8 text-center p-1 bg-gray-200 h-8 flex items-center justify-center"><FaArrowLeft className="text-gray-500" /></span>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">1</span>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">2</span>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">3</span>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">...</span>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm p-1 bg-gray-200">10</span>
                    <span className="w-8 text-center p-1 bg-gray-200 h-8 flex items-center justify-center"><FaArrowRight className="text-gray-500" /></span>
                </div>
            </div>
        </div>
    );
};

export default RatingsReviews;