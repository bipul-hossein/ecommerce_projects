import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from '../../../../components/public/card/Card';
import useProductsData from '../../../../hooks/useProductsData';

const LatestProductSlider = () => {
    const [products] = useProductsData();

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
            {products?.slice(0, 8)?.map((data, i) => (
                <SwiperSlide key={i}>
                    <Card data={data}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default LatestProductSlider;