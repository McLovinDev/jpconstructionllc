import type { RootObject } from "../../interfaces/dbData";
import ButtonCall from "../buttons/ButtonCall";
import ButtonContent_2 from "../buttons/ButtonContent_2";
import { motion } from "framer-motion";
import {
    zoomIn,
    reverseDissolve,
    useInViewAnimation,
} from "../../animations/FramerMotion";
const inViewProps = useInViewAnimation(0.2); // Detecta el 30% de visibilidad


interface AboutBlocks2Props {
    data: RootObject;
}

const AboutBlocks2: React.FC<AboutBlocks2Props> = ({ data }) => {
    //filtrar para obtener la section de home



    const toggleDarkMode = (): void => {
        const html = document.documentElement;
        html.classList.toggle('dark');
    }

    return (
        <div className="w-4/5 mx-auto md:w-11/12 h-full flex flex-col md:flex-row justify-center relative z-20 py-0">

            <div className="aspect-auto flex md:flex-row h-[500px] md:h-[700px] w-full md:w-1/2 relative justify-start items-center">

                <i className="fa-solid fa-sparkles text-primary absolute top-0 md:left-0 -left-8 text-[110px]"></i>

                <i className="fa-solid fa-sparkles text-primary absolute md:top-28 top-24 opacity-50 md:left-8 -left-8 text-[80px]"></i>

                <i className="fa-solid fa-sparkles text-primary absolute top-0 left-16 text-[50px]"></i>

                <div className="md:w-[60%] w-full h-[80%] relative md:pl-20 pr-20 md:pr-0 z-20">
                    <motion.img
                        variants={zoomIn(1)}
                        {...inViewProps}
                        className="w-full h-full border-[5px] border-slate-300  rounded-lg object-cover flex mx-auto md:mx-0"
                        src={data.gallery[10]} alt="img1"
                        height={250} />
                    <motion.img
                        variants={zoomIn(1)}
                        {...inViewProps}
                        className="absolute top-20 border-[5px] border-slate-100 -right-5 md:-right-56 md:w-[300px] w-[200px] md:h-[350px] h-[250px] rounded-lg object-cover flex mx-auto"
                        src={data.gallery[11]}
                        alt="img1"
                        height={250} />
                </div>

                <div className="absolute md:top-28 top-28 md:right-36 right-0 w-[200px] md:h-[450px] h-[300px] md:border-[7px] border-[4px] rounded-md border-primary"></div>
            </div>

            <div className="w-full md:w-1/2 px-5 py-10 md:pt-0 flex flex-col justify-center">
                <motion.div
                    variants={reverseDissolve(2)}
                    {...inViewProps}
                    animate="show"
                    className="pb-5">
                    <div className="flex items-center md:items-end gap-5 md:gap-1 ">
                        <i className="fa-solid fa-fan text-3xl text-secondary animate-spin dark:text-white"></i>
                        <p className="text-2xl font-medium text-secondary  capitalize">About {data.name}</p>
                    </div>
                    <h2 className="text-4xl font-bold text-primary mt-5 text-center md:text-start">
                        {data.home[1].title}

                    </h2>
                    <p
                        className="text-center md:text-justify mt-5 dark:text-white text-black">
                        {data.home[1].text}
                    </p>
                </motion.div>
                <div className="flex flex-col ">
                    <div className="w-full lg:w-auto pb-8 md:pb-0 ">
                        <ul className="pb-5 md:grid md:grid-cols-2" >
                            {data.home[0].list.slice(0, 6).map((item, index) => (
                                <li key={index} className="flex items-center gap-1 font-medium py-1">
                                    <i className="fa-solid text-xl fa-square-check text-slate-800 pt-1 pr-1"></i>
                                    <p className="text-slate-700 text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center md:text-start flex md:flex-row flex-col space-y-8 md:space-y-0 md:space-x-8">
                            {
                                data.widgets.onePages ? (
                                    <ButtonContent_2 titleBtn="Contact Us" linkBtn={`tel:+1${data.dataGeneral.phones[0].number}`} />
                                ) : (
                                    <ButtonContent_2 />
                                )
                            }
                            <div className="flex ">
                                <ButtonCall linkBtn={`tel:+1${data.dataGeneral.phones[0].number}`} />
                                <div className="flex flex-col pl-4">
                                    <p className="text-slate-600 dark:text-slate-100">Call to request Services</p>
                                    <span className="text-primary font-bold"> {data.dataGeneral.phones[0].number}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutBlocks2;