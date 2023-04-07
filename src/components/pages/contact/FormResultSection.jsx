import React from "react";
import "./FormResultSection.scss";

const FormResultSection = ({ status }) => {
    return (
        <div className="formErrorContainer">
            <div className="formError">
                <div className="left">
                    <div className="top">
                        <h2
                            className={
                                status === "success" ? "success" : "error"
                            }
                        >
                            {status === "success"
                                ? "Thanks for getting in touch!"
                                : "Crickey!, Something's not working"}
                        </h2>
                        <span
                            className={
                                status === "success" ? "success" : "error"
                            }
                        >
                            {status === "success"
                                ? "We're excited to get to know you."
                                : " It seems like your email wasn't sent."}
                        </span>
                    </div>
                    <div className="bottom">
                        <p>
                            {status === "success"
                                ? "You'll hear from us real soon :)"
                                : "Can you please try sending it again?"}
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img
                        src={
                            status === "success"
                                ? "https://i.postimg.cc/t4gPP4GZ/contact-succes.png"
                                : "https://i.postimg.cc/PrmmWR7Z/contact-error.png"
                        }
                        alt="contact result image"
                    />
                </div>
            </div>
        </div>
    );
};

export default FormResultSection;
