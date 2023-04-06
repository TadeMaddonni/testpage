import React, { useState } from "react";
import "./InfoExtra.scss";
import CopyToClipboard from "./icons/copyToClipboard";
import CopiedToClipboard from "./icons/CopiedToClipboard";

const InfoExtra = () => {
    const [careerEmailCopied, setCareerEmailCopied] = useState(false);
    const [designEmailCopied, setDesignEmailCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    console.log(careerEmailCopied);

    const handleCopyEmail = (e) => {
        const email = e.target.value;
        console.log(email);

        if (email === "hi@indicius.com") {
            navigator.clipboard.writeText(email);
            setDesignEmailCopied(true);
            setTimeout(() => {
                setDesignEmailCopied(false);
            }, 2000);
        } else {
            navigator.clipboard.writeText(email);
            setCareerEmailCopied(true);
            setTimeout(() => {
                setCareerEmailCopied(false);
            }, 2000);
        }
    };

    return (
        <div className="infoExtraContainer">
            <div className="infoExtra">
                <div className="infoContainer careers">
                    <div className="top">
                        <h3>Careers</h3>
                        <p>
                            Are you interested in joining the Indicius family?
                            We're always interested in meeting new people.
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="buttonContainer">
                            <button
                                value={"team@indicius.com"}
                                onClick={(e) => handleCopyEmail(e)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                team@indicius.com
                            </button>
                            {careerEmailCopied ? (
                                <div className="clipboard">
                                    <CopiedToClipboard />
                                    <p>E-mail copied to clipboard</p>
                                </div>
                            ) : (
                                <div className="clipboard">
                                    <svg
                                        width="12"
                                        height="14"
                                        viewBox="0 0 12 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.66695 3.40015H0.666992V13.0001H8.66695V3.40015Z"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M2.2666 1H11.0666V11.3999"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M3.06934 5.79993H6.26932"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M3.06934 8.20007H6.26932"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M3.06934 10.5999H6.26932"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    <p>Copy e-mail to clipboard</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="infoContainer design">
                    <div className="top">
                        <h3>Design & Stuff </h3>
                        <p>
                            Say hello, talk about design or impact, or send
                            kudos. Don't be shy, write us and we'll get back to
                            you.
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="buttonContainer">
                            <button
                                value={"hi@indicius.com"}
                                onClick={(e) => handleCopyEmail(e)}
                            >
                                hi@indicius.com
                            </button>
                            {designEmailCopied ? (
                                <div className="clipboard">
                                    <CopiedToClipboard />
                                    <p>E-mail copied to clipboard</p>
                                </div>
                            ) : (
                                <div className="clipboard">
                                    <CopyToClipboard />
                                    <p>Copy e-mail to clipboard</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoExtra;
