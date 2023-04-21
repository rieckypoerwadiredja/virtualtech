import React, { useContext } from "react";

// Component
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import GreenStars from "./defaultProfile/GreenStars";
// Context
import PortoCardContext from "../../context/PortoCardContext";
import ImageCircle from "../Image/ImageCircle";

function ProfileWithUser() {
  const { src, alt, name, desc } = useContext(PortoCardContext).creator;
  return (
    <div className="flex items-center">
      {src ? <ImageCircle src={src} alt={alt} /> : <GreenStars />}
      <div className="ml-[5%] max-w-[70%]">
        <MiniTitleDesc title={name} desc={desc} />
      </div>
    </div>
  );
}

export default ProfileWithUser;
