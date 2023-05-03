import React from "react";
// Component
import ImageWithAuthor from "../Image/ImageWithAuthor";
import SectionArticle from "./SectionArticle";
// Context
import { DetailPortoState } from "../../context/DetailPortoContext";

function SectionDetailPorto() {
  const { data, loading, error } = DetailPortoState();

  if (error || !data) {
    return <h1>YAHH ERROR SABARR YEEEE</h1>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }
  const { src, alt, name, source } = data.portfolio[0].portofolio.img;
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
