import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import type { DataGeneral, RootObject, Service } from "../../interfaces/dbData";
import FormatText from "../../hooks/FormatText";
import IconGlobal from "../global/IconGlobal";
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
            href={`${
              onePage
                ? `/`
                : landingServices
                ? `/services/${FormatText(service.title)}`
                : "/services"
            }`}
            aria-label="Learn More"
            className="rounded-md"
          >
            <div className="relative pb-10 group rounded-md">
              <div className="mx-auto z-20 relative w-[350px] h-[350px]  rounded-full flex justify-center flex-col">
                <img
                  src={service.description[0].image}
                  alt={service.title}
                  className="w-[350px] h-[350px]  rounded-full object-cover aspect-auto mx-auto border-4 border-secondary"
                />
                <span
                  className="md:text-[40px] text-primary border-2 border-primary p-4 rounded-full flex justify-center items-center mx-auto hover:bg-secondary hover:text-white
        transition duration-300 ease-in-out absolute top-0 right-0 gradient-background text-white"
                >
                  <IconGlobal />
                </span>
                <div className=" w-[75px] h-[75px] flex justify-center items-center overflow-hidden text-2xl  text-secondary  rounded-md absolute bottom-4 right-[40%] opacity-80 hover:shadow-md transition duration-500 transform z-30">
                  <picture className="w-full h-full rounded-md">
                    <img
                      src={dataglobal?.logos.secondary}
                      alt={`logo ${dataglobal?.name}`}
                      loading="eager"
                      className="w-full h-full object-contain rounded-md"
                      width="200"
                      height="200"
                    />
                  </picture>
                </div>
              </div>
              <h2
                className={`font-bold capitalize text-white z-20 bg-primary py-2 px-6 text-center flex justify-center ${
                  onePage ? "text-xl" : "text-2xl"
                }`}
              >
                {service.title}
              </h2>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesHome2;
