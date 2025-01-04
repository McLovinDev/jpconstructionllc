interface ButtonContent2Props {
  titleBtn?: string;
  linkBtn?: string;
  btnstyle?: string;
  gmbUrl?: boolean;
  onePage?: boolean;
}

const ButtonContent: React.FC<ButtonContent2Props> = ({
  titleBtn,
  linkBtn,
  btnstyle,
  gmbUrl,
  onePage,
}) => {
  return (
    <div>
      <a
        href={`${
          //si es onepage mandar a /, si hay linkBtn mandar a linkBtn, si no mandar a /contact
          onePage ? "/" : linkBtn ? linkBtn : gmbUrl ? gmbUrl : "/contact"
        }`}
        className="capitalize"
        target={linkBtn && gmbUrl ? "_blank" : "_self"}
        aria-label={titleBtn ? titleBtn : "Contact Us!"}
      >
        <div className="btn btn--huge">
          <div className="btn--huge__text">
            <div>
              {titleBtn ? titleBtn : "Contact Us!"}
              <span>{titleBtn ? titleBtn : "Contact Us!"}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default ButtonContent;
