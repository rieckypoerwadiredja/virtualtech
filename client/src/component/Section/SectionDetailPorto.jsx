import React, { useContext } from "react";
// Component
import ImageWithAuthor from "../Image/ImageWithAuthor";
import SectionArticle from "./SectionArticle";
// Context
import MainContext from "../../context/MainContext";

function SectionDetailPorto() {
  const { src, alt, name, source } = useContext(MainContext).portofolio.img;

  return (
    <>
      <ImageWithAuthor
        title={name}
        author={source}
        img={{
          src: src,
          name: alt,
        }}
      />
      <SectionArticle />
    </>
  );
}

export default SectionDetailPorto;
