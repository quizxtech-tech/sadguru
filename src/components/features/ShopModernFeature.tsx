import { EasyReturnIcon, FastShippingIcon, SecurePaymentIcon } from '@/svg/FeaturesIcons';
import React from 'react';

const ShopModernFeature = () => {
    const features = [
        {
            id: 1,
            title: "Genuine Quality Products",
            description: "We source only genuine, high-quality chemicals and lubricants from trusted manufacturers to ensure reliable performance.",
            icon: <FastShippingIcon />,
            delay: ".3"
        },
        {
            id: 2,
            title: "Timely & Reliable Supply",
            description: "We maintain ready stock to ensure timely availability and delivery for all your industrial and commercial requirements.",
            icon: <SecurePaymentIcon />,
            delay: ".5"
        },
        {
            id: 3,
            title: "Expert Product Guidance",
            description: "With 25+ years of experience, our team helps you choose the right products for your specific industrial needs.",
            icon: <EasyReturnIcon />,
            delay: ".7"
        }
    ];

    return (
        <div className="tp-shop-feature-ptb pb-120">
            <div className="container container-1200">
                <div className="tp-shop-feature-wrap">
                    <div className="row">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="col-xl-4 col-md-6 tp_fade_anim"
                                data-delay={feature.delay}
                            >
                                <div className="tp-shop-feature-item mb-30 text-center">
                                    <span>{feature.icon}</span>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernFeature;