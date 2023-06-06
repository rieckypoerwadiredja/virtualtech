import PropTypes from "prop-types";
import ValidateEmail from "./ValidateEmail";

function ContactFormValidation(values) {
  const error = {
    name: null,
    email: null,
    message: null,
    policyAgreement: null,
  };
  // console.log(values.email);
  if (!ValidateEmail(values.email)) error.email = "Email is not Valid";
  if (values.name === "") error.name = "Name is Required";
  if (values.email === "") error.email = "Email is Required";
  if (values.message === "") error.message = "Message is Required";
  if (!values.policyAgreement)
    error.policyAgreement = "policyAgreement is Required to checklist";
  return error;
}

ContactFormValidation.propTypes = {
  values: PropTypes.object.isRequired,
};

export default ContactFormValidation;
