import React, { useContext, useEffect, useState } from "react";
import AddDeliveryAddressModal from "../../../components/public/addDeliveryAddressModal/AddDeliveryAddressModal";
import { FiPlus } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from './../../../contexts/AuthProvider';
import axios from 'axios';

const Checkout = () => {
  const {user} = useContext(AuthContext);
  const cartItems = useLocation()?.state;
  const [openModal, setOpenModal] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [orderProducts, setOrderProducts] = useState({});
  const userEmail = user?.email;
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems) {
      const newOrderProducts = {}; 
  
      cartItems.forEach((item, i) => {
        newOrderProducts[i] = {
          id: item.idMeal,
          quantity: item.quantity ? item.quantity : 1,
        };
      });
  
      setOrderProducts({ ...orderProducts, ...newOrderProducts });
    }
  }, [cartItems]); //eslint-disable-line
  

  const handlePlaceOrder = async()=> {
    const res = await axios.put("http://localhost:5000/api/order", {userEmail, orders: orderProducts})
    if(res?.data){
      navigate('/checkout/order-confirm')
    }
  }
  const calculateSubTotal = () => {
    let total = 0;
    cartItems.forEach((item, i) => {
      total += parseInt(item?.idMeal);
    });
    return total;
  };




useEffect(()=> {
  setSubTotal(calculateSubTotal());
}, [cartItems]) //eslint-disable-line




  return (
    <>
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
              <div
                onClick={() => setOpenModal(true)}
                className="p-4 rounded-md border-[1px] flex gap-4 justify-center items-center cursor-pointer"
              >
                <FiPlus className="w-8 h-8 text-blue-500" />{" "}
                <span className="font-bold text-blue-500">
                  Add Your Delivery Address
                </span>
              </div>
              <div className="hidden justify-between">
                <div>
                  <p className="text-base font-semibold my-2">Deliver to:</p>
                  <p className="text-sm font-semibold my-2">
                    Name: jubayer ahmed
                  </p>
                  <p className="text-sm my-1 font-semibold">
                    Phone: 01759865636
                  </p>
                  <p className="text-sm my-1 font-semibold">
                    Address: bangladesh
                  </p>
                </div>
                <p
                  onClick={() => setOpenModal(true)}
                  className="text-blue-500 text-lg font-bold md:mr-10 cursor-pointer"
                >
                  Edit
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-4 rounded-md w-full mt-4"
            style={{ boxShadow: "0 6px 16px rgba(0,0,0,.25)" }}
          >
            {
              cartItems?.map((item, i)=> {
                  
                
                return <div key={i}><div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 items-center w-full">
                  <img
                    className="w-14 h-14 rounded-md"
                    src={item?.strMealThumb}
                    alt=""
                  />
                  <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center w-full">
                    <p className="text-xs-font-bold">
                      {item?.strMeal}
                    </p>
  
                    <div className="flex justify-around w-[40%]">
                      <p className="text-xs font-bold">Qty: {item?.quantity ? item?.quantity : 1} </p>
                      <p className="text-xs font-bold">৳ {item?.idMeal}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-2" /></div>
              })}
            <div className="flex justify-between items-center mt-2">
              <div className="gap-2 items-center hidden md:flex"></div>
              <div className="flex justify-between w-full ">
                <p className="text-sm font-bold">Total Items: {cartItems?.length}</p>
                <p className="text-sm font-bold">Sub Total: ৳ {subTotal}</p>
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
                  className="cursor-pointer w-4 h-4"
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
                <p className="text-sm font-semibold">৳ {subTotal}</p>
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
                <p className="text-sm font-semibold">৳ {subTotal + 60}</p>
              </div>
              <div className="my-2 flex justify-between items-center mt-5">
                <button 
                onClick={handlePlaceOrder}
                className="bg-primary text-white p-2 w-full font-bold rounded-sm flex justify-center items-center">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${openModal ? "block" : "hidden"}`}>
        <AddDeliveryAddressModal setOpenModal={setOpenModal} />
      </div>
    </>
  );
};

export default Checkout;
