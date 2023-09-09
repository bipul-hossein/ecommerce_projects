import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination } from "swiper/modules";

const BannerSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex gap-2 items-center justify-evenly px-8">
                <div className="w-1/2">
                <p className="text-md text-red-500 font-bold my-3">Up to 30%</p>
                <h1 className="text-xl md:text-4xl font-bold">Extra Discounts up to 30% on Mobile App</h1>
                <button className="bg-yellow-400 p-2 rounded-md text-sm font-bold mt-5">Shop New!</button>
                </div>
                <img className="w-1/2" src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Transparent-PNG.png" alt="" />
            </div>            
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
