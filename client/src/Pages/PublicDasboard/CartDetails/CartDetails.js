import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiMinus, FiPlus } from 'react-icons/fi';


const CartDetails = () => {
    const products = [
        { name: 'allu', price: '30tk' },
        { name: 'potol', price: '30tk' },
        { name: 'allu', price: '30tk' },
        { name: 'allu', price: '30tk' },
    ]

    return (
        <div className='my-20 flex gap-2'>
            <div className='w-2/3 mx-auto pt-7 px-4 border-[1px]'>
                <table class="table-auto rounded-t-md w-full">
                    <thead className='text-left'>
                        <tr className='text-center'>
                            <th className="font-medium p-2">PRODUCT</th>
                            <th className="font-medium p-2">PRICE</th>
                            <th className="font-medium p-2">QUANTITY</th>
                            <th className="font-medium p-2">SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={i} className=' text-center my-2 '>
                                    <td className="px-3 py-5 border-t-2">{product.name}</td>
                                    <td className="px-3 py-5 border-t-2">{product.price}</td>
                                    <td className="px-3 py-5 border-t-2">1</td>
                                    <td className="px-3 py-5 border-t-2">
                                        <div className="flex items-center justify-center p-2">
                                            <span className="">
                                                <FiMinus className="w-6 bg-secondary p-2 cursor-pointer font-semibold text-xs h-6" />
                                            </span>
                                            <span className="p-2">0</span>
                                            <span className="">
                                                <FiPlus className="w-6 p-2 bg-secondary cursor-pointer text-xs h-6" />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-3 py-5 border-t-2"><RiDeleteBinLine /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

            <div className='w-1/3 h-auto bg-[#696969] bg-opacity-10 mx-auto pt-7 px-4 border-[1px]'>
                <table className='w-full'>
                    <thead className='text-left'>
                        <tr>
                            <th className="font-medium p-2">CART TOTALS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex justify-between'>
                            <td className="px-3 py-5 border-t-2">Subtotals</td>
                            <td className="px-3 py-5 border-t-2">00</td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td className="px-3 py-5 border-t-2">Shipping</td>
                            <td className="px-3 py-5 border-t-2">
                                <div className='flex gap-2'><input type="checkbox"/><p>Delivery Cost</p> <span>00</span></div>
                                <div className='flex'><input type="checkbox"/><p className='ml-2'>FREE SHIPPING</p></div>
                            </td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td className="px-3 py-5 border-t-2">Total Price</td>
                            <td className="px-3 py-5 border-t-2">000</td>
                        </tr>
                    </tbody>
                </table>
                        <button className='w-full mt-4 rounded-3xl bg-opacity-50 bg-primary py-2 text-xl px-3'>PROCEED TO CHECKOUT</button>

            </div>
        </div>
    );
};

export default CartDetails;