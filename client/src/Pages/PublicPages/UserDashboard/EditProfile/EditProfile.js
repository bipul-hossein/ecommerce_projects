import React from "react";

const EditProfile = () => {
  return (
    <section className="max-w-[460px]">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Edit Profile
      </h1>
      <form className="my-8">
        <div className="md:flex gap-8">
          <div>
            <p className="text-sm font-semibold mb-1">
              First Name
              <span className="text-base text-red-500">*</span>
            </p>
            <input
              className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
              type="text"
              name="first name"
              id=""
              defaultValue="jubayer"
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
              name="first name"
              id=""
              defaultValue="Ahmed"
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
            name="first name"
            id=""
            defaultValue="jubayer@gmail.com"
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
            name="first name"
            id=""
            defaultValue="018234230324"
            readOnly
            required
          />
        </div>

        <button className="text-sm font-bold w-full bg-blue-500 px-4 py-2 rounded-md text-white mt-3">
          Update
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
