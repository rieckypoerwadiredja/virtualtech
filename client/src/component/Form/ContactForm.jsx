import React, { useEffect, useState } from "react";
// Component
import Input from "./Input";
import Textarea from "./Textarea";
import AlertBox from "../DialogBox/AlertBox";
import Checkbox from "./Checkbox";
import MainSubmitButton from "./SubmitButton";

// Utils
import ContactFormValidation from "../../utils/validation/ContactFormValidation";

// https://dev.to/calvinpak/how-to-read-write-google-sheets-with-react-193l
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    policyAgreement: false,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: null,
    email: null,
    message: null,
    policyAgreement: null,
  });

  useEffect(() => {
    setErrorMessage(ContactFormValidation(formData));
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    console.log("Form submitted with value:", formData);
    // Do something with the value, such as sending it to the server
    const scriptURL = process.env.REACT_APP_CONTACT_FORM_URL;
    const form = document.forms["contact-form"];

    if (
      errorMessage.name !== null ||
      errorMessage.email !== null ||
      errorMessage.message !== null ||
      errorMessage.policyAgreement !== null
    ) {
      console.log("gagal pakkk");
      return;
    }
    console.log(errorMessage);
    console.log("berhasil pakkk");

    setIsLoading(true);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        policyAgreement: false,
      });
      setErrorMessage({
        name: null,
        email: null,
        message: null,
        policyAgreement: false,
      });
      setIsSuccessSubmit(true);
    }
  };
  return (
    <>
      {isSuccessSubmit && <AlertBox success onClick={setIsSuccessSubmit} />}
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
        name="contact-form"
      >
        <Input
          title="name"
          name="name"
          type="text"
          placeholder="your name"
          value={formData.name}
          getValue={(value) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              name: value,
            }));
          }}
          errorMessage={isFormSubmitted && errorMessage.name}
        />
        <Input
          title="email"
          name="email"
          type="email"
          placeholder="your email"
          value={formData.email}
          getValue={(value) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              email: value,
            }));
          }}
          errorMessage={isFormSubmitted && errorMessage.email}
        />
        <Textarea
          title="message"
          name="message"
          placeholder="enter message"
          value={formData.message}
          getValue={(value) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              message: value,
            }));
          }}
          errorMessage={isFormSubmitted && errorMessage.message}
        />
        <Checkbox
          title="Click here to indicate that you have read and agree to the terms presented in the Privacy Policy agreement."
          name="policy_agreement"
          type="checkbox"
          value={formData.policyAgreement}
          getValue={(value) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              policyAgreement: value,
            }));
          }}
        />
        <MainSubmitButton
          disabled={isLoading && true}
          text={isLoading ? "Loading . . ." : "Send message"}
          isLoading={isLoading}
        />
      </form>
    </>
  );
}

export default ContactForm;
