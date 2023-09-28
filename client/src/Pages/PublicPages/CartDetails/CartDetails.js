import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ProductContext } from "../../../contexts/ProductsProvider";

const CartDetails = () => {
  const { added, setAdded } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("e-bazar"));
    setCartItems(cartData);
  }, [added]);

  //quantity plus
  const handlePlus = (id) => {
    const findProduct = cartItems?.find((product) => product.idMeal === id);
    const restProducts = cartItems?.filter((product) => product.idMeal !== id);

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
    const findProduct = cartItems?.find((product) => product.idMeal === id);
    const restProducts = cartItems?.filter((product) => product.idMeal !== id);
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
    const restProducts = cartItems?.filter((product) => product.idMeal !== id);
    localStorage.setItem("e-bazar", JSON.stringify(restProducts));
    setAdded(!added);
  };

  cartItems?.sort((a, b) => a.idMeal - b.idMeal);

  if (!cartItems?.length) {
    return (
      <div className="my-10 min-h-[50vh]">
        <h1 className="text-2xl text-center">No Cart Data Added</h1>
      </div>
    );
  }

  return (
    <div className="my-20 flex flex-wrap md:flex-nowrap gap-5">
      <div className="w-full md:w-2/3 mx-auto pt-7 md:px-4 md:border-[1px]">
        <table class="table-auto rounded-t-md w-full">
          <thead className="text-left">
            <tr className="text-center">
              <th className="text-xs font-normal md:font-medium py-2 md:p-2">
                PRODUCT
              </th>
              <th className="text-xs font-normal md:font-medium py-2 md:p-2">
                PRICE
              </th>
              <th className="text-xs font-normal md:font-medium py-2 md:p-2">
                QUANTITY
              </th>
              <th className="text-xs font-normal md:font-medium py-2 md:p-2">
                SUBTOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((product, i) => (
              <tr key={i} className=" text-center my-2 ">
                <td className="md:flex md:items-center px-3 py-1 md:py-5 border-t-[1px]">
                  <img
                    className="md:pr-3 h-14 w-14"
                    src={product.strMealThumb}
                    alt=""
                  />
                  {product.strMeal}
                </td>
                <td className="px-3 py-1 md:py-5 border-t-[1px]">540 tk</td>
                <td className="px-3 py-1 md:py-5 border-t-[1px]">
                  <div className="flex items-center justify-center gap-1 p-2">
                    <span className="">
                      <FiMinus
                        onClick={() => handleMinus(product.idMeal)}
                        className="w-6 md:w-8 h-6 md:h-8 bg-secondary p-2 cursor-pointer font-semibold text-xs"
                      />
                    </span>
                    <span className="p-2">
                      {product?.quantity ? product?.quantity : 1}
                    </span>
                    <span className="">
                      <FiPlus
                        onClick={() => handlePlus(product.idMeal)}
                        className="w-6 md:w-8 h-6 md:h-8 p-2 bg-secondary cursor-pointer text-xs"
                      />
                    </span>
                  </div>
                </td>
                <td className="px-3 py-1 md:py-5 border-t-[1px]">
                  {product?.quantity ? product?.quantity * 540 : 540}
                </td>
                <td className="md:px-3 py-1 md:py-5 pr-4 border-t-[1px]">
                  <RiDeleteBinLine
                    onClick={() => handleRemoveToCart(product.idMeal)}
                    className="w-6 h-6 text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full md:w-1/3 h-auto bg-[#696969] bg-opacity-10 mx-auto pt-7 px-4 border-[1px]">
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="font-medium p-2">CART TOTALS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex border-t-[1px] justify-between">
              <td className="px-3 py-5">Subtotals</td>
              <td className="px-3 py-5">00</td>
            </tr>
            <tr className="flex border-t-[1px] justify-between items-center">
              <td className="px-3 py-5">Shipping</td>
              <td className="px-3 py-5">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p>Delivery Cost</p> <span>00</span>
                </div>
                <div className="flex">
                  <input type="checkbox" />
                  <p className="ml-2">FREE SHIPPING</p>
                </div>
              </td>
            </tr>
            <tr className="flex border-t-[1px] justify-between">
              <td className="px-3 py-5">Total Price</td>
              <td className="px-3 py-5">000</td>
            </tr>
          </tbody>
        </table>
        <button className="w-full mt-8 rounded-3xl text-white bg-primary py-4 text-sm font-bold px-3">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
