import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './SubsImageSlider.css';

const images = [
    // 실제 이미지 URL로 교체
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1559627455-7e3ed187be08?auto=format&fit=crop&w=600&q=80',
];

const SubsImageSlider = () => (
    <div className="subs-slide-container">
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={8}
            // grid={{ rows: 2, fill: 'row' }}
            spaceBetween={10}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            // style={{ padding: '24px 0 40px 0', boxSizing: 'border-box' }}
            // breakpoints={{
            //     1200: { slidesPerView: 5 },
            //     900: { slidesPerView: 4 },
            //     600: { slidesPerView: 3 },
            //     480: { slidesPerView: 2 },
            // }}
        >
            {images.map((url, idx) => (
                <SwiperSlide key={idx}>
                    <div className="subs-slide-img" style={{ backgroundImage: `url(${url})` }} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default SubsImageSlider;
