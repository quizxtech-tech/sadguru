import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import React from 'react';

interface Slide {
    content: string;
}

const ShopModernTextSlider = ({ varientClass = "shop-text-slider-style" }) => {
    // Data for the slides
    const slides: Slide[] = [
        { content: "Quality Chemicals" },
        { content: "Premium Lubricants" },
        { content: "Trusted Since 2001" },
        { content: "Bhuj, Kutch" },
        { content: "Reliable Supply" },
        { content: "Expert Guidance" },
        { content: "Industrial Solvents" },
        { content: "Sadguru Sales" },
        { content: "Fast Delivery" },
        { content: "Bulk Orders" }
    ];

    return (
        <div className={`shop-text-slider-area ${varientClass}`}>
            <div className="shop-text-slider-wrap">
                <Swiper
                    className="shop-text-slider-active slide-transtion"
                    modules={[FreeMode, Autoplay]}
                    loop={true}
                    speed={3000}
                    slidesPerView="auto"
                    freeMode={true}
                    spaceBetween={0}
                    centeredSlides={true}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        1400: { slidesPerView: 5 },
                        1200: { slidesPerView: 4 },
                        992: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        576: { slidesPerView: 2 },
                        380: { slidesPerView: 1 },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={`text-slide-${index}`}>
                            <div className="shop-text-slider-item">
                                <span style={{ whiteSpace: "nowrap" }}>{slide.content}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ShopModernTextSlider;