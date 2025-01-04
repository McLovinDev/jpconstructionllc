
interface ButtonCallProps {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}



const ButtonCall: React.FC<ButtonCallProps> = ({ titleBtn, linkBtn, gmbUrl }) => {
    return (
        <div>
            <a
                href={`${linkBtn ? linkBtn : "/contact"}`}
                className="capitalize"
                target={linkBtn && gmbUrl ? "_blank" : "_self"}
                aria-label={titleBtn ? titleBtn : "Free Estimate"}
            >
                <button className="buttonCall">
                    <div className="svgIcon">
                        <i className="fa-solid fa-phone text-white"></i>
                    </div>
                </button>

            </a>
        </div>

    );
}
export default ButtonCall;
