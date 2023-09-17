import React from 'react';
import useCategoryData from "../../../hooks/useCategoryData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardExternal from '../../../../components/public/card/CardExternal';

const LatestProductSlider = () => {
    const [categoryData] = useMain();

    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            className="mySwiper"
        >
            {categoryData?.slice(0, 8)?.map((data, i) => (
                <SwiperSlide key={i}>
                    <CardExternal data={data}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default LatestProductSlider;