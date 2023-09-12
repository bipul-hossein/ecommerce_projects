import React from "react";
import { LuApple } from "react-icons/lu";

const TopCategories = () => {
  const categoryItems = [
    { icon: <LuApple className="h-8 w-8"/>, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8"/>, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8"/>, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8"/>, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8"/>, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8"/>, name: "Fruits" },
  ];
  return (
    <section className="md:max-w-[85%] mx-2 md:mx-auto my-10">
      <h2 className="text-xl my-5 font-bold">Top categories</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {categoryItems.map((category, i) => (
          <div key={i} className="px-6 py-4 flex flex-col gap-3 items-center justify-center bg-[#f5f5f5] rounded-md">
            <p>{category.icon}</p>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
