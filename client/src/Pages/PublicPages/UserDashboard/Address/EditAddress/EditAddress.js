import React from "react";

const EditAddress = () => {
  return (
    <section className="max-w-[460px]">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Add New Address
      </h1>
      <p className="my-3 text-gray-500">
        Please enter the required details to add a new address.
      </p>
      <form className="my-8">
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
        <div className="md:flex gap-8 mt-2">
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
        <div className="md:flex gap-8 mt-2">
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
    </section>
  );
};

export default EditAddress;
