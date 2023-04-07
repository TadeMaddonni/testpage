import React, { useState } from "react";
import FormSection from "./FormSection";
import FormResultSection from "./FormResultSection";

const ContactSectionContainer = () => {
    const [requestStatus, setRequestStatus] = useState("form");

    const makeRequest = async (formData) => {
        const API_URL =
            "https://api.hsforms.com/submissions/v3/integration/submit/2094487/30835c00-bd54-4b3f-88b3-75c38197fdd9";
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    fields: [
                        {
                            name: "email",
                            value: formData.email,
                        },
                        {
                            name: "name",
                            value: formData.name,
                        },
                        {
                            name: "message",
                            value: formData.message,
                        },
                    ],
                }),
            });
            const data = await response.json();
            if (data.status?.error) {
                setRequestStatus("error");
            } else if (data.inlineMessage) {
                setRequestStatus("success");
            }
            console.log(data);
        } catch (error) {
            throw new Error(
                "An error occured while sending the post request",
                error
            );
        }
    };
    return (
        <>
            {requestStatus === "form" && (
                <FormSection makeRequest={makeRequest} />
            )}
            {requestStatus === "success" && (
                <FormResultSection status={"success"} />
            )}
            {requestStatus === "error" && (
                <FormResultSection status={"error"} />
            )}
        </>
    );
};

export default ContactSectionContainer;
