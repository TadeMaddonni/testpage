import React, { useState } from "react";
import "./FormSection.scss";

const FormSection = ({ makeRequest, setResult }) => {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        email: "",
    });
    const [messageError, setMessageError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Validation function
    const handleNameValdation = async () => {
        const { name } = formData;
        let error = false;
        if (name === "" || name === null) {
            setNameError(true);
            error = true;
        } else {
            setNameError(false);
        }
        return error;
    };
    const handleEmailValidation = async () => {
        const { email } = formData;
        let error = false;
        if (email === "" || email === null || email.indexOf("@") === -1) {
            setEmailError(true);
            error = true;
        } else {
            setEmailError(false);
        }
        return error;
    };
    const handleMessageValidation = async () => {
        const { message } = formData;
        let error = false;

        if (message.length < 10 || message === "" || message === null) {
            setMessageError(true);
            error = true;
        } else {
            setMessageError(false);
        }
        return error;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const nameHasError = await handleNameValdation();
        const emailHasError = await handleEmailValidation();
        const messageHasError = await handleMessageValidation();

        if (nameHasError || emailHasError || messageHasError) {
            return;
        } else {
            await makeRequest(formData);
            console.log("enviado");
        }
    };
    return (
        <div
            className="formSectionContainer"
            onSubmit={(e) => handleFormSubmit(e)}
        >
            <div className="formSection">
                <div className="sectionSubtitle">
                    <p>
                        What do you need help with? Have a project or an idea
                        you'd like to collaborate on?{" "}
                        <span className="boldText">Let’s talk about it.</span>
                    </p>
                </div>
                <form action="">
                    <div className="formGroup">
                        <label htmlFor="name">What's your name?</label>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="name"
                            className={nameError ? "error" : null}
                            placeholder="Jon Snow"
                        />
                        <span>
                            {nameError ? "Please enter a valid name" : ""}
                        </span>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">What’s your email?</label>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="email"
                            name="email"
                            className={emailError ? "error" : null}
                            placeholder="theking@thenorth.com"
                        />
                        <span>
                            {emailError ? "Please enter a valid e-mail" : ""}
                        </span>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">
                            Tell us about the details of your project
                        </label>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="message"
                            className={messageError ? "error" : null}
                            placeholder="Daenerys of the House Targaryen, the First of Her Name, The Unburnt."
                        />
                        <span>
                            {messageError ? "Please enter a valid message" : ""}
                        </span>
                    </div>
                    <div className="formGroup buttonGroup">
                        <button>Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormSection;
