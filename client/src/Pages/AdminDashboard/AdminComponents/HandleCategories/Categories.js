import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Categories = ({
  setCategoryEditInfo,
  categoriesItem,
  refetch,
  setModalOpen,
}) => {
  const handleEdit = async (category) => {
    setModalOpen(true);
    setCategoryEditInfo(category);
  };

  const handleDelete = async ({ title, slug }) => {
    const agree = window.confirm(`Are you went delete ${title} category?`);
    if (agree) {
      const res = await axios.delete(
        `http://localhost:5000/categories/${slug}`
      );
      const { message, payload } = res.data;
      toast.success(payload.title + " " + message);
      refetch();
    }
  };

  return (
    <div className="w-full md:w-7/12 bg-slate-100 py-5 mx-auto rounded">
      <table className="table-auto rounded-t-md w-full">
        <thead className="text-left">
          <tr className="text-center">
            <th className="text-left md:text-center pl-2 text-sm font-medium md:font-semibold py-2 md:p-2">
              Category Name
            </th>
            <th className="text-sm font-medium md:font-semibold py-2 md:p-2">
              Operation
            </th>
          </tr>
        </thead>
        <tbody>
          {categoriesItem?.map((category, i) => (
            <tr key={i} className="text-center my-2 border ">
              <td className="text-left pl-2 md:text-center text-sm md:text-lg font-medium bg-red-100 py-1 md:py-2 border-t-[10px] border-white">
                <image className="h-9 w-9 pl-2">{category?.image}</image>
                <p>{category?.title}</p>
              </td>
              <td className="  bg-red-100 py-1 md:py-2 border-t-[10px] border-white">
                <button
                  className="px-2 md:px-4 py-1 bg-blue-400 rounded text-xs md:text-sm font-semibold"
                  onClick={() => handleEdit(category)}
                >
                  Edit
                </button>
                <button
                  className="px-2 md:px-4 py-1 bg-red-400 rounded text-xs md:text-sm font-semibold ml-2"
                  onClick={() => handleDelete(category)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
