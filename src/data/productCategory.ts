import cat1 from '../../public/assets/img/new/f2.png';
import cat2 from '../../public/assets/img/new/cu.png';
import cat3 from '../../public/assets/img/new/cu-icon.png';
import cat4 from '../../public/assets/img/new/f1.png';
import cat5 from '../../public/assets/img/new/f3.png';
import { productCategoryDT } from '@/types/custom-d-t';

export const productCategoryData: productCategoryDT[] = [
    //home shop modern product category start
    {
        id: 1,
        image: cat1,
        alt: 'Heavy Duty Engine Oils',
        title: 'Heavy Duty Engine Oils',
        productCount: '5 Products',
        size: 'lg',
        link: "#",
    },
    {
        id: 2,
        image: cat2,
        alt: 'Fully Synthetic Oils',
        title: 'Fully Synthetic Oils',
        productCount: '3 Products',
        size: 'sm',
        link: "#",
    },
    {
        id: 3,
        image: cat3,
        alt: 'Diesel Engine Oils',
        title: 'Diesel Engine Oils',
        productCount: '4 Products',
        size: 'sm',
        link: "#",
    },
    {
        id: 4,
        image: cat4,
        alt: 'Industrial Chemicals',
        title: 'Industrial Chemicals',
        productCount: '6 Products',
        size: 'sm',
        link: "#",
    },
    {
        id: 5,
        image: cat5,
        alt: 'Bulk Supply Solutions',
        title: 'Bulk Supply Solutions',
        productCount: '4 Products',
        size: 'sm',
        link: "#",
    }
    //home shop modern product category end
];

export default productCategoryData;