import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import type { DataGeneral, RootObject, Service } from "../../interfaces/dbData";
import FormatText from "../../hooks/FormatText";
import IconGlobal from "../global/IconGlobal";
import ServicesCardHome from "./ServicesCardHome";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';

interface SliderServicesProps {
    dbServices: Service[];
    landingServices: boolean;
    slidesPerView?: number;
    onePage?: boolean;
    dataGeneral?: DataGeneral;
    dataglobal: RootObject;
}

const ServicesHome2: React.FC<SliderServicesProps> = ({
    dbServices,
    landingServices,
    slidesPerView = 3,
    onePage,
    dataGeneral,
    dataglobal,
}) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={20}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: slidesPerView,
                },
            }}
        >
            {dbServices.map((service, index) => (
                <SwiperSlide key={index} className="flex flex-col items-center">
                    <a
                        href={`${onePage
                            ? `/`
                            : landingServices
                                ? `/services/${FormatText(service.title)}`
                                : "/services"
                            }`}
                        aria-label="Learn More"
                        className="rounded-md"
                    >
                        <div className="flex items-center justify-center m-5">
                            <div className="relative w-80 h-80 rounded-lg shadow-lg overflow-hidden">
                                {/* Contenedor de imagen y overlay */}
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.description[0].image})` }}>
                                <div className="absolute inset-0 bg-black/20"></div>

                                </div>

                                {/* Contenido principal */}
                                <div className="w-full h-full relative rounded-lg group">
                                    {/* Front Content */}
                                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[20%]">
                                        <p className="text-2xl font-bold bg-clip-text text-transparent w-4/5 bg-gradient-to-br from-primary to-secondary transition-opacity duration-500 group-hover:opacity-0 text-center">
                                            {service.title}
                                        </p>
                                    </div>

                                    {/* Back Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center bg-gradient-to-br from-primary to-secondary text-gray-200 p-5 rounded-lg transform translate-x-[96%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0">
                                        <p className="text-2xl font-bold">{service.title}</p>
                                        <p className="text-sm leading-relaxed">
                                            {service.description[0].text.substring(0, 150) + "..."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ServicesHome2;
