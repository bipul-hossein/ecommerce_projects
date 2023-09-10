import React from "react";
import Navbar from "../../components/public/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] px-2 mx-auto mt-[60px] md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
