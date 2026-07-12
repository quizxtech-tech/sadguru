import mobileMenuData from '@/data/header-menu/mobileMenuData';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MainMobileMenuProps {
    setOpenOffcanvas?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainMobileMenu: React.FC<MainMobileMenuProps> = ({ setOpenOffcanvas }) => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        if (activeMenu === id) {
            setActiveMenu(null);
        } else {
            setActiveMenu(id);
            setActiveSubmenu(null);
        }
    };

    const toggleSubmenu = (index: number) => {
        if (activeSubmenu === index) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(index);
        }
    };

    // Returns CSS class based on tag like 'Popular', 'Trending', or 'Hot'
    const getTagClass = (tag: string) => {
        switch (tag) {
            case 'Popular': return 'pop';
            case 'Trending': return 'new';
            case 'Hot': return 'hot';
            default: return '';
        }
    };

    const handleLinkClick = () => {
        if (setOpenOffcanvas) {
            setOpenOffcanvas(false);
        }
    };

    return (
        <>
            <ul>
                {mobileMenuData.map((menuItem) => (
                    <li key={menuItem.id} className={menuItem.submenu || menuItem.megaMenu ? `has-dropdown ${activeMenu === menuItem.id ? 'active' : ''}` : ""}>
                        <Link href={menuItem.link} onClick={(e) => {
                            if (menuItem.submenu || menuItem.megaMenu) {
                                e.preventDefault();
                                toggleMenu(menuItem.id);
                            } else {
                                handleLinkClick();
                            }
                        }}>
                            {menuItem.title}
                        </Link>

                        {menuItem.megaMenu ? (
                            <div className="tp-megamenu-wrapper mega-menu megamenu-white-bg" style={{ display: `${activeMenu === menuItem.id ? 'block' : 'none'}` }}>
                                <div className="row gx-0">
                                    {menuItem.columns?.map((column, colIndex) => (
                                        <div key={colIndex} className={menuItem.image ? "col-xl-2" : "col-xl-3"}>
                                            <div className="tp-megamenu-list">
                                                <h4 className="tp-megamenu-title">{column.title}</h4>
                                                <ul>
                                                    {column.links.map((link, linkIndex) => (
                                                        <li key={linkIndex}>
                                                            <Link href={link.link} onClick={handleLinkClick}>
                                                                {link.title}
                                                                {link.badge && (
                                                                    <span className={getTagClass(link.badge)}>
                                                                        {link.badge}
                                                                    </span>
                                                                )}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}

                                    {menuItem.image && (
                                        <div className="col-xl-2">
                                            <div className="tp-megamenu-list">
                                                <div className="tp-megamenu-thumb">
                                                    <Image src={menuItem.image.src} alt={menuItem.image.alt} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <ul className="tp-submenu submenu" style={{ display: `${activeMenu === menuItem.id ? 'block' : 'none'}` }}>
                                {menuItem.submenu?.map((subItem, subIndex) => (
                                    <li key={subIndex} className={subItem.submenu ? `menu-item-has-children ${activeSubmenu === subIndex ? 'active' : ''}` : ""}>
                                        <Link href={subItem.link} onClick={(e) => {
                                            if (subItem.submenu) {
                                                e.preventDefault();
                                                toggleSubmenu(subIndex);
                                            } else {
                                                handleLinkClick();
                                            }
                                        }}>
                                            {subItem.title}
                                        </Link>

                                        {subItem.submenu && (
                                            <>
                                                <ul className="tp-submenu submenu" style={{ display: `${activeSubmenu === subIndex ? 'block' : 'none'}` }}>
                                                    {subItem.submenu.map((nestedItem, nestedIndex) => (
                                                        <li key={nestedIndex}>
                                                            <Link href={nestedItem.link} onClick={handleLinkClick}>{nestedItem.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MainMobileMenu;