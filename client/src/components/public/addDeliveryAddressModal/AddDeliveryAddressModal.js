import React from "react";

const AddDeliveryAddressModal = ({ setOpenModal }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-opacity-70 bg-gray-400">
      <div className="w-[430px] md:w-[500px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-5 rounded-md border">
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
        <form className="my-2">
          <div className="flex gap-8 my-2">
            <div>
              <p className="text-sm font-semibold mb-1">
                First Name
                <span className="text-base text-red-500">*</span>
              </p>
              <input
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
                type="text"
                name=""
                id=""
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
                name="post code"
                id=""
                required
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">
              Address 1<span className="text-base text-red-500">*</span>
            </p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="address1"
              id=""
              placeholder="1401 US-18, Hot Springs, SD 57747, United States"
              required
            />
          </div>
          <div className="mt-2">
            <p className="text-sm font-semibold mb-1">Address 2</p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="address2"
              id=""
              readOnly
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
                name=""
                id=""
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
                name="post code"
                id=""
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
                Region / State
                <span className="text-base text-red-500">*</span>
              </p>
              <select
                name=""
                id=""
                className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              >
                <option defaultValue="">Please Select</option>
                <option value="">Josor</option>
                <option value="">Khulna</option>
                <option value="">Rajshahi</option>
                <option value="">Sylhet</option>
              </select>
            </div>
          </div>

          <button className="text-sm font-bold w-full bg-blue-500 px-4 py-2 rounded-md text-white mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryAddressModal;
