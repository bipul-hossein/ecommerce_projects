import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MobileView = () => {

    const Menus = [
        { name: "Menu", icon: <AiOutlineMenu />, },
        { name: "Search", icon: <AiOutlineSearch /> },
        { name: "Home", icon: <AiOutlineHome /> },
        { name: "Cart", icon: <AiOutlineShopping /> },
        { name: "Profile", icon: <IoPersonOutline /> },
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="bg-white max-h-[4.4rem] rounded-t-xl w-full">
            <ul className="flex relative">

                {Menus.map((menu, i) => (
                    <li key={i} className="w-full">
                        <Link href='/' className={`flex flex-col justify-center items-center text-center ${i === active
                            ? 'text-white bg-gray-700 pt-2'
                            : 'pt-3 flex-none'
                            }`}
                            onClick={() => setActive(i)}
                         >
                            <span
                                className={`text-xl cursor-pointer ${i === active && 'text-white'}`}
                            >
                                {menu.icon}
                            </span>
                            <span
                                className={`text-sm ${i === active
                                    ? "translate-x-6-4 opacity-100 "
                                    : "hidden opacity-0 translate-y-10 "
                                    }  `}
                            >
                                {menu.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileView;  