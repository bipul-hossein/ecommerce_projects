import React from "react";
import {
  FaAddressCard,
  FaHeart,
  FaLock,
  FaStar,
  FaUserEdit,
  FaDollarSign
} from "react-icons/fa";
import { PiWalletFill } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";

const UserDashboard = () => {
  const options = [
    {
      icon: <PiWalletFill className="h-7 w-7 text-blue-500" />,
      name: "Orders",
    },
    {
      icon: <FaUserEdit className="h-7 w-7 text-blue-500" />,
      name: "Edit Profile",
    },
    {
      icon: <FaLock className="h-7 w-7 text-blue-500" />,
      name: "Change Password",
    },
    {
      icon: <FaAddressCard className="h-7 w-7 text-blue-500" />,
      name: "Addresses",
    },
    { icon: <FaHeart className="h-7 w-7 text-blue-500" />, name: "Wish List" },
    {
      icon: <RiComputerFill className="h-7 w-7 text-blue-500" />,
      name: "Save PC",
    },
    { icon: <FaStar className="h-7 w-7 text-blue-500" />, name: "Star Points" },
    {
      icon: <FaDollarSign className="h-7 w-7 text-blue-500" />,
      name: "Your Transactions",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-2 my-10 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            className="w-16 h-16 rounded-full"
            src="https://www.vhv.rs/dpng/d/119-1199788_user-vector-icon-png-clipart-png-download-icon.png"
            alt=""
          />
          <h3 className="text-lg font-bold text-gray-600">Jubayer Ahmed</h3>
        </div>
        <div>
          <button className="bg-red-500 text-white font-semibold px-3 py-2 rounded-md">
            Logout
          </button>
        </div>
      </div>
      <div className="my-5 grid grid-cols-3 md:grid-cols-4 gap-2">
        {options.map((option, i) => (
          <div key={i} className="flex flex-col justify-center items-center gap-2 p-5 md:p-10 shadow-lg border rounded-md">
            <p className="bg-blue-100 rounded-full p-3">
              {option.icon}
            </p>
            <p className="text-xs text-center md:text-sm font-bold">{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
