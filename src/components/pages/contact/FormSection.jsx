import React, { useState } from "react";
import "./FormSection.scss";

const FormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="formSectionContainer">
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
                        <input type="text" name="name" placeholder="Jon Snow" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">What’s your email?</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="theking@thenorth.com"
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">
                            Tell us about the details of your project
                        </label>
                        <input
                            type="text"
                            name="message"
                            placeholder="Daenerys of the House Targaryen, the First of Her Name, The Unburnt."
                        />
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
