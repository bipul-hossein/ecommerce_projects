import { useState } from "react";
import { useQuery } from "react-query";
import CreateCategory from "./categoryComponents/CreateCategory";
import CategoryManager from "./categoryComponents/CategoryManager";
import Modal from "./categoryComponents/EditModal";
import axios from "axios";
import { toast } from "react-toastify";

const Categories = () => {
  const [categoryEditInfo, setCategoryEditInfo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // fetch data
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });

  const categoriesItem = categories.payload;

  const handelEditInfo = async (e) => {
    e.preventDefault();
    const form = e.target;
    const categoryEditData = form.categoryEditField.value;
    const res = await axios.put(
      `http://localhost:5000/categories/${categoryEditInfo?.slug}`,
      { title: `${categoryEditData}` }
    );
    const { payload, message } = res?.data;
    if (res?.data) {
      setCategoryEditInfo(payload?.title);
      setModalOpen(false);
      refetch();
    }
    toast.success(payload.title + " " + message);
    form.reset();
  };

  return (
    <div className="w-11/12 mx-auto mt-20 md:mt-4">
      <div>
        <h1 className="text-center text-xl mb-8 bg-blue-200 py-1 rounded-sm">
          CATEGORIES
        </h1>
        <div className="flex justify-between flex-wrap gap-5">
          <CategoryManager
            categoriesItem={categoriesItem}
            refetch={refetch}
            categoryEditInfo={categoryEditInfo}
            setCategoryEditInfo={setCategoryEditInfo}
            setModalOpen={setModalOpen}
          />

          <CreateCategory refetch={refetch} />
        </div>
      </div>
      <Modal
        handelEditInfo={handelEditInfo}
        categoryEditInfo={categoryEditInfo}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
    </div>
  );
};

export default Categories;
