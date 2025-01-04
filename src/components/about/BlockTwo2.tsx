import React, { useEffect, useState } from "react";
import type { RootObject } from "../../interfaces/dbData";

interface ValuesAbout2Props {
    nameCompany: string;
    data: RootObject;

}

const ValuesAbout2: React.FC<ValuesAbout2Props> = ({ nameCompany, data }) => {


    return (
        <section className="relative z-10 py-10">
            <div className="max-w-screen-xl mx-auto bg-slate-100 dark:bg-gray-900 p-10 rounded-lg">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="text-left">
                            <p className="dark:text-gray-300 text-gray-800 uppercase font-semibold"> {data.slogan[5]} </p>
                            <h2 className="text-4xl font-bold dark:text-white text-gray-900">
                                Superior roofing <span className="text-primary">services</span> for all your needs
                            </h2>
                        </div>
                        <p className="dark:text-gray-300 text-gray-800">
                            {(() => {
                                const text = data.about[1].text;
                                const firstPointIndex = text.indexOf('.');
                                if (firstPointIndex === -1) return text;
                                const secondPointIndex = text.indexOf('.', firstPointIndex + 1);
                                return secondPointIndex === -1 ? text : text.slice(0, secondPointIndex + 1);
                            })()}
                        </p>
                        <div className="flex items-center space-x-4 mt-4">
                            <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full">
                                <span className="text-white text-2xl"><i className="fa-solid fa-phone-volume text-tertiary"></i></span>
                            </div>
                            <div>
                                <p className="dark:text-gray-300 text-gray-800">Need help?</p>
                                <h4 className="text-xl font-semibold dark:text-white text-gray-900">
                                    <a href={`tel:+1${data.dataGeneral.phones[0].number}`} className="hover:text-primary">
                                        {data.dataGeneral.phones[0].number}
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-10 grid grid-cols-2 gap-6">
                        {[
                            { icon: <i className="fa-sharp fa-solid fa-house text-5xl text-secondary"></i>, count: 15, label: "Years Of Experience" },
                            { icon: <i className="fa-solid fa-users text-5xl text-secondary"></i>, count: 100, label: "Professionals" },
                            { icon: <i className="fa-solid fa-location-dot text-5xl text-secondary"></i>, count: 50, label: `Miles Around of ${data.dataGeneral.location[0].city}` },
                            { icon: <i className="fa-solid fa-clock text-5xl text-secondary"></i>, count: 100, label: "On Time" },
                        ].map((item, index) => (
                            <CounterItem key={index} icon={item.icon} endCount={item.count} label={item.label} delay={100 * (index + 1)} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

interface CounterItemProps {
    icon: React.ReactNode;
    endCount: number;
    label: string;
    delay: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, endCount, label, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 3000; // Duración del conteo en milisegundos
        const increment = endCount / (duration / 50); // Incremento cada 50ms para suavidad
        const counter = setInterval(() => {
            start += increment;
            if (start >= endCount) {
                setCount(endCount);
                clearInterval(counter);
            } else {
                setCount(Math.floor(start));
            }
        }, 50);

        return () => clearInterval(counter);
    }, [endCount]);

    return (
        <div
            className="p-5 border border-white/10 rounded-lg text-center transition-transform hover:scale-95"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex justify-center items-center space-x-4">
                <span className="text-5xl text-secondary">{icon}</span>
                <div className="text-4xl font-bold dark:text-white text-gray-900">
                    {count}
                    {(label === "Professionals" || label === "On Time") && "%"}
                    {(label === "Years Of Experience" || label.includes("Miles Around")) && "+"}
                </div>
            </div>
            <p className="text-gray-400 mt-2">{label}</p>
        </div>
    );
};

export default ValuesAbout2;
