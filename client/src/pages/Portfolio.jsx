import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PortoState } from "../context/PortoContext";
function Portfolio() {
  const [porto, setPorto] = useState([]);
  const { data, error, loading } = PortoState();

  useEffect(() => {
    if (data) {
      setPorto(data.portfolio);
    }
  }, [data]);
  if (loading || !data) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      {porto.map((a, index) => (
        <p key={index}>{a}</p>
      ))}
      <Link to="/">HOME</Link>
      <h1>Portfolio</h1>
    </>
  );
}

export default Portfolio;
