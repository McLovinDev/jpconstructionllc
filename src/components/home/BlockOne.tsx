import React, { useEffect, useRef, useState } from "react";
import IconGlobal from "../global/IconGlobal.tsx";
import type { RootObject } from "../../interfaces/dbData.ts";
import { motion } from "framer-motion";
import { fade, zoomIn, useInViewAnimation } from "../../animations/FramerMotion.tsx"; // Ajusta la ruta si es necesario

const inViewProps = useInViewAnimation(0.2); // Detecta el 30% de visibilidad


interface Counter {
  name: string;
  targetValue: any;
  currentValue: number;
  suffix: string;
}

interface Props {
  data: RootObject;
}



const BlockOne: React.FC<Props> = ({ data }) => {
  const [counters, setCounters] = useState<Counter[]>([
    {
      name: "Year of Experience",
      targetValue: data.yearsExperience,
      currentValue: 0,
      suffix: "+",
    },
    {
      name: `Miles around ${data.dataGeneral.location[0].city}`,
      targetValue: data.milesCover,
      currentValue: 0,
      suffix: "+",
    },
    {
      name: "On Time",
      targetValue: 100,
      currentValue: 0,
      suffix: "%",
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // 30% del elemento visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          if (counter.currentValue < counter.targetValue) {
            return {
              ...counter,
              currentValue: Math.min(
                counter.currentValue + Math.ceil(counter.targetValue / 100),
                counter.targetValue
              ),
            };
          }
          return counter;
        })
      );
    }, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-10 border-b-[10px] border-primary mb-16 relative">
      <img src="../../../public/assets/img/homelblockShape.png" className="absolute top-0 left-0 opacity-20" />
      <img src="../../../public/assets/img/homelblockShape.png" className="absolute top-0 right-0 opacity-20" />
      <div className="flex md:flex-row flex-col md:w-[90%] w-full mx-auto">

        <div className="md:w-[20%] px-6 py-6 w-full flex flex-col justify-start items-start">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="border-b-4 border-red-500 w-full p-6 rounded-lg shadow-b-lg text-slate-500 text-center mt-4 transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold mb-2">
                {counter.currentValue}
                {counter.suffix}
              </h3>
              <p className="text-lg">{counter.name}</p>
            </div>
          ))}
        </div>
        <div className="md:w-[40%] w-full px-6 py-6 flex items-center relative">
          <motion.div
            variants={zoomIn(1)}
            {...inViewProps}
            className="w-full"
          >
            <img
              src={data.gallery[7]}
              alt="aboutimage"
              className="z-10 object-cover md:w-[450px] md:h-[450px] w-full h-[300px] rounded-3xl shadow-xl"
            />
          </motion.div>

          <motion.div
            variants={zoomIn(1)}
            {...inViewProps}
            className="w-auto absolute md:bottom-12 bottom-5 md:right-16 right-3"
          >
            <img
              src={data.gallery[7]}
              alt="aboutimage"
              className="z-20 object-cover md:w-[250px] border-8 border-white md:h-[250px] w-full h-[180px] rounded-3xl "
            />
          </motion.div>

        </div>
        <div className="md:w-[40%] w-full flex flex-col self-center overflow-x-hidden px-6 py-6">
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-black text-primary">
              {data.name}
            </span>
            <span className="text-[30px] gradient-text">
              <IconGlobal />
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl text-secondary gradient-text">
            {data.home[1].title}
          </h2>

          {/* Texto con fade-left */}
          <motion.p
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-base leading-7 text-gray-600"
          >
            {data.home[1].text}
          </motion.p>
        </div>



      </div>
      <motion.div
        variants={fade("up", 1)}
        {...inViewProps} // Aplica la detección de visibilidad
      >
        <div className="bg-primary w-[85%] mb-[-100px] px-3 mx-auto rounded-tr-[80px] rounded-bl-[80px] flex justify-center py-6 mt-10">
          <span className="md:text-[40px] text-[20px] text-center font-bold text-white">
            {data.slogan[1]}
          </span>
        </div>

      </motion.div>
    </section>
  );
};

export default BlockOne;
