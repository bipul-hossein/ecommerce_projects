import React from "react";
import { Link } from "react-router-dom";
import { PiWalletFill } from "react-icons/pi";
import {
  FaAddressCard,
  FaHeart,
  FaLock,
  FaStar,
  FaUserEdit,
  FaDollarSign,
} from "react-icons/fa";

const AccountOptions = () => {
  const options = [
    {
      icon: <PiWalletFill className="h-7 w-7 text-blue-500" />,
      name: "Orders",
      route: "/account/orders",
    },
    {
      icon: <FaUserEdit className="h-7 w-7 text-blue-500" />,
      name: "Edit Profile",
      route: "/account/edit-profile",
    },
    {
      icon: <FaLock className="h-7 w-7 text-blue-500" />,
      name: "Change Password",
      route: "/account/change-password",
    },
    {
      icon: <FaAddressCard className="h-7 w-7 text-blue-500" />,
      name: "Addresses",
      route: "/account/address",
    },
    { icon: <FaHeart className="h-7 w-7 text-blue-500" />, name: "Wish List" },

    { icon: <FaStar className="h-7 w-7 text-blue-500" />, name: "Star Points" },
    {
      icon: <FaDollarSign className="h-7 w-7 text-blue-500" />,
      name: "Your Transactions",
    },
  ];

  return (
    <section className="my-5 grid grid-cols-3 md:grid-cols-4 gap-2">
      {options.map((option, i) => (
        <Link
          to={option.route}
          key={i}
          className="flex flex-col justify-center items-center gap-2 p-5 md:p-10 shadow-lg border rounded-md"
        >
          <p className="bg-blue-100 rounded-full p-3">{option.icon}</p>
          <p className="text-xs text-center md:text-sm font-bold">
            {option.name}
          </p>
        </Link>
      ))}
    </section>
  );
};

export default AccountOptions;
