import React, { useState } from "react";
import useCategoryData from "../../../../hooks/useCategoryData";
import { useQuery } from "react-query";
import CreateCategory from "./CreateCategory";
import Categories from "./Categories";
import Modal from "./Modal";

const HandleCategories = () => {
  const [category, setCategory] = useState({});
  const [categoryEditInfo, setCategoryEditInfo] = useState("");
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });
  const categoriesItem = categories.payload;
  const handelEditInfo = (e) => {
    e.preventDefault();
    const categoryEditData = e.target.categoryEditField.value;
    setCategoryEditInfo(categoryEditData);
  };
  return (
    <div className="w-11/12 mx-auto mt-4 relative ">
      <div>
        <h1 className="text-center text-xl mb-8 bg-blue-200 py-1 rounded-sm">
          CATEGORIES
        </h1>
        <div className="flex justify-between flex-wrap gap-5">
          <Categories
            categoriesItem={categoriesItem}
            refetch={refetch}
            categoryEditInfo={categoryEditInfo}
            setCategory={setCategory}
          />
          <CreateCategory refetch={refetch} />
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <Modal
        handelEditInfo={handelEditInfo}
        categoryEditInfo={categoryEditInfo}
        refetch={refetch}
        category={category}
      />
    </div>
  );
};

export default HandleCategories;
