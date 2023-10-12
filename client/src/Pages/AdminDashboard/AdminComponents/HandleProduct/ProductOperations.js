import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const ProductOperations = () => {
  const navigate = useNavigate();
  // fetch data
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data?.payload;
    },
  });
  const handleRedirect = (id) => {
    navigate(`/dashboard/products/operation/${id}`);
  };

  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row px-3">
      {/* PRODUCTS CATEGORY */}
      <div className="md:w-4/6">
        <h4 className="text-base text-center mb-3">PRODUCTS CATEGORY</h4>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <p
              onClick={() => handleRedirect(category?._id)}
              key={category?._id}
              className="py-5 px-2 text-center text-base bg-blue-50 rounded"
            >
              {category.title}
            </p>
          ))}
        </div>
      </div>
      <div className="md:w-2/6">
        {/* Filter Field */}
        <div className="form-control w-full md:w-4/5 mt-3 md:mt-4">
          <h4 className="text-base md:text-center mb-3 uppercase">
            Search product
          </h4>
          <input
            type="text"
            className="bg-slate-100 px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            placeholder="Filter product"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOperations;
