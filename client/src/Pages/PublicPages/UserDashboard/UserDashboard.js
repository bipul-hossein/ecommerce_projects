import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/public/navbar/Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-2 my-10 mt-20 md:mt-0">
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
        <div className="my-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;