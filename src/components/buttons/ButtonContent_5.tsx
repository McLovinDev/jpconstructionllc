import IconGlobal from "../global/IconGlobal";

interface ButtonContent5Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}

const ButtonContent_5: React.FC<ButtonContent5Props> = ({ titleBtn, linkBtn }) => {
    return (

        <a href={linkBtn ? linkBtn : 'Contact'}>
            <button className="buttonColor text-white gap-2">
                <span>{titleBtn ? titleBtn : "Free Estimate"}</span>
                <i><IconGlobal /></i>
            </button>

        </a>
    );
}

export default ButtonContent_5;

