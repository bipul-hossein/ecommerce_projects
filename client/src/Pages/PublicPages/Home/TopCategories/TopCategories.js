import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useMainCategories from "../../../../hooks/useMainCategories";
import { useNavigate } from "react-router-dom";

const TopCategories = () => {
  const [mainCategories] = useMainCategories();
  const navigate = useNavigate();
  const handleContentDetails = (category) => {
    navigate (`/${category._id}`, { state: category });
  };

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
          {mainCategories.map((category, i) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                onClick={() => handleContentDetails(category)}
                className="px-6  py-4 flex flex-col gap-3 items-center justify-center bg-[#f5f5f5] rounded-md hover:bg-primary hover:text-white hover:cursor-pointer"
              >
                <img
                  className="h-10 w-10"
                  src="https://www.themealdb.com/images/category/lamb.png"
                  alt=""
                />
                <p className="font-bold text-sm">{category.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </section>
    </Swiper>
  );
};

export default TopCategories;
