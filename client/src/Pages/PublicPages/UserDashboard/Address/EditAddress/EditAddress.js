import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const EditAddress = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: userOldDbAddress, refetch } = useQuery({
    queryKey: ["userAddress"],
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/api/user/address?email=${user?.email}`
    //   );
    //   const data = await res.json();
    //   return data;
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/api/user/address?email=${user?.email}`);
      return res?.data;
    },
  });
  const dbUserAddress = userOldDbAddress?.payload;
  const handelEditUserAddress = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userEditAddressInfo = {
      address: form?.address?.value,
      postcode: form?.postCode?.value,
      cityArea: form?.city?.value,
      division: form?.division?.value,
    };
    const res = await axios.put(
      `http://localhost:5000/api/user/address?email=${user?.email}`,
      userEditAddressInfo
    );
    const { message } = res?.data;
    if (res?.data) {
      console.log(res?.data?.payload);
      toast.success(message);
    }
    refetch();
    form.reset();
  };
  const division = [
    "Khulna",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
    "Sylhet",
    "Barishal",
    "Chattogram",
    "Dhaka",
  ];

  return (
    <section className="max-w-[460px]">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Add New Address
      </h1>
      <p className="my-3 text-gray-500">
        Please enter the required details to add a new address.
      </p>
      <form onSubmit={(e) => handelEditUserAddress(e)} className="my-8 mb-20">
        <div>
          <p className="text-sm font-semibold mb-1">
            Address<span className="text-base text-red-500">*</span>
          </p>
          <input
            className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
            type="text"
            name="address"
            defaultValue={dbUserAddress?.address?.addressDetails}
            id=""
            placeholder="House no. / building / street / area"
            required
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
              name="city"
              id=""
              defaultValue={dbUserAddress?.address?.city}
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
              name="postCode"
              id=""
              defaultValue={dbUserAddress?.address?.postCode}
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
              Division / Province
              <span className="text-base text-red-500">*</span>
            </p>
            <select
              name="division"
              id=""
              defaultValue={dbUserAddress?.address?.division}
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
            >
              {/* <option >Please Select</option> */}
              {division.map((item, i) => (
                <option key={i} value={item}>
                  {item}
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
    </section>
  );
};

export default EditAddress;
