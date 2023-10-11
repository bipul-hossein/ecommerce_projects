import React, { useContext, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ProductContext } from "../../../contexts/ProductsProvider";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const { added, setAdded } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("e-bazar"));
    setCartItems(cartData);
  }, [added]);

  //quantity plus
  const handlePlus = (id) => {
    const findProduct = cartItems?.find((product) => product._id === id);
    const restProducts = cartItems?.filter((product) => product._id !== id);

    if (!findProduct?.quantity) {
      localStorage.setItem(
        "e-bazar",
        JSON.stringify([
          ...restProducts,
          {
            ...findProduct,
            quantity: 2,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "e-bazar",
        JSON.stringify([
          ...restProducts,
          {
            ...findProduct,
            quantity: findProduct?.quantity + 1,
          },
        ])
      );
    }

    setAdded(!added);
  };

  //quantity Minus
  const handleMinus = (id) => {
    const findProduct = cartItems?.find((product) => product._id === id);
    const restProducts = cartItems?.filter((product) => product._id !== id);
    if (!findProduct?.quantity) {
      localStorage.setItem(
        "e-bazar",
        JSON.stringify([
          ...restProducts,
          {
            ...findProduct,
            quantity: 1,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "e-bazar",
        JSON.stringify([
          ...restProducts,
          {
            ...findProduct,
            quantity:
              findProduct?.quantity === 1 ? 1 : findProduct?.quantity - 1,
          },
        ])
      );
    }
    setAdded(!added);
  };

  const handleRemoveToCart = (id) => {
    const restProducts = cartItems?.filter((product) => product._id !== id);
    localStorage.setItem("e-bazar", JSON.stringify(restProducts));
    setAdded(!added);
  };

  const calculateSubTotal = () => {
    let total = 0;
    cartItems.forEach((item, i) => {
      const calculate = parseInt(item?.quantity) * parseInt(item?.price);
      total = total + calculate;
    });
    return total;
  };

  useEffect(() => {
    setSubTotal(calculateSubTotal());
  }, [cartItems, added]) //eslint-disable-line


  if (!cartItems?.length) {
    return (
      <div className="my-10 min-h-[50vh]">
        <h1 className="text-2xl text-center">No Cart Data Added</h1>
      </div>
    );
  }

  return (
    <div className="my-20 flex flex-wrap md:flex-nowrap mx-auto bg-slate-50 ">
      <div className="w-full md:w-11/12 px-5 pb-14 pt-7 border-b-2 mb-3 rounded-2xl md:rounded-none md:border-[1px]">
        <div className="flex px-1 pr-2 justify-between items-center mb-4 md:mb-8">
          <h2 className="text-lg font-semibold md:text-3xl">Shopping Cart</h2>
          <p className="text-base font-medium md:text-xl">
            <span>{cartItems?.length}</span> Items
          </p>
        </div>
        <div className="flex flex-col mx-auto gap-4">
          {cartItems
            ?.sort((a, b) => a.cartPosition - b.cartPosition)
            ?.map((product, i) => (
              <div key={i} className="border bg-white w-full rounded-xl">
                <div className="flex justify-between gap-2 px-4 py-3 md:px-4 md:py-4 ">
                  <div className="h-full flex justify-center gap-2 md:gap-4 ">
                    <img
                      src={product?.image}
                      alt=""
                      className="w-14 h-full md:w-16 md:h-16 rounded"
                    />
                    <div className="flex flex-col w-full md:flex-row md:items-center justify-between md:gap-10">
                      <p className="text-sm font-semibold md:text-lg">
                        {" "}
                        {product?.title}
                      </p>
                      <p className="text-sm font-bold text-blue-900 md:text-lg">
                        ৳ {product?.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex relative flex-col-reverse md:flex-row md:gap-10 items-end md:items-center justify-between">
                    <div className="flex items-center justify-center gap-1 md:px-2">
                      <span>
                        <FiMinus
                          onClick={() => handleMinus(product?._id)}
                          className="w-6 md:w-8 h-6 md:h-8 bg-white border-secondary border-[2px] rounded-full p-1 cursor-pointer font-semibold text-xs"
                        />
                      </span>
                      <span className="px-2">
                        {product?.quantity ? product?.quantity : 1}
                      </span>
                      <span>
                        <FiPlus
                          onClick={() => handlePlus(product?._id)}
                          className="w-6 md:w-8 h-6 md:h-8 bg-white border-secondary border-[2px] rounded-full p-1 cursor-pointer font-semibold text-xs"
                        />
                      </span>
                    </div>
                    <div className=" w-full flex flex-row-reverse items-center gap-2">
                      <span
                        onClick={() => handleRemoveToCart(product?._id)}
                        className="absolute md:static text-base text-red-500 bg-white border-gray-400 border rounded-full p-1 cursor-pointer font-semibold px-[7px] py-[2px] -top-5 -right-6 md:font-bold"
                      >
                        ✕
                      </span>
                      <p className="text-sm font-bold md:text-lg mr-4">
                        ৳{" "}
                        {product?.quantity
                          ? product?.quantity * product?.price
                          : product?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full md:w-1/3 h-auto mx-auto pt-4 md:pt-7 border-y-2 pb-3 rounded-xl md:rounded-none md:px-4 border-[1px]">
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="font-medium p-2">CART TOTALS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex border-t-[1px] justify-between">
              <td className="px-3 py-5">Subtotals</td>
              <td className="px-3 py-5">৳ {subTotal}</td>
            </tr>
            <tr className="flex border-t-[1px] justify-between items-center">
              <td className="px-3 py-5">Shipping</td>
              <td className="px-3 py-5">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p>Delivery Cost</p> <span> ৳ 60</span>
                </div>
                <div className="flex">
                  <input type="checkbox" />
                  <p className="ml-2">FREE SHIPPING</p>
                </div>
              </td>
            </tr>
            <tr className="flex border-t-[1px] justify-between">
              <td className="px-3 py-5">Total Price</td>
              <td className="px-3 py-5">৳ {subTotal + 60}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/cart/checkout" state={cartItems}>
          <button className="w-full mt-4 md:mt-8 mb-3 rounded-3xl text-white bg-primary py-4 text-sm font-bold px-3">
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;