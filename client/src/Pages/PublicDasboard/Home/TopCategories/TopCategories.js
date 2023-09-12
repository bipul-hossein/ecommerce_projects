import React from "react";
import { LuApple } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TopCategories = () => {
  const categoryItems = [
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
    { icon: <LuApple className="h-8 w-8" />, name: "Fruits" },
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
      className="mySwiper"
    >
      <section className="shadow-xl">
        <h2 className="text-xl my-5 font-bold">Top categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categoryItems.map((category, i) => (
            <SwiperSlide>
              <div
                key={i}
                className="px-6  py-4 flex flex-col gap-3 items-center justify-center bg-[#f5f5f5] rounded-md hover:bg-primary hover:text-white"
              >
                <p>{category.icon}</p>
                <p>{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </section>
    </Swiper>
  );
};

export default TopCategories;
