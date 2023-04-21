import React, { useContext } from "react";
import PropTypes from "prop-types";
// Component
import Paragraph from "../Desc/Paragraph";
import CardHeading from "../Heading/CardHeading";
import ProfileWithUser from "../Profile/ProfileWithUser";
// Context
import PortoCardContext from "../../context/PortoCardContext";

function PortoCardContent({ hover = false, profile = true }) {
  const { type, title } = useContext(PortoCardContext);
  return (
    <div className="flex flex-col gap-10 py-10 px-[30px]">
      <Paragraph text={type} bold transparent />
      <span className={`${hover && "group-hover:underline"} `}>
        <CardHeading text={title} />
      </span>
      {/* profile */}
      {profile && <ProfileWithUser />}
    </div>
  );
}

PortoCardContent.propTypes = {
  hover: PropTypes.bool,
  profile: PropTypes.bool,
};

export default PortoCardContent;
