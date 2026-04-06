import { StaticImageData } from "next/image";

// Define types for our menu data
interface MenuLink {
    title: string;
    link: string;
    badge?: string;
}

interface SubMenuItem extends MenuLink {
    submenu?: MenuLink[];
}

interface MenuColumn {
    title: string;
    links: MenuLink[];
}

interface MenuItem {
    id: number;
    title: string;
    link: string;
    megaMenu: boolean;
    columns?: MenuColumn[];
    submenu?: SubMenuItem[];
    image?: {
        src: StaticImageData;
        alt: string;
    };
}

// Menu data structure
const mobileMenuData: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        megaMenu: false,
    },
    {
        id: 2,
        title: "About Us",
        link: "/about-us-light",
        megaMenu: false,
    },
    {
        id: 3,
        title: "Contact Us",
        link: "/contact-us-light",
        megaMenu: false,
    },
    {
        id: 4,
        title: "Quotation",
        link: "#",
        megaMenu: false,
    },
    {
        id: 5,
        title: "Blog",
        link: "/blog-standard-light",
        megaMenu: false,
    },
];

export default mobileMenuData;