import React from 'react';

const LatestProductCard = () => {
    const products = [
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
        { name: 'A Vindication of the Rights of Woman' },
  
    ]
    return (
        <div>
            {
                products.map(p => <>
                    <div>
                        <div class="max-w-2xl mx-auto ">
                            <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                <a href="/">
                                    <img class="rounded-t-lg p-8" src="https://ghorerbazar.com/wp-content/uploads/2022/11/maccoffee-classic.jpg" alt="" />
                                </a>
                                <div class="px-5 pb-5">
                                    <a href="/">
                                        <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{p.name}</h3>
                                    </a>
                                    <div class="flex items-center mt-2.5 mb-5">


                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                        <a href="/"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                            to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>)
            }

        </div>
    );
};

export default LatestProductCard;