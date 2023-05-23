import React, { createContext, useContext } from "react";
// Custome Hooks
import useFetch from "../hooks/useFetch";

const Porto = createContext();

function PortosContext({ children }) {
  const { data, error, loading } = useFetch(
    "http://localhost:5000/api/portfolios"
  );
  return (
    <Porto.Provider value={{ data, error, loading }}>{children}</Porto.Provider>
  );
}

export const PortosState = () => {
  return useContext(Porto);
};

export default PortosContext;
