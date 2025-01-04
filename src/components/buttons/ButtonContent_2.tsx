
interface ButtonContent2Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}



const ButtonContent_2: React.FC<ButtonContent2Props> = ({ titleBtn, linkBtn, btnstyle, gmbUrl }) => {
    return (
        <div>
            <a
                href={`${linkBtn ? linkBtn : "/contact"}`}
                className="capitalize"
                target={linkBtn && gmbUrl ? "_blank" : "_self"}
                aria-label={titleBtn ? titleBtn : "Free Estimate"}
            >
                <button
                    className="px-6 z-30 py-2 bg-secondary rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-primary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
                >
                    {titleBtn ? titleBtn : "Free Estimate"}
                </button>
            </a>
        </div>

    );
}
export default ButtonContent_2;
