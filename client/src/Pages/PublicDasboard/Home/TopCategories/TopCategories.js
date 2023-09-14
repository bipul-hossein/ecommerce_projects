import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import dairy from "../../../../Images/dairy.png";
import fruits from "../../../../Images/fruits.png";
import flour from "../../../../Images/flour.png";
import meat from "../../../../Images/meat.png";
import veggies from "../../../../Images/veggies.png";
import eggs from "../../../../Images/eggs.png";
import snacks from "../../../../Images/snacks.png";
import cake from "../../../../Images/cake.png";

const TopCategories = () => {
  const categoryItems = [
    { icon: dairy , name: "Dairy" },
    { icon: fruits, name: "Fruits" },
    { icon: flour, name: "Flour" },
    { icon: meat, name: "Meat" },
    { icon: veggies, name: "Vegetable" },
    { icon: eggs, name: "Eggs" },
    { icon: snacks, name: "Snacks" },
    { icon: cake, name: "Cake" }
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
      <section>
        <div>
          {categoryItems.map((category, i) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                className="px-6  py-4 flex flex-col gap-3 items-center justify-center bg-[#f5f5f5] rounded-md hover:bg-primary hover:text-white"
              >
                <img className="h-10 w-10" src={category.icon} alt="" />
                <p className="font-bold text-sm">{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </section>
    </Swiper>
  );
};

export default TopCategories;
