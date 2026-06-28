import thumb1 from "../../../public/assets/img/new/product/total15w.webp";
import thumb2 from "../../../public/assets/img/new/product/val15w.jpg";
import thumb3 from "../../../public/assets/img/new/product/elf15w40.jpg";
import thumb4 from "../../../public/assets/img/new/product/total-9000.webp";
import thumb5 from "../../../public/assets/img/new/product/val15wblue.webp";
import thumb6 from "../../../public/assets/img/new/product/elf5w.webp";
import thumb7 from "../../../public/assets/img/new/product/total7000.webp";
import PhotoProviderWrapper from "../shared/PhotoProviderWrapper";
import { InstagramThree } from '@/svg/social-icons/Instagram';
import { Instagram_swiper_params } from "@/constants/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoView } from "react-photo-view";
import Image from "next/image";
import React from 'react';

const ShopModernInstagram = () => {
    const instagramPosts = [
        { id: 1, image: thumb1, alt: "Instagram post 1" },
        { id: 2, image: thumb2, alt: "Instagram post 2" },
        { id: 3, image: thumb3, alt: "Instagram post 3" },
        { id: 4, image: thumb4, alt: "Instagram post 4" },
        { id: 5, image: thumb5, alt: "Instagram post 5" },
        { id: 6, image: thumb6, alt: "Instagram post 6" },
        { id: 7, image: thumb7, alt: "Instagram post 7" }
    ];

    return (
        <div className="tp-shop-instagram-area p-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-product-instagram-heading text-center mb-50">
                            <h4 className="tp-shop-section-title">Our Products</h4>
                            <p>A glimpse of the industrial chemicals and lubricants we supply across Bhuj and Kutch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row gx-0">
                    <div className="col-xl-12">
                        <PhotoProviderWrapper>
                            <Swiper
                                className='ai-instagram-active'
                                {...Instagram_swiper_params}
                            >
                                {instagramPosts.map((post) => (
                                    <SwiperSlide key={post.id}>
                                        <div className="tp-shop-instagram-item" style={{ padding: "10px" }}>
                                            <PhotoView src={post.image.src}>
                                                <Image priority style={{ width: "100%", height: "280px", objectFit: "contain", backgroundColor: "#fff", padding: "15px", borderRadius: "8px", border: "1px solid rgba(77, 61, 48, 0.12)" }} src={post.image} alt={post.alt} />
                                            </PhotoView>
                                            <div className="tp-shop-instagram-icon">
                                                <InstagramThree />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </PhotoProviderWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernInstagram;