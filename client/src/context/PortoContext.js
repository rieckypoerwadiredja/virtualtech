import React, { createContext, useContext } from "react";
// Custome Hooks
import useFetch from "../hooks/useFetch";

const Porto = createContext();

function PortoContext({ children }) {
  const { data, error, loading } = useFetch(
    "https://webster-backend.vercel.app/api/porto"
  );
  return (
    <Porto.Provider value={{ data, error, loading }}>{children}</Porto.Provider>
  );
}

export const PortoState = () => {
  return useContext(Porto);
};

export default PortoContext;
