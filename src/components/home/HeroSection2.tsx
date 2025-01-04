import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject } from "../../interfaces/dbData";
import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";

interface HeroSection2Props {
  data: RootObject; // Asegúrate de que RootObject está bien definido y accesible.
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data }) => {
  const yearExperiense = data.yearsExperience;
  const miles = data.milesCover;
  const city = data.dataGeneral.location[0].city;

  //como puedo poner lo anterior en un array ? que sea parameter y label

  return (
    <div className="w-full relative">
      {/* Video background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/aztecamediacrm-c94df.appspot.com/o/videos%20stock%2FThe%20Grass.webm?alt=media&token=05ee110c-7c1e-48a1-96d8-b0d41061abd7"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Black overlay with opacity */}
      </div>
      <div className="md:pt-32 pt-16 md:pb-[160px] pb-[220px] relative z-10">
        <div className="flex justify-center items-center lg:w-[70%] md:w-[85%] mx-auto flex-wrap md:px-1 px-6">
          <div className="md:w-[50%]">
            <img
              src={data.logos.secondary}
              alt={data.name}
              className="md:w-[400px] w-[150px] md:block hidden"
            />
            <div className="border-l-4 border-white pl-4 my-4">
              <span className="text-[25px] text-white font-bold">
                {data.name}
              </span>
              <h1 className="md:text-[40px] text-[30px] font-bold text-white">
                {data.businessLicense
                  ? `${data.businessLicense}`
                  : data.home[0].title}
              </h1>
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col gap-6">
            <span className="text-white text-[60px]">
              <IconGlobal />
            </span>

            <p className="text-white"> {data.home[0].text}</p>
            <ButtonContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;