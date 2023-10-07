import React from "react";
import { useNavigate } from "react-router-dom";
import useCategoryData from "../../../../hooks/useCategoryData";

const Categories = () => {
  const [categoryData] = useCategoryData();
  const categoriesItem = categoryData.payload;

  const navigate = useNavigate();
  const handleContentDetails = (_id) => {
    navigate(`/${_id}`);
  };

  return (
    <div className="w-[250px] border py-2 px-4 rounded-md hidden md:block">
      <h2 className="text-xl font-bold my-2">All Department</h2>
      {categoriesItem?.slice(0, 8)?.map((category, i) => (
        <div
          key={i}
          onClick={() => handleContentDetails(category._id)}
          className={`flex items-center gap-2 my-3 hover:cursor-pointer hover:bg-gray-200 ${
            i === 7 ? "border-none" : "border-b pb-3"
          } py-2`}
        >
          {/* <span className="text-red-400 mr-1">{category.icon}</span> */}
          {/* <img className="w-6 h-6" src={category?.strCategoryThumb} alt="" /> */}
          <span className="pl-2 text-gray-600 text-sm hover:text-primary">
            {category?.title}
          </span>
        </div>
      ))}
    </div>
  );
};
export default Categories;
