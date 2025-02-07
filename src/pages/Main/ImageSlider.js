import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ImageSlider.css';

const ImageSlider = ({ slides = [] }) => {
    if (!slides || slides.length === 0) return null;

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.image} alt={slide.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;
