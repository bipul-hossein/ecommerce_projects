import React from 'react';
import { FaDollarSign, FaLock, FaProductHunt, FaUserEdit } from 'react-icons/fa';
import { PiWalletFill } from 'react-icons/pi';
import { FcBusinessman } from 'react-icons/fc';
import { BsPencilFill } from 'react-icons/bs';
import { BiSolidDoughnutChart, BiSolidGroup } from 'react-icons/bi';
import { RiMessage2Fill } from 'react-icons/ri';
import RecentOrders from './AdminComponents/Orders/RecentOrders';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <div className='mb-10' >
            <div className='md:max-w-[1200px] md:w-11/12 md:mx-auto px-2 mt-20 mb-10'>
                <h2 className='text-center text-2xl  font-semibold md:font-bold md:text-3xl mb-6'>Admin Panel</h2>
                <div className='flex justify-between items-center mb-6'>
                    <div className="flex gap-1 items-end ">
                        <FcBusinessman className="w-8 md:w-12 h-8 md:h-12 p-1 rounded-full bg-red-100" />
                        <h3 className="text-lg md:pb-1 font-semibold text-gray-600">Bipul Hossain</h3>
                    </div>
                    <div>
                        <button className="bg-red-200 text-black hover:bg-red-500 hover:text-white font-semibold px-3 py-2 rounded-md">
                            Logout
                        </button>
                    </div>
                </div>
                <div className="my-5 grid grid-cols-3 md:grid-cols-5 gap-2">
                    {options.map((option, i) => (
                        <div key={i}>
                            <Link to={option.routes}>
                                <div className="flex flex-col justify-center items-center gap-2 md:p-5 shadow-lg border rounded-md aspect-square ">
                                    <p className="bg-blue-100 rounded-full p-3 md:p-5">
                                        {option.icon}
                                    </p>
                                    <p className="text-xs px-1 text-center md:text-base font-bold">{option.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <RecentOrders />
        </div>

    );
};

export default AdminDashboard;


const options = [
    {
        icon: <PiWalletFill className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Orders", routes: 'orders'
    },
    {
        icon: <BsPencilFill className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Add Product", routes: 'add_product'
    },
    {
        icon: <FaProductHunt className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Products", routes: ''
    },
    {
        icon: <FaDollarSign className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Transactions", routes: ''
    },
    {
        icon: <RiMessage2Fill className="h-7 md:h-9 w-7 md:w-9  text-blue-500" />,
        name: "Message", routes: ''
    },
    {
        icon: <BiSolidDoughnutChart className="h-7 md:h-9 w-7 md:w-9  text-blue-500" />,
        name: "Analytics", routes: ''
    },
    {
        icon: <BiSolidGroup className="h-7 md:h-9 w-7 md:w-9  text-blue-500" />,
        name: "Team", routes: ''
    },
    {
        icon: <FaLock className="h-7 md:h-9 w-7 md:w-9  text-blue-500" />,
        name: "Settings", routes: ''
    },
    {
        icon: <FaUserEdit className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Edit Profile", routes: ''
    },
];