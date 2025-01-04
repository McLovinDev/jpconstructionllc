import React, { useState, useEffect } from "react";
import IconGlobal from "./IconGlobal";

interface CounterProps {
  label: string;
  subLabel: string;
  number: number;
}

// Componente Counter que acepta props 'label' y 'number'
const Counter = ({ label, number, subLabel }: CounterProps) => {
  const [count, setCount] = useState(0); // Inicia el contador en 0

  useEffect(() => {
    // Función para incrementar el contador
    const increment = () => {
      setCount((prevCount) => {
        if (prevCount < number) {
          return prevCount + 1; // Incrementa el contador
        } else {
          return prevCount; // Mantiene el número final
        }
      });
    };

    const intervalId = setInterval(increment, 1000 / number); // Configura la velocidad del contador

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [number]); // Dependencias del efecto, solo se ejecuta si 'number' cambia

  return (
    <div
      className="md:w-[280px] w-full bg-secondary text-white flex flex-col rounded-md px-3 py-8 relative
    hover:bg-primary transform ease-in duration-300 hover:border-2 hover:border-white
    "
    >
      <div className="flex items-end">
        <h1 className="md:text-[50px] text-[30px] font-bold">{count}</h1>
        <span className="font-bold md:text-[20px] capitalize">{subLabel}</span>
      </div>
      <span className="md:text-[22px] font-bold text-gray-100">{label}</span>
      <span className="absolute top-6 right-4 text-[30px] p-2 bg-white rounded-md text-primary">
        <IconGlobal />
      </span>
    </div>
  );
};

export default Counter;
