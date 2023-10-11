import React, { useState } from "react";
import AdminCard from "../../../../components/public/card/AdminCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const ProductOperationsDetails = () => {
  const [requiredCategory, setRequiredCategory] = useState(0);
  const [file, setFile] = useState({});

  const categoryId = useParams();

  // fetch data
  const { data: CategoryProducts = [], refetch } = useQuery({
    queryKey: ["CategoryProduct "],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/products/category/${categoryId?.id}`
      );
      const data = await res.json();
      return data?.payload;
    },
  });

  //   edit product
  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();
    formData.append("title", form.title.value);
    formData.append("price", form.price.value);
    formData.append("description", form.description.value);
    formData.append("shipping", form.shipping.value);
    formData.append("quantity", form.quantity.value);
    formData.append("sold", form.sold.value);
    formData.append("category", form.category.value);
    formData.append("file", file);
    console.log(form);

    // const res = await axios.put(
    //   `http://localhost:5000/api/products/${id}`,
    //   formData
    // );
    // if(res?.data){
    //   toast.success("Product updated successfully")
    // }
  };

  // delete product
  const handleDeleteProduct = (id) => {
    console.log(id)
    // const res = await axios.delete(
    //   `http://localhost:5000/api/products/${id}`);
    // if(res?.data){
    //   toast.success("Product Deleted Successfully")
    // }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {CategoryProducts.map((product, index) => (
        <AdminCard
          key={index}
          data={product}
          handleUpdateProduct={handleUpdateProduct}
          handleDeleteProduct={handleDeleteProduct}
          setFile={setFile}
          requiredCategory={requiredCategory}
        />
      ))}
    </div>
  );
};

export default ProductOperationsDetails;
