import React, { useState } from "react";
import Card from "../card/Card";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "./productComponent/Sidebar";
import PageHeader from "./productComponent/PageHeader";
// import Input from "./productComponent/Input";

const ProductsPage = ({ products, categoryName }) => {
  window.scrollTo(0, 0);
  const [filterSidebar, setFilterSidebar] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState({
    instock: false,
    preorder: false,
    upcomming: false,
  });
  console.log(selectedCategory);
  console.log(products);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory({
      ...selectedCategory,
      [event.target.value]: event.target.checked,
    });
    // console.log(event.target.value);
  };

  function filteredData(products, selected) {
    let filteredProducts = products;

    // Applying selected filter
    if (selected) {
      console.log(selected);
    }

    return filteredProducts;
  }

  const result = filteredData(products, selectedCategory);

  return (
    <div className="my-10 md:flex gap-2 md:gap-4 w-full mx-auto">
      <Sidebar
        handleChange={handleChange}
        filterSidebar={filterSidebar}
        setFilterSidebar={setFilterSidebar}
      />
      {/* page header */}
      <div className="w-full md:w-4/5">
        <PageHeader
          categoryName={categoryName}
          setFilterSidebar={setFilterSidebar}
        />
        {/* products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {result?.map((product, index) => (
            <Card key={index} data={product} categoryName={categoryName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
