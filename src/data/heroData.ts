import { StaticImageData } from "next/image";
import slideImg1 from "../../public/assets/img/new/f1.png";
import slideImg2 from "../../public/assets/img/new/f2.png";
import slideImg3 from "../../public/assets/img/new/f3.png";

interface heroDT {
    title: string;
    subtitle: string;
    image: StaticImageData;
    alt: string;
}

export const shopModernHeroSlideData: heroDT[] = [
    {
        title: "Quality Chemicals <br /> for Every Industry",
        subtitle: "Industrial Chemicals",
        image: slideImg1,
        alt: "Industrial Chemicals"
    },
    {
        title: "Premium Lubricants <br /> for Peak Performance",
        subtitle: "Lubricants & Oils",
        image: slideImg2,
        alt: "Lubricants and Oils"
    },
    {
        title: "Reliable Supply <br /> for Your Business",
        subtitle: "Bulk Supply",
        image: slideImg3,
        alt: "Bulk Supply"
    },
    {
        title: "Trusted Supplier <br /> Since 2001",
        subtitle: "25+ Years Experience",
        image: slideImg2,
        alt: "Trusted Supplier Since 2001"
    }
];