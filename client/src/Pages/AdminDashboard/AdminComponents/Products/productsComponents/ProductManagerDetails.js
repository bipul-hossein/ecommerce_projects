import React, { useState } from "react";
import AdminCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import toast from "react-hot-toast";

const ProductOperationsDetails = () => {
  const [productId, setProductId] = useState({});
  const [file, setFile] = useState({});
  const categoryId = useParams();
  console.log(productId);
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

    const res = await axios.put(
      `http://localhost:5000/api/products/${productId}`,
      formData
    );
    const { message } = res?.data;
    if (message) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    form.reset()
    refetch();
  };

  // delete product
  const handleDeleteProduct = async (product) => {
    const agree = window.confirm(
      `Are you went delete ${product?.title} category?`
    );
    if (agree) {
      const res = await axios.delete(
        `http://localhost:5000/api/products/${product?._id}`
      );
      const { message, } = res?.data;
      if (message) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      refetch();
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {CategoryProducts.map((product, index) => (
        <AdminCard
          key={index}
          data={product}
          handleUpdateProduct={handleUpdateProduct}
          handleDeleteProduct={handleDeleteProduct}
          setProductId={setProductId}
          setFile={setFile}
        />
      ))}
    </div>
  );
};

export default ProductOperationsDetails;
