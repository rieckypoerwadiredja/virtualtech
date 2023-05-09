import React from "react";
// Component
import Paragraph from "../Desc/Paragraph";
import Quote from "../Desc/Quote";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import ContactForm from "../Form/ContactForm";

function SectionForm() {
  return (
    <div className="flex flex-col gap-y-10 mdXL:w-1/2 mdXL:pl-10">
      <Paragraph text="Contact Virtual Technology" medium />
      <Quote text="Use the contact form below and we will write back to you with information." />
      <div>
        <MiniTitleDesc
          title="Contact form"
          desc="Creative projects new popularity"
          dark
        />
      </div>
      <ContactForm />
    </div>
  );
}

export default SectionForm;
