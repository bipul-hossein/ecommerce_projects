import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddDeliveryAddressModal = ({ openModal, setOpenModal, userInfo }) => {
  const { refetch } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [filterOptions, setFilterOptions] = useState([]);
  const [requiredDivision, setRequiredDivision] = useState("");

  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData);
 

    console.log(updateData);





    if(userInfo){
      const res = await axios.put(
        `http://localhost:5000/api/user/address?email=${userInfo?.email}`,
        updateData
      );
      if (res?.data?.payload) {
        setOpenModal(false);
        toast.success("Update Success");
        refetch();
        form.reset();
      } else {
        toast.error("Something Went Wrong")
      }
    };
  };

  useEffect(() => {
    if (openModal) {
      setUser(userInfo);
    } else {
      setUser({});
    }
  }, [openModal, userInfo]);

  useEffect(() => {
    if (user) {
      setFilterOptions(
        divisionOptions?.filter((option) => user?.address?.division !== option)
      );

      // console.log(user?.address?.division);
    }
  }, [user]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-opacity-70 bg-gray-400">
      <div className="w-[400px] md:w-[500px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-5 rounded-md border">
        <span
          onClick={() => setOpenModal(false)}
          className="cursor-pointer w-10 h-10 border border-gray-500 bg-white  rounded-full p-2 absolute -top-5 -right-5 flex justify-center items-center font-bold text-red-500"
        >
          ✕
        </span>
        <h1 className="text-base md:text-xl font-bold text-blue-500">
          Add Your Delivery Address
        </h1>
        <p className="my-3 text-gray-500">
          Please enter the required details to add a delivery address.
        </p>
        <form onSubmit={handleUpdateAddress} className="my-2">
          <div className="flex gap-8 my-2">
            <div>
              <p className="text-sm font-semibold mb-1">
                First Name
                <span className="text-base text-red-500">*</span>
              </p>
              <input
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
                type="text"
                defaultValue={user?.name?.firstName}
                name="firstName"
                readOnly={user?.email && user?.name}
                id=""
                placeholder="First Name"
                required
              />
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-sm font-semibold mb-1">
                Last Name
                <span className="text-base text-red-500">*</span>
              </p>
              <input
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
                type="text"
                name="lastName"
                readOnly={user?.email && user?.name}
                defaultValue={user?.name?.lastName}
                id=""
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">
              Address <span className="text-base text-red-500">*</span>
            </p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="address"
              defaultValue={user?.address?.addressDetails}
              id=""
              placeholder="House no. / building / street / area"
              required
            />
          </div>
          <div className="mt-2">
            <p className="text-sm font-semibold mb-1">
              Phone <span className="text-base text-red-500">*</span>
            </p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="phone"
              defaultValue={user?.phone}
              id=""
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="mt-2">
            <p className="text-sm font-semibold mb-1">
              Email <span className="text-base text-red-500">*</span>
            </p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly={user?.email}
              id=""
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex gap-8 mt-2">
            <div>
              <p className="text-sm font-semibold mb-1">
                City
                <span className="text-base text-red-500">*</span>
              </p>
              <input
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
                type="text"
                name="cityArea"
                defaultValue={user?.address?.city}
                id=""
                placeholder="Dhaka"
                required
              />
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-sm font-semibold mb-1">
                Post Code
                <span className="text-base text-red-500">*</span>
              </p>
              <input
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
                type="text"
                name="postcode"
                defaultValue={user?.address?.postCode}
                id=""
                placeholder="2303"
                required
              />
            </div>
          </div>
          <div className="flex gap-8 mt-2">
            <div>
              <p className="text-sm font-semibold mb-1">Country</p>
              <input
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
                type="text"
                name="country"
                id=""
                defaultValue="Bangladesh"
                readOnly
              />
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-sm font-semibold mb-1">
                Division / Province
                <span className="text-base text-red-500">*</span>
              </p>
              <select
                name="division"
                required={!requiredDivision}
                onChange={(e) => setRequiredDivision(e.target.value)}
                id=""
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              >
                <option
                  value={user?.address?.division ? user?.address?.division : ""}
                >
                  {user?.address?.division
                    ? user?.address?.division
                    : "Please Select"}
                </option>
                {filterOptions?.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="text-sm font-bold w-full bg-blue-500 px-4 py-2 rounded-md text-white mt-3"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryAddressModal;

const divisionOptions = [
  "Khulna",
  "Rajshahi",
  "Rangpur",
  "Mymensingh",
  "Sylhet",
  "Barishal",
  "Chattogram",
  "Dhaka",
];
