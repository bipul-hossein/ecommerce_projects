import React from 'react';

const RecentOrders = () => {
    const orders = [
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending' },
        { name: 'jubayer ahmed', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending' },
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending' },
    ]
    
    return (
        <div className='md:w-11/12 md:mx-auto mt-10 md:px-2 md:mt-12'>
            <h2 className='text-base md:text-xl mb-5 pl-4 md:pl-0'>Recent Orders</h2>
            <table className="table-auto rounded-t-md w-full">
                <thead className='text-left'>
                    <tr className='text-center bg-blue-100'>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">User</th>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Product</th>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Price&Q.</th>  
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">States</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) =>
                            <tr key={i} className=' text-center my-2 border '>
                                <td className="pl-1 rounded-l-xl py-1 bg-red-100 md:py-2 border-t-[10px] border-white">
                                    <div>
                                        <p>{order.name}</p>
                                        <p>{order.phone}</p>
                                    </div>
                                </td>
                                <td className=" bg-red-100 py-1 md:py-2 border-t-[10px] border-white">{order.product}</td>
                                <td className=" px-3 bg-red-100 py-1 md:py-2 border-t-[10px] border-white">{order.price} X 1</td>
                             
                                <td className="pr-2 rounded-r-xl md:px-3 bg-red-100 py-1 md:py-2 md:pr-4 border-t-[10px] border-white">{order.states}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;