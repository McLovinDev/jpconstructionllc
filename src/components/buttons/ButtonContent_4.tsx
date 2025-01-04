
interface ButtonContent4Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}

const ButtonContent_4: React.FC<ButtonContent4Props> = ({ titleBtn, linkBtn, btnstyle, gmbUrl }) => {
    return (

        <a href={`${linkBtn ? linkBtn : "/contact"}`} aria-label={titleBtn ? titleBtn : "Free Estimate"}>
            <button className="bgtnStyle4">

                <div className="sign">
                    <i className="fa-solid fa-phone-volume text-white"></i>
                </div>

                <div className="text">{titleBtn ? titleBtn : "Estimate"}</div>
            </button>
        </a>

    );
}

export default ButtonContent_4;

