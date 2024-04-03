import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsPage from "../../../components/public/productsPage/ProductsPage";
import NotFound from "../../../components/errorPage/NotFound";

const ProductCategory = () => {
  window.scrollTo(0, 0);
  const { payload: categoryProducts } = useLoaderData({});
  if (!categoryProducts) {
    return <NotFound />;
  }
  return (
    <ProductsPage
      categoryName={categoryProducts?.categoryName}
      products={categoryProducts?.getProducts}
    />
  );
};
export default ProductCategory;
