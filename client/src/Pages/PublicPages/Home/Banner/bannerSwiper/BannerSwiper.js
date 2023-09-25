import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSwiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const BannerSwiper = () => {
  const swiperItems = [
    {
      subTitle: "Up to 30%",
      title: "Extra Discounts up to 30% on Mobile App",
      img: "https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png",
    },
    {
      subTitle: "Up to 10%",
      title: "Extra Discounts up to 10% on Mobile App",
      img: "https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png",
    },
    {
      subTitle: "Up to 25%",
      title: "Extra Discounts up to 25%",
      img: "https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png",
    },
    {
      subTitle: "Up to 40%",
      title: "Extra Discounts up to 40% on Mobile App",
      img: "https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1200}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {swiperItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex gap-2 items-center justify-evenly px-2 md:px-8">
              <div className="w-1/2">
                <p className="text-sm md:text-base text-red-500 font-bold my-3">
                  {item.subTitle}
                </p>
                <h1 className="text-lg md:text-4xl font-bold">{item.title}</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">
                  Shop New!
                </button>
              </div>
              <img className="w-1/2" src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSwiper;