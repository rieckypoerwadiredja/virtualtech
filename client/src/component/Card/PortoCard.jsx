import React, { useContext } from "react";
// Component
import PortoCardContent from "./PortoCardContent";
// Context
import PortoCardContext from "../../context/PortoCardContext";
import GreenStars from "../Profile/defaultProfile/GreenStars";

function PortoCard() {
  const { background, bgPadding, image } = useContext(PortoCardContext);
  return (
    <div
      className={`relative w-full text-white overflow-hidden group hover:scale-95 duration-1000 cursor-pointer ${
        bgPadding && "pb-[50%]"
      } ${!background && !image ? "bg-custome-green-800" : null}
       ${image && "bg-[#1c201c]"}`}
    >
      <PortoCardContent hover profile={!image} />{" "}
      {/* pada image true sudah ada image secara default !!lihat bawah!! */}
      {background && (
        <>
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/50"></div>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            src={background}
            alt="google"
          />
        </>
      )}
      {image && (
        <>
          <div className="relative w-full h-auto">
            <div className="absolute -top-[6%] left-[5%] z-[2]">
              <GreenStars />
            </div>
            <img
              className="relative h-fit w-full object-cover object-center"
              src={image}
              alt="google"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PortoCard;
