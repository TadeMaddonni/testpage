import React from "react";
import HeroSection from "../../components/pages/contact/HeroSection";
import FormSection from "../../components/pages/contact/FormSection";
import InfoExtra from "../../components/pages/contact/InfoExtra";
import FormResultSection from "../../components/pages/contact/FormResultSection";
import ContactSectionContainer from "../../components/pages/contact/ContactSectionContainer";

const Contact = () => {
    return (
        <div>
            {/* Hero section */}
            <HeroSection />
            {/* Contact section */}
            <ContactSectionContainer />
            {/* Squares section  */}
            <InfoExtra />
        </div>
    );
};

export default Contact;
