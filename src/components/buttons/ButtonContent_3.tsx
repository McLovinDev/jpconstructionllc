interface ButtonContent3Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}



const ButtonContent_3: React.FC<ButtonContent3Props> = ({ titleBtn, linkBtn, btnstyle, gmbUrl }) => {
    return (
        <a href={`${linkBtn ? linkBtn : "/contact"}`} aria-label={titleBtn ? titleBtn : "Get a Quote"}>
            <button
                className="overflow-hidden relative w-52 p-2 h-12 bg-black dark:bg-white text-white dark:text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
            >
                {titleBtn ? titleBtn : "Get a Quote"}
                <span
                    className="absolute w-[204px] h-40 -top-12 -left-3 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                ></span>
                <span
                    className="absolute w-[200px] h-40 -top-12 -left-3 bg-fourth rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                ></span>
                <span
                    className="absolute w-[198px] h-40 -top-12 -left-3 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                ></span>
                <span
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                >{titleBtn ? titleBtn : "Get a Quote"}</span>
            </button>
        </a>
    );
}

export default ButtonContent_3;
