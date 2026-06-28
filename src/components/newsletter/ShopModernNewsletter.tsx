import newsLette1 from '../../../public/assets/img/new/sc4.png';
import newsLetter2 from '../../../public/assets/img/new/sc5.png';
import newsLetter3 from '../../../public/assets/img/new/f1.png';
import newsLetter4 from '../../../public/assets/img/new/cu.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ShopModernNewsletter = () => {
    return (
        <div className="tp-shop-newsletter-area tp-shop-newsletter-ptb pt-120 pb-85">
            <div className="container-fluid">
                <div className="row align-items-end">
                    <div className="col-xl-3">
                        <div className="tp-shop-newsletter-thumb text-xl-start text-end">
                            <Image data-speed="1.5" className="mb-70 img-left" src={newsLette1} alt="NewsLetter" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-shop-newsletter-middle">
                            <div className="tp-shop-newsletter-thumb">
                                <Image style={{ width: "auto", height: "auto" }} data-speed="1.3" src={newsLetter2} alt="NewsLetter" />
                            </div>
                            <div className="tp-shop-newsletter-content z-index-1 text-center">
                                <h4 className="tp-shop-section-title fs-100 mb-20">STAY UPDATED</h4>
                                <span>GET LATEST PRODUCT &amp; <br /> PRICING UPDATES</span>
                                <p>
                                    Subscribe to stay informed about new products, bulk offers,
                                    and industry updates from Sadguru Sales Agency.
                                </p>
                                <div className="tp-shop-newsletter-btn">
                                    <Link className="tp-checkout-btn btn-plr text-uppercase" href="#">Subscribe</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="tp-shop-newsletter-thumb text-xl-start text-end">
                            <Image data-speed="1.1" className="img-1" src={newsLetter3} alt="NewsLetter" />
                            <Image style={{ width: "auto", height: "auto" }} data-speed="1.2" className="img-2" src={newsLetter4} alt="NewsLetter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernNewsletter;