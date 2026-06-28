import AboutUsLightMain from '@/pages/about/about-us/AboutUsLightMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Sadguru Sales Agency - About Us",
};

const page = () => {
    return (
        <AboutUsLightMain />
    );
};

export default page;