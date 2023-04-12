import React from "react";
import PropTypes from "prop-types";
// Company
import ImageCircle from "../Image/ImageCircle";
import Paragraph from "../Desc/Paragraph";

function ProfileWithCompany({ src, alt }) {
  return (
    <div className="flex justify-between">
      <ImageCircle width="5px" src={src} alt={alt} />
      <div className="hidden smXL:flex">
        <Paragraph text="Virtual Technology ©" bold />
      </div>
    </div>
  );
}

ProfileWithCompany.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ProfileWithCompany;
