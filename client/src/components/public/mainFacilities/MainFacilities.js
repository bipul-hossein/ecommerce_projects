import React from "react";
import { BsTruck } from "react-icons/bs";
import { LuRefreshCw } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

const MainFacilities = () => {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center py-6 items-center mt-10 shadow-2xl md:w-[75%] mx-auto flex-wrap"
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="border-r px-8 rounded-md text-center">
        <BsTruck className="mb-3 mx-auto w-8 h-8" />

        <p className="font-semibold">Free Delivery</p>
        <p className="text-sm text-gray-400">Free Shipping on all order</p>
      </div>
      <div className="md:border-r px-8 rounded-md text-center">
        <LuRefreshCw className="mb-3 mx-auto w-8 h-8" />
        <p className="font-semibold">Return Policy</p>
        <p className="text-sm text-gray-400">Free Shipping on all order</p>
      </div>
      <div className="border-r px-8 mt-2 md:mt-0 rounded-md text-center">
        <BiSupport className="mb-3 mx-auto w-8 h-8" />
        <p className="font-semibold">24/7 Support</p>
        <p className="text-sm text-gray-400">Free Shipping on all order</p>
      </div>
      <div className="px-8 mt-2 md:mt-0 rounded-md text-center">
        <MdPayment className="mb-3 mx-auto w-8 h-8" />
        <p className="font-semibold">Secure Payment</p>
        <p className="text-sm text-gray-400">Free Shipping on all order</p>
      </div>
    </section>
  );
};

export default MainFacilities;
