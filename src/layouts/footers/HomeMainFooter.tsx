import HomeFooterCopyright from "./subComponents/HomeFooterCopyright";
import { FooterSocialIcons } from "./subComponents/FooterSocialIcons";
import Link from 'next/link';
import React from 'react';
import siteConfig from '@/config/admin';

interface IHomeMainFooter {
    bgColor?: string;
    buttonCls?: string;
    quikLinkCls?:string;
    socialBtnCls?:string
}

const HomeMainFooter:React.FC<IHomeMainFooter> = ({bgColor, buttonCls, quikLinkCls="footer-main", socialBtnCls=""}) => {
    return (
        <>
            <div className={`tp-footer-area ${buttonCls} pb-35 pt-160`} style={{ backgroundColor: bgColor }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                                <h4 className="tp-footer-widget-title">Your trusted <br /> chemical &amp; lubricant supplier.</h4>
                                {/* footer social icons */}
                                <FooterSocialIcons className={`tp-footer-widget-social ${socialBtnCls}`} />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className={`tp-footer-widget ${quikLinkCls} tp-footer-col-2 pb-40 tp_fade_anim`} data-delay=".5">
                                <h4 className="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                                <div className="tp-footer-widget-menu">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>{" "}
                                        <li><Link href="/about-us">About</Link></li>{" "}
                                        <li><Link href="/product">Products</Link></li>{" "}
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7">
                                <h4 className="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                                <div className="tp-footer-widget-info">
                                    <Link href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</Link>
                                    <Link href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`}>{siteConfig.contact.phone}</Link>
                                </div>
                                <div className="tp-footer-widget-info">
                                    <Link href={siteConfig.contact.mapLink} target="_blank">Hem Complex, Madhapar Highway, <br />
                                        Bhuj, Kutch, Gujarat – 370020</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer copyright */}
            <HomeFooterCopyright bgColor={bgColor}/>
        </>
    );
};

export default HomeMainFooter;