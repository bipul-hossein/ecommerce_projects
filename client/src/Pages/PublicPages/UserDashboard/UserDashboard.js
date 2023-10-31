import React, { useContext } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../../components/public/navbar/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider";

const UserDashboard = () => {
  const { LogOut, userOldDbInfo } = useContext(AuthContext);
  const pathname = useLocation()?.pathname;

  let subMenu = false;
  if (pathname === "/account/" || pathname === "/account") {
    subMenu = true;
  }

  const handleLogOut = () => {
    LogOut();
  };
  const ProfileIcon =
    userOldDbInfo?.payload?.name?.firstName[0] +
    userOldDbInfo?.payload?.name?.lastName[0];


  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-2 my-10 mt-20 md:mt-0">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <p className="w-16 h-16 rounded-full text-xl text-white font-bold bg-blue-500 flex justify-center items-center uppercase">
              {ProfileIcon}
            </p>
            <h3 className="text-lg font-bold text-gray-600">
              {userOldDbInfo?.payload?.name?.firstName +
                " " +
                userOldDbInfo?.payload?.name?.lastName}
            </h3>
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className="bg-red-500 text-white font-semibold px-3 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
        <div
          className={`w-full p-2 rounded-md border borer-1px mt-2 bg-blue-200 hidden ${
            subMenu ? "md:hidden" : "md:block"
          }`}
        >
          <div className="ml-10 flex items-center gap-10 font-bold text-sm text-gray-600">
            <Link to="/account">Dashboard</Link>
            {subMenuItems?.map((item, i) => (
              <NavLink 
              key={i}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 underline" : ""
                }
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="my-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

const subMenuItems = [
  {
    to: "/account/orders",
    text: "Orders",
  },
  {
    to: "/account/edit-profile",
    text: "Edit Profile",
  },
  {
    to: "/account/change-password",
    text: "Change Password",
  },
  {
    to: "/account/address",
    text: "Address",
  },
  {
    to: "/account/wish-list",
    text: "Wish List",
  },
  {
    to: "/account/transactions",
    text: "Transactions",
  },
];
