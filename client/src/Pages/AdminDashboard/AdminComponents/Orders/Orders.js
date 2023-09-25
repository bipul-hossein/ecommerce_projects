import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    const orders = [
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending' },
        { name: 'jubayer ahmed', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending' },
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending' },
    ]

    return (
        <div className='md:w-11/12 md:mx-auto mt-20 md:px-2 md:mt-8'>
            <h2 className='text-base md:text-xl text-center md:text-left mb-3 md:mb-5 pl-4 md:pl-0'>Recent Orders</h2>
            <div className=' overflow-scroll'>
                <table class="table-auto rounded-t-md w-[750px] md:w-full">
                    <thead className='text-left '>
                        <tr className='text-center bg-blue-100 '>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">ORDER NO.</th>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">STATES</th>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">USER</th>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">PRODUCT</th>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Price&Q.</th>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">ORDER TIME</th>
                            <th className="text-sm font-semibold md:font-medium py-2 md:p-2">LOCATION</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) =>
                                <tr key={i} className=' text-center my-1'>
                                    <td className="pr-2 rounded-l-xl md:px-0 bg-red-100 py-1 md:py-2 border-white border-y-[2px]"><Link to={'details'}> #0001 </Link>
                                    </td>
                                    <td className="pr-2 md:px-0 bg-red-100 py-1 md:py-2 border-white border-y-[2px]">{order.states}</td>
                                    <td className="pl-1 py-1 bg-red-100 md:py-2 border-white border-y-[2px]">
                                        <div>
                                            <p>{order.name}</p>
                                            <p>{order.phone}</p>
                                        </div>
                                    </td>
                                    <td className=" bg-red-100 py-1 md:py-2 border-white border-y-[2px]">{order.product}</td>
                                    <td className=" px-3 md:px-0 bg-red-100 py-1 md:py-2 border-white border-y-[2px]">{order.price} X 1</td>
                                    <td className=" bg-red-100 py-1 md:py-2 border-white border-y-[2px]">5 oct, 23 || 1.00pm</td>
                                    <td className=" bg-red-100 py-1 md:py-2 rounded-r-xl border-white border-y-[2px]">Jashore, New Market</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;