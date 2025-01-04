import React, { useState } from "react";
import { motion } from "framer-motion";

interface SubMenuProps {
    clickEvent?: () => void;
    styleForSubMenu?: string;
    colorText?: string;
    styleList?: string;
    data: any;
}

interface Route {
    name: string;
    path: string;
    icon?: string;
    child?: boolean;
    submenu?: string;
    statusRoutes?: boolean;
    subitems?: string[];
}

const generateRoutes = (data: any): Route[] => {
    const serviceCategories = [
        {
            category: "Services",
            path: "/services",
            services: data?.services?.map((service: any) => service.title) || [],
            subMenu: "subMenuServices",
            child: data?.widgets?.landingServices,
        },
        {
            category: "Portfolio",
            path: "/portfolio",
            services: data?.landingsGallery?.map((product: any) => product.nameLanding) || [],
            subMenu: "subMenuGallery",
            child: data?.widgets?.landingGallery,
        },
    ];

    return [
        { name: "Home", path: "/", icon: "home" },
        { name: "About Us", path: "/about", icon: "About" },
        ...serviceCategories.map((category) => ({
            name: category.category,
            path: category.path,
            icon: `${category.category}Icon`,
            child: category.child,
            subitems: category.services,
            submenu: category.subMenu,
        })),
        {
            name: "Reviews",
            path: "/reviews",
            icon: "Reviews",
            statusRoutes: data?.reviews?.stateReviews && data.reviews?.viewAll,
        },
        {
            name: "Videos",
            path: "/videos",
            icon: "Videos",
            statusRoutes: data?.widgets?.landingVideos && data.videos?.landingVideos,
        },
        { name: "Contact", path: "/contact", icon: "Contact" },
    ];
};

const Menu: React.FC<SubMenuProps> = ({
    clickEvent,
    styleForSubMenu = "",
    colorText = "",
    styleList = "",
    data,
}) => {
    const [hoveredService, setHoveredService] = useState<any | null>(null);
    const [firstServiceImage, setFirstServiceImage] = useState<any | null>(null);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    const routes = generateRoutes(data);

    const renderSubItems = (subitems: string[], submenu: string | undefined) => {
        return subitems.map((subitem, index) => {
            const formattedPath = submenu === "subMenuServices" ? "/services" : "/portfolio";
            const serviceData =
                submenu === "subMenuServices"
                    ? data.services?.find((service: any) => service.title === subitem)
                    : null;

            return (
                <a
                    key={index}
                    href={`${formattedPath}/${subitem.replace(/\s+/g, "-").toLowerCase()}`}
                    className="group font-semibold flex items-center rounded-md py-3 px-4 transition duration-300 transform hover:bg-white hover:text-black"
                    onMouseEnter={() => submenu === "subMenuServices" && setHoveredService(serviceData)}
                    onMouseLeave={() => setHoveredService(null)}
                >
                    <span className="mr-2 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-secondary"></span>
                    {subitem}
                </a>
            );
        });
    };

    const handleSubMenuHover = (submenu: string | undefined) => {
        if (submenu === "subMenuServices" && data?.services?.length > 0) {
            // setFirstServiceImage(data.services[0]);
            setActiveSubMenu(submenu);
        } else {
            setFirstServiceImage(null);
            setActiveSubMenu(submenu || null);
        }
    };

    return (
        <div className={`flex md:gap-5 gap-[24px] relative ${styleList}`}>
            {routes.map((item, index) => {
                if (item.statusRoutes === undefined || item.statusRoutes) {
                    return (
                        <div
                            key={item.name}
                            className={`relative content_subItems pb-2 z-50 md:border-none border-b-2 border-white md:w-auto w-[200px] ${colorText}`}
                        >
                            {item.child ? (
                                <>
                                    <span
                                        className={`font-medium text-[17px] cursor-pointer flex items-center ${styleForSubMenu}`}
                                        onMouseEnter={() => handleSubMenuHover(item.submenu)}
                                    >
                                        <span>{item.name}</span>
                                        <i className="fas fa-chevron-down ml-2"></i>
                                    </span>
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="submenu-container bg-white md:absolute -right-5 z-50 rounded-md top-8 relative text-black md:text-[16px] text-[16px] shadow-lg md:my-0 gap-2 md:w-[300px] max-h-[350px] overflow-y-scroll"
                                        onClick={clickEvent}
                                    >
                                        {item.subitems && renderSubItems(item.subitems, item.submenu)}
                                    </motion.div>
                                </>
                            ) : (
                                <a href={item.path} onClick={clickEvent}>
                                    <span className="font-medium text-[18px] md:py-2 md:px-4 pb-2">
                                        {item.name}
                                    </span>
                                </a>
                            )}
                        </div>
                    );
                }
                return null;
            })}
            {hoveredService && activeSubMenu === "subMenuServices" ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 -right-16 bg-white h-[350px] shadow-lg p-4 rounded-md"
                >
                    <img
                        src={hoveredService?.description[0]?.image}
                        alt={hoveredService?.title}
                        className="w-[250px] h-[280px] object-cover rounded-md"
                    />
                    <p className="mt-2 text-center font-semibold w-[250px]">{hoveredService?.title}</p>
                </motion.div>
            ) : activeSubMenu === "subMenuServices" && firstServiceImage ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 -right-[77px] bg-white h-[350px] shadow-lg p-4 rounded-md"
                >

                    <img
                        src={firstServiceImage?.description[0]?.image}
                        alt={firstServiceImage?.title}
                        className="w-[250px] h-auto object-cover rounded-md"
                    />
                    <p className="mt-2 text-center font-semibold w-[250px]">{firstServiceImage?.title}</p>
                </motion.div>
            ) : null}
        </div>
    );
};

export default Menu;