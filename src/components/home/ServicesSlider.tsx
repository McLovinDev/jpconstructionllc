import React, { useState } from "react";
import type { RootObject } from "../../interfaces/dbData";

interface SlideShowProps {
    data: RootObject;
}

const SlideShow: React.FC<SlideShowProps> = ({ data }) => {

    const initialSlides = [
        {
            id: 1,
            image: `${data.services[0].description[0].image}`,
            title: `${data.services[0].title}`,
            description: `${data.services[0].description[0].text.substring(0, 200) + "..."}`,
        },
        {
            id: 2,
            image: `${data.services[1].description[0].image}`,
            title: `${data.services[1].title}`,
            description: `${data.services[1].description[0].text.substring(0, 200) + "..."}`,
        },
        {
            id: 3,
            image: `${data.services[2].description[0].image}`,
            title: `${data.services[2].title}`,
            description: `${data.services[2].description[0].text.substring(0, 200) + "..."}`,
        },
        {
            id: 4,
            image: `${data.services[3].description[0].image}`,
            title: `${data.services[3].title}`,
            description: `${data.services[3].description[0].text.substring(0, 200) + "..."}`,
        },
        {
            id: 5,
            image: `${data.services[4].description[0].image}`,
            title: `${data.services[4].title}`,
            description: `${data.services[4].description[0].text.substring(0, 200) + "..."}`,
        },
        {
            id: 6,
            image: `${data.services[5].description[0].image}`,
            title: `${data.services[5].title}`,
            description: `${data.services[5].description[0].text.substring(0, 200) + "..."}`,
        },
    ];

    const sortedSlides = initialSlides.sort((a, b) => a.id - b.id);
    const [slides, setSlides] = useState(sortedSlides);

    const handleNext = () => {
        setSlides((prevSlides) => {
            const [first, ...rest] = prevSlides;
            return [...rest, first];
        });
    };

    const handlePrev = () => {
        setSlides((prevSlides) => {
            const last = prevSlides[prevSlides.length - 1];
            const rest = prevSlides.slice(0, -1);
            return [last, ...rest];
        });
    };

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[600px] bg-gray-100 shadow-2xl">
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] right-10 bg-cover bg-center rounded-2xl shadow-lg transition-all duration-500 
                            ${index === 0 ? "w-full h-full rounded-none top-0 left-0" : ""}
                            ${index === 1 ? "w-full h-full rounded-none top-0 left-0" : ""}
                            ${index >= 6 ? "opacity-0" : ""}
                            ${index > 1 ? "hidden sm:block" : ""}`}
                    >
                        <img 
                            src={slide.image} 
                            alt={slide.title} 
                            className={`w-full h-full object-cover ${index === 0 || index === 1 ? "" : "rounded-2xl"}`} 
                        />

                        <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>

                        <div
                            className={`absolute top-1/2 md:left-24 left-16 transform -translate-y-1/2 w-[300px] text-left text-gray-100 font-sans ${index === 1 ? "block" : "hidden"}`}
                        >
                            <div className="text-4xl font-bold uppercase opacity-0 animate-slides">
                                {slide.title}
                            </div>
                            <div className="mt-2 mb-4 opacity-0 animate-slides animation-delay-300">
                                {slide.description}
                            </div>
                            <a href="/services">
                                <button className="px-4 py-2 bg-gray-700 text-white rounded-md opacity-0 animate-slides animation-delay-600">
                                    See More
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
                <button
                    className="w-10 h-9 rounded-md border border-black bg-white hover:bg-gray-500 hover:text-white transition-colors"
                    onClick={handlePrev}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                    className="w-10 h-9 rounded-md border border-black bg-white hover:bg-gray-500 hover:text-white transition-colors ml-2"
                    onClick={handleNext}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default SlideShow;
