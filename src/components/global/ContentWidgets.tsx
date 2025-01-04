import { useState } from "react";
import Widget from "./Visor";


function WidgetButton() {
  const [active, setActive] = useState(false);
  const [visor, setVisor] = useState(false);

 

  const handleVisor = () => {
    setActive(false);
    setVisor(!visor);
  };

  return (
    <div>
      <div className="container-floating-widget">
        <div className="fixed bottom-[180px] z-10 md:bottom-[180px] right-[26px] flex flex-col justify-between">
          <div className="relative">
            <div
              className="nd2 nds my-1 flex justify-center self-center items-center bg-secondary border-2 border-white z-50"
              onClick={() => handleVisor()}
            >
              <i className="fas fa-magnifying-glass text-white text-2xl"></i>
            </div>

            {visor ? <Widget /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetButton;