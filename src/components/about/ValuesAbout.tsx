import React from "react";
import type { RootObject } from "../../interfaces/dbData";
import { motion } from "framer-motion";
import { fade, zoomIn, useInViewAnimation } from "../../animations/FramerMotion.tsx"; // Ajusta la ruta si es necesario

const inViewProps = useInViewAnimation(0.2); // Detecta el 30% de visibilidad


interface Props {
  data: RootObject;
}

const MyComponent: React.FC<Props> = ({ data }) => {
  return (
    <section
      className="flex items-center bg-stone-100 font-poppins md:py-24 py-16"
      style={{ backgroundColor: data.colors.primaryColor }}
    >
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold md:text-4xl text-white">
            {data.slogan[5]}
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div
              className="flex-1 h-2"
              style={{ backgroundColor: data.colors.primaryColor }}
            ></div>
            <div
              className="flex-1 h-2"
              style={{ backgroundColor: data.colors.secondaryColor }}
            ></div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 overflow-x-hidden">
            <motion.img
              variants={zoomIn(1)}
              {...inViewProps}
              src={data.gallery[4]}
              alt=""
              className="relative z-40 object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col lg:w-1/2 lg:mb-0 items-center self-center overflow-x-hidden">
            <motion.div
              variants={fade("left", 1)}
              {...inViewProps}
              className="w-full px-4 mb-10">
              <h2
                className="py-3 pl-2 mb-4 text-2xl font-bold border-l-4 text-white"
                style={{ borderColor: data.colors.secondaryColor }}
              >
                Mission
              </h2>
              <p className="mb-4 text-base leading-7 text-white">
                {data.valuesContent.mission}
              </p>
            </motion.div>
            <motion.div
              variants={fade("left", 2)}
              {...inViewProps}
              className="w-full px-4 mb-10">
              <h2
                className="py-3 pl-2 mb-4 text-2xl font-bold border-l-4 text-white"
                style={{ borderColor: data.colors.secondaryColor }}
              >
                Vision
              </h2>
              <p className="mb-4 text-base leading-7 text-white">
                {data.valuesContent.vision}
              </p>
            </motion.div>
            <motion.div
              variants={fade("left", 3)}
              {...inViewProps}
              className="w-full px-4 mb-10">
              <h2
                className="py-3 pl-2 mb-4 text-2xl font-bold border-l-4 text-white"
                style={{ borderColor: data.colors.secondaryColor }}
              >
                Why Choose Us
              </h2>
              <p className="mb-4 text-base leading-7 text-white">
                {data.valuesContent.whychooseUs}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
