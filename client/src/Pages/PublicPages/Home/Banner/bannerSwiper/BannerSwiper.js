import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import location from "../../../../../Images/Banner/service_location.jpg";
import henna from "../../../../../Images/Banner/henna.jpg";
import honey from "../../../../../Images/Banner/honey_ghee.jpg";
import oil from "../../../../../Images/Banner/oil.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSwiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const BannerSwiper = () => {
  const swiperItems = [
    {
      img: location,
    },
    {
      img: honey,
    },
    {
      img: oil,
    },
    {
      img: henna,
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
        {swiperItems?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="">
              <img
                loading="lazy"
                className="w-full rounded-xl"
                src={item?.img}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSwiper;
