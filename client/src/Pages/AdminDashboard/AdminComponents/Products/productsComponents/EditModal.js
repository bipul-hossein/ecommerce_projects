import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const AdminEditProductModal = ({
  data,
  openModal,
  setOpenModal,
  handleUpdateProduct,
  setFile,
  defaultCategory
}) => {
  const [product, setProduct] = useState(null);
  const { data: categoryList } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });

  
  
  useEffect(() => {
    if (!openModal) {
      setProduct(null);
    } else {
      setProduct(data);
    }
  }, [data,openModal]);
  
  const filteredCategory = categoryList?.payload?.filter(cat => defaultCategory?._id !== cat?._id);

  return (
    <div className="w-full h-screen z-40 fixed top-0 left-0 bg-opacity-70 bg-gray-400">
      <div className="w-[430px] md:w-[500px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-5 rounded-md border">
        <span
          onClick={() => setOpenModal(false)}
          className="cursor-pointer w-10 h-10 border border-gray-500 bg-white  rounded-full p-2 absolute -top-5 -right-5 flex justify-center items-center font-bold text-red-500"
        >
          ✕
        </span>
        <h1 className="text-base md:text-xl font-bold text-blue-500">
          Edit product
        </h1>
        <form onSubmit={handleUpdateProduct} className="my-2">
          <div className="mb-5">
            <div className="flex flex-row gap-1 md:gap-2 items-center bg-slate-100 py-6 md:py-4 mb-4 ">
              <div className="">
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="image"
                  //  required
                  className="py-2 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <p>previous image</p>
                <img src={product?.image} alt="" className="h-24 w-24" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            <div className="form-control w-full md:w-4/5 mt-3 md:mt-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                required
                className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                type="text"
                placeholder="Title"
                defaultValue={product?.title}
                name="title"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-full md:w-2/5 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  id="category-select"
                  // defaultValue={product?.category}
                  className="bg-slate-100 px-2 py-2 rounded md:w-auto text-xs md:text-sm border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                >
                  <option value={defaultCategory?._id}>{defaultCategory?.title}</option>
                  {filteredCategory?.map((catList, i) => (
                    <option key={i} value={catList?._id}>
                      {catList?.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-2/5 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  required
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="text"
                  placeholder="Available Qty"
                  defaultValue={product?.stock}
                  name="quantity"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="form-control w-4/5 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Shipping Cost</span>
                </label>
                <input
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="text"
                  placeholder="shipping cost"
                  defaultValue={product?.shipping}
                  name="shipping"
                />
              </div>
            </div>
            <div className="flex justify-between md:justify-normal md:gap-4">
              <div className="form-control w-[45%] mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  required
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="text"
                  placeholder="price"
                  defaultValue={product?.price}
                  name="price"
                />
              </div>

              <div className="form-control w-[45%] mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Sold Qty</span>
                </label>
                <input
                  required
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="text"
                  placeholder="sold quantity"
                  defaultValue={product?.sold}
                  name="sold"
                />
              </div>
            </div>
          </div>
          <div className="form-control w-full mt-3 md:mt-4 mb-4">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              required
              className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
              id="w3review"
              name="description"
              placeholder="description"
              defaultValue={product?.description}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Update"
            className="bg-primary text-white px-5 py-2 rounded hover:bg-slate-500 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminEditProductModal;
