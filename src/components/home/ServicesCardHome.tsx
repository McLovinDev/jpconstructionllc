import React from "react";

const ServicesCardHome: React.FC = () => {
    return (
        <div className="relative w-80 h-80 rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-full relative rounded-lg group">
                {/* Front Content */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[20%]">
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary transition-opacity duration-500 group-hover:opacity-0">
                        Hover me
                    </p>
                </div>

                {/* Back Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center bg-gradient-to-br from-primary to-secondary text-gray-200 p-5 rounded-lg transform translate-x-[96%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0">
                    <p className="text-2xl font-bold">Card Hover</p>
                    <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia
                        pariatur odit, ab minus ratione adipisci accusamus vel est excepturi
                        laboriosam magnam necessitatibus dignissimos molestias.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCardHome;
