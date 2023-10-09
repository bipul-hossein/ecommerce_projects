import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/public/navbar/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider";

const UserDashboard = () => {
  const { LogOut, userOldDbInfo } = useContext(AuthContext);
  console.log(userOldDbInfo);
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
        <div className="my-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
