interface IconGlobalProps {
  textColor?: string

}

const IconGlobal: React.FC<IconGlobalProps> = ({ textColor }: IconGlobalProps) => {

  return <span className={`icon-building content-render-text ${textColor ? textColor : "text-white"}`}></span>;
};

export default IconGlobal;
