import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
// Hooks
import useFetch from "../hooks/useFetch";

const DetailPorto = createContext();

function DetailPortoContext({ children }) {
  //   const { id, title, creator } = useParams();
  const creator = "Andreas Moris";
  const id = 1;
  const title =
    "A collection of the most interesting photos and galleries taken during the flights.";
  const { data, error, loading } = useFetch(
    `http://localhost:5000/api/portfolios/Andreas%20Moris/1/A%20collection%20of%20the%20most%20interesting%20photos%20and%20galleries%20taken%20during%20the%20flights.`
  );
  console.log(data);

  return (
    <DetailPorto.Provider value={{ data, error, loading }}>
      {children}
    </DetailPorto.Provider>
  );
}

export const DetailPortoState = () => {
  useContext(DetailPorto);
};
export default DetailPortoContext;
