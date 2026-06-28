import ShopModernMain from '@/pages/homes/shop-modern/ShopModernMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Sadguru Sales Agency - Product",
};

const page = () => {
    return (
        <ShopModernMain />
    );
};

export default page;