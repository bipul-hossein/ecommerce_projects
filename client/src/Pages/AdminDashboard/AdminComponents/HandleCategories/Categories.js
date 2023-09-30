import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Categories = ({setCategoryEditInfo,categoriesItem,refetch}) => {
    
    const handleEdit = async (category) => {
        document.getElementById("category-edit-modal").showModal();
       console.log(category);
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
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">
                            Category Name
                        </th>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">
                            Operation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesItem?.map((category, i) => (
                        <tr key={i} className=" text-center my-2 border ">
                            <td className=" bg-red-100 py-1 md:py-2 border-t-[10px] border-white">
                                {category.title}
                            </td>

                            <td className=" bg-red-100 py-1 md:py-2 border-t-[10px] border-white">
                                <button
                                    className="px-4 py-1 bg-blue-400 rounded text-sm font-semibold"
                                    onClick={() => handleEdit(category)}
                                >
                                    Edit
                                </button>
                            </td>

                            <td className=" bg-red-100 py-1 md:py-2 border-t-[10px] border-white">
                                <button
                                    className="px-4 py-1 bg-red-400 rounded text-sm font-semibold"
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
