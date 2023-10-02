import React from "react";

const Modal = ({ handelEditInfo, categoryEditInfo, refetch }) => {

  return (
    <div>
      <dialog id="category-edit-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Edit Category Name!</h3>
          <form onSubmit={(e) => (handelEditInfo(e))}>
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
            {/* if there is a button in form, it will close the modal */}
          </form>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
