import type { RootObject } from "../../interfaces/dbData";
import React, { useState } from 'react';

interface ValuesAbout3Props {
    dataGlobal: RootObject;
    nameCompany: string;
};

const valueData = (dataGlobal: RootObject) => [
    {
        title: "What is our Mission?",
        Description: `${dataGlobal.valuesContent.mission}`,
        icon: "fa-light fa-wreath-laurel text-3xl pr-2 text-btnHover"
    },
    {
        title: "What is our Vision",
        Description: `${dataGlobal.valuesContent.vision}`,
        icon: "fa-light fa-hand-holding-seedling text-3xl pr-2 text-btnHover"
    },
    {
        title: "Why Choose Us?",
        Description: `${dataGlobal.valuesContent.whychooseUs}`,
        icon: "fa-light fa-handshake text-3xl pr-2 text-btnHover"
    }
];

const ValuesAbout3: React.FC<ValuesAbout3Props> = ({ nameCompany, dataGlobal }) => {
    const value = valueData(dataGlobal);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? 0 : index);
    };

    return (
        <section className="py-5 md:py-0 bg-primary dark:bg-[#09090b]">
            <div>
                <div className="md:w-[90%] justify-between md:mx-auto w-full flex flex-col items-center md:flex-row md:mb-0 mb-10">
                    <div className="md:w-[40%] w-full justify-center md:h-[750px] h-[450px] my-5 md:my-0 items-center relative flex">
                        <div
                            className="w-[95%] md:w-[450px] md:h-[500px] h-[400px] bg-cover bg-center z-20 rounded-md"
                            style={{ backgroundImage: `url("${dataGlobal.gallery[11]}")` }}
                        >
                            <div className="w-[50px] h-[50px] bg5 absolute top-48 md:block hidden -right-0.5"></div>
                            <div className="w-[120px] h-[150px] bg-fourth absolute md:right-0 right-2.5 md:top-[240px] top-10">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center py-5 items-center space-x-5">
                                        <p className="text-center md:text-start text-white font-bold text-5xl">{dataGlobal.yearsExperience}+</p>
                                    </div>
                                    <p className="text-center text-lg text-white font-semibold">Years of Experience</p>
                                </div>
                            </div>
                            <img
                                className="md:w-[280px] w-[200px] md:h-[300px] h-[220px] border-[5px] border-slate-100 absolute md:bottom-12 bottom-[25px] md:-right-10 right-2.5 md:rounded-md object-cover md:rounded-br-[40px]"
                                src={dataGlobal.gallery[5]} alt="Image showing {dataGlobal.name}"
                                height={250} />
                        </div>
                        <div className="md:w-[300px] w-[402px] h-[250px] bg-fourth rounded-tl-[40px] absolute md:left-0 left-3 md:bottom-20 -bottom-4 flex items-end justify-start text-white">
                            <div className="border-[1px] ml-3 h-[100px] mb-10"></div>
                            <p className="md:pl-10 pl-28 font-semibold text-md">{dataGlobal.name}</p>
                        </div>
                    </div>

                    <div className="md:w-[50%] w-[95%] mx-auto md:mx-0 h-full flex flex-col">
                        <div className="w-full px-4 md:mx-auto mt-6">
                            <p className="text-lg md:text-xl font-bold text-white dark:text-white">Our Values</p>
                            <h2 className="text-white font-extrabold text-4xl py-2">{dataGlobal.slogan[0]}</h2>

                        </div>

                        {value.map((value, index) => (
                            <div key={index} className="flex flex-col py-3 cursor-pointer">
                                <div
                                    className={`${activeIndex === index
                                        ? "bg-secondary transform transition-colors duration-1000 text-white rounded-xl"
                                        : "bg-transparent border-white border-[1px] rounded-xl"
                                        } flex md:py-4 text-start w-full justify-between text-white dark:text-white hover:rounded-lg hover:bg-secondary transition-all transform duration-700 ease-out px-5`}
                                    onClick={() => handleClick(index)}
                                >
                                    {/* <i className={value.icon}></i> */}
                                    <span className="capitalize text-xl md:text-base font-bold">{value.title}</span>
                                    <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                                </div>

                                {/* Contenido con efecto fade-down */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-out ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-4 md:w-[100%] text-white dark:text-white transform transition-opacity duration-500 ease-out">
                                        <p className="md:text-start">{value.Description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesAbout3;
