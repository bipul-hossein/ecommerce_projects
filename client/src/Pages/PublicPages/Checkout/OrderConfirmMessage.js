import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmMessage = () => {
  return (
    <div className="mx-auto min-h-screen text-center mt-28 md:mt-12">
      <h2 className="text-lg md:text-xl font-bold my-4">
        Thanks for you order #0012
      </h2>
      <p>We will contact you soon for verify order</p>
      <div className="mt-14">
        <Link
          to="/account/orders"
          className="text-xl underline text-blue-500 font-bold mt-14 text-center"
        >
          View Order Page
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmMessage;
