import React, { useState } from "react";
import AdminEditProductModal from "./EditModal";

const AdminCard = ({
  data,
  handleUpdateProduct,
  handleDeleteProduct,
  setProductId,
  setFile,
  defaultCategory
}) => {
  //console.log(data);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="group flex flex-col rounded-md justify-between w-full bg-white p-2 md:p-4 border-[1px] hover:border-[#fa6602] relative ">
        <div className="mx-auto">
          <div className="absolute rounded-full right-1 md:right-2 top-1 md:top-2 md:uppercase bg-[#fed700] z-10">
            <p className="text-black text-xs md:font-bold py-[6px] md:py-3 px-[2px] md:px-1 ">
              sale!
            </p>
          </div>
          <div className=" overflow-hidden rounded-sm flex justify-center">
            <img
              className="aspect-square w-36 group-hover:scale-110 duration-700 ease-in-out"
              src={data?.image}
              alt=""
            />
          </div>
        </div>
        <h2 className="text-sm md:text-base font-medium md:font-semibold md:tracking-[-.2px] mt-2">
          {data.title}
        </h2>
        <div className="my-2 ">
          <span className="text-xs md:text-sm whitespace-no-wrap text-[#fa6602] leading-6 font-bold">
            ৳{data.price}
          </span>
          <span className="ml-2 text-xs md:text-sm text-[#132a36] opacity-50  line-through pl-1">
            ৳354
          </span>
        </div>
        <div className="">
          <button
            className="py-1 px-3 rounded hover:bg-blue-400 hover:text-black bg-primary text-white mr-3"
            onClick={() => {
              setOpenModal(true);
              setProductId(data?._id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteProduct(data)}
            className="py-1 px-3 rounded hover:bg-blue-400 hover:text-black bg-primary text-white"
          >
            Delete
          </button>
        </div>
      </div>
      <div className={`${openModal ? "block" : "hidden"}`}>
        <AdminEditProductModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          data={data}
          handleUpdateProduct={handleUpdateProduct}
          setFile={setFile}
          defaultCategory={defaultCategory}
        />
      </div>
    </div>
  );
};

export default AdminCard;
