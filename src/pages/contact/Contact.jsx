import React from "react";
import HeroSection from "../../components/pages/contact/HeroSection";
import FormSection from "../../components/pages/contact/FormSection";
import InfoExtra from "../../components/pages/contact/InfoExtra";

const Contact = () => {
    return (
        <div>
            {/* Hero section */}
            <HeroSection />
            {/* Form section */}
            <FormSection />
            {/* Squares section  */}
            <InfoExtra />
        </div>
    );
};

export default Contact;
