import React, { useState } from "react";
// Component
import Input from "./Input";
import Textarea from "./Textarea";
// https://dev.to/calvinpak/how-to-read-write-google-sheets-with-react-193l
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value:", formData);
    // Do something with the value, such as sending it to the server
    const scriptURL = process.env.REACT_APP_CONTACT_FORM_URL;
    const form = document.forms["contact-form"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <form onSubmit={handleSubmit} name="contact-form">
      <Input
        title="name"
        name="name"
        type="text"
        placeholder="your name"
        isRequired
        value={formData.name}
        getValue={(value) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            name: value,
          }));
        }}
      />
      <Input
        title="email"
        name="email"
        type="email"
        placeholder="your email"
        isRequired
        value={formData.email}
        getValue={(value) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            email: value,
          }));
        }}
      />
      <Textarea
        title="message"
        name="message"
        placeholder="enter message"
        isRequired
        value={formData.message}
        getValue={(value) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            message: value,
          }));
        }}
      />
      <input type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
