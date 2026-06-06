"use client"
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ContactUsForm from '@/components/contacts/ContactUsForm';
import ContactUsAbout from '@/components/about/ContactUsAbout';
import ContactUsArea from '@/components/contacts/ContactUsArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ContactUsHero from '@/components/contacts/ContactUsHero';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ContactUsMain = () => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ContactUsHero />
                        <ContactUsForm />
                        <ContactUsAbout />
                        <ContactUsArea />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default ContactUsMain;