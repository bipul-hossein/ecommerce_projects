import React from "react";

const Modal = ({
  handelEditInfo,
  categoryEditInfo,
  setModalOpen,
  modalOpen,
}) => {
  return (
    <div
      className={`min-w-full min-h-[70vh] bg-gray-100 fixed top-0 left-0 bg-opacity-60 ${modalOpen ? "block" : "hidden"
        }`}
    >
      <div className="md:w-[400px]">
        <div className="custom_modal pt-6 bg-white w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => setModalOpen(false)}
            className="w-3 h-3 bg-slate-50 font-bold cursor-pointer absolute right-3 top-2" >✕</button>
          <h3 className="font-bold text-lg text-center">Edit Category Name!</h3>
          <form onSubmit={(e) => handelEditInfo(e)}>
            <div className="px-3 md:px-3 py-5 mx-auto md:w-3/4">
              <div className="mx-auto">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  type="text"
                  defaultValue={categoryEditInfo?.title}
                  className="bg-red-50 rounded-md py-1 px-2 border-black border w-full"
                  name="categoryEditField"
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="py-1 bg-red-200 px-3 rounded-md w-1/2 hover:bg-red-500 my-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
