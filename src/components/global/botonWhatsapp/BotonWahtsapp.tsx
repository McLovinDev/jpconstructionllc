import  { Fragment, useState } from "react";
import classes from "./btnwhatsapp.module.css";

interface BotonWhatsappProps {
  data: any;
}

function BotonWhatsapp({ data }: BotonWhatsappProps) {
  const [active, setActive] = useState(false);
  const [sendInput, setSendInput] = useState("");

  const sendWhatsapp = () => {
    const relmsg = sendInput.replace(/ /g, "%20");
    const phone = data.dataGeneral.phones[0].number
      .replace("-", "")
      .replace("-", "");

    window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
    setSendInput("");
    setActive(false);
  };

  return (
    <Fragment>
      <div className={classes.nav_bottom}>
        <div
          className={`${classes.popup_whatsapp} ${classes.fadeIn} ${
            active ? classes.is_active_whatsapp_popup : ""
          }`}
        >
          <div className={`z-[999] ${classes.content_whatsapp_header} ${classes._top}`}>
            <div className={`${classes.self_content}`}>
              <div className={`${classes.online}`}></div>
              <img
                src={data.logos.favicon}
                width={80}
                height={80}
                alt="logo"
                className={`${classes.before_img}`}
              />

              <div className="flex flex-col">
                <span className="text-white text_name_company">
                  {data.name}
                </span>
                <span className={`${classes.text_typically}`}>
                  Typically replies in minutes
                </span>
              </div>
              <div className={classes.contentClose}>
                <button
                  type="button"
                  className={`${classes.closePopup} bg-black `}
                  onClick={() => setActive(!active)}
                  name="send_btn"
                  aria-label="Send message"
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div className={`${classes.chat_box_body}`}>
            {/* <div className={`${classes.loader}`}>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <div className={`${classes.chat_box_message}`}>
              <span className={`${classes.text_name_body}`}>{data.name}</span>{" "}
              <br />
              <span className="text-black">
                Hi there 👋<br></br>
                How can we help you?
              </span>
            </div>
          </div>
          <div className={`${classes.content_whatsapp} ${classes._bottom}`}>
            <input
              className={classes.whats_input}
              type="text"
              placeholder="Send Message..."
              value={sendInput}
              onChange={(e) => setSendInput(e.target.value)}
            />

            <button
              className={classes.send_msPopup}
              id="send_btn"
              type="button"
              onClick={() => sendWhatsapp()}
              name="send_btn"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                width={20}
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
            </button>
          </div>
        </div>
        <button
          type="button"
          id="whats_openPopup"
          className={`${classes.whatsapp_button} circle_anime bg-green-600`}
          onClick={() => setActive(!active)}
          name="send_btn"
          aria-label="Send message"
        >
          <div className={`${classes.float}  flex justify-center items-center self-center`} >
          <i className="fa-brands fa-whatsapp"></i>
          </div>
        </button>
        <div className={classes.circle_anime}></div>
      </div>
    </Fragment>
  );
}

export default BotonWhatsapp;