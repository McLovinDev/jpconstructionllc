import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";

interface Props {
  data: any;
}

const Slideshow = ({ data }: Props) => {
  return (
    <>
      <div className="pic-wrapper md:rounded-2xl rounded-3xl">
        <figure
          className="pic-1"
          style={{ background: `url("${data.gallery[3]}")` }}
        ></figure>
        <figure
          className="pic-2"
          style={{ background: `url("${data.gallery[4]}")` }}
        ></figure>
        <figure
          className="pic-3"
          style={{ background: `url("${data.gallery[5]}")` }}
        ></figure>
        <figure
          className="pic-4"
          style={{ background: `url("${data.gallery[6]}")` }}
        ></figure>
        <div className="z-[9] relative  mx-auto md:h-auto h-auto md:py-[150px] pt-[20px] pb-[300px] flex items-center self-center w-full md:flex-row flex-col-reverse justify-center">
          <div className="flex justify-center relative md:pt-[100px] items-center lg:w-[85%] md:w-[85%] mx-auto flex-wrap md:px-1 px-6">
            <div className="md:w-[50%]">
              <div className="border-l-4 border-white pr-6 pl-2 my-4">
                <span className="text-[25px] text-white font-bold">
                  {data.name}
                </span>
                <h1 className="md:text-[50px] text-[30px] font-bold text-white">
                  {data.businessLicense
                    ? `${data.businessLicense}`
                    : data.home[0].title}
                </h1>
              </div>
            </div>
            <div className="md:w-[50%] flex flex-col gap-6">
              <span className="text-white text-[60px]">
                <IconGlobal />
              </span>

              <p className="text-white"> {data.home[0].text}</p>
              <ButtonContent />
            </div>
          </div>
          <div className="absolute bottom-0 left-6 flex items-center gap-8 md:flex-row flex-col w-full">
            <div className="flex items-center md:w-[35%] justify-center gap-6 pb-4">
              {data.dataGeneral.phones.slice(0, 2).map((phone: any) => (
                <a
                  href={`tel:+1${phone.number}`}
                  className="text-white text-[14px] font-semibold
                flex items-center gap-2 cursor-pointer
                "
                >
                  <i className="fas fa-phone-alt bg-white p-2 rounded-full text-primary text-[25px] " />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold">{phone.title}</span>
                    <span className="text-[25px] font-bold">
                      {phone.number}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="h-[100px] flex items-center justify-center bg-white md:w-[65%] rounded-tl-[80px] rounded-tr-3xl roudned-br-full">
              <span className="gradient-text md:text-[35px] text-[20px] capitalize font-bold flex items-center gap-2 md:w-[80%] w-[90%]">
                <i className="fa fa-circle text-secondary"></i>
                {data.slogan[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
