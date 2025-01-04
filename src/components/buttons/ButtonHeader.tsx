interface ButtonHeaderProps {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}


const ButtonHeader: React.FC<ButtonHeaderProps> = ({ titleBtn, linkBtn, btnstyle, gmbUrl }) => {
    return (
        <div className="relative flex items-center ">
            <a
                href={`${linkBtn ? linkBtn : "/contact"}`}
                className="capitalize"
                target={linkBtn && gmbUrl ? "_blank" : "_self"}
                aria-label={titleBtn ? titleBtn : "Free Estimate"}
            >
                <button className="animated-buttonHeader">
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className="animated-buttonHeadertext px-2">{titleBtn ? titleBtn : "Free Estimate"}</span>
                    <span className="circle"></span>
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>

            </a>

        </div>
    );
};

export default ButtonHeader;
