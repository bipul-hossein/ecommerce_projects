import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import axios from "axios";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [dbUserInfo, setDbUserInfo] = useState({});

  //console.log(dbUserInfo);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user?email=${user?.email}`)
      .then((res) => {
        setDbUserInfo(res?.data?.payload);
       //console.log(res?.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  const handelEditUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userFirstName = form.firstName.value;
    const userLastName = form.lastName.value;
    const userEmail = form.email.value;
    const userPhoneNumber = form.phoneNumber.value;
    const userEditInfo = {
      userFirstName,
      userLastName,
      userEmail,
      userPhoneNumber
    }
    //console.log(userEditInfo);
    const res = await axios.put(
      `http://localhost:5000/api/user?email=${user?.email}`,userEditInfo);
    const /* { payload, message } */data = res?.data;
    console.log(data);
    // if (res?.data) {
    //   //setUserEditInfo(payload?.title);
    // }
    // //toast.success(payload.title + " " + message);
    // form.reset();
  };

  return (
    <section className="max-w-[460px]">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Edit Profile
      </h1>
      <form onSubmit={(e) => handelEditUser(e)} className="my-8">
        <div className="md:flex gap-8">
          <div>
            <p className="text-sm font-semibold mb-1">
              First Name
              <span className="text-base text-red-500">*</span>
            </p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="firstName"
              id=""
              defaultValue={dbUserInfo.firstName}
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
              id=""
              defaultValue={dbUserInfo.lastName}
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm font-semibold mb-1">
            Email Address
            <span className="text-base text-red-500">*</span>
          </p>
          <input
            className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
            type="text"
            name="email"
            id=""
            defaultValue={dbUserInfo.email}
            required
          />
        </div>
        <div className="mt-2">
          <p className="text-sm font-semibold mb-1">
            Phone
            <span className="text-base text-red-500">*</span>
          </p>
          <input
            className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
            type="text"
            name="phoneNumber"
            id=""
            defaultValue={dbUserInfo?.phone}
            required
          />
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

export default EditProfile;
