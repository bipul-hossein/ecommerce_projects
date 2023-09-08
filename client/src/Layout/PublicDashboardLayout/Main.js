import React from "react";
import Navbar from "../../components/public/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
