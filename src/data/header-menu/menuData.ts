import { MenuItem } from "@/types/menu-d-t";

const headerMenuData: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: false,
    title: "Home",
    pluseIncon: false,
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "About Us",
    pluseIncon: false,
    link: "/about-us-light",
  },
  {
    id: 3,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "Contact Us",
    pluseIncon: false,
    link: "/contact-us-light",
  },
  {
    id: 4,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "Quotation",
    pluseIncon: false,
    link: "#",
  },
  {
    id: 5,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "Blog",
    pluseIncon: false,
    link: "/blog-standard-light",
  },
];
export default headerMenuData;

