import type { Phone, RootObject } from "../../interfaces/dbData";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import ButtonContent_5 from "../buttons/ButtonContent_5";
import ButtonContent_4 from "../buttons/ButtonContent_4";
import LazyImage from "../global/LazyImage";
import IconGlobal from "../global/IconGlobal";


interface SlidesShow2Props {
    dataPhone?: Phone[];
    data: RootObject;

}



const SlidesShow2: React.FC<SlidesShow2Props> = ({ data }) => {


    return (
        <div className="relative md:h-[90vh] h-[105vh] flex items-center justify-center overflow-hidden">
            <div className="absolute z-[9] w-full h-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    effect='fade'
                    className="w-full h-full border-none"
                >
                    {data.gallery.slice(0, 8).map((image, index) => (

                        <SwiperSlide key={index} className="w-full h-full">
                            <img
                                src={image}
                                alt={data.name}
                                className="w-full h-full object-cover"
                            />

                        </SwiperSlide>
                    ))
                    }

                </Swiper>

            </div>
            {/* overlay */}
            <div className="absolute w-full h-full top-0 left-0 z-[10] bg-black opacity-40"></div>

            <div className="w-full md:flex h-full items-center justify-end relative">
                <div className="w-full h-full relative justify-between flex z-40">
                    <div className="md:w-[60%] md:pl-[10%] w-full flex justify-center md:text-start text-center flex-col items-start px-16 gap-4">
                        <div className="flex flex-col gap-2 md:border-b-8 border-[#1f9eff] md:border-l-8  rounded-bl-lg p-5">
                            <div className="flex gap-4 text-xl w-full md:justify-start justify-center items-center text-white font-bold">
                                <IconGlobal />
                                <p>Most Professional</p>
                            </div>
                            <h1 className="text-white text-5xl font-bold">
                                {data.home[0].title}
                            </h1>
                            <p className="text-white text-lg">
                                {(() => {
                                    const text = data.home[0].text;
                                    // Encuentra el índice del primer punto.
                                    const firstPointIndex = text.indexOf('.');
                                    if (firstPointIndex === -1) {
                                        // No hay puntos, retorna el texto completo.
                                        return text;
                                    }
                                    // Intenta encontrar el segundo punto.
                                    const secondPointIndex = text.indexOf('.', firstPointIndex + 1);
                                    if (secondPointIndex === -1) {
                                        // Solo hay un punto, retorna el texto hasta el primer punto (incluido).
                                        return text;
                                    }
                                    // Hay al menos dos puntos, retorna el texto hasta el segundo punto (incluido).
                                    return text.slice(0, secondPointIndex + 1);
                                })()}
                            </p>
                            <div className="flex w-full md:space-x-5 items-center gap-5 md:flex-row flex-col">
                                <ButtonContent_5 titleBtn={"Read Moore..."} linkBtn="/about" />
                                <ButtonContent_4 titleBtn={data.dataGeneral.phones[0].number} linkBtn={`tel:+1${data.dataGeneral.phones[0].number}`} />
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 885.3 855.43" className="text-primary w-[46%] absolute md:block hidden -right-20 -top-24 z-10" >
                        <path fill="CurrentColor" d="M0,56l309.97,535.07c15.75,27.19,55.06,27.08,70.65-.21L649.97,119.42l-.97-119.42H0v56Z" />
                    </svg>
                    <img src="../../../public/assets/img/slider-v1-shape1.png" className="absolute -top-20 w-[33%] right-[20%] md:block hidden z-[9]" />

                </div>
            </div>

        </div>
    );
}



export default SlidesShow2;
