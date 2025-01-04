import { useState } from "react";
import Form from "../contact/Form";
import type { RootObject } from "../../interfaces/dbData";

interface ToggleButtonProps {
  data: RootObject;
}

const ToggleButton = ({ data }: ToggleButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Botón para abrir/cerrar el panel */}
      <div className="btn btn--huge" onClick={() => setIsOpen(!isOpen)}>
        <div className="btn--huge__text">
          <div>
            Free Quote
            <span>Free Quote</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Panel lateral */}
      <div
        className={`fixed top-0 right-0 md:w-[30%] z-[999] w-[90%] h-full bg-white shadow-md transform transition-transform duration-500 ease-in-out overflow-y-scroll content_scroll ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Contenido del panel */}
        <div className="px-4 py-6 text-center">
          <i
            className="fas fa-times text-3xl cursor-pointer text-white p-2 rounded-md absolute top-2 left-2"
            style={{ backgroundColor: data.colors.secondaryColor }}
            onClick={() => setIsOpen(false)}
            aria-hidden={true}
          ></i>

          <img
            src={data.logos.secondary}
            alt="logo"
            className="w-[300px] mx-auto"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">Free Quote</h1>
          <Form data={data} />
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
