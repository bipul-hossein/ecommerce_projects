import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Address = () => {
  const { userOldDbInfo, } = useContext(AuthContext);
  return (
    <section className="max-w-[500px] my-10">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Your Address
      </h1>
      <p className="text-gray-500 p-2 rounded-md mt-2">
      {userOldDbInfo?.payload?.address?.addressDetails}
      </p>
      <div className="mt-4">
        <Link
          to="/account/edit-address"
          className="text-sm font-bold w-full border-[1px] border-black px-4 py-2 rounded-md mt-3"
        >
          Edit Address
        </Link>
      </div>
    </section>
  );
};

export default Address;
