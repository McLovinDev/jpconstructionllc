import type { RootObject } from "../../interfaces/dbData";
interface FormProps {
  data: RootObject;
}

const Form: React.FC<FormProps> = ({ data }: FormProps) => {
  return (
    <div className="">
      {/* @ts-ignore */}
      <form-contact
        to={data.dataGeneral.emails[0].email}
        services={
          // anidarlos con un join
          data.services.map((service) => service.title).join(",")
        }
        server="https://azteca-form-6c17fad78fc4.herokuapp.com/email"
        img={data.logos.primary}
        emailcolor="1"
        isenglish="true"
      >
        {/* @ts-ignore */}
      </form-contact>
    </div>
  );
};

export default Form;
