import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Card from '../../../../components/public/card/Card';
import useTamporaryFakeData from '../../../../hooks/useTamporaryFakeData';

const LatestProductSlider = () => {
    const [tamporaryFakeData] = useTamporaryFakeData()
    console.log(tamporaryFakeData)


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
            {tamporaryFakeData?.map((data, i) => (
                <SwiperSlide key={i}>
                    <Card id={data.idMeal} title={data.strMeal} image={data.strMealThumb} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default LatestProductSlider;