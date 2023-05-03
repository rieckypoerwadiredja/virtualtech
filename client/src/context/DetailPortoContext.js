import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
// hooks
import useFetch from "../hooks/useFetch";

const DetailPorto = createContext();

function DetailPortoContext({ children }) {
  // const title =
  //   "A collection of the most interesting photos and galleries taken during the flights.";
  // const creator = "Andreas Moris";
  // const id = 1;
  const { id, title, creator } = useParams();

  const { data, error, loading } = useFetch(
    `https://webster-backend.vercel.app/api/portfolios/${creator}/${id}/${title}`
  );
  return (
    <DetailPorto.Provider value={{ data, error, loading }}>
      {children}
    </DetailPorto.Provider>
  );
}
export const DetailPortoState = () => {
  return useContext(DetailPorto);
};
export default DetailPortoContext;
