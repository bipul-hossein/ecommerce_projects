import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-10 p-2 flex gap-5 flex-col md:flex-row">
      <div className="md:w-[70%]">
        <div
          className="p-4 rounded-md w-full"
          style={{ boxShadow: "0 6px 16px rgba(0,0,0,.25)" }}
        >
          <div>
            {/* <h4 className="text-lg font-bold text-center text-gray-600">
              Checkout
            </h4> */}
            <div className="p-4 rounded-md border-[1px] hidden gap-4 justify-center items-center">
              <FiPlus className="w-8 h-8 text-blue-500" />{" "}
              <span className="font-bold text-blue-500">
                Add Your Delivery Address
              </span>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-base font-semibold my-2">Deliver to:</p>
                <p className="text-sm font-semibold my-2">
                  Name: jubayer ahmed
                </p>
                <p className="text-sm my-1 font-semibold">Phone: 01759865636</p>
                <p className="text-sm my-1 font-semibold">
                  Address: bangladesh
                </p>
              </div>
              <p className="text-blue-500 text-lg font-bold md:mr-10">Edit</p>
            </div>
          </div>
        </div>
        <div
          className="p-4 rounded-md w-full mt-4"
          style={{ boxShadow: "0 6px 16px rgba(0,0,0,.25)" }}
        >
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <img
                className="w-12 h-12 rounded-md"
                src="https://static-01.daraz.com.bd/p/61f4e14e3e10ef912134142480b16d4e.jpg"
                alt=""
              />
              <p className="text-xs-font-bold">
                Artificial Leather wallet for men
              </p>
            </div>
            <div className="flex justify-around w-[40%]">
              <p className="text-xs font-bold">Qty: 1</p>
              <p className="text-xs font-bold">৳ 450</p>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 items-center">
              <img
                className="w-12 h-12 rounded-md"
                src="https://static-01.daraz.com.bd/p/61f4e14e3e10ef912134142480b16d4e.jpg"
                alt=""
              />
              <p className="text-xs-font-bold">
                Artificial Leather wallet for men
              </p>
            </div>
            <div className="flex justify-around w-[40%]">
              <p className="text-xs font-bold">Qty: 1</p>
              <p className="text-xs font-bold">৳ 450</p>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 items-center">
              <img
                className="w-12 h-12 rounded-md"
                src="https://static-01.daraz.com.bd/p/61f4e14e3e10ef912134142480b16d4e.jpg"
                alt=""
              />
              <p className="text-xs-font-bold">
                Artificial Leather wallet for men
              </p>
            </div>
            <div className="flex justify-around w-[40%]">
              <p className="text-xs font-bold">Qty: 1</p>
              <p className="text-xs font-bold">৳ 450</p>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 items-center">
              <img
                className="w-12 h-12 rounded-md"
                src="https://static-01.daraz.com.bd/p/61f4e14e3e10ef912134142480b16d4e.jpg"
                alt=""
              />
              <p className="text-xs-font-bold">
                Artificial Leather wallet for men
              </p>
            </div>
            <div className="flex justify-around w-[40%]">
              <p className="text-xs font-bold">Qty: 1</p>
              <p className="text-xs font-bold">৳ 450</p>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between items-center mt-2">
            <div className="gap-2 items-center hidden md:flex"></div>
            <div className="flex justify-around w-[40%]">
              <p className="text-sm font-bold">Total Items: 4</p>
              <p className="text-sm font-bold">Sub Total: ৳ 450</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="p-4 rounded-md w-full"
          style={{ boxShadow: "0 6px 16px rgba(0,0,0,.25)" }}
        >
          <div className="w-[350px]">
            <p className="text-lg font-bold">Payment Method</p>
            <p className="my-3">Select a payment method</p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name=""
                id="payment"
                className="cursor-pointer"
              />
              <label
                id="payment"
                htmlFor="payment"
                className="font-semibold text-sm cursor-pointer"
              >
                Cash on Delivery
              </label>
            </div>
          </div>
          <div>
            <hr className="my-5" />
            <p className="text-base font-bold mt-2 mb-4">Order Summary</p>
            <div className="my-2 flex justify-between items-center">
              <p className="text-sm font-semibold">Sub Total</p>
              <p className="text-sm font-semibold">৳ 124</p>
            </div>
            <div className="my-2 flex justify-between items-center">
              <p className="text-sm font-semibold">Delivery Cost</p>
              <p className="text-sm font-semibold">৳ 60</p>
            </div>
            <div className="my-2 flex justify-between items-center">
              <p className="text-sm font-semibold">Discount</p>
              <p className="text-sm font-semibold">৳ 0</p>
            </div>
            <div className="my-2 flex justify-between items-center">
              <p className="text-sm font-semibold">Total</p>
              <p className="text-sm font-semibold">৳ 184</p>
            </div>
            <div className="my-2 flex justify-between items-center mt-5">
              <Link to="/cart/checkout/order_confirm">
                <button className="bg-primary text-white p-2 w-full font-bold rounded-sm">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
