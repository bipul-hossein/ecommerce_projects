import React from 'react';

const SpecificOrderDetails = () => {
    const orders = [
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
        { name: 'jubayer ahmed', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
    ]
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mb-10'>
                <h2 className='text-xl '>Order #80294</h2>
                <div className='flex gap-2 py-2 border-y-[2px] my-4'>
                    <p className='border-r-[1px] pr-2'>October 7, 2020 at 9:08 pm</p>
                    <p className='border-r-[1px] pr-2'>6 items</p>
                    <p className='border-r-[1px] pr-2'>Total $5,882.00</p>
                    <p className='border-r-[1px] pr-2 text-green-500'>paid</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 md:flex-row'>
    
                <div className='md:w-2/3'>
                    {/* Items */}
                    <div className='py-6 border-[2px] mb-5 w-full'>
                        <p className='pt-1 pl-4'>Note about Order</p>
                    </div>
                    <div className='bg-slate-50 mt-8 border-[1px] '>
                        <table class="table-auto rounded-t-md w-full">
                            <thead className='text-left bg-blue-100'>
                                <tr className=''>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:py-2 pl-3 md:pl-5">Items</th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Edit items</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, i) =>
                                        <tr key={i} className=' my-2 border '>
                                            <td className=" pl-5 py-1 md:py-2 border-t-[2px] border-red-100">{order.product}</td>
                                            <td className=" px-3 py-1 md:py-2 border-t-[2px] border-red-100">{order.price}</td>
                                            <td className=" px-3 py-1 md:py-2 border-t-[2px] border-red-100">+ {order.quantity} +</td>
                                            <td className=" px-3 py-1 md:py-2 border-t-[2px] border-red-100">delete</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-slate-50 mt-8 border-[1px] '>
                        {/* Transactions */}
                        <table class="table-auto rounded-t-md w-full">
                            <thead className='text-left bg-blue-100'>
                                <tr className=''>

                                    <th className="text-sm font-semibold md:font-medium py-2 md:py-2 pl-3 md:pl-5">Transactions</th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Edit Transactions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, i) =>
                                        <tr key={i} className=' my-2 border '>

                                            <td className=" pl-5 py-1 md:py-2 border-t-[2px] border-red-100"><p>payment</p> <p className='text-xs'>via bkash</p></td>
                                            <td className=" px-3 py-1 md:py-2 border-t-[2px] border-red-100">October 7, 2020</td>
                                            <td className=" px-3 py-1 md:py-2 border-t-[2px] border-red-100">$5665</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-slate-50 mt-8 border-[1px]'>
                        {/* Balance */}
                        <table class="table-auto rounded-t-md w-full">
                            <thead className='text-left bg-blue-100'>
                                <tr className=''>

                                    <th className="text-sm font-semibold md:font-medium py-2 md:py-2 pl-3 md:pl-5">Balance</th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Edit Balance</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, i) =>
                                        <tr key={i} className=' my-2 border '>

                                            <td className=" pl-5 py-1 md:py-2 border-t-[2px] border-red-100">
                                                <p>Order Total</p>
                                                <p className=''>Refund Total</p>
                                            </td>
                                            <td className=" px-3 py-1 md:py-2 border-t-[2px] border-red-100">
                                                <p>$00535</p>
                                                <p>$00535</p>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='md:w-1/3'>
                    {/* Customer info */}
                    <div className='flex flex-col gap-4 py-8 px-5 border-[1px] mb-3 '>
                        <div className='flex justify-between mb'>
                            <h3>Customer Name</h3>
                            <p className='text-[#0b5be5]'>Edit</p>
                        </div>
                        <div>
                            <p>Bipul Hossain</p>
                            <p>bipul@gmail.com</p>
                            <p>000349u43</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 py-8 px-5 border-[1px] mb-3 '>
                        <div className='flex justify-between mb'>
                            <h3>Contact person</h3>
                            <p className='text-[#0b5be5]'>Edit</p>
                        </div>
                        <div>
                            <p>Bipul Hossain</p>
                            <p>bipul@gmail.com</p>
                            <p>000349u43</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 py-8 px-5 border-[1px] mb-3 '>
                        <div className='flex justify-between mb'>
                            <h3>Shipping Address</h3>
                            <p className='text-[#0b5be5]'>Edit</p>
                        </div>
                        <div>
                            <p>Jessica Moore
                                Random Federation
                                115302, Moscow
                                ul. Varshavskaya, 15-2-178</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 py-8 px-5 border-[1px] mb-3 '>
                        <div className='flex justify-between mb'>
                            <h3>Billing Address</h3>
                            <p className='text-[#0b5be5]'>Edit</p>
                        </div>
                        <div>
                            <p>Jessica Moore
                                Random Federation
                                115302, Moscow
                                ul. Varshavskaya, 15-2-178</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificOrderDetails;