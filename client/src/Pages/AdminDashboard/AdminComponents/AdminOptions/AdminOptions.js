import React from 'react';
import { FaDollarSign, FaLock, FaProductHunt, FaUserEdit } from 'react-icons/fa';
import { PiWalletFill } from 'react-icons/pi';
import { BsPencilFill } from 'react-icons/bs';
import { BiSolidDoughnutChart, BiSolidGroup } from 'react-icons/bi';
import { RiMessage2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const AdminOptions = () => {
    return (
        <div>
            <div className='md:max-w-[1200px] md:mx-auto px-2 mt-8'>
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
        </div>
    );
};

export default AdminOptions;

const options = [
    {
        icon: <PiWalletFill className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Orders", routes: 'orders'
    },
    {
        icon: <BsPencilFill className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Categories", routes: 'categories'
    },
    {
        icon: <FaProductHunt className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "Products", routes: 'products'
    },
    {
        icon: <FaProductHunt className="h-7 md:h-9 w-7 md:w-9 text-blue-500" />,
        name: "User Info", routes: 'users'
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