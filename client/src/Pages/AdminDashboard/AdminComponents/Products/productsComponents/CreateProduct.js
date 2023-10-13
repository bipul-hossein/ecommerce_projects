import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useQuery } from "react-query";

const CreateProduct = () => {
  const [requiredCategory, setRequiredCategory] = useState(0);
  const [file, setFile] = useState({});

  const handleCreateProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category;
    const formData = new FormData();
    formData.append("title", form.title.value);
    formData.append("price", form.price.value);
    formData.append("description", form.description.value);
    formData.append("shipping", form.shipping.value);
    formData.append("quantity", form.quantity.value);
    formData.append("sold", form.sold.value);
    formData.append("category", form.category.value);
    formData.append("file", file);

    setRequiredCategory(category?.length);
    const res = await axios.post(
      "http://localhost:5000/api/products",
      formData
    );
    if(res?.data){
      toast.success("product successfully added")
    }
  };

  const { data: categoryList } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });




  return (
    <div className="w-11/12 mx-auto mb-24 min-h-screen">
      <h2 className="text-base font-bold md:text-xl text-center">Add a product</h2>
      <div className="mt-5">
        <form onSubmit={handleCreateProduct} className="">
          <div className="">
            <div className="flex flex-col gap-1 md:gap-2 items-center bg-slate-100 py-6 md:py-12 mb-4 ">
              <BsFillCloudUploadFill className="h-8 w-8 md:h-14 md:w-14" />
              {/* <p className="text-xs md:text-base">
                Drag & Drop your files here
              </p>
              <p className="text-xs md:text-base">Or</p> */}
              <div className="">
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="image"
                  required
                  className="py-2 outline-none"
                />
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
                name="title"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full md:w-2/5 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  required={requiredCategory > 0}
                  id="category-select"
                  className="bg-slate-100 px-2 py-2 rounded md:w-auto text-xs md:text-sm border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                >
                  <option value="">select one</option>
                  {categoryList?.payload?.map((catList, i) => (
                    <option key={i} value={catList?._id}>
                      {catList?.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full md:w-2/5 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Shipping Cost</span>
                </label>
                <input
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="number"
                  placeholder="shipping cost"
                  name="shipping"
                />
              </div>
            </div>
            <div className="flex justify-between md:justify-normal md:gap-4">
              <div className="form-control w-[30%] md:w-1/4 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  required
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="number"
                  placeholder="price"
                  name="price"
                />
              </div>
              <div className="form-control w-[30%] md:w-1/4 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  required
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="number"
                  placeholder="quantity"
                  name="quantity"
                />
              </div>
              <div className="form-control w-[30%] md:w-1/4 mt-3 md:mt-4">
                <label className="label">
                  <span className="label-text">Sold Qty</span>
                </label>
                <input
                  required
                  className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                  type="number"
                  placeholder="sold quantity"
                  name="sold"
                />
              </div>
            </div>
            <div className="form-control w-full md:w-4/5 mt-3 md:mt-4">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <textarea
                required
                className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
                id="w3review"
                name="description"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="bg-primary text-white px-5 py-2 rounded hover:bg-slate-500 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
