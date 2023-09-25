import React from "react";

const ChangePassword = () => {
  return (
    <section className="max-w-[460px]">
      <h1 className="text-base md:text-xl font-bold text-blue-500">
        Change Password
      </h1>
      <form className="my-8">
        <div>
          <p className="text-sm font-semibold mb-1">
            Password
            <span className="text-base text-red-500">*</span>
          </p>
          <input
            className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <div className="mt-2">
          <p className="text-sm font-semibold mb-1">
            Confirm Password
            <span className="text-base text-red-500">*</span>
          </p>
          <input
            className="p-2 w-full focus:border-blue-500 border-[1px] rounded-md outline-none"
            type="password"
            name="password"
            id=""
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

export default ChangePassword;
