import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
// Custome Hooks
import useFetch from "../hooks/useFetch";

const DetailPorto = createContext();

function DetailPortosContext({ children }) {
  const { id, title, creator } = useParams();
  console.log(id, title, creator);
  const { data, error, loading } = useFetch(
    `https://webster-backend.vercel.app/api/portfolios/${creator}/${id}/${title}`
  );
  return (
    <DetailPorto.Provider value={{ data, error, loading }}>
      {children}
    </DetailPorto.Provider>
  );
}

export const DetailPortosState = () => {
  return useContext(DetailPorto);
};

export default DetailPortosContext;
