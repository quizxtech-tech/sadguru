'use client';
import { animationParagraph, buttonBounceAnimation, charAnimation, eyeAnimation, fadeAnimation, funfactPanelAnimation, panelAnimation, servicePanelAnimation, textInvertAnim1, videoAnimation } from '@/hooks/useGsapAnimation';
import { bounceAnimation, textBounceAnimation } from '@/utils/titleAnimation';
import HomeMainTestimonial from '@/components/testimonial/HomeMainTestimonial';
import HomeMainTextSlider from '@/components/text-slider/HomeMainTextSlider';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ModernAgencyAward from '@/components/award/ModernAgencyAward';
import HomeMainFunFact from '@/components/funfact/HomeMainFunFact';
import HomeMainProject from '@/components/project/HomeMainProject';
import HomeMainService from '@/components/service/HomeMainService';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import HomeMainHero from '@/components/hero-banner/HomeMainHero';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainBanner from '@/components/banner/HomeMainBanner';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainAbout from '@/components/about/HomeMainAbout';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainWork from '@/components/work/HomeMainWork';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import CorporateAgencyHero from '@/components/hero-banner/CorporateAgencyHero';
import { useGSAP } from '@gsap/react';
import React from 'react';
import CreativeAgencyAbout from '@/components/about/CreativeAgencyAbout';
import StartupAgencyBanner from '@/components/banner/StartupAgencyBanner';
import StartupAgencyChoose from '@/components/choose-area/StartupAgencyChoose';
import CreativeStudioProject from '@/components/project/CreativeStudioProject';
import StartupAgencyVideo from '@/components/video-area/StartupAgencyVideo';
import MobileApplicationTestimonial from '@/components/testimonial/MobileApplicationTestimonial';
import BlogMasonryMain from '@/pages/blogs/blog-masonry/BlogMasonryMain';

const HomeMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground()

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            funfactPanelAnimation();
            buttonBounceAnimation();
            servicePanelAnimation();
            textBounceAnimation();
            animationParagraph();
            bounceAnimation();
            charAnimation();
            videoAnimation();
            panelAnimation();
            fadeAnimation();
            textInvertAnim1();
            eyeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <CorporateAgencyHero />
                        {/* <CreativeAgencyAbout /> */}
                        <StartupAgencyBanner />
                        <HomeMainService />
                        <StartupAgencyChoose />
                        <CreativeStudioProject />
                        <StartupAgencyVideo />
                        {/* <MobileApplicationTestimonial /> */}
                        {/* <BlogMasonryMain /> */}
                        {/* <HomeMainHero /> */}
                        <HomeMainAbout />
                        <HomeMainTextSlider />
                        <HomeMainVideo />
                        <HomeMainProject />
                        <HomeMainFunFact />
                        <HomeMainWork />
                        <HomeMainTestimonial />
                        <ModernAgencyAward />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default HomeMain;
