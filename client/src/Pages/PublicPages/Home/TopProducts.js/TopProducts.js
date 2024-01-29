import React from "react";
import useProductsData from "../../../../hooks/useProductsData";
import Card from "../../../../components/public/card/Card";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const [products] = useProductsData();
  return (
    <section className="md:mx-auto pt-10 md:pt-12">
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-xl my-5 font-semibold text-[#424242]">Top Products</h3>
        <Link to="/shop" className="text-sm md:text-base font-medium  px-4 py-[2px] md:py-1 bg-white border-[1px] border-black hover:border-[#fa6602] rounded-md md:rounded-2xl uppercase"> see all </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {products?.slice(0, 8)?.map((data, i) => (
          <Card key={i} icon={"hot"} data={data} />
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
