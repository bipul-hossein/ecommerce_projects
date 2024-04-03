import { React } from "react";
import useProductsData from "../../../hooks/useProductsData";
import ProductsPage from "../../../components/public/productsPage/ProductsPage";

const Shop = () => {
  const [products] = useProductsData();
  return (
 <ProductsPage products={products} categoryName="All Products"/>
  );
};

export default Shop;
