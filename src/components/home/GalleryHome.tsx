import React from "react";
import { motion } from "framer-motion";
import type { RootObject } from "../../interfaces/dbData";
import { fade, zoomIn, useInViewAnimation } from "../../animations/FramerMotion.tsx"; // Asegúrate de que la ruta sea correcta
import IconGlobal from "../global/IconGlobal.tsx";
import FormatText from "../../hooks/FormatText";


interface CarRentalGalleryProps {
    data: RootObject;
    landingServices: boolean;
    onePage?: boolean;

}
const inViewProps = useInViewAnimation(0.2); // Detecta el 30% de visibilidad

const CarRentalGallery: React.FC<CarRentalGalleryProps> = ({ data, landingServices, onePage }) => {
    // Usamos el hook para la animación cuando el 30% del elemento esté en la vista
    // `/portfolio/${FormatText(portfolio.title)}`
    return (
        <section className="flex flex-col md:flex-row w-full mx-auto items-stretch gap-4 py-20 overflow-x-hidden">
            {/* Galería de imágenes */}
            <div className="flex gap-4 w-full md:w-[70%]">
                {/* Imagen Izquierda */}


                <a className="w-[30%] relative group overflow-hidden rounded-lg"
                    href={`${onePage
                        ? `/`
                        : landingServices
                            ? `/portfolio`
                            : "/portfolio"
                        }`}>

                    <motion.img
                        variants={zoomIn(.5)}
                        {...inViewProps}
                        src={data.gallery[0]}
                        alt="Car back view on road"
                        className="w-full h-[415px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Telón hacia abajo (con opacidad) */}
                    <div className="absolute inset-0 bg-black/40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    {/* Telón color sólido hacia arriba (inicialmente oculto) */}
                    <div className="absolute flex justify-between items-start bottom-0 left-0 w-full h-[20%] bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <a className="capitalize font-semibold md:pl-8 pl-5 pt-5 text-white md:text-3xl text-sm">View Moore</a>
                        <div className="bg-primary md:flex hidden items-center justify-center w-[82px] h-[82px]">
                            <IconGlobal textColor="md:text-3xl text-white" />
                        </div>
                    </div>
                </a>

                {/* Columna central */}
                <a
                    href={`${onePage
                        ? `/`
                        : landingServices
                            ? `/portfolio`
                            : "/portfolio"
                        }`} className="flex flex-col gap-4 w-[40%]">
                    <div className="relative group overflow-hidden rounded-lg">
                        <motion.img
                            variants={zoomIn(0.5)}
                            {...inViewProps}
                            src={data.gallery[1]}
                            alt="Cars in showroom"
                            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <div className="absolute bottom-0 flex justify-between items-start left-0 w-full h-[25%] bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <a className="capitalize font-semibold pl-8 pt-2 text-white text-sm md:text-3xl">View Moore</a>
                            <div className="bg-primary md:flex hidden items-center justify-center  w-[50px] h-[50px]">
                                <IconGlobal textColor="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <a href={`${onePage
                        ? `/`
                        : landingServices
                            ? `/portfolio`
                            : "/portfolio"
                        }`} className="relative group overflow-hidden rounded-lg">
                        <motion.img
                            variants={zoomIn(1)}
                            {...inViewProps}
                            src={data.gallery[2]}
                            alt="Red sports car on road"
                            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <div className="absolute flex justify-between items-start bottom-0 left-0 w-full h-[25%] bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <a className="capitalize font-semibold pl-8 pt-2 text-white text-sm md:text-3xl">View Moore</a>
                            <div className="bg-primary md:flex hidden items-center justify-center w-[50px] h-[50px]">
                                <IconGlobal textColor="text-xl text-white" />
                            </div>
                        </div>
                    </a>
                </a>

                {/* Imagen Derecha */}
                <a href={`${onePage
                    ? `/`
                    : landingServices
                        ? `/portfolio`
                        : "/portfolio"
                    }`} className="w-[30%] relative group overflow-hidden rounded-lg">
                    <motion.img
                        variants={zoomIn(0.5)}
                        {...inViewProps}
                        src={data.gallery[3]}
                        alt="Person driving car"
                        className="w-full h-[415px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <div className="absolute bottom-0 flex justify-between items-start left-0 w-full h-[20%] bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <a className="capitalize font-semibold pl-6 pt-5 text-white text-sm md:text-3xl">View Moore</a>
                        <div className="bg-primary md:flex hidden items-center justify-center  w-[82px] h-[82px]">
                            <IconGlobal textColor="text-3xl text-white" />
                        </div>
                    </div>
                </a>
            </div>

            {/* Sección de texto con animación zoomIn */}
            <motion.div
                variants={fade("left", 1.2)}
                {...inViewProps}
                className="w-full md:w-[30%] bg-primary flex justify-center items-center rounded-lg text-white p-6 relative">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold">{data.slogan[5]}</h2>
                </div>
            </motion.div>
        </section>
    );
};

export default CarRentalGallery;
