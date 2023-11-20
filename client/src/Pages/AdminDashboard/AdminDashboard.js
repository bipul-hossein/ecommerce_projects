import React from "react";
import { Link, NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/public/navbar/Navbar";
import { FcBusinessman } from "react-icons/fc";
import RecentOrders from "./AdminComponents/Orders/RecentOrders";
import useAuth from "../../hooks/useAuth";

const AdminDashboard = () => {
  const { logOut } = useAuth();
  const pathname = useLocation()?.pathname;

  let subMenu = false;
  if (pathname === "/dashboard/" || pathname === "/dashboard") {
    subMenu = true;
  }

  const handleLogOut = () => {
    logOut();
    Navigate("/login");
  };

  return (
    <div className="mb-5">
      <Navbar />
      <div className="md:max-w-[1200px] md:mx-auto px-2 mt-4 mb-4">
        <h2 className="text-center text-2xl  font-semibold md:font-bold md:text-3xl mb-6">
          Admin Panel
        </h2>
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-1 items-end ">
            <FcBusinessman className="w-8 md:w-12 h-8 md:h-12 p-1 rounded-full bg-red-100" />
            <h3 className="text-lg md:pb-1 font-semibold text-gray-600">
              Bipul Hossain
            </h3>
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className="bg-red-200 text-black hover:bg-red-500 hover:text-white font-semibold px-3 py-2 rounded-md"
            >
              logOut
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full p-2 rounded-md border borer-1px mt-2 bg-blue-200 hidden ${
          subMenu ? "md:hidden" : "md:block"
        }`}
      >
        <div className="ml-10 flex items-center gap-10 font-bold text-sm text-gray-600">
          <Link to="/dashboard">Dashboard</Link>
          {subMenuItems?.map((item, i) => (
            <NavLink
              key={i}
              id="RouterNavLink"
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
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <div className={`${subMenu ? "block" : "hidden"}`}>
        <RecentOrders />
      </div>
    </div>
  );
};

export default AdminDashboard;

const subMenuItems = [
  {
    to: "/dashboard/orders",
    text: "Orders",
  },
  {
    to: "/dashboard/categories",
    text: "Categories",
  },
  {
    to: "/dashboard/products",
    text: "Products",
  },
  {
    to: "/dashboard/users",
    text: "User Info",
  },
  {
    to: "/dashboard/",
    text: "Transactions",
  },
  {
    to: "/dashboard/",
    text: "Message",
  },
];
