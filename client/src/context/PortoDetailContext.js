import React, { createContext, useContext } from "react";
import usePortoDetail from "../hooks/usePortoDetail";

const PortoDetail = createContext();

const PortoDetailProvider = ({ creator, id, title, children }) => {
  const { data, error, loading } = usePortoDetail(creator, id, title);

  return (
    <PortoDetail.Provider value={{ data, error, loading }}>
      {children}
    </PortoDetail.Provider>
  );
};

export const PortosDetailState = () => {
  return useContext(PortoDetail);
};

export default PortoDetailProvider;
