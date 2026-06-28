import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Sadguru Sales Agency - Contact Us",
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;