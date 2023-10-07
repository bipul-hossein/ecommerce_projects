import React, { useContext, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../../../contexts/AuthProvider";
import axios from "axios";

const UserOrders = () => {
  // const orders = [1, 1, 1, 1, 1, 1, 1, 1];
  const {user} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/order?email=jubayerahmed@gmail.com")
    .then(res => setOrders(res?.data))
    .catch(err => console.log(err))
  }, [])
console.log(orders);






  return (
    <section className="max-w-[1000px] mx-auto">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Orders History
      </h1>
      <div className="mt-8 p-2">
        {orders?.map((order, i) => (
          <div key={i} className="shadow-md border-[1px] rounded-md p-2 mt-2">
            <div className="flex justify-between pb-2">
              <div>
                <p className="font-bold">Order# 32424</p>
                <p className="text-sm text-gray-500">Date Added: 25 sep 2023</p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="w-4 h-4 text-green-500" />{" "}
                <span className="text-green-500 ml-2 text-xs font-bold">
                  Success
                </span>
              </div>
            </div>
            <div className="py-3 border-t-[1px] flex gap-4 justify-between items-center">
              <div className="flex gap-2 items-center">
                <img
                  src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-1-15ada7/ideapad-1-15ada7-04-228x228.webp"
                  alt=""
                  className="w-12 h-12"
                />
                <p>Lenovo IdeaPad 1</p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-sm">Quantity: {order.quantity}</p>
                <p className="text-lg font-bold">60,560৳</p>
                <button className="bg-blue-500 text-white font-bold text-xs rounded-md py-2 px-5">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserOrders;
